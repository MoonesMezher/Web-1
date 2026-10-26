// قائمة الفعاليات الجامعية في الدليل
const eventsData = [
  {
    id: 1,
    title: 'حفل كورال وأوركسترا الجامعة السنوي',
    category: 'موسيقى',
    date: '2026-11-05',
    time: '18:00',
    location: 'المدرج الكبير — كلية الآداب والعلوم الإنسانية',
    city: 'دمشق',
    description: 'أمسية موسيقية سنوية تقيمها عمادة شؤون الطلاب برعاية رئاسة الجامعة، يقدم خلالها كورال الجامعة وفرقته الموسيقية باقة مختارة من الموشحات الأندلسية والتراث الموسيقي الشرقي، بمشاركة مميزة للطلبة الموهوبين وأعضاء الهيئة التدريسية تكريماً للإبداع الفني الجامعي.',
    shortDesc: 'أمسية موسيقية وتراثية مميزة يقدمها كورال الجامعة ونخبة من المواهب الطلابية.',
    image: 'assets/img/events/music-festival.jpg',
    mapImage: 'assets/img/maps/map-1.jpg',
    gallery: [
      'assets/img/events/music-1.jpg',
      'assets/img/events/music-2.jpg',
      'assets/img/events/music-3.jpg'
    ],
    featured: true,
    price: 'مجاني للطلبة والكوادر'
  },
  {
    id: 2,
    title: 'معرض إبداعات الفنون التشكيلية لطلبة كلية الفنون',
    category: 'ثقافة',
    date: '2026-11-10',
    time: '10:00',
    location: 'قاعة المعارض الرئيسية — كلية الفنون الجميلة',
    city: 'حلب',
    description: 'معرض فني أكاديمي سنوي يسلّط الضوء على إبداعات طلبة كلية الفنون الجميلة ومشاريع التخرج المميزة، ويشمل أكثر من 60 عملاً من اللوحات الزيتية والتجريدية والمنحوتات الجصية والخشبية، مع إقامة ورش عمل حية وحلقات حوار ونقد فني تجمع الطلاب بالأساتذة ورواد الفن التشكيلي.',
    shortDesc: 'معرض أكاديمي سنوي يبرز اللوحات التشكيلية والمجسمات الإبداعية لطلاب الجامعة.',
    image: 'assets/img/events/art-exhibition.jpg',
    mapImage: 'assets/img/maps/map-2.jpg',
    gallery: [
      'assets/img/events/art-1.jpg',
      'assets/img/events/art-2.jpg',
      'assets/img/events/art-3.jpg'
    ],
    featured: true,
    price: 'مجاني للطلبة'
  },
  {
    id: 3,
    title: 'ماراثون الجامعة السنوي للطلبة والأساتذة',
    category: 'رياضة',
    date: '2026-11-15',
    time: '08:00',
    location: 'ساحة رئاسة الجامعة ومحيط المدينة الجامعية',
    city: 'دمشق',
    description: 'سباق جري رياضي سنوي تنظمه عمادة شؤون الطلاب والاتحاد الرياضي الجامعي لتعزيز النشاط البدني والصحة العامة بين طلبة الكليات وأعضاء الهيئة التدريسية. ينطلق المسار من أمام مبنى رئاسة الجامعة مروراً بمرافق الحرم الجامعي ومحيط السكن الجامعي مع جوائز تحفيزية وكؤوس للمراكز الأولى.',
    shortDesc: 'سباق جري رياضي سنوي ينطلق من الحرم الجامعي بمشاركة الطلبة والهيئة التدريسية.',
    image: 'assets/img/events/marathon.jpg',
    mapImage: 'assets/img/maps/map-3.jpg',
    gallery: [
      'assets/img/events/marathon-1.jpg',
      'assets/img/events/marathon-2.jpg',
      'assets/img/events/marathon-3.jpg'
    ],
    featured: true,
    price: 'مجاني'
  },
  {
    id: 4,
    title: 'اليوم المفتوح والترحيب بالطلبة الجدد وعائلاتهم',
    category: 'عائلي',
    date: '2026-11-20',
    time: '09:00',
    location: 'الحدائق المركزية للحرم الجامعي — مجمع الكليات',
    city: 'دمشق',
    description: 'يوم تعريفي وإرشادي مفتوح تنظمه الجامعة لاستقبال الطلبة المستجدين وأولياء أمورهم في مطلع العام الجامعي، يتضمن جولات تفاعلية في المكتبات والمختبرات وقاعات المحاضرات، وجلسات حوارية مع عمداء الكليات، وأجنحة تعريفية بالنوادي الطلابية والأنشطة الأكاديمية والترفيهية.',
    shortDesc: 'يوم تعريفي مفتوح في الحرم الجامعي لاستقبال الطلبة المستجدين وأسرهم وجولات بالكليات.',
    image: 'assets/img/events/family-day.jpg',
    mapImage: 'assets/img/maps/map-4.jpg',
    gallery: [
      'assets/img/events/family-1.jpg',
      'assets/img/events/family-2.jpg',
      'assets/img/events/family-3.jpg'
    ],
    featured: false,
    price: 'مجاني'
  },
  {
    id: 5,
    title: 'مؤتمر هندسة البرمجيات والهاكاثون البرمجي الجامعي',
    category: 'تكنولوجيا',
    date: '2026-11-25',
    time: '09:00',
    location: 'مدرج الباسل — كلية الهندسة المعلوماتية',
    city: 'دمشق',
    description: 'ملتقى علمي وهاكاثون برمجي سنوي تنظمه كلية الهندسة المعلوماتية لطلاب الجامعة والباحثين، لمناقشة أحدث تقنيات الويب السحابية والذكاء الاصطناعي والأمن السيبراني، مع استعراض مشاريع التخرج الرائدة وتكريم الفرق الفائزة بحلول برمجية ومشاريع ريادية مبتكرة.',
    shortDesc: 'مؤتمر علمي وهاكاثون برمجي تنافسي لطلاب هندسة المعلوماتية وتطوير البرمجيات.',
    image: 'assets/img/events/tech-conference.jpg',
    mapImage: 'assets/img/maps/map-5.jpg',
    gallery: [
      'assets/img/events/tech-1.jpg',
      'assets/img/events/tech-2.jpg',
      'assets/img/events/tech-3.jpg'
    ],
    featured: true,
    price: 'مجاني لطلاب الجامعة'
  },
  {
    id: 6,
    title: 'مهرجان التراث والمأكولات لنوادي طلبة المحافظات',
    category: 'ثقافة',
    date: '2026-12-01',
    time: '11:00',
    location: 'ساحة النشاط الطلابي — المدينة الجامعية',
    city: 'دمشق',
    description: 'مهرجان تراثي سنوي تنظمه الروابط والأندية الطلابية في المدينة الجامعية لتبادل الثقافات والتقاليد بين طلاب مختلف المحافظات، ويشمل أجنحة للمأكولات الشعبية التراثية، ومعروضات للحرف اليدوية والمشغولات الفنية، مع تخصيص العائدات لدعم صندوق الطالب المحتاج بالجامعة.',
    shortDesc: 'بازار تراثي ومأكولات شعبية ينظمه طلبة السكن الجامعي لتعزيز التبادل الثقافي.',
    image: 'assets/img/events/food-festival.jpg',
    mapImage: 'assets/img/maps/map-6.jpg',
    gallery: [
      'assets/img/events/food-1.jpg',
      'assets/img/events/food-2.jpg',
      'assets/img/events/food-3.jpg'
    ],
    featured: false,
    price: 'دخول مجاني (مشتريات رمزية)'
  },
  {
    id: 7,
    title: 'أسبوع سينما الطلاب والأفلام الوثائقية الجامعية',
    category: 'ثقافة',
    date: '2026-12-05',
    time: '18:00',
    location: 'المسرح المكشوف — مجمع الأنشطة الطلابية',
    city: 'دمشق',
    description: 'عروض سينمائية لأفلام وثائقية وقصيرة من إعداد وإخراج طلبة قسم الإعلام وفنون الاتصال المرئي بالجامعة، تليها جلسات نقدية وحوارية مفتوحة بحضور أساتذة الإعلام والمشرفين الأكاديميين لمناقشة تجارب الشباب السينمائية ورسائلهم المجتمعية.',
    shortDesc: 'عروض سينمائية لأفلام وثائقية وفنية من إخراج طلبة الجامعة تليها جلسات نقاش.',
    image: 'assets/img/events/cinema-night.jpg',
    mapImage: 'assets/img/maps/map-7.jpg',
    gallery: [
      'assets/img/events/cinema-1.jpg',
      'assets/img/events/cinema-2.jpg',
      'assets/img/events/cinema-3.jpg'
    ],
    featured: false,
    price: 'مجاني للطلبة'
  },
  {
    id: 8,
    title: 'نهائي بطولة دوري كليات الجامعة لكرة القدم',
    category: 'رياضة',
    date: '2026-12-10',
    time: '14:30',
    location: 'الملعب الرئيسي — المجمع الرياضي الجامعي',
    city: 'دمشق',
    description: 'المباراة النهائية وحفل اختتام الدوري الرياضي السنوي الذي جمع فرق كليات الجامعة (الهندسة المعلوماتية، الطب البشري، الاقتصاد، الصيدلة، الحقوق)، بحضور طلابي وإداري حاشد وتتويج الكلية الفائزة بكأس البطولة والميداليات التقديرية من قِبل عمادة شؤون الطلاب.',
    shortDesc: 'المباراة النهائية وتتويج الفائزين في دوري كرة القدم لفرق كليات الجامعة.',
    image: 'assets/img/events/soccer-championship.jpg',
    mapImage: 'assets/img/maps/map-8.jpg',
    gallery: [
      'assets/img/events/soccer-1.jpg',
      'assets/img/events/soccer-2.jpg',
      'assets/img/events/soccer-3.jpg'
    ],
    featured: false,
    price: 'مجاني للطلاب والجمهور'
  },
  {
    id: 9,
    title: 'ورشة التوثيق الفوتوغرافي والصحافة لطلبة الجامعة',
    category: 'تكنولوجيا',
    date: '2026-12-15',
    time: '13:00',
    location: 'استوديو الإعلام الرقمي — الحرم الجامعي',
    city: 'حمص',
    description: 'ورشة عمل وتدريب ميداني مكثف لطلبة الجامعة بإشراف أساتذة الإعلام والتصوير الضوئي، تركز على مهارات التصوير الرقمي الاحترافي، وتغطية المؤتمرات الأكاديمية والأنشطة الطلابية، وتجهيز المحتوى البصري للنشر على المنصات والمجلات الجامعية.',
    shortDesc: 'تدريب عملي لطلاب الجامعة لتعلم مهارات التصوير الصحفي والتوثيق البصري.',
    image: 'assets/img/events/photo-workshop.jpg',
    mapImage: 'assets/img/maps/map-9.jpg',
    gallery: [
      'assets/img/events/photo-1.jpg',
      'assets/img/events/photo-2.jpg',
      'assets/img/events/photo-3.jpg'
    ],
    featured: false,
    price: 'مجاني للطلبة المسجلين'
  },
  {
    id: 10,
    title: 'حفل فرقة الجامعة للموسيقى والفيوجن الشرقي',
    category: 'موسيقى',
    date: '2026-12-20',
    time: '19:00',
    location: 'قاعة المؤتمرات الكبرى — مبنى رئاسة الجامعة',
    city: 'دمشق',
    description: 'أمسية موسيقية استثنائية تحييها الفرقة الموسيقية لطلبة وأساتذة الجامعة، تقدم مؤلفات وتوزيعات موسيقية جديدة تدمج بين إيقاعات الجاز والمقامات الشرقية الأصيلة، تجسيداً للتنوع الثقافي والإبداعي في البيئة الجامعية وتكريماً للمواهب الفنية الطلابية.',
    shortDesc: 'أمسية موسيقية سنوية لفرقة طلاب وأساتذة الجامعة تمزج الأنغام الشرقية والحديثة.',
    image: 'assets/img/events/jazz-night.jpg',
    mapImage: 'assets/img/maps/map-10.jpg',
    gallery: [
      'assets/img/events/jazz-1.jpg',
      'assets/img/events/jazz-2.jpg',
      'assets/img/events/jazz-3.jpg'
    ],
    featured: false,
    price: 'مجاني للطلبة والكوادر'
  }
];

