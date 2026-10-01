import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ animationDelay: `${delay}ms` }} className={cn("reveal", visible && "is-visible", className)}>{children}</div>;
}
