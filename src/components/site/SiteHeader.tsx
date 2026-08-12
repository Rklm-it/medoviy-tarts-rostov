import { Phone, Send, MessageCircle } from "lucide-react";
import {
  LINK_MAX,
  LINK_TELEGRAM,
  LINK_VK,
  LINK_WHATSAPP,
  PHONE_MAIN,
  PHONE_MAIN_HREF,
} from "@/lib/site-data";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex min-w-0 items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent font-display text-lg text-accent-foreground"
      >
        М
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-[9px] uppercase tracking-[0.1em] text-caramel sm:text-[11px] sm:tracking-[0.18em]">
          Кондитерский дом
        </span>
        <span className="block font-display text-xl text-foreground">Медовый</span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-shell flex h-[68px] items-center justify-between gap-2 sm:gap-3">
        <Logo />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={PHONE_MAIN_HREF}
            className="hidden font-semibold text-foreground transition-colors hover:text-caramel lg:block"
          >
            {PHONE_MAIN}
          </a>

          <div className="hidden items-center gap-1.5 sm:flex">
            <a
              href={LINK_MAX}
              target="_blank"
              rel="noreferrer"
              aria-label="MAX"
              className="grid size-11 place-items-center rounded-2xl bg-secondary font-display text-xs text-foreground transition-colors hover:bg-blossom"
            >
              MAX
            </a>
            <a
              href={LINK_TELEGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="grid size-11 place-items-center rounded-2xl bg-secondary text-foreground transition-colors hover:bg-blossom"
            >
              <Send className="size-5" />
            </a>
            <a
              href={LINK_VK}
              target="_blank"
              rel="noreferrer"
              aria-label="ВКонтакте"
              className="grid size-11 place-items-center rounded-2xl bg-secondary font-display text-xs text-foreground transition-colors hover:bg-blossom"
            >
              VK
            </a>
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-2xl bg-secondary text-foreground transition-colors hover:bg-blossom"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>

          <a
            href={PHONE_MAIN_HREF}
            aria-label={`Позвонить ${PHONE_MAIN}`}
            className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-foreground lg:hidden"
          >
            <Phone className="size-5" />
          </a>

          <a
            href="#calculator"
            className="inline-flex h-11 shrink-0 items-center rounded-2xl bg-primary px-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-caramel sm:px-5 sm:text-sm"
          >
            Рассчитать торт
          </a>
        </div>
      </div>
    </header>
  );
}
