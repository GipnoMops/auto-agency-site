const EMAIL = "autoagency.pl@gmail.com";
const WHATSAPP = "48451675575";

const translations = {
    pl: {
        navWhy: "Dlaczego my",
        navConfigurator: "Skonfiguruj auto",
        navContact: "Kontakt",
        heroTitle: "Import samochodów z USA",
        heroText: "Pomagamy znaleźć i dostarczyć Twój wymarzony samochód",
        heroButton: "Skonfiguruj swój samochód",
        about: "Kompleksowa obsługa importu samochodów. Wybór, transport, dokumenty i dostawa pod dom klienta.",
        whyTitle: "Dlaczego Auto Agency?",
        why1Title: "Wybieramy samochód, który chcesz",
        why1Text: "Określasz wymagania i budżet pojazdu — znajdziemy odpowiedni samochód zgodnie z Twoimi oczekiwaniami.",
        why2Title: "Podpisujemy umowę, depozyt",
        why2Text: "Zawieramy umowę na wyszukanie i zakup samochodu. Depozyt jest zwracany w całości, jeśli samochód nie zostanie zakupiony.",
        why3Title: "Transportujemy Twój samochód",
        why3Text: "Organizujemy dostawę samochodu do Polski. Samochód jest ubezpieczony podczas transportu.",
        why4Title: "Odbierasz samochód i dokumenty",
        why4Text: "Gdy wszystkie dokumenty będą gotowe, odbierzesz samochód albo dostarczymy go pod Twój dom.",
        why5Title: "Eksport",
        why5Text: "Zapewniamy pełen zakres usług związanych z organizacją eksportu samochodów poza UE.",
        configEyebrow: "DOBÓR SAMOCHODU",
        configTitle: "Skonfiguruj swoje auto",
        configIntro: "Podaj swoje wymagania, a my znajdziemy samochód odpowiadający Twoim oczekiwaniom.",
        brand: "Marka",
        model: "Model",
        year: "Rok produkcji",
        mileage: "Przebieg maksymalny",
        transmission: "Skrzynia biegów",
        fuel: "Rodzaj paliwa",
        body: "Nadwozie",
        budget: "Budżet",
        name: "Imię",
        phone: "Numer telefonu",
        email: "Adres e-mail",
        requirements: "Dodatkowe wymagania",
        choose: "Wybierz",
        other: "Inna",
        noPreference: "Bez znaczenia",
        manual: "Manualna",
        automatic: "Automatyczna",
        petrol: "Benzyna",
        diesel: "Diesel",
        hybrid: "Hybryda",
        electric: "Elektryczny",
        wagon: "Kombi",
        convertible: "Kabriolet",
        budgetAny: "Bez określonego limitu",
        modelPlaceholder: "np. X5, Mustang, Model Y",
        namePlaceholder: "Twoje imię",
        requirementsPlaceholder: "Kolor, napęd, wyposażenie, preferowany rynek zakupu itd.",
        privacy: "Podając dane kontaktowe, zgadzasz się na kontakt w sprawie zapytania.",
        sendEmail: "Wyślij e-mail",
        contactTitle: "Napisz do nas!",
        contactSubtitle: "I weź swój samochód!",
        yearPlaceholder: "Rok",
        formSuccessEmail: "Otwieramy program pocztowy z przygotowaną wiadomością.",
        formSuccessWhatsApp: "Otwieramy WhatsApp z przygotowaną wiadomością.",
        formErrorContact: "Podaj przynajmniej numer telefonu lub adres e-mail.",
        emailSubject: "Zapytanie o samochód — Auto Agency"
    },
    en: {
        navWhy: "Why us",
        navConfigurator: "Configure your car",
        navContact: "Contact",
        heroTitle: "Car import from the USA",
        heroText: "We help you find and deliver your dream car",
        heroButton: "Configure your car",
        about: "Comprehensive car import service. Selection, transport, documents and delivery to your door.",
        whyTitle: "Why Auto Agency?",
        why1Title: "We find the car you want",
        why1Text: "Tell us your requirements and budget — we will find a vehicle that matches your expectations.",
        why2Title: "We sign the agreement",
        why2Text: "We sign an agreement for searching and purchasing the car. The deposit is fully refundable if the car is not purchased.",
        why3Title: "We transport your car",
        why3Text: "We organize delivery of your car to Poland. The vehicle is insured during transport.",
        why4Title: "You receive the car and documents",
        why4Text: "Once all documents are ready, you can collect the car or we can deliver it to your home.",
        why5Title: "Export",
        why5Text: "We provide a full range of services for organizing vehicle exports outside the EU.",
        configEyebrow: "CAR SELECTION",
        configTitle: "Configure your car",
        configIntro: "Tell us what you are looking for and we will find a car that matches your requirements.",
        brand: "Make",
        model: "Model",
        year: "Production year",
        mileage: "Maximum mileage",
        transmission: "Transmission",
        fuel: "Fuel type",
        body: "Body type",
        budget: "Budget",
        name: "Name",
        phone: "Phone number",
        email: "Email address",
        requirements: "Additional requirements",
        choose: "Choose",
        other: "Other",
        noPreference: "No preference",
        manual: "Manual",
        automatic: "Automatic",
        petrol: "Petrol",
        diesel: "Diesel",
        hybrid: "Hybrid",
        electric: "Electric",
        wagon: "Wagon",
        convertible: "Convertible",
        budgetAny: "No specific limit",
        modelPlaceholder: "e.g. X5, Mustang, Model Y",
        namePlaceholder: "Your name",
        requirementsPlaceholder: "Colour, drivetrain, equipment, preferred market, etc.",
        privacy: "By providing your contact details, you agree to be contacted regarding your enquiry.",
        sendEmail: "Send by email",
        contactTitle: "Contact us!",
        contactSubtitle: "And get your car!",
        yearPlaceholder: "Year",
        formSuccessEmail: "Opening your email application with a prepared message.",
        formSuccessWhatsApp: "Opening WhatsApp with a prepared message.",
        formErrorContact: "Please provide at least a phone number or email address.",
        emailSubject: "Car enquiry — Auto Agency"
    },
    ru: {
        navWhy: "Почему мы",
        navConfigurator: "Подобрать авто",
        navContact: "Контакты",
        heroTitle: "Импорт автомобилей из США",
        heroText: "Поможем найти и доставить автомобиль вашей мечты",
        heroButton: "Подобрать автомобиль",
        about: "Полное сопровождение импорта автомобилей: подбор, транспортировка, документы и доставка до дома клиента.",
        whyTitle: "Почему Auto Agency?",
        why1Title: "Находим нужный вам автомобиль",
        why1Text: "Вы указываете требования и бюджет — мы найдём подходящий автомобиль в соответствии с вашими пожеланиями.",
        why2Title: "Заключаем договор",
        why2Text: "Заключаем договор на поиск и покупку автомобиля. Депозит полностью возвращается, если автомобиль не был приобретён.",
        why3Title: "Организуем перевозку",
        why3Text: "Организуем доставку автомобиля в Польшу. Автомобиль застрахован на время перевозки.",
        why4Title: "Вы получаете автомобиль и документы",
        why4Text: "После подготовки всех документов вы забираете автомобиль сами или мы доставляем его прямо к вам.",
        why5Title: "Экспорт",
        why5Text: "Предоставляем полный комплекс услуг по организации экспорта автомобилей за пределы ЕС.",
        configEyebrow: "ПОДБОР АВТОМОБИЛЯ",
        configTitle: "Подберите свой автомобиль",
        configIntro: "Укажите ваши требования, а мы найдём автомобиль, который им соответствует.",
        brand: "Марка",
        model: "Модель",
        year: "Год выпуска",
        mileage: "Максимальный пробег",
        transmission: "Коробка передач",
        fuel: "Тип топлива",
        body: "Тип кузова",
        budget: "Бюджет",
        name: "Имя",
        phone: "Номер телефона",
        email: "E-mail",
        requirements: "Дополнительные требования",
        choose: "Выберите",
        other: "Другая",
        noPreference: "Без разницы",
        manual: "Механика",
        automatic: "Автомат",
        petrol: "Бензин",
        diesel: "Дизель",
        hybrid: "Гибрид",
        electric: "Электро",
        wagon: "Универсал",
        convertible: "Кабриолет",
        budgetAny: "Без конкретного лимита",
        modelPlaceholder: "например X5, Mustang, Model Y",
        namePlaceholder: "Ваше имя",
        requirementsPlaceholder: "Цвет, привод, комплектация, предпочтительный рынок покупки и т.д.",
        privacy: "Указывая контактные данные, вы соглашаетесь на связь по вашему запросу.",
        sendEmail: "Отправить на e-mail",
        contactTitle: "Напишите нам!",
        contactSubtitle: "И получите свой автомобиль!",
        yearPlaceholder: "Год",
        formSuccessEmail: "Открываем почтовую программу с подготовленным сообщением.",
        formSuccessWhatsApp: "Открываем WhatsApp с подготовленным сообщением.",
        formErrorContact: "Укажите хотя бы номер телефона или e-mail.",
        emailSubject: "Запрос на автомобиль — Auto Agency"
    }
};

