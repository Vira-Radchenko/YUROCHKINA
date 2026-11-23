/* =========================================================
   НАЛАШТУВАННЯ САЙТУ — змінюйте ТІЛЬКИ тут
   Усі посилання, email та ціни підставляються на всі сторінки автоматично.
   ========================================================= */

window.YUROCHKINA_CONFIG = {
  /* ---- Контакти ---- */
  email: "yurochkina777@gmail.com",           // ваша пошта
  telegram: "ViraYurochkina",               // нік у Telegram без @
  whatsapp: "48452310386",                  // номер лише цифрами, з кодом країни (Польща — 48)
  viber: "380932489016",                     // номер лише цифрами, з кодом країни
  whatsappLabel: "+48 452 310 386",         // як номер показувати на сайті
  viberLabel: "+38 093 248 90 16",

  /* ---- Соцмережі (повні посилання) ---- */
  links: {
    instagram: "https://www.instagram.com/yurochkina777/",
    behance:   "https://www.behance.net/veraradchenko",
    linkedin:  "https://www.linkedin.com/in/vira-radchenko-5a339b302/?locale=uk-UA",
    facebook:  "https://www.facebook.com/share/1F1jvKn8Us/",
    tiktok:    "https://www.tiktok.com/@yurochkina777"
  },

  /* ---- Посилання на повні кейси на Behance (необов'язково) ---- */
  behanceCases: {
    delintra: "https://www.behance.net/gallery/256283669/DELINTRA-UXUI-dizajn-sajtu-mzhnarodno-logstiki",
    dezlife:  "https://www.behance.net/gallery/256281977/Dezlife-UXUI-dizajn-sajtu-sluzhbi-deznsekc",
    handesi:  "https://www.behance.net/gallery/256280559/HanDesi-marketplejs-ruchno-roboti",
    harmonia: "https://www.behance.net/gallery/218046371/psihologchne-zdorovja-moblnij-dodatok-Harmonya",
    vilno:    "https://www.behance.net/gallery/233413501/magazin-zhnochogo-sportivnogo-odjagu-VILNO",
    drvera:   ""          // DR. VERA: вставте посилання на кейс у Behance, коли опублікуєте
  },

  /* ---- Надсилання форми ----
     Залиште "" — тоді заявка відкриється в поштовій програмі клієнта (mailto).
     Щоб заявки приходили вам на пошту автоматично: зареєструйтесь на formspree.io,
     створіть форму і вставте сюди її адресу, напр. "https://formspree.io/f/abcdwxyz" */
  formEndpoint: "",

  currency: "$",

  /* ---- Ціни на послуги ----
     nameEn / unitEn — назви для англійської версії сайту
     nameRu, namePl, nameDe, nameLt / unitRu, unitPl, unitDe, unitLt — для російської, польської, німецької, литовської
     base     — ціна «від» (входить included одиниць)
     extra    — ціна кожної додаткової одиниці понад included
     days     — орієнтовні робочі дні за базовий обсяг, dayPer — днів на кожну додаткову одиницю */
  services: {
    landing:   { name: "Лендинг",                nameEn: "Landing page",       nameRu: "Лендинг", namePl: "Landing page", nameDe: "Landingpage", nameLt: "Nukreipimo puslapis", unitRu: "блоков", unitPl: "sekcji", unitDe: "Abschnitte", unitLt: "blokai",
                 base: 150, unit: "блоків",   unitEn: "sections",   included: 6, min: 3, max: 20, extra: 20,  days: 7,  dayPer: 0.5 },
    multipage: { name: "Багатосторінковий сайт", nameEn: "Multi-page website", nameRu: "Многостраничный сайт", namePl: "Strona wielostronicowa", nameDe: "Mehrseitige Website", nameLt: "Kelių puslapių svetainė", unitRu: "страниц", unitPl: "stron", unitDe: "Seiten", unitLt: "puslapiai",
                 base: 300, unit: "сторінок", unitEn: "pages", included: 4, min: 2, max: 30, extra: 60,  days: 12, dayPer: 1.5 },
    shop:      { name: "Інтернет-магазин",       nameEn: "Online store",       nameRu: "Интернет-магазин", namePl: "Sklep internetowy", nameDe: "Onlineshop", nameLt: "Internetinė parduotuvė", unitRu: "шаблонов", unitPl: "szablonów", unitDe: "Templates", unitLt: "šablonai",
                 base: 450, unit: "шаблонів", unitEn: "templates", included: 5, min: 5, max: 30, extra: 70,  days: 18, dayPer: 1.5 },
    app:       { name: "Мобільний застосунок",   nameEn: "Mobile app",         nameRu: "Мобильное приложение", namePl: "Aplikacja mobilna", nameDe: "Mobile App", nameLt: "Mobilioji programėlė", unitRu: "экранов", unitPl: "ekranów", unitDe: "Screens", unitLt: "ekranai",
                 base: 300, unit: "екранів",  unitEn: "screens",  included: 8, min: 4, max: 60, extra: 30,  days: 12, dayPer: 0.7 },
    redesign:  { name: "Редизайн",               nameEn: "Redesign",           nameRu: "Редизайн", namePl: "Redesign", nameDe: "Redesign", nameLt: "Redizainas", unitRu: "страниц", unitPl: "stron", unitDe: "Seiten", unitLt: "puslapiai",
                 base: 150, unit: "сторінок", unitEn: "pages", included: 1, min: 1, max: 20, extra: 100, days: 5,  dayPer: 2 },
    audit:     { name: "UX/UI-аудит",            nameEn: "UX/UI audit",        nameRu: "UX/UI-аудит", namePl: "Audyt UX/UI", nameDe: "UX/UI-Audit", nameLt: "UX/UI auditas", unitRu: "страниц / экранов", unitPl: "stron / ekranów", unitDe: "Seiten / Screens", unitLt: "puslapiai / ekranai",
                 base: 50,  unit: "сторінок / екранів", unitEn: "pages / screens", included: 3, min: 1, max: 30, extra: 15, days: 2, dayPer: 0.3 }
  },

  /* ---- Додаткові опції ----
     type "fixed" — фіксована сума, "percent" — відсоток від суми за дизайн */
  options: {
    tablet:  { name: "Адаптив для планшета",                   nameEn: "Tablet version", nameRu: "Адаптив для планшета", namePl: "Wersja na tablet", nameDe: "Tablet-Version", nameLt: "Planšetės versija", type: "percent", value: 15 },
    proto:   { name: "Інтерактивний клікабельний прототип",    nameEn: "Interactive clickable prototype", nameRu: "Интерактивный кликабельный прототип", namePl: "Interaktywny klikalny prototyp", nameDe: "Interaktiver klickbarer Prototyp", nameLt: "Interaktyvus spustelėjamas prototipas", type: "fixed",   value: 50 },
    uikit:   { name: "UI-kit: компоненти, стилі та стани",     nameEn: "UI kit: components, styles and states", nameRu: "UI-kit: компоненты, стили и состояния", namePl: "UI kit: komponenty, style i stany", nameDe: "UI-Kit: Komponenten, Stile und Zustände", nameLt: "UI rinkinys: komponentai, stiliai ir būsenos", type: "fixed",   value: 80 },
    icons:   { name: "Іконки та ілюстрації під стиль проєкту", nameEn: "Icons and illustrations in the project style", nameRu: "Иконки и иллюстрации в стиле проекта", namePl: "Ikony i ilustracje w stylu projektu", nameDe: "Icons und Illustrationen im Projektstil", nameLt: "Piktogramos ir iliustracijos projekto stiliumi", type: "fixed",   value: 60 },
    content: { name: "Допомога зі структурою текстів",         nameEn: "Help with text structure", nameRu: "Помощь со структурой текстов", namePl: "Pomoc w strukturze tekstów", nameDe: "Hilfe bei der Textstruktur", nameLt: "Pagalba su tekstų struktūra", type: "fixed",   value: 40 }
  },

  /* У базову ціну входять прототип, макети та два раунди правок. */

  /* ---- Терміновість ---- */
  urgency: {
    normal: { name: "Звичайний термін", nameEn: "Standard timeline", nameRu: "Обычный срок", namePl: "Standardowy termin", nameDe: "Standard-Zeitrahmen", nameLt: "Įprastas terminas", factor: 1,   dayFactor: 1 },
    fast:   { name: "Терміново",        nameEn: "Urgent",            nameRu: "Срочно", namePl: "Pilnie", nameDe: "Express", nameLt: "Skubiai", factor: 1.3, dayFactor: 0.65 }
  }
};
