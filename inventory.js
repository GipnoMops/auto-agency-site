/* Inventory cards and carousel. Kept separate from script.js to avoid changing existing form behavior. */
(() => {
  'use strict';

  const languageCopy = {
    pl: {
      nav: 'Samochody w ofercie', eyebrow: 'WYBRANE SAMOCHODY', title: 'Samochody <em>w ofercie.</em>',
      mileage: 'Przebieg', fuel: 'Paliwo', engine: 'Silnik', gearbox: 'Skrzynia', drive: 'Napęd', body: 'Nadwozie',
      previous: 'Poprzednie samochody', next: 'Następne samochody', chooseSlide: 'Wybierz grupę samochodów',
      fuelDiesel: 'Diesel', fuelPetrol: 'Benzyna', fuelHybrid: 'Hybryda, benzyna', fuelElectric: 'Elektryczny',
      automatic: 'Automatyczna', awd: '4×4', fwd: 'Na przednie koła', rwd: 'Na tylne koła', wagon: 'Kombi', sedan: 'Sedan', suv: 'SUV'
    },
    en: {
      nav: 'Cars in stock', eyebrow: 'SELECTED VEHICLES', title: 'Cars <em>in stock.</em>',
      mileage: 'Mileage', fuel: 'Fuel', engine: 'Engine', gearbox: 'Transmission', drive: 'Drivetrain', body: 'Body type',
      previous: 'Previous cars', next: 'Next cars', chooseSlide: 'Choose car slide',
      fuelDiesel: 'Diesel', fuelPetrol: 'Petrol', fuelHybrid: 'Petrol hybrid', fuelElectric: 'Electric',
      automatic: 'Automatic', awd: 'AWD', fwd: 'Front-wheel drive', rwd: 'Rear-wheel drive', wagon: 'Estate', sedan: 'Sedan', suv: 'SUV'
    },
    ru: {
      nav: 'Автомобили в наличии', eyebrow: 'ПОДБОРКА АВТОМОБИЛЕЙ', title: 'Автомобили <em>в наличии.</em>',
      mileage: 'Пробег', fuel: 'Топливо', engine: 'Двигатель', gearbox: 'Коробка', drive: 'Привод', body: 'Кузов',
      previous: 'Предыдущие автомобили', next: 'Следующие автомобили', chooseSlide: 'Выбрать группу автомобилей',
      fuelDiesel: 'Дизель', fuelPetrol: 'Бензин', fuelHybrid: 'Бензиновый гибрид', fuelElectric: 'Электрический',
      automatic: 'Автоматическая', awd: 'Полный', fwd: 'Передний', rwd: 'Задний', wagon: 'Универсал', sedan: 'Седан', suv: 'SUV'
    }
  };

  // Карточки соответствуют подборке автомобилей из предыдущего обсуждения.
  // Фото ведут на реальные снимки из публичных объявлений; подтвердите права на использование перед публикацией.
  const cars = [
    {
      make: 'BMW', model: '320d', year: '2021', mileage: '86 000 km', engine: '2.0 l · 4 cyl.',
      fuel: 'fuelDiesel', gearbox: 'automatic', drive: 'rwd', body: 'sedan',
      image: 'https://www.njuskalo.hr/image-w920x690/auti/bmw-serija-3-320d-slika-198540873.jpg',
      alt: 'BMW 320d, 2021'
    },
    {
      make: 'Audi', model: 'A6 45 TFSI quattro', year: '2021', mileage: '62 200 km', engine: '2.0 l · petrol',
      fuel: 'fuelPetrol', gearbox: 'automatic', drive: 'awd', body: 'sedan',
      image: 'https://avatars.mds.yandex.net/get-autoru-vos/2087960/7ab5c26d254892e3a85a3144504c6630/1200x900',
      alt: 'Audi A6, 2021'
    },
    {
      make: 'Volkswagen', model: 'Passat Variant 2.0 TDI', year: '2021', mileage: '105 000 km', engine: '2.0 l · diesel',
      fuel: 'fuelDiesel', gearbox: 'automatic', drive: 'fwd', body: 'wagon',
      image: 'https://www.njuskalo.hr/image-xlsize/auti/vw-passat-variant-2.0-tdi-dsg-full-led-kamera-ambi-light-garanc-slika-231640895.jpg',
      alt: 'Volkswagen Passat Variant, 2021'
    },
    {
      make: 'Volvo', model: 'XC60', year: '2021', mileage: '137 000 km', engine: '2.0 l · diesel',
      fuel: 'fuelDiesel', gearbox: 'automatic', drive: 'awd', body: 'suv',
      image: 'https://resource.digitaldealer.com.au/image/55703200569b2362b6a6a8794923828_900_0-f.jpg',
      alt: 'Volvo XC60, 2021'
    },
    {
      make: 'Toyota', model: 'RAV4', year: '2021', mileage: '95 132 km', engine: '2.5 l · hybrid',
      fuel: 'fuelHybrid', gearbox: 'automatic', drive: 'awd', body: 'suv',
      image: 'https://c0.carsie.ie/d43864c90df075c94489ddbe4ca5ffe934baac02cf1a6e54c65ad98340d9b934.jpg',
      alt: 'Toyota RAV4, 2021'
    },
    {
      make: 'Mercedes-Benz', model: 'E-Class', year: '2021', mileage: '86 000 km', engine: '2.0 l · hybrid',
      fuel: 'fuelHybrid', gearbox: 'automatic', drive: 'rwd', body: 'sedan',
      image: 'https://www.njuskalo.hr/image-xlsize/auti/mercedes-benz-e-klasa-220-d-slika-179449436.jpg',
      alt: 'Mercedes-Benz E-Class, 2021'
    }
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
      <div class="inventory-card-media"><img src="${escapeHtml(car.image)}" alt="${escapeHtml(car.alt)}" loading="lazy" decoding="async"></div>
      <div class="inventory-card-content">
        <span class="inventory-card-index">${String(cardIndex + 1).padStart(2, '0')} / ${String(cars.length).padStart(2, '0')}</span>
        <h3 class="inventory-card-title">${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3>
        <p class="inventory-card-year">${escapeHtml(car.year)}</p>
        <ul class="inventory-specs">${specMarkup}</ul>
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
