import w01 from "@/assets/works/work-01.jpg";
import w02 from "@/assets/works/work-02.jpg";
import w03 from "@/assets/works/work-03.jpg";
import w04 from "@/assets/works/work-04.jpg";
import w05 from "@/assets/works/work-05.jpg";
import w06 from "@/assets/works/work-06.jpg";
import w07 from "@/assets/works/work-07.jpg";
import w08 from "@/assets/works/work-08.jpg";
import w09 from "@/assets/works/work-09.jpg";
import w10 from "@/assets/works/work-10.jpg";
import w11 from "@/assets/works/work-11.jpg";
import w12 from "@/assets/works/work-12.jpg";
import w13 from "@/assets/works/work-13.jpg";
import w14 from "@/assets/works/work-14.jpg";
import w15 from "@/assets/works/work-15.jpg";
import w16 from "@/assets/works/work-16.jpg";
import w17 from "@/assets/works/work-17.jpg";
import w18 from "@/assets/works/work-18.jpg";
import w19 from "@/assets/works/work-19.jpg";
import w20 from "@/assets/works/work-20.jpg";
import w21 from "@/assets/works/work-21.jpg";
import w22 from "@/assets/works/work-22.jpg";
import w23 from "@/assets/works/work-23.jpg";
import w24 from "@/assets/works/work-24.jpg";
import w25 from "@/assets/works/work-25.jpg";
import w26 from "@/assets/works/work-26.jpg";
import w27 from "@/assets/works/work-27.jpg";
import w28 from "@/assets/works/work-28.jpg";
import w29 from "@/assets/works/work-29.jpg";
import w30 from "@/assets/works/work-30.jpg";
import w31 from "@/assets/works/work-31.jpg";
import w32 from "@/assets/works/work-32.jpg";
import w33 from "@/assets/works/work-33.jpg";
import w34 from "@/assets/works/work-34.jpg";
import w35 from "@/assets/works/work-35.jpg";
import w36 from "@/assets/works/work-36.jpg";
import w37 from "@/assets/works/work-37.jpg";
import w38 from "@/assets/works/work-38.jpg";
import w39 from "@/assets/works/work-39.jpg";
import w40 from "@/assets/works/work-40.jpg";
import w41 from "@/assets/works/work-41.jpg";
import w42 from "@/assets/works/work-42.jpg";
import w43 from "@/assets/works/work-43.jpg";
import w44 from "@/assets/works/work-44.jpg";
import w45 from "@/assets/works/work-45.jpg";
import w46 from "@/assets/works/work-46.jpg";

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
  "Для женщин",
  "Для мужчин",
  "Годовщина",
  "Бенто-торты",
  "Объёмные 3D",
  "Десерты",
] as const;

export type Work = {
  title: string;
  category: string;
  image: string;
};

export const WORKS: Work[] = [
  { title: "2х ярусный торт-пирог с ягодами", category: "Свадебные", image: w01 },
  { title: "2d с мастичными деталями в виде лапок и ушек", category: "День рождения", image: w09 },
  { title: "2 х ярусный с мастичной фигуркой мишки и вафельным декором", category: "Детские", image: w29 },
  { title: "Бело-фиолетовый с надписью", category: "Для женщин", image: w17 },
  { title: "Боксерские перчатки", category: "Для мужчин", image: w23 },
  { title: "На 35 лет совместной жизни", category: "Годовщина", image: w37 },
  { title: "Муссовый бенто-торт с короной", category: "Бенто-торты", image: w41 },
  { title: "Машина объемная синего цвета", category: "Объёмные 3D", image: w44 },
  { title: "Пирожное картошка набор 6 шт", category: "Десерты", image: w43 },
  { title: "3х ярусный с инициалами и вафельной бумагой", category: "Свадебные", image: w02 },
  { title: "3х ярусный с фигуркой в виде пинеток", category: "День рождения", image: w10 },
  { title: "Бело-розовый с бабочками из вафельной бумаги и посыпкой", category: "Детские", image: w30 },
  { title: "Бело-голубой с кремовыми цветами", category: "Для женщин", image: w18 },
  { title: "Черного цвета с перцем", category: "Для мужчин", image: w24 },
  { title: "На 50 лет совместной жизни", category: "Годовщина", image: w38 },
  { title: "Муссовый бенто-торт в виде сердца", category: "Бенто-торты", image: w42 },
  { title: "Бургер с кунжутом", category: "Объёмные 3D", image: w45 },
  { title: "Пирожное картошка набор 6 шт на праздник", category: "Десерты", image: w46 },
  { title: "3х ярусный с синими мазками и свежими цветами", category: "Свадебные", image: w03 },
  { title: "Белого цвета с мастичным якорем", category: "День рождения", image: w11 },
  { title: "Фиолетового цвета с надписями и леденцами", category: "Детские", image: w31 },
  { title: "Бело-розовый с цветами", category: "Для женщин", image: w19 },
  { title: "Черного цвета с шарами и надписью", category: "Для мужчин", image: w25 },
  { title: "На 60 лет совместной жизни-Бриллиантовая свадьба", category: "Годовщина", image: w39 },
  { title: "3х ярусный в стиле ламбет", category: "Свадебные", image: w04 },
  { title: "Белого цвета с украшением из бусин", category: "День рождения", image: w12 },
  { title: "Розового цвета с мастичными цветами", category: "Детские", image: w32 },
  { title: "Белого цвета с мастичными цветами", category: "Для женщин", image: w20 },
  { title: "Черного цвета с шоколадными шарами", category: "Для мужчин", image: w26 },
  { title: "На первую годовщину свадьбы", category: "Годовщина", image: w40 },
  { title: "4 яруса с вафельной бумагой и золотом", category: "Свадебные", image: w05 },
  { title: "Белого цвета с украшением из рисовой бумаги", category: "День рождения", image: w13 },
  { title: "Голубой со сладостями", category: "Детские", image: w33 },
  { title: "Белого цвета с надписью", category: "Для женщин", image: w21 },
  { title: "Черного цвета с цифрой 45 и розами", category: "Для мужчин", image: w27 },
  { title: "4х ярусный с ягодами и вафельными бабочками", category: "Свадебные", image: w06 },
  { title: "Белый с ягодами и шарами", category: "День рождения", image: w14 },
  { title: "Мишка с шарами из вафельной бумаги", category: "Детские", image: w34 },
  { title: "Белого цвета с цифрой 23", category: "Для женщин", image: w22 },
  { title: "Черный с черно-золотыми шарами и надписью", category: "Для мужчин", image: w28 },
  { title: "Белый с бусинами и живыми цветами", category: "Свадебные", image: w07 },
  { title: "Белый с золотыми брызгами на юбилей", category: "День рождения", image: w15 },
  { title: "С надписью и цифрой", category: "Детские", image: w35 },
  { title: "Белый с бусинами", category: "Свадебные", image: w08 },
  { title: "Бежевого цвета с шоколадными шарами", category: "День рождения", image: w16 },
  { title: "В виде цифры один", category: "Детские", image: w36 },
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
