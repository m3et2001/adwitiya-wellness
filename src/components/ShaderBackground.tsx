import { useEffect, useRef } from "react";

const VERT = "attribute vec2 a_pos; void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }";

/**
 * Ultra-soft flowing gradient in brand tones (ivory / sage / warm beige / faint gold).
 * Rendered as a raw WebGL fragment shader — no library needed, ~2kb.
 */
const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.1 + vec2(3.7); a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 st = uv; st.x *= u_res.x / u_res.y;
  float t = u_time * 0.05;
  float n1 = fbm(st * 1.3 + vec2(t * 0.5, -t * 0.3));
  float n2 = fbm(st * 0.8 - vec2(t * 0.35, t * 0.45) + n1 * 0.6);

  vec3 ivory = vec3(0.973, 0.949, 0.902);
  vec3 sage  = vec3(0.835, 0.871, 0.776);
  vec3 beige = vec3(0.937, 0.894, 0.808);
  vec3 gold  = vec3(0.902, 0.847, 0.702);

  vec3 col = ivory;
  col = mix(col, sage, smoothstep(0.35, 0.85, n1) * 0.45);
  col = mix(col, beige, smoothstep(0.30, 0.80, n2) * 0.35);
  col = mix(col, gold, smoothstep(0.55, 0.95, fbm(st * 0.6 + n2)) * 0.18);
  col = mix(col, ivory, smoothstep(0.45, 1.0, uv.y) * 0.40);

  gl_FragColor = vec4(col, 1.0);
}
`;

export function ShaderBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) { canvas.style.display = "none"; return; }

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { canvas.style.display = "none"; return; }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let raf = 0;
    let running = true;

    const resize = () => {
      // render at reduced resolution — soft gradients don't need full-res pixels
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.7;
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const draw = (time: number) => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = () => {
      if (!running) return;
      draw((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else if (!reduceMotion) { running = true; loop(); }
    };

    if (reduceMotion) draw(40); else loop();
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new ResizeObserver(() => { if (reduceMotion) draw(40); });
    observer.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