let currentLang = localStorage.getItem("autoAgencyLanguage") || "pl";

function t(key) {
    return translations[currentLang][key] || translations.pl[key] || key;
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem("autoAgencyLanguage", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach(element => {
        const key = element.dataset.placeholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });
}

function fillYears() {
    const from = document.getElementById("yearFrom");
    const to = document.getElementById("yearTo");
    const currentYear = new Date().getFullYear();

    from.innerHTML = `<option value="">${t("yearPlaceholder")}</option>`;
    to.innerHTML = `<option value="">${t("yearPlaceholder")}</option>`;

    for (let year = currentYear; year >= 2000; year--) {
        from.insertAdjacentHTML("beforeend", `<option value="${year}">${year}</option>`);
        to.insertAdjacentHTML("beforeend", `<option value="${year}">${year}</option>`);
    }
}

function selectedValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : "";
}

function displayValue(value) {
    if (!value) return t("noPreference");

    const map = {
        Manual: t("manual"),
        Automatic: t("automatic"),
        Any: t("noPreference"),
        Petrol: t("petrol"),
        Diesel: t("diesel"),
        Hybrid: t("hybrid"),
        Electric: t("electric"),
        Wagon: t("wagon"),
        Convertible: t("convertible")
    };

    return map[value] || value;
}

