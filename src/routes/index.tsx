import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Gallery } from "@/components/site/Gallery";
import { Calculator } from "@/components/site/Calculator";
import { OrderForm } from "@/components/site/OrderForm";
import { MessengerButtons } from "@/components/site/MessengerButtons";
import {
  FILLINGS,
  LINK_MAX,
  LINK_TELEGRAM,
  LINK_VK,
  PHONE_MAIN,
  PHONE_MAIN_HREF,
  PHONE_SECOND,
  PHONE_SECOND_HREF,
  REVIEWS,
  STEPS,
} from "@/lib/site-data";
import heroCake from "@/assets/hero-cake.jpg";
import craftCake from "@/assets/craft-cake.jpg";
import emblem from "@/assets/emblem.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Торты на заказ в Ростове-на-Дону — Кондитерский дом «Медовый»" },
      {
        name: "description",
        content:
          "Торты на заказ ручной работы в Ростове-на-Дону: натуральные ингредиенты, скульптурная лепка, срочные заказы за один день, доставка по городу.",
      },
      { property: "og:title", content: "Кондитерский дом «Медовый» — торты на заказ в Ростове-на-Дону" },
      {
        property: "og:description",
        content:
          "Ручная работа, натуральные ингредиенты, доставка по городу. Расчёт стоимости и заказ в мессенджере.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const advantages = [
  {
    title: "Натуральные ингредиенты",
    text: "Только свежее и натуральное, не используем ароматизаторы и усилители вкусов.",
  },
  {
    title: "Скульптурная лепка",
    text: "Все декоративные фигурки делаем вручную из шоколада, несладкого марципана, сахарной мастики, пасты для моделирования и свежих ягод.",
  },
  {
    title: "Срочные заказы",
    text: "Забыли заказать торт, а праздник завтра? Изготовим за один день.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{children}</h2>;
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO. Снимки у клиента вертикальные, студийные. Широкая полоса с
          обрезкой по центру резала торт пополам, поэтому фото стоит карточкой
          в своих пропорциях, а текст рядом. */}
      <section className="section-shell pt-6 sm:pt-10 lg:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[30px] bg-secondary shadow-soft">
              <img
                src={heroCake}
                alt="Трёхъярусный свадебный торт с инициалами и вафельной бумагой"
                width={1600}
                height={2178}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <h1 className="font-display text-[clamp(2rem,5.2vw,3.6rem)] leading-[1.08] text-foreground">
              Торты на заказ в Ростове-на-Дону
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ручная работа, натуральные ингредиенты, доставка по городу
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calculator"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-accent px-7 text-base font-semibold text-accent-foreground transition-colors hover:bg-caramel hover:text-caramel-foreground"
              >
                Рассчитать стоимость
              </a>
              <a
                href={LINK_TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-caramel px-7 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Написать в мессенджер
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Принимаем срочные заказы — сделаем торт за один день
            </p>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {advantages.map((a) => (
            <article key={a.title} className="rounded-[28px] bg-secondary p-6 sm:p-8">
              <span className="block size-3 rounded-full bg-blossom" aria-hidden />
              <h3 className="mt-5 font-display text-2xl leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {a.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ВИТРИНА */}
      <section id="works" className="section-shell pb-16 sm:pb-24">
        <SectionTitle>Витрина работ</SectionTitle>
        <div className="mt-7">
          <Gallery />
        </div>
      </section>

      {/* СКОЛЬКО СТОИТ */}
      <section id="calculator" className="bg-secondary/60 py-16 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <SectionTitle>Сколько стоит торт</SectionTitle>
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              Цена считается за килограмм, от 2 000 ₽ за кг. Минимальный вес торта с декором — 2 кг.
              Итоговая цена зависит от сложности декора, ягоды и сложные фигурки считаются отдельно.
            </p>
            <img
              src={craftCake}
              alt="Двухъярусный торт с фигуркой кита — работа кондитерского дома «Медовый»"
              loading="lazy"
              width={1200}
              height={900}
              className="mt-9 hidden aspect-[3/4] w-full max-w-[360px] rounded-[28px] object-cover lg:block"
            />
          </div>
          <Calculator />
        </div>
      </section>

      {/* КАК ЗАКАЗАТЬ */}
      <section className="section-shell py-16 sm:py-24">
        <SectionTitle>Как заказать</SectionTitle>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <ol className="grid gap-4 sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-[28px] border border-border p-6">
                <span className="font-display text-3xl text-caramel">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <aside className="rounded-[28px] bg-accent p-6 sm:p-8">
            <p className="font-display text-xl leading-snug text-accent-foreground sm:text-2xl">
              Рекомендуем заказывать за неделю до торжества — даты часто забронированы.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-accent-foreground/85 sm:text-base">
              Не успели? Позвоните, при свободном времени сделаем срочно.
            </p>
            <a
              href={PHONE_MAIN_HREF}
              className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-caramel"
            >
              {PHONE_MAIN}
            </a>
          </aside>
        </div>
      </section>

      {/* НАЧИНКИ */}
      <section className="section-shell pb-16 sm:pb-24">
        <SectionTitle>Начинки</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FILLINGS.map((f) => (
            <article key={f.name} className="rounded-[28px] bg-secondary p-6">
              <h3 className="font-display text-xl">{f.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-base text-foreground">
          Не нашли любимый вкус? Обсудим индивидуально.
        </p>
      </section>

      {/* ДОСТАВКА И ОПЛАТА */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="section-shell">
          <SectionTitle>Доставка и оплата</SectionTitle>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[28px] bg-card p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-2xl">Доставка</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Возим только проверенными службами — торт хрупкий, водитель едет медленно, а
                многоярусные торты сопровождает кондитер. Доставка платная, от 600 до 800 ₽ по
                Ростову в зависимости от дальности.
              </p>
            </article>
            <article className="rounded-[28px] bg-card p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-2xl">Оплата</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                При оформлении вносится аванс. Окончательный расчёт — при получении торта или после
                фотоотчёта, если вы в другом городе.
              </p>
            </article>
          </div>
          <p className="mt-6 text-xs text-muted-foreground sm:text-sm">
            Если качество работы вас не устроит, вы можете не принять заказ — предоплату вернём.
          </p>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="section-shell py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle>Отзывы</SectionTitle>
          <a
            href={LINK_VK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-2xl border border-caramel px-7 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Читать отзывы
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article key={i} className="rounded-[28px] border border-border p-6">
              <p className="text-sm leading-relaxed text-foreground sm:text-base">{r.text}</p>
              <p className="mt-5 font-display text-lg">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.occasion}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section id="zayavka" className="bg-secondary/60 py-16 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle>Заявка</SectionTitle>
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              Удобнее написать? Пришлите картинку торта, который нравится, — посчитаем по ней.
            </p>
            <div className="mt-7">
              <MessengerButtons />
            </div>
          </div>
          <OrderForm />
        </div>
      </section>

      {/* ПОДВАЛ */}
      <footer className="bg-primary py-14 text-primary-foreground sm:py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={emblem}
                alt=""
                width={320}
                height={271}
                className="h-12 w-auto shrink-0"
              />
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/70">
                  Кондитерский дом
                </span>
                <span className="block font-display text-xl">Медовый</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/80">
              Обработка заказов с 10:00 до 20:00 по будням
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <a href={PHONE_MAIN_HREF} className="block text-lg font-semibold hover:text-accent">
              {PHONE_MAIN}
            </a>
            <a href={PHONE_SECOND_HREF} className="block text-lg font-semibold hover:text-accent">
              {PHONE_SECOND}
            </a>
            <p className="pt-2 text-primary-foreground/80">
              г. Ростов-на-Дону, ул. Шеболдаева, 15Б
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <a
                href={LINK_VK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-2xl bg-primary-foreground/12 px-5 text-sm font-semibold hover:bg-primary-foreground/25"
              >
                ВКонтакте
              </a>
              <a
                href={LINK_TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-2xl bg-primary-foreground/12 px-5 text-sm font-semibold hover:bg-primary-foreground/25"
              >
                Telegram
              </a>
              <a
                href={LINK_MAX}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-2xl bg-primary-foreground/12 px-5 text-sm font-semibold hover:bg-primary-foreground/25"
              >
                MAX
              </a>
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 border-t border-primary-foreground/20 pt-6">
          <p className="text-xs text-primary-foreground/70">
            ИП Мкртичян Наталья Сергеевна, ИНН 616801229734, ОГРНИП 321619600207872
          </p>
        </div>
      </footer>
    </div>
  );
}
