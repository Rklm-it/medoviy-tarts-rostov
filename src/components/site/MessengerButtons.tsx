import { Phone, Send, MessageCircle } from "lucide-react";
import {
  LINK_MAX,
  LINK_TELEGRAM,
  LINK_VK,
  LINK_WHATSAPP,
  PHONE_MAIN,
  PHONE_MAIN_HREF,
} from "@/lib/site-data";

const base =
  "inline-flex h-14 min-w-0 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold transition-colors sm:text-base";

export function MessengerButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      <a
        href={LINK_MAX}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-primary text-primary-foreground hover:bg-caramel`}
      >
        MAX
      </a>
      <a
        href={LINK_TELEGRAM}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-secondary text-foreground hover:bg-blossom`}
      >
        <Send className="size-5 shrink-0" />
        Telegram
      </a>
      <a
        href={LINK_VK}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-secondary text-foreground hover:bg-blossom`}
      >
        ВКонтакте
      </a>
      <a
        href={LINK_WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-secondary text-foreground hover:bg-blossom`}
      >
        <MessageCircle className="size-5 shrink-0" />
        WhatsApp
      </a>
      <a
        href={PHONE_MAIN_HREF}
        className={`${base} col-span-2 bg-accent text-accent-foreground hover:bg-caramel hover:text-caramel-foreground lg:col-span-1`}
      >
        <Phone className="size-5 shrink-0" />
        <span className="truncate">{PHONE_MAIN}</span>
      </a>
    </div>
  );
}
