/* =========================================================
   YUROCHKINA — скрипти сайту
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.VEEXY_CONFIG || window.YUROCHKINA_CONFIG || {};   // назва змінної в config.js
  var CUR = CFG.currency || "$";
  document.documentElement.classList.add("js");

  /* ---------- Мова сторінки: беремо з <html lang="..."> ----------
     uk — українська (за замовчуванням), en, ru, pl, de, lt */
  var LANG = (document.documentElement.lang || "uk").toLowerCase().slice(0, 2);
  var EN = LANG === "en";
  var TEXTS = {
    uk: {
      menuOpen: "Відкрити меню", menuClose: "Закрити меню", from: "від ",
      count: "Кількість ", hint: function (n, u, x) { return "У ціну «від» входить " + n + " " + u + ". Кожна додаткова одиниця — +" + x + "."; },
      extra: "Додатково: ", term: "Орієнтовний термін: ", days: " робочих днів", noOpts: "без додаткових опцій",
      errFill: "Будь ласка, вкажіть ім'я та контакт для зв'язку.",
      mailTitle: "Нове замовлення з сайту YUROCHKINA", lName: "Ім'я: ", lContact: "Контакт: ", lService: "Послуга: ",
      lScope: "Обсяг: ", lOptions: "Опції: ", lUrgency: "Терміновість: ", lCost: "Орієнтовна вартість: ", lTerm: "Орієнтовний термін: ",
      lBudget: "Бюджет: ", lMsg: "Повідомлення:", subject: "Замовлення дизайну — ",
      okTitle: "Дякую! Заявку надіслано 💜", okText: "Я відповім протягом одного робочого дня.",
      failTitle: "Не вдалося надіслати", failText: "Напишіть, будь ласка, напряму: ",
      readyTitle: "Заявку сформовано ✨", readyText: "Надішліть її зручним способом — текст уже готовий:",
      sendEmail: "Надіслати на email ↗", copy: "Скопіювати текст", copied: "Скопійовано ✓", openTg: "Відкрити Telegram ↗", copyPrompt: "Скопіюйте текст:"
    },
    en: {
      menuOpen: "Open menu", menuClose: "Close menu", from: "from ",
      count: "Number of ", hint: function (n, u, x) { return "The starting price includes " + n + " " + u + ". Each extra one is +" + x + "."; },
      extra: "Extra: ", term: "Estimated timeline: ", days: " business days", noOpts: "no extra options",
      errFill: "Please enter your name and how to contact you.",
      mailTitle: "New request from the YUROCHKINA website", lName: "Name: ", lContact: "Contact: ", lService: "Service: ",
      lScope: "Scope: ", lOptions: "Options: ", lUrgency: "Timeline: ", lCost: "Estimated cost: ", lTerm: "Estimated timeline: ",
      lBudget: "Budget: ", lMsg: "Message:", subject: "Design request — ",
      okTitle: "Thank you! Your request has been sent 💜", okText: "I'll reply within one business day.",
      failTitle: "Couldn't send the request", failText: "Please write to me directly: ",
      readyTitle: "Your request is ready ✨", readyText: "Send it the way that suits you — the text is already prepared:",
      sendEmail: "Send by email ↗", copy: "Copy text", copied: "Copied ✓", openTg: "Open Telegram ↗", copyPrompt: "Copy the text:"
    },
    ru: {
      menuOpen: "Открыть меню", menuClose: "Закрыть меню", from: "от ",
      count: "Количество ", hint: function (n, u, x) { return "В цену «от» входит " + u + ": " + n + ". Каждая дополнительная единица — +" + x + "."; },
      extra: "Дополнительно: ", term: "Ориентировочный срок: ", days: " рабочих дней", noOpts: "без дополнительных опций",
      errFill: "Пожалуйста, укажите имя и контакт для связи.",
      mailTitle: "Новый заказ с сайта YUROCHKINA", lName: "Имя: ", lContact: "Контакт: ", lService: "Услуга: ",
      lScope: "Объём: ", lOptions: "Опции: ", lUrgency: "Срочность: ", lCost: "Ориентировочная стоимость: ", lTerm: "Ориентировочный срок: ",
      lBudget: "Бюджет: ", lMsg: "Сообщение:", subject: "Заказ дизайна — ",
      okTitle: "Спасибо! Заявка отправлена 💜", okText: "Я отвечу в течение одного рабочего дня.",
      failTitle: "Не удалось отправить", failText: "Пожалуйста, напишите мне напрямую: ",
      readyTitle: "Заявка готова ✨", readyText: "Отправьте её удобным способом — текст уже готов:",
      sendEmail: "Отправить на email ↗", copy: "Скопировать текст", copied: "Скопировано ✓", openTg: "Открыть Telegram ↗", copyPrompt: "Скопируйте текст:"
    },
    pl: {
      menuOpen: "Otwórz menu", menuClose: "Zamknij menu", from: "od ",
      count: "Liczba ", hint: function (n, u, x) { return "W cenie „od”: " + u + " — " + n + ". Każda dodatkowa jednostka to +" + x + "."; },
      extra: "Dodatkowo: ", term: "Orientacyjny termin: ", days: " dni roboczych", noOpts: "bez dodatkowych opcji",
      errFill: "Podaj, proszę, imię i kontakt.",
      mailTitle: "Nowe zapytanie ze strony YUROCHKINA", lName: "Imię: ", lContact: "Kontakt: ", lService: "Usługa: ",
      lScope: "Zakres: ", lOptions: "Opcje: ", lUrgency: "Termin: ", lCost: "Orientacyjny koszt: ", lTerm: "Orientacyjny termin: ",
      lBudget: "Budżet: ", lMsg: "Wiadomość:", subject: "Zapytanie o projekt — ",
      okTitle: "Dziękuję! Zapytanie zostało wysłane 💜", okText: "Odpowiem w ciągu jednego dnia roboczego.",
      failTitle: "Nie udało się wysłać", failText: "Napisz do mnie bezpośrednio: ",
      readyTitle: "Zapytanie jest gotowe ✨", readyText: "Wyślij je w wygodny sposób — tekst jest już przygotowany:",
      sendEmail: "Wyślij e-mailem ↗", copy: "Skopiuj tekst", copied: "Skopiowano ✓", openTg: "Otwórz Telegram ↗", copyPrompt: "Skopiuj tekst:"
    },
    de: {
      menuOpen: "Menü öffnen", menuClose: "Menü schließen", from: "ab ",
      count: "Anzahl ", hint: function (n, u, x) { return "Im Ab-Preis enthalten: " + n + " " + u + ". Jede weitere Einheit kostet +" + x + "."; },
      extra: "Zusätzlich: ", term: "Voraussichtliche Dauer: ", days: " Werktage", noOpts: "ohne Zusatzoptionen",
      errFill: "Bitte geben Sie Ihren Namen und eine Kontaktmöglichkeit an.",
      mailTitle: "Neue Anfrage über die YUROCHKINA-Website", lName: "Name: ", lContact: "Kontakt: ", lService: "Leistung: ",
      lScope: "Umfang: ", lOptions: "Optionen: ", lUrgency: "Zeitrahmen: ", lCost: "Geschätzte Kosten: ", lTerm: "Voraussichtliche Dauer: ",
      lBudget: "Budget: ", lMsg: "Nachricht:", subject: "Designanfrage — ",
      okTitle: "Danke! Ihre Anfrage wurde gesendet 💜", okText: "Ich antworte innerhalb eines Werktags.",
      failTitle: "Senden fehlgeschlagen", failText: "Bitte schreiben Sie mir direkt: ",
      readyTitle: "Ihre Anfrage ist fertig ✨", readyText: "Senden Sie sie auf dem für Sie bequemsten Weg — der Text ist schon vorbereitet:",
      sendEmail: "Per E-Mail senden ↗", copy: "Text kopieren", copied: "Kopiert ✓", openTg: "Telegram öffnen ↗", copyPrompt: "Text kopieren:"
    },
    lt: {
      menuOpen: "Atidaryti meniu", menuClose: "Uždaryti meniu", from: "nuo ",
      count: "Kiekis: ", hint: function (n, u, x) { return "Į pradinę kainą įeina: " + u + " — " + n + ". Kiekvienas papildomas vienetas — +" + x + "."; },
      extra: "Papildomai: ", term: "Preliminarus terminas: ", days: " darbo dienų", noOpts: "be papildomų parinkčių",
      errFill: "Nurodykite savo vardą ir kontaktą.",
      mailTitle: "Nauja užklausa iš YUROCHKINA svetainės", lName: "Vardas: ", lContact: "Kontaktas: ", lService: "Paslauga: ",
      lScope: "Apimtis: ", lOptions: "Parinktys: ", lUrgency: "Terminas: ", lCost: "Preliminari kaina: ", lTerm: "Preliminarus terminas: ",
      lBudget: "Biudžetas: ", lMsg: "Žinutė:", subject: "Dizaino užklausa — ",
      okTitle: "Ačiū! Užklausa išsiųsta 💜", okText: "Atsakysiu per vieną darbo dieną.",
      failTitle: "Nepavyko išsiųsti", failText: "Parašykite man tiesiogiai: ",
      readyTitle: "Užklausa paruošta ✨", readyText: "Išsiųskite ją patogiu būdu — tekstas jau paruoštas:",
      sendEmail: "Siųsti el. paštu ↗", copy: "Kopijuoti tekstą", copied: "Nukopijuota ✓", openTg: "Atidaryti Telegram ↗", copyPrompt: "Nukopijuokite tekstą:"
    }
  };
  var T = TEXTS[LANG] || TEXTS.uk;
  var LOCALE = { uk: "uk-UA", en: "en-US", ru: "ru-RU", pl: "pl-PL", de: "de-DE", lt: "lt-LT" }[LANG] || "uk-UA";
  /* назва / одиниця послуги потрібною мовою: у config.js поля nameEn, nameRu, namePl, nameDe, nameLt (unitEn, unitRu…) */
  var SUF = LANG === "uk" ? "" : LANG.charAt(0).toUpperCase() + LANG.slice(1);
  function nm(o) { return (SUF && (o["name" + SUF] || o.nameEn)) || o.name; }
  function un(o) { return (SUF && (o["unit" + SUF] || o.unitEn)) || o.unit; }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function money(n) {
    var num = Math.round(n).toLocaleString(LOCALE).replace(/\s/g, " ");
    return CUR === "$" ? "$" + num : num + " " + CUR;
  }

  /* ---------- Бургер-меню ---------- */
  var burger = $(".burger");
  var menu = $("#mobile-menu");
  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? T.menuClose : T.menuOpen);
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 960) setMenu(false); });
  }

  /* ---------- Надувні літери: кожна літера — окрема кулька ---------- */
  $$(".balloon").forEach(function (title) {
    var i = 0;
    $$(".balloon__line", title).forEach(function (line) {
      var words = line.textContent.trim().split(/\s+/);
      line.textContent = "";
      words.forEach(function (word, w) {
        var wordEl = document.createElement("span");
        wordEl.className = "balloon__word";
        Array.from(word).forEach(function (ch) {
          var c = document.createElement("span");
          c.className = "balloon__char";
          c.style.setProperty("--i", i++);
          c.textContent = ch;
          c.setAttribute("data-ch", ch);
          wordEl.appendChild(c);
        });
        line.appendChild(wordEl);
        if (w < words.length - 1) {
          var sp = document.createElement("span");
          sp.className = "balloon__space";
          sp.textContent = " ";
          line.appendChild(sp);
        }
      });
    });
    title.classList.add("is-split");
  });

  /* ---------- Контакти, соцмережі та ціни з config.js ---------- */
  var L = CFG.links || {};
  var contactLinks = {
    email: CFG.email ? "mailto:" + CFG.email : "",
    telegram: CFG.telegram ? "https://t.me/" + CFG.telegram : "",
    whatsapp: CFG.whatsapp ? "https://wa.me/" + CFG.whatsapp : "",
    viber: CFG.viber ? "viber://chat?number=%2B" + CFG.viber : ""
  };
  var contactText = {
    email: CFG.email,
    telegram: CFG.telegram ? "@" + CFG.telegram : "",
    whatsapp: CFG.whatsappLabel || (CFG.whatsapp ? "+" + CFG.whatsapp : ""),
    viber: CFG.viberLabel || (CFG.viber ? "+" + CFG.viber : "")
  };
  $$("[data-link]").forEach(function (a) {
    var key = a.getAttribute("data-link");
    var href = contactLinks[key] || L[key];
    if (href) a.setAttribute("href", href);
  });
  $$("[data-text]").forEach(function (el) {
    var t = contactText[el.getAttribute("data-text")];
    if (t) el.textContent = t;
  });
  $$("[data-behance-case]").forEach(function (a) {
    var href = (CFG.behanceCases || {})[a.getAttribute("data-behance-case")];
    if (href) a.setAttribute("href", href);
  });
  $$("[data-price]").forEach(function (el) {
    var s = (CFG.services || {})[el.getAttribute("data-price")];
    if (s) el.textContent = T.from + money(s.base);
  });
  $$("[data-price-num]").forEach(function (el) {
    var s = (CFG.services || {})[el.getAttribute("data-price-num")];
    if (s) el.textContent = money(s.base);
  });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Заглушки для картинок, яких ще немає ---------- */
  $$("img[data-placeholder]").forEach(function (img) {
    function swap() {
      var box = document.createElement("div");
      box.className = "img-placeholder";
      box.textContent = img.getAttribute("data-placeholder");
      img.replaceWith(box);
    }
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap);
  });

  /* ---------- Поява блоків при прокручуванні ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Фільтр портфоліо ---------- */
  var filterBtns = $$("[data-filter]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      $$(".work[data-category]").forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-category").split(" ").indexOf(f) !== -1;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- Калькулятор вартості ---------- */
  var calc = $("#calc");
  var calcState = null;

  if (calc && CFG.services) {
    var servicesBox = $("#calc-services", calc);
    var optionsBox = $("#calc-options", calc);
    var range = $("#calc-units", calc);
    var rangeOut = $("#calc-units-out", calc);
    var unitLabel = $("#calc-unit-label", calc);
    var unitHint = $("#calc-unit-hint", calc);

    var params = new URLSearchParams(window.location.search);
    var startService = CFG.services[params.get("service")] ? params.get("service") : "landing";

    Object.keys(CFG.services).forEach(function (key) {
      var s = CFG.services[key];
      var label = document.createElement("label");
      label.className = "choice";
      label.innerHTML =
        '<input type="radio" name="service" value="' + key + '"' + (key === startService ? " checked" : "") + ">" +
        "<span>" + nm(s) + "<small>" + T.from + money(s.base) + "</small></span>";
      servicesBox.appendChild(label);
    });

    Object.keys(CFG.options || {}).forEach(function (key) {
      var o = CFG.options[key];
      var label = document.createElement("label");
      label.className = "check";
      label.innerHTML =
        '<input type="checkbox" name="opt" value="' + key + '">' +
        "<span>" + nm(o) + "</span>" +
        "<em>" + (o.type === "percent" ? "+" + o.value + "%" : "+" + money(o.value)) + "</em>";
      optionsBox.appendChild(label);
    });

    function currentService() {
      var r = $('input[name="service"]:checked', calc);
      return r ? r.value : "landing";
    }

    function syncRange(reset) {
      var s = CFG.services[currentService()];
      range.min = s.min;
      range.max = s.max;
      if (reset) range.value = s.included;
      unitLabel.textContent = T.count + un(s);
      unitHint.textContent = T.hint(s.included, un(s), money(s.extra));
    }

    function compute() {
      var key = currentService();
      var s = CFG.services[key];
      var units = parseInt(range.value, 10);
      var extraUnits = Math.max(0, units - s.included);
      var design = s.base + extraUnits * s.extra;
      var rows = [[nm(s) + " (" + Math.min(units, s.included) + " " + un(s) + ")", s.base]];
      if (extraUnits) rows.push([T.extra + extraUnits + " × " + money(s.extra), extraUnits * s.extra]);

      var optSum = 0;
      var chosenOpts = [];
      $$('input[name="opt"]:checked', calc).forEach(function (cb) {
        var o = CFG.options[cb.value];
        var v = o.type === "percent" ? design * o.value / 100 : o.value;
        optSum += v;
        chosenOpts.push(nm(o));
        rows.push([nm(o), v]);
      });

      var urgKey = ($('input[name="urgency"]:checked', calc) || {}).value || "normal";
      var urg = CFG.urgency[urgKey];
      var subtotal = design + optSum;
      var total = subtotal * urg.factor;
      if (urg.factor !== 1) rows.push([nm(urg) + " (×" + urg.factor + ")", total - subtotal]);

      var days = Math.ceil((s.days + extraUnits * s.dayPer) * urg.dayFactor);

      $("#calc-rows").innerHTML = rows.map(function (r) {
        return "<li><span>" + r[0] + "</span><span>" + money(r[1]) + "</span></li>";
      }).join("");
      $("#calc-total").textContent = "≈ " + money(total);
      $("#calc-days").textContent = T.term + days + "–" + Math.ceil(days * 1.3) + T.days;
      rangeOut.textContent = units;

      calcState = {
        service: nm(s),
        units: units + " " + un(s),
        options: chosenOpts.length ? chosenOpts.join(", ") : T.noOpts,
        urgency: nm(urg),
        total: money(total),
        days: days + "–" + Math.ceil(days * 1.3) + T.days
      };
    }

    // Терміновість
    var urgBox = $("#calc-urgency", calc);
    Object.keys(CFG.urgency).forEach(function (key, idx) {
      var u = CFG.urgency[key];
      var label = document.createElement("label");
      label.className = "check";
      label.innerHTML = '<input type="radio" name="urgency" value="' + key + '"' + (idx === 0 ? " checked" : "") + ">" +
        "<span>" + nm(u) + "</span><em>" + (u.factor === 1 ? "" : "+" + Math.round((u.factor - 1) * 100) + "%") + "</em>";
      urgBox.appendChild(label);
    });

    calc.addEventListener("change", function (e) {
      if (e.target.name === "service") syncRange(true);
      compute();
    });
    range.addEventListener("input", compute);
    syncRange(true);
    compute();
  }

  /* ---------- Форми замовлення ---------- */
  $$("form.order-form").forEach(function (form) {
    var status = $(".form-status", form.parentNode);

    // попередній вибір послуги з адреси ?service=...
    var sel = $('select[name="service"]', form);
    var p = new URLSearchParams(window.location.search).get("service");
    if (sel && p && CFG.services && CFG.services[p]) sel.value = nm(CFG.services[p]);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = $(".error", form);
      var name = form.elements.name.value.trim();
      var contact = form.elements.contact.value.trim();
      if (!name || !contact) {
        err.textContent = T.errFill;
        (name ? form.elements.contact : form.elements.name).focus();
        return;
      }
      err.textContent = "";

      var lines = [
        T.mailTitle,
        "",
        T.lName + name,
        T.lContact + contact
      ];
      if (form.elements.service) lines.push(T.lService + form.elements.service.value);
      if (form.hasAttribute("data-with-calc") && calcState) {
        lines.push(T.lService + calcState.service);
        lines.push(T.lScope + calcState.units);
        lines.push(T.lOptions + calcState.options);
        lines.push(T.lUrgency + calcState.urgency);
        lines.push(T.lCost + calcState.total);
        lines.push(T.lTerm + calcState.days);
      }
      if (form.elements.budget && form.elements.budget.value) lines.push(T.lBudget + form.elements.budget.value);
      var msg = form.elements.message.value.trim();
      if (msg) lines.push("", T.lMsg, msg);
      var text = lines.join("\n");
      var subject = T.subject + name;

      function showStatus(html) {
        status.innerHTML = html;
        status.classList.add("is-visible");
        status.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (CFG.formEndpoint) {
        var btn = $('button[type="submit"]', form);
        btn.disabled = true;
        fetch(CFG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ name: name, contact: contact, _subject: subject, message: text })
        }).then(function (r) {
          if (!r.ok) throw new Error();
          form.reset();
          showStatus("<h3>" + T.okTitle + "</h3><p>" + T.okText + "</p>");
        }).catch(function () {
          showStatus("<h3>" + T.failTitle + "</h3><p>" + T.failText + "<a class='work__link' href='mailto:" + CFG.email + "'>" + CFG.email + "</a></p>");
        }).finally(function () { btn.disabled = false; });
        return;
      }

      // Без сервера — відкриваємо пошту з готовим листом + пропонуємо Telegram
      var mailto = "mailto:" + CFG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
      showStatus(
        "<h3>" + T.readyTitle + "</h3>" +
        "<p>" + T.readyText + "</p>" +
        "<div class='btn-row'>" +
        "<a class='btn btn--pink btn--sm' href='" + mailto + "'>" + T.sendEmail + "</a>" +
        "<button type='button' class='btn btn--glass btn--sm' data-copy>" + T.copy + "</button>" +
        (CFG.telegram ? "<a class='btn btn--glass btn--sm' target='_blank' rel='noopener' href='https://t.me/" + CFG.telegram + "'>" + T.openTg + "</a>" : "") +
        "</div>"
      );
      var copyBtn = $("[data-copy]", status);
      copyBtn.addEventListener("click", function () {
        var done = function () { copyBtn.textContent = T.copied; };
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { window.prompt(T.copyPrompt, text); });
        else window.prompt(T.copyPrompt, text);
      });
      window.location.href = mailto;
    });
  });

  /* ---------- Перемикач мови (випадаюче меню) ---------- */
  $$(".lang-menu").forEach(function (box) {
    document.addEventListener("click", function (e) { if (!box.contains(e.target)) box.removeAttribute("open"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.removeAttribute("open"); });
  });

  /* ---------- Картинки кейсів потрібною мовою ----------
     Якщо мова сторінки не українська, сайт шукає картинку в підпапці мови:
     images/projects/delintra/01.jpg  →  images/projects/delintra/en/01.jpg (de/, pl/, ru/, lt/)
     Є такий файл — показує його. Немає — залишається українська картинка. */
  if (LANG !== "uk") {
    $$('img[src*="images/projects/"]').forEach(function (img) {
      var src = img.getAttribute("src");
      var m = src.match(/^(.*images\/projects\/[^\/]+\/)([^\/]+)$/);
      if (!m) return;
      var localized = m[1] + LANG + "/" + m[2];
      var probe = new Image();
      probe.onload = function () { img.setAttribute("src", localized); };
      probe.src = localized;
    });
  }

  /* ---------- Заголовок-кульки на інших мовах ----------
     На сторінці мови <h1 data-hero-img="../images/hero-title-de">.
     Сайт шукає hero-title-de.webp, потім hero-title-de.png.
     Знайшов — показує картинку (текст лишається для Google і читалок екрана). Не знайшов — звичайний текст. */
  $$("h1[data-hero-img]").forEach(function (h1) {
    var base = h1.getAttribute("data-hero-img");
    var text = h1.textContent.trim();
    var tries = [base + ".webp", base + ".png"];
    var done = false;
    function show() { h1.classList.add("is-ready"); }
    setTimeout(show, 1500);                       // якщо щось довго вантажиться — покажемо текст
    function next(i) {
      if (i >= tries.length) { show(); return; }
      var probe = new Image();
      probe.onload = function () {
        if (done) return; done = true;
        h1.classList.remove("hero-title--text");
        h1.innerHTML = "";
        var sr = document.createElement("span"); sr.className = "visually-hidden"; sr.textContent = text;
        var img = document.createElement("img");
        img.src = tries[i]; img.alt = ""; img.width = probe.naturalWidth; img.height = probe.naturalHeight;
        h1.appendChild(sr); h1.appendChild(img);
        show();
      };
      probe.onerror = function () { next(i + 1); };
      probe.src = tries[i];
    }
    next(0);
  });
})();
