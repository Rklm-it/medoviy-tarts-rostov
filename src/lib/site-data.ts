import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeKids from "@/assets/cake-kids.jpg";
import cakeMen from "@/assets/cake-men.jpg";
import cakeWomen from "@/assets/cake-women.jpg";
import cakeBento from "@/assets/cake-bento.jpg";
import cakeChristening from "@/assets/cake-christening.jpg";
import cakeCorporate from "@/assets/cake-corporate.jpg";
import cake3d from "@/assets/cake-3d.jpg";
import desserts from "@/assets/desserts.jpg";

export const PHONE_MAIN = "+7 (918) 564-56-21";
export const PHONE_MAIN_HREF = "tel:+79185645621";
export const PHONE_SECOND = "+7 (988) 533-43-53";
export const PHONE_SECOND_HREF = "tel:+79885334353";

export const LINK_MAX =
  "https://max.ru/u/f9LHodD0cOJKreYq8b3OVBQbgF7imA4HxMeO9Aw3ifEviIQDEBDFhonFwJg";
export const LINK_TELEGRAM = "https://t.me/tkdmedoviy";
export const LINK_VK = "https://vk.com/tort_v_rostove61";
export const LINK_WHATSAPP = "https://wa.me/79185645621";

export const CATEGORIES = [
  "Все работы",
  "Свадебные",
  "День рождения",
  "Детские",
  "Для мужчин",
  "Для женщин",
  "Бенто-торты",
  "Крещение",
  "Корпоративные",
  "Объёмные 3D",
  "Десерты",
] as const;

export type Work = {
  title: string;
  category: string;
  image: string;
};

export const WORKS: Work[] = [
  { title: "Свадебный торт с ягодами", category: "Свадебные", image: cakeWedding },
  { title: "Торт с карамелью и ягодами", category: "День рождения", image: cakeBirthday },
  { title: "Торт с лепными фигурками", category: "Детские", image: cakeKids },
  { title: "Шоколадный торт", category: "Для мужчин", image: cakeMen },
  { title: "Торт с марципановыми цветами", category: "Для женщин", image: cakeWomen },
  { title: "Бенто-торт в коробке", category: "Бенто-торты", image: cakeBento },
  { title: "Торт на крещение", category: "Крещение", image: cakeChristening },
  { title: "Торт для компании", category: "Корпоративные", image: cakeCorporate },
  { title: "Объёмный торт с фигурой", category: "Объёмные 3D", image: cake3d },
  { title: "Набор десертов", category: "Десерты", image: desserts },
  { title: "Двухъярусный свадебный торт", category: "Свадебные", image: cakeWedding },
  { title: "Торт на день рождения", category: "День рождения", image: cakeBirthday },
  { title: "Детский торт с животными", category: "Детские", image: cakeKids },
  { title: "Торт с золотым декором", category: "Корпоративные", image: cakeCorporate },
];

export const FILLINGS = [
  { name: "[начинка 1]", desc: "[короткое описание вкуса]" },
  { name: "[начинка 2]", desc: "[короткое описание вкуса]" },
  { name: "[начинка 3]", desc: "[короткое описание вкуса]" },
  { name: "[начинка 4]", desc: "[короткое описание вкуса]" },
  { name: "[начинка 5]", desc: "[короткое описание вкуса]" },
  { name: "[начинка 6]", desc: "[короткое описание вкуса]" },
];

export const STEPS = [
  {
    title: "Оставьте заявку",
    text: "Напишите в мессенджер или заполните форму, приложите картинку торта, который нравится.",
  },
  {
    title: "Обсуждаем детали",
    text: "Уточним повод, вес, начинку и дизайн, назовём точную стоимость.",
  },
  {
    title: "Вносите предоплату",
    text: "Заказ принимается в работу после неё.",
  },
  {
    title: "Получаете торт",
    text: "Доставим по Ростову или заберёте сами.",
  },
];

export const REVIEWS = [
  { text: "[отзыв — пример, заменить на настоящий]", name: "[Имя]", occasion: "[свадьба]" },
  {
    text: "[отзыв — пример, заменить на настоящий]",
    name: "[Имя]",
    occasion: "[детский праздник]",
  },
  { text: "[отзыв — пример, заменить на настоящий]", name: "[Имя]", occasion: "[юбилей]" },
];
