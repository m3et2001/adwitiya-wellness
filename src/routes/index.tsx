import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, SpaCards } from "@/components/Sections";
import hero from "@/assets/adwitya-retreat.jpg";
import lounge from "@/assets/adwitya-lounge.jpg";
import details from "@/assets/spa-details.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ADWITYA WELLNESS | Luxury Wellness & Spa Experiences" },
    { name: "description", content: "Discover the ADWITYA WELLNESS experience and its three premium wellness destinations." },
    { property: "og:title", content: "ADWITYA WELLNESS | Luxury Wellness & Spa Experiences" },
    { property: "og:description", content: "A curated world of wellness, relaxation and rejuvenation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() { return <>
  <section className="relative flex min-h-screen items-end overflow-hidden">
    <img src={hero} alt="Luxury wellness retreat interior" width={1536} height={1024} className="absolute inset-0 size-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-primary/10" />
    <div className="container-shell relative pb-16 pt-40 text-primary-foreground sm:pb-20 lg:pb-24">
      <Reveal className="max-w-5xl"><span className="demo-label border-primary-foreground/30 text-primary-foreground">Premium wellness collective</span><h1 className="mt-7 font-serif text-6xl leading-[0.95] sm:text-8xl lg:text-[9rem]">ADWITYA<br/>WELLNESS</h1><p className="mt-7 font-serif text-2xl italic sm:text-3xl">Where Wellness Becomes an Experience.</p><p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base">Discover thoughtfully curated spaces created to help you pause, reconnect and rejuvenate.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button variant="gold" asChild><Link to="/our-spas">Explore Our Spas</Link></Button><Button className="border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground hover:text-primary" asChild><Link to="/philosophy">Discover Our Philosophy</Link></Button></div></Reveal>
    </div><a href="#destinations" aria-label="Scroll to wellness destinations" className="absolute bottom-7 right-7 grid size-12 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground"><ArrowDown className="size-4"/></a>
  </section>

  <section id="destinations" className="section bg-muted/60"><div className="container-shell"><Reveal><SectionHeading eyebrow="The ADWITYA collection" title="Our Wellness Destinations" text="Three distinctive spaces. One philosophy of well-being."/></Reveal><Reveal delay={100}><SpaCards/></Reveal></div></section>

  <section className="section"><div className="container-shell grid items-center gap-14 lg:grid-cols-12"><Reveal className="lg:col-span-5"><SectionHeading eyebrow="The ADWITYA approach" title="Our Philosophy" text="We believe wellness is more than a treatment. It is the feeling of slowing down, reconnecting with yourself and creating space for balance in everyday life."/><Button variant="outline" className="mt-8" asChild><Link to="/philosophy">Discover Our Philosophy <ArrowRight className="size-4"/></Link></Button></Reveal><Reveal className="lg:col-span-7" delay={120}><img src={lounge} alt="Editorial wellness lounge" loading="lazy" width={1024} height={1536} className="media-frame-lg ml-auto aspect-[4/5] max-h-[720px] w-full object-cover lg:w-[78%]"/></Reveal></div></section>

  <section className="section overflow-hidden bg-beige">
    <div className="container-shell">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gold/60"/>
          <p className="eyebrow !mb-0">Our Reason</p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <h2 className="font-serif text-4xl leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            To create meaningful experiences where <em className="text-gold">every detail</em> invites renewal.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">
            From the environment to each experience, the intention is relaxation, renewal and connection.
          </p>
          <div className="mt-10 grid max-w-xl gap-6 border-t border-primary/10 pt-8 sm:grid-cols-3">
            {[["Relax","Unhurried rituals"],["Renew","Restorative touch"],["Reconnect","Space to breathe"]].map(([t,s]) => (
              <div key={t}>
                <p className="font-serif text-2xl text-primary">{t}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-10" asChild><Link to="/reason">Discover Our Reason <ArrowRight className="size-4"/></Link></Button>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={120}>
          <img src={details} alt="Natural wellness detail" loading="lazy" className="media-frame aspect-[3/4] w-full object-cover"/>
        </Reveal>
      </div>
    </div>
  </section>

  <section className="relative flex min-h-[75vh] items-center overflow-hidden"><img src={hero} alt="Quiet wellness setting" loading="lazy" width={1536} height={1024} className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-primary/70"/><div className="container-shell relative py-24 text-center text-primary-foreground"><Reveal><p className="text-xs uppercase tracking-[0.24em] text-gold">Our Motto</p><h2 className="mx-auto mt-8 max-w-5xl font-serif text-6xl leading-none sm:text-8xl lg:text-9xl">Pause. Breathe. <em>Reconnect.</em></h2><p className="mx-auto mt-8 max-w-xl leading-8 text-primary-foreground/75">Because true wellness begins when we give ourselves permission to slow down.</p><Button variant="gold" className="mt-10" asChild><Link to="/motto">Discover Our Motto</Link></Button></Reveal></div></section>
</> }