// أيقونات التصنيفات من Bootstrap Icons
const categoryIcons = {
  'ثقافة': 'bi-palette',
  'رياضة': 'bi-trophy',
  'موسيقى': 'bi-music-note-beamed',
  'عائلي': 'bi-people',
  'تكنولوجيا': 'bi-cpu',
  'أكاديمي': 'bi-mortarboard',
  'طلابي': 'bi-person-badge'
};

// تنسيق التاريخ بالعربية
function formatDate(dateString) {
  const dateObj = new Date(dateString + 'T00:00:00');
  return dateObj.toLocaleDateString('ar-SY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// قراءة معلمات الرابط URL
function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// البحث عن فعالية بواسطة المعرف
function findEventById(id) {
  return eventsData.find(item => item.id === Number(id));
}

// إنشاء بطاقة الفعالية بصيغة HTML بسيطة
function renderEventCard(event) {
  const icon = categoryIcons[event.category] || 'bi-tag';
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card event-card h-100">
        <img src="${event.image}" alt="${event.title}" class="card-img-top event-img" loading="lazy" onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
        <div class="card-body d-flex flex-column">
          <span class="badge-category mb-2">
            <i class="bi ${icon}"></i> ${event.category}
          </span>
          <h3 class="card-title h5 mb-2">${event.title}</h3>
          <div class="event-meta mb-2 text-muted small">
            <div><i class="bi bi-calendar3 text-primary-custom"></i> ${formatDate(event.date)}</div>
            <div><i class="bi bi-clock text-primary-custom"></i> ${event.time}</div>
            <div><i class="bi bi-geo-alt text-primary-custom"></i> ${event.location} — ${event.city}</div>
          </div>
          <p class="card-text text-muted small flex-grow-1">${event.shortDesc}</p>
          <div class="card-footer-btns d-flex gap-2 flex-wrap mt-3 pt-2 border-top">
            <a href="event.html?id=${event.id}" class="btn btn-primary-custom btn-sm">
              <i class="bi bi-eye"></i> التفاصيل
            </a>
            <button class="btn btn-outline-custom btn-sm" onclick="openRegistrationModal(${event.id})">
              <i class="bi bi-ticket-perforated"></i> تسجيل
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

// تبديل وحفظ الوضع الداكن
function setupTheme() {
  const savedTheme = localStorage.getItem('siteTheme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  updateThemeButton();
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('siteTheme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = document.body.classList.contains('dark-mode');
  btn.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  btn.setAttribute('aria-label', isDark ? 'التحويل للوضع الفاتح' : 'التحويل للوضع الداكن');
}

// زر العودة للأعلى
function setupScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 350);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// سلايدر الفعاليات المميزة في الرئيسية
function setupSlider() {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track || !dotsContainer) return;

  const featured = eventsData.filter(e => e.featured);
  if (!featured.length) return;

  track.innerHTML = featured.map(ev => `
    <div class="slider-slide">
      <div class="row align-items-center g-4">
        <div class="col-md-6">
          <img src="${ev.image}" alt="${ev.title}" class="img-fluid rounded shadow"
               style="max-height: 280px; width: 100%; object-fit: cover;"
               onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
        </div>
        <div class="col-md-6 text-white">
          <span class="badge bg-light text-dark mb-2">
            <i class="bi ${categoryIcons[ev.category] || 'bi-tag'}"></i> ${ev.category}
          </span>
          <h2 class="h3 fw-bold">${ev.title}</h2>
          <p class="mb-1 small"><i class="bi bi-calendar3 me-1"></i> ${formatDate(ev.date)} — ${ev.time}</p>
          <p class="mb-2 small"><i class="bi bi-geo-alt me-1"></i> ${ev.location}، ${ev.city}</p>
          <p class="small opacity-90">${ev.shortDesc}</p>
          <a href="event.html?id=${ev.id}" class="btn btn-light fw-bold mt-2">
            <i class="bi bi-eye"></i> عرض التفاصيل
          </a>
        </div>
      </div>
    </div>`).join('');

  dotsContainer.innerHTML = featured.map((_, i) =>
    `<button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="الشريحة ${i + 1}"></button>`
  ).join('');

  let currentIndex = 0;
  const count = featured.length;

  function moveToSlide(index) {
    currentIndex = ((index % count) + count) % count;
    track.style.transform = `translateX(${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll('.slider-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  document.getElementById('sliderPrev')?.addEventListener('click', () => moveToSlide(currentIndex - 1));
  document.getElementById('sliderNext')?.addEventListener('click', () => moveToSlide(currentIndex + 1));

  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.slider-dot');
    if (dot) moveToSlide(Number(dot.dataset.index));
  });

  // تشغيل تلقائي كل 5 ثوانٍ وإيقاف مؤقت عند تمرير المؤشر
  let autoTimer = setInterval(() => moveToSlide(currentIndex + 1), 5000);
  const wrapper = track.closest('.slider-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoTimer));
    wrapper.addEventListener('mouseleave', () => {
      autoTimer = setInterval(() => moveToSlide(currentIndex + 1), 5000);
    });
  }
}

// تجهيز تصنيفات وأحدث الفعاليات في الصفحة الرئيسية
function setupHomepage() {
  const catContainer = document.getElementById('categoriesContainer');
  const recentContainer = document.getElementById('recentEvents');

  if (catContainer) {
    const categories = [...new Set(eventsData.map(e => e.category))];
    const savedCat = localStorage.getItem('preferredCategory');

    catContainer.innerHTML = categories.map(cat => `
      <a href="events.html?category=${encodeURIComponent(cat)}" class="badge-cat ${cat === savedCat ? 'active' : ''}">
        <i class="bi ${categoryIcons[cat] || 'bi-tag'}"></i> ${cat}
      </a>`).join('');

    catContainer.addEventListener('click', (e) => {
      const link = e.target.closest('.badge-cat');
      if (link) {
        localStorage.setItem('preferredCategory', link.textContent.trim());
      }
    });
  }

  if (recentContainer) {
    const recentEvents = [...eventsData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
    recentContainer.innerHTML = recentEvents.map(renderEventCard).join('');
  }
}

// صفحة الفعاليات: البحث والفلترة حسب العنوان والتصنيف والمدينة والتاريخ
function setupEventsPage() {
  const container = document.getElementById('allEventsContainer');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const dateFilter = document.getElementById('dateFilter');
  const locationFilter = document.getElementById('locationFilter');
  const countBadge = document.getElementById('resultCount');

  if (!container) return;

  // ملء خيارات التصنيفات
  if (categoryFilter) {
    const categories = [...new Set(eventsData.map(e => e.category))];
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      categoryFilter.appendChild(opt);
    });

    const urlCat = getQueryParam('category');
    const savedCat = localStorage.getItem('preferredCategory');
    if (urlCat) categoryFilter.value = urlCat;
    else if (savedCat && categories.includes(savedCat)) categoryFilter.value = savedCat;
  }

  // ملء خيارات المدن
  if (locationFilter) {
    const cities = [...new Set(eventsData.map(e => e.city))];
    cities.forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      locationFilter.appendChild(opt);
    });
  }

  function applyFilters() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const selectedCat = categoryFilter?.value || '';
    const selectedDate = dateFilter?.value || '';
    const selectedCity = locationFilter?.value || '';

    const results = eventsData.filter(event => {
      if (query && !event.title.toLowerCase().includes(query) &&
        !event.description.toLowerCase().includes(query) &&
        !event.location.toLowerCase().includes(query)) {
        return false;
      }
      if (selectedCat && event.category !== selectedCat) return false;
      if (selectedDate && event.date !== selectedDate) return false;
      if (selectedCity && event.city !== selectedCity) return false;
      return true;
    });

    if (results.length > 0) {
      container.innerHTML = results.map(renderEventCard).join('');
    } else {
      container.innerHTML = `
        <div class="col-12 no-results text-center py-5 text-muted">
          <i class="bi bi-search fs-1 mb-2 d-block"></i>
          <h4>لم يتم العثور على فعاليات مطابقة</h4>
          <p class="small">يرجى تجربة كلمات بحث أخرى أو تعديل خيارات الفلترة أعلاه.</p>
        </div>`;
    }

    if (countBadge) {
      countBadge.textContent = `${results.length} فعالية`;
    }

    if (selectedCat) {
      localStorage.setItem('preferredCategory', selectedCat);
    }
  }

  searchInput?.addEventListener('input', applyFilters);
  categoryFilter?.addEventListener('change', applyFilters);
  dateFilter?.addEventListener('change', applyFilters);
  locationFilter?.addEventListener('change', applyFilters);

  applyFilters();
}

// صفحة تفاصيل الفعالية الفردية
function setupEventDetailPage() {
  const detailContainer = document.getElementById('eventDetailContainer');
  if (!detailContainer) return;

  const eventId = getQueryParam('id');
  const event = findEventById(eventId);

  if (!event) {
    detailContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-exclamation-circle text-primary-custom" style="font-size: 3rem;"></i>
        <h3 class="mt-3">لم يتم العثور على الفعالية المطلوبة</h3>
        <p class="text-muted">الرابط غير صالح أو تم تغيير معرف الفعالية. يمكنك العودة إلى <a href="events.html">دليل الفعاليات</a>.</p>
      </div>`;
    return;
  }

  const icon = categoryIcons[event.category] || 'bi-tag';

  detailContainer.innerHTML = `
    <nav class="breadcrumb-custom mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>
        <li class="breadcrumb-item"><a href="events.html">الفعاليات</a></li>
        <li class="breadcrumb-item active" aria-current="page">${event.title}</li>
      </ol>
    </nav>

    <div class="row g-4">
      <div class="col-lg-8">
        <div class="event-hero mb-4">
          <img src="${event.image}" alt="${event.title}" class="img-fluid rounded shadow"
               onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
        </div>

        <h1 class="h2 fw-bold mb-3">${event.title}</h1>
        <span class="badge-category mb-3">
          <i class="bi ${icon}"></i> ${event.category}
        </span>

        <p class="mt-3 fs-6" style="line-height: 1.9;">${event.description}</p>

        <h4 class="mt-4 mb-3"><i class="bi bi-images text-primary-custom"></i> معرض الصور</h4>
        <div class="gallery-grid mb-4">
          ${event.gallery.map(img => `
            <img src="${img}" alt="${event.title}" class="rounded" loading="lazy"
                 onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
          `).join('')}
        </div>

        <h4 class="mb-3"><i class="bi bi-map text-primary-custom"></i> خريطة الموقع الجغرافي</h4>
        <div class="event-map mb-4 rounded overflow-hidden border shadow-sm">
          <img src="${event.mapImage}" alt="خريطة موقع ${event.title} في ${event.location}" class="img-fluid w-100" style="max-height: 320px; object-fit: cover;" onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
          <div class="p-2 bg-light border-top small text-muted d-flex align-items-center justify-content-between flex-wrap gap-2">
            <span><i class="bi bi-geo-alt-fill text-danger me-1"></i> ${event.location} — ${event.city}</span>
            <span class="text-secondary"><i class="bi bi-pin-map text-primary-custom"></i> خريطة موقع جغرافية ثابتة</span>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="event-info-box p-4 rounded mb-4">
          <h5 class="fw-bold mb-3 border-bottom pb-2">
            <i class="bi bi-info-circle text-primary-custom"></i> تفاصيل الموعد والمكان
          </h5>
          <dl class="mb-4">
            <dt class="text-primary-custom small fw-bold"><i class="bi bi-calendar3"></i> التاريخ</dt>
            <dd class="mb-2">${formatDate(event.date)}</dd>

            <dt class="text-primary-custom small fw-bold"><i class="bi bi-clock"></i> التوقيت</dt>
            <dd class="mb-2">${event.time}</dd>

            <dt class="text-primary-custom small fw-bold"><i class="bi bi-geo-alt"></i> المكان</dt>
            <dd class="mb-2">${event.location}، ${event.city}</dd>

            <dt class="text-primary-custom small fw-bold"><i class="bi bi-tag"></i> التصنيف</dt>
            <dd class="mb-2">${event.category}</dd>

            <dt class="text-primary-custom small fw-bold"><i class="bi bi-ticket"></i> رسوم الدخول</dt>
            <dd class="mb-2">${event.price}</dd>
          </dl>

          <div class="d-grid gap-2">
            <button class="btn btn-primary-custom" onclick="downloadCalendarFile(${event.id})">
              <i class="bi bi-calendar-plus"></i> إضافة للتقويم (ICS)
            </button>
            <button class="btn btn-accent" onclick="shareCurrentEvent(${event.id})">
              <i class="bi bi-share"></i> مشاركة الفعالية
            </button>
            <button class="btn btn-outline-custom" onclick="openRegistrationModal(${event.id})">
              <i class="bi bi-ticket-perforated"></i> تسجيل الحضور
            </button>
          </div>
        </div>

        <h5 class="fw-bold mb-3"><i class="bi bi-collection text-primary-custom"></i> فعاليات مشابهة</h5>
        <div class="d-flex flex-column gap-3">
          ${eventsData
      .filter(item => item.category === event.category && item.id !== event.id)
      .slice(0, 3)
      .map(item => `
              <a href="event.html?id=${item.id}" class="card text-decoration-none event-card flex-row align-items-center p-2">
                <img src="${item.image}" alt="${item.title}" class="rounded" style="width: 80px; height: 65px; object-fit: cover;"
                     onerror="this.onerror=null;this.src='assets/img/placeholder.svg';">
                <div class="p-2">
                  <h6 class="mb-1 text-dark fw-bold small">${item.title}</h6>
                  <small class="text-muted"><i class="bi bi-calendar3"></i> ${formatDate(item.date)}</small>
                </div>
              </a>`).join('') || '<p class="text-muted small">لا توجد فعاليات أخرى في هذا التصنيف حالياً.</p>'}
        </div>
      </div>
    </div>`;
}

// تصدير ملف التقويم بتنسيق ICS
function downloadCalendarFile(id) {
  const ev = findEventById(id);
  if (!ev) return;

  const startStamp = ev.date.replace(/-/g, '') + 'T' + ev.time.replace(':', '') + '00';
  const endHour = (parseInt(ev.time.split(':')[0], 10) + 2).toString().padStart(2, '0');
  const endStamp = ev.date.replace(/-/g, '') + 'T' + endHour + ev.time.split(':')[1] + '00';

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//City Events Guide//AR',
    'BEGIN:VEVENT',
    `DTSTART:${startStamp}`,
    `DTEND:${endStamp}`,
    `SUMMARY:${ev.title}`,
    `DESCRIPTION:${ev.shortDesc}`,
    `LOCATION:${ev.location} - ${ev.city}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsLines], { type: 'text/calendar;charset=utf-8' });
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = URL.createObjectURL(blob);
  downloadAnchor.download = `${ev.title}.ics`;
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(downloadAnchor.href);

  displayToast('تم تحميل ملف التقويم بنجاح.');
}

// مشاركة الفعالية
function shareCurrentEvent(id) {
  const ev = findEventById(id);
  if (!ev) return;

  const shareUrl = window.location.origin + window.location.pathname + '?id=' + ev.id;
  const shareText = `${ev.title} — ${formatDate(ev.date)} في ${ev.location}`;

  if (navigator.share) {
    navigator.share({
      title: ev.title,
      text: shareText,
      url: shareUrl
    }).catch(() => { });
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      displayToast('تم نسخ رابط الفعالية إلى الحافظة.');
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      displayToast('تم نسخ رابط الفعالية إلى الحافظة.');
    });
  }
}

// نافذة تسجيل الحضور
function openRegistrationModal(id) {
  const ev = findEventById(id);
  if (!ev) return;

  const modalElement = document.getElementById('registrationModal');
  if (!modalElement) return;

  const titleEl = document.getElementById('regEventTitle');
  const dateEl = document.getElementById('regEventDate');
  const locEl = document.getElementById('regEventLocation');

  if (titleEl) titleEl.textContent = ev.title;
  if (dateEl) dateEl.textContent = `${formatDate(ev.date)} — ${ev.time}`;
  if (locEl) locEl.textContent = `${ev.location}، ${ev.city}`;

  const regForm = document.getElementById('regForm');
  const alertBox = document.getElementById('regAlert');
  if (regForm) {
    regForm.reset();
    regForm.classList.remove('was-validated');
    const submitBtn = regForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = false;
  }
  if (alertBox) {
    alertBox.className = 'alert d-none';
    alertBox.innerHTML = '';
  }

  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.show();
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const alertBox = document.getElementById('regAlert');

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  if (alertBox) {
    alertBox.className = 'alert alert-success';
    alertBox.innerHTML = '<i class="bi bi-check-circle"></i> تم تسجيلك بنجاح في الفعالية! سنتواصل معك عبر البريد الإلكتروني لتأكيد الحضور.';
    alertBox.classList.remove('d-none');
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;
}

// التحقق من نموذج الاتصال
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    const alertBox = document.getElementById('contactAlert');

    [nameInput, emailInput, msgInput].forEach(field => field?.classList.remove('is-invalid'));

    let isValid = true;
    const errors = [];

    if (!nameInput?.value.trim()) {
      nameInput?.classList.add('is-invalid');
      errors.push('يرجى إدخال الاسم الكامل.');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput?.value.trim()) {
      emailInput?.classList.add('is-invalid');
      errors.push('يرجى إدخال البريد الإلكتروني.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailInput?.classList.add('is-invalid');
      errors.push('صيغة البريد الإلكتروني غير صحيحة.');
      isValid = false;
    }

    if (!msgInput?.value.trim()) {
      msgInput?.classList.add('is-invalid');
      errors.push('يرجى كتابة نص الرسالة.');
      isValid = false;
    }

    if (!isValid) {
      if (alertBox) {
        alertBox.className = 'alert alert-danger';
        alertBox.innerHTML = `<i class="bi bi-exclamation-triangle"></i> ${errors.join(' ')}`;
        alertBox.classList.remove('d-none');
      }
      return;
    }

    if (alertBox) {
      alertBox.className = 'alert alert-success';
      alertBox.innerHTML = '<i class="bi bi-check-circle"></i> شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت.';
      alertBox.classList.remove('d-none');
    }

    form.reset();
  });
}

// عرض رسالة إشعار منبثقة سريعة (Toast)
function displayToast(message) {
  let toastContainer = document.getElementById('toastNotificationArea');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastNotificationArea';
    toastContainer.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1055;';
    document.body.appendChild(toastContainer);
  }

  const toastItem = document.createElement('div');
  toastItem.className = 'alert alert-success shadow mb-2 small';
  toastItem.innerHTML = `<i class="bi bi-check-circle me-1"></i> ${message}`;
  toastContainer.appendChild(toastItem);

  setTimeout(() => {
    toastItem.style.opacity = '0';
    toastItem.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toastItem.remove(), 400);
  }, 2500);
}

// تشغيل الوظائف عند اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupScrollTop();

  setupSlider();
  setupHomepage();
  setupEventsPage();
  setupEventDetailPage();
  setupContactForm();

  const regForm = document.getElementById('regForm');
  if (regForm) {
    regForm.addEventListener('submit', handleRegistrationSubmit);
  }

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
});
