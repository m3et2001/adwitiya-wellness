import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, CalendarDays, Check, ChevronDown, Clock, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { experiences, images, spas } from "@/data/site";

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [complete, setComplete] = useState(false);
  const [selectedSpa, setSelectedSpa] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const spa = spas.find(s => s.name === value("spa"));
    if (!spa) return;
    const lines = [
      `Hello ${spa.name}, I would like to book a wellness experience.`,
      "",
      `Spa: ${spa.name}`,
      `Experience: ${value("experience")}`,
      `Preferred date: ${value("date")}`,
      `Preferred time: ${value("time")}`,
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
    ];
    const request = value("request");
    if (request) lines.push(`Special request: ${request}`);
    const bookingNumber = (spa.whatsappNumber ?? spa.phone).replace(/\D/g, "");
    const url = `https://wa.me/${bookingNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSelectedSpa(spa.name);
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setComplete(true);
  }
  function close(value: boolean) { onOpenChange(value); if (!value) window.setTimeout(() => setComplete(false), 300); }
  return <Dialog.Root open={open} onOpenChange={close}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/50 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[94vh] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] border border-border/60 bg-background shadow-elevated focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out sm:rounded-[2.5rem]">
        <Dialog.Close asChild><button aria-label="Close booking" className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-border/60 bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-muted"><X className="size-5" /></button></Dialog.Close>
        {complete ? <div className="grid min-h-[30rem] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative hidden overflow-hidden bg-primary lg:grid lg:place-items-center">
            <div className="absolute inset-0 map-pattern opacity-20" aria-hidden="true" />
            <div className="relative flex flex-col items-center">
              <span className="grid size-32 place-items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground shadow-elevated">
                <MessageCircle className="size-14" strokeWidth={1.35} />
              </span>
              <span className="absolute -bottom-2 -right-2 grid size-10 place-items-center rounded-full bg-gold text-primary">
                <Check className="size-5" strokeWidth={2.5} />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-14">
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground"><MessageCircle className="size-5" /></span>
              <span className="grid size-7 place-items-center rounded-full bg-gold text-primary"><Check className="size-4" /></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" aria-hidden="true" />
              <p className="eyebrow">Request prepared</p>
            </div>
            <Dialog.Title className="mt-5 max-w-lg font-serif text-4xl leading-[1.15] text-primary sm:text-5xl">Your moment of wellness is one step away.</Dialog.Title>
            <Dialog.Description className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">Your inquiry for <strong className="font-medium text-foreground">{selectedSpa}</strong> is ready in WhatsApp. Send the prepared message, and the spa team will personally confirm your preferred time.</Dialog.Description>
            <div className="mt-8 flex items-start gap-4 border-y border-border/70 py-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" /></span>
              <div><p className="text-sm font-medium text-foreground">No payment has been taken</p><p className="mt-1.5 text-xs leading-5 text-muted-foreground">Your appointment is confirmed only after the selected spa replies on WhatsApp.</p></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="sm:min-w-52"><a href={whatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> Continue to WhatsApp <ArrowUpRight className="size-4" /></a></Button>
              <Button variant="ghost" onClick={() => close(false)}>Close</Button>
            </div>
          </div>
        </div> : <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative hidden overflow-hidden lg:block">
            <img src={images.hero} alt="ADWITYA WELLNESS calming atmosphere" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/35 via-primary/55 to-primary/85" />
            <div className="relative flex h-full flex-col justify-between p-8 text-primary-foreground">
              <Sparkles className="size-5 text-gold" />
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.26em] text-gold">Your time to unwind</p>
                <p className="mt-3 font-serif text-4xl leading-[0.95]">Pause.<br />Breathe.<br /><em>Reconnect.</em></p>
                <p className="mt-4 max-w-[15rem] text-[0.8rem] leading-6 text-primary-foreground/75">Choose your spa and experience — our team confirms on WhatsApp.</p>
              </div>
              <div className="grid gap-2 border-t border-primary-foreground/20 pt-4 text-[0.8rem] text-primary-foreground/80">
                <p className="flex items-center gap-3"><Phone className="size-4 text-gold" /> +91 75677 18839</p>
                <p className="flex items-center gap-3"><MessageCircle className="size-4 text-gold" /> Confirmation via WhatsApp</p>
              </div>
            </div>
          </aside>
          <div className="px-6 py-7 sm:px-9 lg:px-10 lg:py-7">
            <p className="eyebrow lg:hidden">Your time to unwind</p>
            <Dialog.Title className="mt-2 font-serif text-3xl leading-none text-primary lg:mt-0 sm:text-4xl">Book an Experience</Dialog.Title>
            <Dialog.Description className="mt-2.5 text-[0.82rem] leading-5 text-muted-foreground">Our team confirms availability on WhatsApp — no payment is taken here.</Dialog.Description>
            <form onSubmit={submit} className="mt-4 grid gap-4">
              <fieldset className="grid gap-2">
                <legend className="mb-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-foreground">Choose Your Spa</legend>
                <div className="grid grid-cols-3 gap-2.5">
                  {spas.map(spa => <label key={spa.slug} className="cursor-pointer">
                    <input type="radio" name="spa" value={spa.name} required className="peer sr-only" />
                    <span className="grid min-h-11 place-items-center rounded-xl border border-border/70 bg-card/70 px-2 text-center text-[0.72rem] font-medium leading-tight text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:hover:border-primary peer-checked:hover:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2">{spa.name}</span>
                  </label>)}
                </div>
              </fieldset>
              <Field label="Choose Experience">
                <div className="relative">
                  <select name="experience" required className="booking-field appearance-none pr-11">
                    <option value="">Select an experience</option>
                    {experiences.map(e => <option key={e.name}>{e.name}</option>)}
                    <option>Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Preferred Date">
                  <div className="relative">
                    <input name="date" required type="date" className="booking-field pr-11" />
                    <CalendarDays className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </Field>
                <Field label="Preferred Time"><div className="relative"><input name="time" required type="time" className="booking-field pr-11" /><Clock className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /></div></Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name"><input name="name" required autoComplete="name" placeholder="Your name" className="booking-field" /></Field>
                <Field label="Phone Number"><input name="phone" required type="tel" autoComplete="tel" placeholder="Your phone number" className="booking-field" /></Field>
              </div>
              <Field label="Special Request"><textarea name="request" rows={2} placeholder="Anything you would like us to know" className="booking-field resize-none" /></Field>
              <div className="grid gap-2">
                <Button type="submit" className="w-full">Request Appointment</Button>
                <p className="text-center text-[0.7rem] text-muted-foreground">Your request opens in WhatsApp — no payment is taken here.</p>
              </div>
            </form>
          </div>
        </div>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="grid gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground"><span>{label}</span>{children}</label>; }
