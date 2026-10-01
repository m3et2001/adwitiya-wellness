import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Compass, Heart, Home, Leaf, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/adwitiya-logo-new.png.asset.json";
import { navItems } from "@/data/site";
import { Button } from "./Button";
import { BookingDialog } from "./BookingDialog";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false); const [booking, setBooking] = useState(false); const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setMenu(false); }, [path]);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menu]);
  return <div className="min-h-screen bg-background text-foreground">
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled || menu ? "pt-3" : "pt-6"}`}>
      <div className={`mx-auto flex max-w-[84rem] items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 ${scrolled || menu ? "" : ""}`}>
        <div className={`flex w-full items-center justify-between gap-6 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${scrolled || menu ? "border-border/60 bg-background/80 shadow-soft backdrop-blur-xl" : "border-transparent bg-background/40 backdrop-blur-md"}`}>
          <Link to="/" aria-label="ADWITYA WELLNESS home" className="inline-flex min-w-0 items-center"><img src="../assets/adwitiya-logo-new.webp" alt="ADWITYA WELLNESS" className="h-16 w-auto max-w-[180px] object-contain" /></Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-0 xl:flex">{navItems.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="rounded-full px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-foreground/75 transition-colors duration-300 hover:bg-muted/70 hover:text-primary" activeProps={{ className: "rounded-full bg-primary px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-primary-foreground" }}>{item.label}</Link>)}</nav>
          <div className="hidden xl:flex"><Button onClick={() => setBooking(true)}>Book Your Experience</Button></div>
          <button className="grid size-11 place-items-center rounded-full border border-border/60 bg-background/70 text-primary xl:hidden" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div>
      </div>
      {menu && <>
        <button aria-label="Close navigation" className="fixed inset-0 -z-10 bg-primary/30 backdrop-blur-sm xl:hidden" onClick={() => setMenu(false)} />
        <aside aria-label="Mobile menu" className="fixed inset-y-0 right-0 flex w-[min(88vw,23rem)] flex-col overflow-hidden border-l border-border/60 bg-card shadow-elevated xl:hidden">
          <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/70 px-6 py-5">
            <Link to="/" aria-label="ADWITYA WELLNESS home" className="flex min-w-0 items-center">
              <img src="/src/assets/adwitiya-logo-new.webp" alt="ADWITYA WELLNESS" className="h-14 w-auto max-w-[150px] object-contain" />
            </Link>
            <button aria-label="Close menu" onClick={() => setMenu(false)} className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-background text-primary transition-colors hover:bg-muted">
              <X className="size-5" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
            <p className="px-3 pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Menu</p>
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item, index) => {
                const active = path === item.to;
                const Icon = [Home, Building2, Leaf, Heart, Compass, Mail][index] ?? Leaf;
                return <Link key={item.to} to={item.to} className={`group grid min-h-14 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 transition-colors duration-200 ${active ? "bg-sage text-primary" : "text-foreground hover:bg-muted/70"}`}>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full ${active ? "bg-primary text-primary-foreground" : "bg-muted text-primary"}`}>
                    <Icon className="size-[1.15rem]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 truncate text-[0.95rem] font-medium">{item.label}</span>
                  <ArrowUpRight className={`size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                </Link>;
              })}
            </nav>
          </div>

          <div className="shrink-0 border-t border-border/70 bg-background/60 p-4">
            <a href="tel:+917567718839" className="mb-4 grid min-h-11 grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-2 px-2 text-sm text-muted-foreground">
              <span className="grid size-9 place-items-center rounded-full bg-muted text-primary"><Phone className="size-4" /></span>
              <span className="min-w-0"><span className="block text-[0.62rem] uppercase tracking-[0.14em]">Call us</span><strong className="block truncate font-medium text-foreground">+91 75677 18839</strong></span>
            </a>
            <Button className="w-full" onClick={() => { setMenu(false); setBooking(true); }}>Book Your Experience <ArrowUpRight className="size-4" /></Button>
          </div>
        </aside>
      </>}
    </header>
    <main>{children}</main>
    <Footer onBook={() => setBooking(true)} />
    <BookingDialog open={booking} onOpenChange={setBooking} />
  </div>;
}

function Footer({ onBook }: { onBook: () => void }) { return <footer className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10"><div className="grid gap-14 border-b border-primary-foreground/20 pb-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"><div><p className="font-serif text-5xl leading-none">ADWITYA<br/><em>WELLNESS</em></p><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/65">A curated world of wellness, relaxation and rejuvenation. </p></div><div><p className="footer-title">Explore</p><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70"><Link to="/">Home</Link><Link to="/our-spas">Our Spas</Link><Link to="/philosophy">Philosophy</Link><Link to="/reason">Reason</Link><Link to="/motto">Motto</Link><Link to="/contact">Contact</Link></div></div><div><p className="footer-title">Our Spas</p><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70"><Link to="/ganga-spa">Ganga Spa</Link><Link to="/amore-wellness">Amore Wellness</Link><Link to="/sattva-wellness">Sattva Wellness</Link><button onClick={onBook} className="flex items-center gap-2 text-left">Book an experience <ArrowUpRight className="size-4" /></button></div></div><div><p className="footer-title">Contact</p><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70"><a href="tel:+917567718839" className="w-fit transition-colors hover:text-primary-foreground">+91 75677 18839</a><p>Rajkot, Gujarat</p></div></div></div><div className="flex flex-col gap-3 pt-8 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between"><p>© 2026 ADWITYA WELLNESS. All Rights Reserved.</p></div></div></footer>; }
