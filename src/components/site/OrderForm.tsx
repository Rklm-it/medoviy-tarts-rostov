import { useState } from "react";

const field =
  "h-14 w-full rounded-2xl border border-input bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-caramel";

export function OrderForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[28px] bg-card p-6 shadow-soft sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Имя" required />
        <input className={field} name="phone" type="tel" placeholder="Телефон" required />
        <input className={field} name="occasion" placeholder="Повод" />
        <input className={field} name="date" type="date" placeholder="Дата праздника" />
      </div>
      <textarea
        className={`${field} mt-3 h-32 py-4`}
        name="comment"
        placeholder="Комментарий"
      />
      <button
        type="submit"
        className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-caramel"
      >
        Отправить заявку
      </button>

      {sent && (
        <p className="mt-4 rounded-2xl bg-secondary px-5 py-4 text-sm text-foreground">
          Заявка отправлена. [подключить получение заявок]
        </p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
