import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "gold" | "ghost"; asChild?: boolean; children: ReactNode };
export function Button({ variant = "primary", asChild, className, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn("group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50", variant === "primary" && "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-elevated", variant === "outline" && "border border-primary/25 bg-background/60 text-primary backdrop-blur hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary hover:text-primary-foreground", variant === "gold" && "bg-gold text-gold-foreground hover:-translate-y-0.5 hover:bg-gold/90", variant === "ghost" && "text-foreground hover:bg-muted", className)} {...props} />;
}
