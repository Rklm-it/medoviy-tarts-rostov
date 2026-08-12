import { useMemo, useState } from "react";
import { CATEGORIES, WORKS } from "@/lib/site-data";

const STEP = 8;

export function Gallery() {
  const [active, setActive] = useState<string>(CATEGORIES[0]);
  const [visible, setVisible] = useState(STEP);

  const items = useMemo(
    () => (active === CATEGORIES[0] ? WORKS : WORKS.filter((w) => w.category === active)),
    [active],
  );

  const shown = items.slice(0, visible);

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                setVisible(STEP);
              }}
              className={`h-11 shrink-0 rounded-2xl px-4 text-sm font-semibold transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-blossom"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {shown.map((w, i) => (
          <figure key={`${w.title}-${i}`} className="min-w-0">
            <div className="overflow-hidden rounded-[26px] bg-secondary">
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-sm font-medium text-foreground sm:text-base">
              {w.title}
            </figcaption>
          </figure>
        ))}
      </div>

      {visible < items.length && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + STEP)}
            className="inline-flex h-14 items-center rounded-2xl border border-caramel px-8 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
}
