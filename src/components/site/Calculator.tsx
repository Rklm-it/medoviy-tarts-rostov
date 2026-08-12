import { useMemo, useState } from "react";

const PRICE_PER_KG = 2000;
const MIN_WEIGHT = 2;

export function Calculator() {
  const [guests, setGuests] = useState("10");

  const result = useMemo(() => {
    const count = Math.max(0, Math.floor(Number(guests.replace(/\D/g, "")) || 0));
    if (!count) return null;
    const weight = Math.max(MIN_WEIGHT, (count * 200) / 1000);
    const rounded = Math.round(weight * 10) / 10;
    return { weight: rounded, price: Math.round(rounded * PRICE_PER_KG) };
  }, [guests]);

  return (
    <div className="rounded-[28px] bg-card p-6 shadow-soft sm:p-8">
      <label htmlFor="guests" className="block text-sm font-semibold text-foreground">
        Сколько будет гостей
      </label>
      <input
        id="guests"
        inputMode="numeric"
        value={guests}
        onChange={(e) => setGuests(e.target.value.replace(/\D/g, "").slice(0, 4))}
        placeholder="10"
        className="mt-3 h-14 w-full rounded-2xl border border-input bg-background px-5 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-caramel"
      />

      <div className="mt-6 rounded-[24px] bg-secondary p-5">
        <p className="font-display text-2xl text-foreground sm:text-3xl">
          {result
            ? `Примерно ${result.weight} кг — от ${result.price.toLocaleString("ru-RU")} ₽`
            : "Укажите количество гостей"}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Это ориентир. Точную стоимость назовёт кондитер после обсуждения дизайна.
        </p>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Торт 2 кг — это диаметр 16 см и высота 10 см.
      </p>

      <a
        href="#zayavka"
        className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-caramel hover:text-caramel-foreground"
      >
        Обсудить свой торт
      </a>
    </div>
  );
}
