/* Inventory cards and carousel. Kept separate from script.js to avoid changing existing form behavior. */
(() => {
  'use strict';

  const languageCopy = {
    pl: {
      nav: 'Samochody w ofercie', eyebrow: 'WYBRANE SAMOCHODY', title: 'Samochody <em>w ofercie.</em>',
      intro: 'Zobacz przykładowe karty samochodów. Dane na tej demonstracyjnej wersji są przykładowe — rzeczywistą dostępność i specyfikację potwierdzamy indywidualnie.',
      note: 'Przykładowe dane prezentacyjne. Brak cen — szczegóły samochodu potwierdzamy na zapytanie.',
      demo: 'Przykład', mileage: 'Przebieg', fuel: 'Paliwo', engine: 'Silnik', gearbox: 'Skrzynia', drive: 'Napęd', body: 'Nadwozie',
      ask: 'Zapytaj o samochód', previous: 'Poprzednie samochody', next: 'Następne samochody', chooseSlide: 'Wybierz grupę samochodów',
      request: 'Proszę o informacje o samochodzie',
      fuelDiesel: 'Diesel', fuelPetrol: 'Benzyna', fuelHybrid: 'Mild hybrid diesel', fuelElectric: 'Elektryczny',
      automatic: 'Automatyczna', awd: '4×4', fwd: 'Na przednie koła', wagon: 'Kombi', suv: 'SUV'
    },
    en: {
      nav: 'Cars in stock', eyebrow: 'SELECTED VEHICLES', title: 'Cars <em>in stock.</em>',
      intro: 'Explore example vehicle cards. The details shown here are illustrative — actual availability and specifications are confirmed individually.',
      note: 'Illustrative sample listings. No prices shown — vehicle details are confirmed on request.',
      demo: 'Example', mileage: 'Mileage', fuel: 'Fuel', engine: 'Engine', gearbox: 'Transmission', drive: 'Drivetrain', body: 'Body type',
      ask: 'Enquire about this car', previous: 'Previous cars', next: 'Next cars', chooseSlide: 'Choose car slide',
      request: 'Please send me information about this car',
      fuelDiesel: 'Diesel', fuelPetrol: 'Petrol', fuelHybrid: 'Mild-hybrid diesel', fuelElectric: 'Electric',
      automatic: 'Automatic', awd: 'AWD', fwd: 'Front-wheel drive', wagon: 'Estate', suv: 'SUV'
    },
    ru: {
      nav: 'Автомобили в наличии', eyebrow: 'ПОДБОРКА АВТОМОБИЛЕЙ', title: 'Автомобили <em>в наличии.</em>',
      intro: 'Посмотрите, как будут выглядеть карточки автомобилей. Данные в демонстрационных примерах условные — фактическое наличие и характеристики подтверждаем индивидуально.',
      note: 'Демонстрационные примеры. Цены не указаны — подробности по автомобилю предоставим по запросу.',
      demo: 'Пример', mileage: 'Пробег', fuel: 'Топливо', engine: 'Двигатель', gearbox: 'Коробка', drive: 'Привод', body: 'Кузов',
      ask: 'Запросить информацию', previous: 'Предыдущие автомобили', next: 'Следующие автомобили', chooseSlide: 'Выбрать группу автомобилей',
      request: 'Прошу предоставить информацию об автомобиле',
      fuelDiesel: 'Дизель', fuelPetrol: 'Бензин', fuelHybrid: 'Мягкий гибрид, дизель', fuelElectric: 'Электрический',
      automatic: 'Автоматическая', awd: 'Полный', fwd: 'Передний', wagon: 'Универсал', suv: 'SUV'
    }
  };

  // The cards below are visual examples, not claims about current stock.
  const cars = [
    { make: 'BMW', model: '530d xDrive Touring', year: '2022', mileage: '68 000 km', engine: '3.0 l · 6 cyl.', fuel: 'fuelDiesel', gearbox: 'automatic', drive: 'awd', body: 'wagon', brandValue: 'BMW', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1100&q=85', alt: 'BMW estate car' },
    { make: 'Audi', model: 'Q5 45 TFSI quattro', year: '2023', mileage: '42 000 km', engine: '2.0 l · petrol', fuel: 'fuelPetrol', gearbox: 'automatic', drive: 'awd', body: 'suv', brandValue: 'Audi', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1100&q=85', alt: 'Audi SUV' },
    { make: 'Mercedes-Benz', model: 'GLC 300 4MATIC', year: '2022', mileage: '51 000 km', engine: '2.0 l · petrol', fuel: 'fuelPetrol', gearbox: 'automatic', drive: 'awd', body: 'suv', brandValue: 'Mercedes-Benz', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1100&q=85', alt: 'Mercedes-Benz SUV' },
    { make: 'Volvo', model: 'XC60 B4 AWD', year: '2021', mileage: '74 000 km', engine: '2.0 l · mild hybrid', fuel: 'fuelHybrid', gearbox: 'automatic', drive: 'awd', body: 'suv', brandValue: 'Volvo', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1100&q=85', alt: 'Volvo SUV' },
    { make: 'Volkswagen', model: 'Passat Variant 2.0 TDI', year: '2022', mileage: '83 000 km', engine: '2.0 l ·  diesel', fuel: 'fuelDiesel', gearbox: 'automatic', drive: 'fwd', body: 'wagon', brandValue: 'Volkswagen', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1100&q=85', alt: 'Volkswagen estate car' },
    { make: 'Porsche', model: 'Macan', year: '2021', mileage: '59 000 km', engine: '2.0 l · petrol', fuel: 'fuelPetrol', gearbox: 'automatic', drive: 'awd', body: 'suv', brandValue: 'Porsche', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85', alt: 'Porsche SUV' },
    { make: 'Tesla', model: 'Model Y Long Range', year: '2023', mileage: '36 000 km', engine: 'Electric motor', fuel: 'fuelElectric', gearbox: 'automatic', drive: 'awd', body: 'suv', brandValue: 'Tesla', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1100&q=85', alt: 'Tesla electric car' }
  ];

  const supportedLang = value => Object.prototype.hasOwnProperty.call(languageCopy, value) ? value : 'pl';
  let lang = supportedLang(localStorage.getItem('autoAgencyLanguage') || document.documentElement.lang || 'pl');
  let index = 0;
  let visibleCount = 3;
  let resizeFrame = null;

  const getCopy = () => languageCopy[lang];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  function localizeShell() {
    const copy = getCopy();
    const nav = document.querySelector('[data-i18n="inventoryNav"]');
    if (nav) nav.textContent = copy.nav;

    document.querySelectorAll('[data-inventory-i18n]').forEach(element => {
      const key = element.dataset.inventoryI18n;
      if (key === 'title') element.innerHTML = copy.title;
      else if (copy[key]) element.textContent = copy[key];
    });
    document.querySelectorAll('[data-inventory-i18n-aria]').forEach(element => {
      const key = element.dataset.inventoryI18nAria;
      if (copy[key]) element.setAttribute('aria-label', copy[key]);
    });
  }

  function cardMarkup(car, cardIndex) {
    const copy = getCopy();
    const specs = [
      [copy.mileage, car.mileage],
      [copy.engine, car.engine],
      [copy.fuel, copy[car.fuel]],
      [copy.gearbox, copy[car.gearbox]],
      [copy.drive, copy[car.drive]],
      [copy.body, copy[car.body]]
    ];
    const specMarkup = specs.map(([label, value]) => `<li class="inventory-spec"><span class="inventory-spec-label">${escapeHtml(label)}</span><span class="inventory-spec-value">${escapeHtml(value)}</span></li>`).join('');
    return `<article class="inventory-card" role="group" aria-roledescription="slide" aria-label="${cardIndex + 1} / ${cars.length}">
      <div class="inventory-card-media"><img src="${escapeHtml(car.image)}" alt="${escapeHtml(car.alt)}" loading="lazy" decoding="async"><span class="inventory-demo-label">${escapeHtml(copy.demo)}</span></div>
      <div class="inventory-card-content">
        <span class="inventory-card-index">${String(cardIndex + 1).padStart(2, '0')} / ${String(cars.length).padStart(2, '0')}</span>
        <h3 class="inventory-card-title">${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3>
        <p class="inventory-card-year">${escapeHtml(car.year)}</p>
        <ul class="inventory-specs">${specMarkup}</ul>
        <button class="inventory-card-button" type="button" data-car-index="${cardIndex}"><span>${escapeHtml(copy.ask)}</span><span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }

  function getVisibleCount() {
    if (window.matchMedia('(max-width: 600px)').matches) return 1;
    if (window.matchMedia('(max-width: 1050px)').matches) return 2;
    return 3;
  }

  function renderCards() {
    const track = document.getElementById('inventoryTrack');
    if (!track) return;
    track.innerHTML = cars.map(cardMarkup).join('');
    track.querySelectorAll('[data-car-index]').forEach(button => {
      button.addEventListener('click', () => requestCar(Number(button.dataset.carIndex)));
    });
    renderControls();
    updatePosition(false);
  }

  function renderControls() {
    const dots = document.getElementById('inventoryDots');
    if (!dots) return;
    const copy = getCopy();
    const maxIndex = Math.max(0, cars.length - visibleCount);
    dots.innerHTML = Array.from({ length: maxIndex + 1 }, (_, dotIndex) => `<button class="inventory-dot" type="button" data-slide-index="${dotIndex}" aria-label="${escapeHtml(copy.chooseSlide)} ${dotIndex + 1}" aria-current="${dotIndex === index ? 'true' : 'false'}"></button>`).join('');
    dots.querySelectorAll('[data-slide-index]').forEach(dot => {
      dot.addEventListener('click', () => {
        index = Number(dot.dataset.slideIndex);
        updatePosition(true);
      });
    });
    const prev = document.getElementById('inventoryPrev');
    const next = document.getElementById('inventoryNext');
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= maxIndex;
  }

  function updatePosition(animate = true) {
    const track = document.getElementById('inventoryTrack');
    if (!track) return;
    visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, cars.length - visibleCount);
    index = Math.max(0, Math.min(index, maxIndex));
    const firstCard = track.querySelector('.inventory-card');
    if (firstCard) {
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      track.style.transitionDuration = animate ? '' : '0ms';
      track.style.transform = `translateX(${-index * step}px)`;
      if (!animate) requestAnimationFrame(() => { track.style.transitionDuration = ''; });
    }
    renderControls();
  }

  function requestCar(carIndex) {
    const car = cars[carIndex];
    if (!car) return;
    const brand = document.getElementById('brand');
    const model = document.getElementById('model');
    const yearFrom = document.getElementById('yearFrom');
    const yearTo = document.getElementById('yearTo');
    const requirements = document.getElementById('requirements');
    if (brand) brand.value = car.brandValue;
    if (model) model.value = car.model;
    if (yearFrom && [...yearFrom.options].some(option => option.value === car.year)) yearFrom.value = car.year;
    if (yearTo && [...yearTo.options].some(option => option.value === car.year)) yearTo.value = car.year;
    if (requirements) {
      const line = `${getCopy().request}: ${car.make} ${car.model} (${car.year}).`;
      requirements.value = requirements.value.trim() ? `${requirements.value.trim()}\n${line}` : line;
    }
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => { if (model) model.focus({ preventScroll: true }); }, 350);
    }
  }

  function setLanguage(nextLang) {
    lang = supportedLang(nextLang);
    localizeShell();
    renderCards();
  }

  document.addEventListener('DOMContentLoaded', () => {
    localizeShell();
    renderCards();

    document.querySelectorAll('.lang-btn[data-lang]').forEach(button => {
      button.addEventListener('click', () => {
        // script.js handles the actual site language; this updates the added inventory layer.
        window.setTimeout(() => setLanguage(localStorage.getItem('autoAgencyLanguage') || button.dataset.lang), 0);
      });
    });

    const previous = document.getElementById('inventoryPrev');
    const next = document.getElementById('inventoryNext');
    if (previous) previous.addEventListener('click', () => { index -= 1; updatePosition(true); });
    if (next) next.addEventListener('click', () => { index += 1; updatePosition(true); });

    window.addEventListener('resize', () => {
      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const nextVisibleCount = getVisibleCount();
        if (nextVisibleCount !== visibleCount) renderCards();
        else updatePosition(false);
        resizeFrame = null;
      });
    }, { passive: true });
  });
})();