function getFormData() {
    return {
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value.trim(),
        yearFrom: document.getElementById("yearFrom").value,
        yearTo: document.getElementById("yearTo").value,
        mileage: document.getElementById("mileage").value,
        transmission: displayValue(selectedValue("transmission")),
        fuel: displayValue(selectedValue("fuel")),
        body: displayValue(selectedValue("body")),
        budget: document.getElementById("budget").value,
        name: document.getElementById("contactName").value.trim(),
        phone: document.getElementById("contactPhone").value.trim(),
        email: document.getElementById("contactEmail").value.trim(),
        requirements: document.getElementById("requirements").value.trim()
    };
}

function buildMessage(data) {
    const year = data.yearFrom || data.yearTo
        ? `${data.yearFrom || "?"} — ${data.yearTo || "?"}`
        : t("noPreference");

    const mileage = data.mileage
        ? `${Number(data.mileage).toLocaleString("pl-PL")} km`
        : t("noPreference");

    return [
        "AUTO AGENCY — zapytanie / enquiry",
        "",
        `${t("brand")}: ${data.brand || t("noPreference")}`,
        `${t("model")}: ${data.model || t("noPreference")}`,
        `${t("year")}: ${year}`,
        `${t("mileage")}: ${mileage}`,
        `${t("transmission")}: ${data.transmission}`,
        `${t("fuel")}: ${data.fuel}`,
        `${t("body")}: ${data.body}`,
        `${t("budget")}: ${data.budget || t("budgetAny")}`,
        "",
        `${t("name")}: ${data.name || "-"}`,
        `${t("phone")}: ${data.phone || "-"}`,
        `${t("email")}: ${data.email || "-"}`,
        "",
        `${t("requirements")}:`,
        data.requirements || "-"
    ].join("\n");
}

function validateContact(data) {
    return data.phone || data.email;
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    fillYears();

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
            fillYears();
        });
    });

    const form = document.getElementById("carForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const data = getFormData();

        if (!validateContact(data)) {
            message.textContent = t("formErrorContact");
            return;
        }

        const body = buildMessage(data);
        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(body)}`;

        message.textContent = t("formSuccessEmail");
        window.location.href = mailto;
    });

    document.getElementById("whatsappButton").addEventListener("click", () => {
        const data = getFormData();

        if (!validateContact(data)) {
            message.textContent = t("formErrorContact");
            return;
        }

        const body = buildMessage(data);
        const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`;

        message.textContent = t("formSuccessWhatsApp");
        window.open(url, "_blank", "noopener,noreferrer");
    });

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("open"));
    });
});
