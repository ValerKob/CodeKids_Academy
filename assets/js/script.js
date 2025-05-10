// Tailwind
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        violet: "#1E3D59",
      },
      fontFamily: {
        sans: ['"Comic Neue"', "sans-serif"],
        heading: ['"Baloo 2"', "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
};

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

// FAQ accordion
const faqButtons = document.querySelectorAll("#faq button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");

    // Toggle content visibility
    content.classList.toggle("hidden");

    // Rotate icon
    icon.classList.toggle("rotate-180");

    // Close other items
    faqButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.nextElementSibling.classList.add("hidden");
        otherButton.querySelector("i").classList.remove("rotate-180");
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!menu.classList.contains("hidden")) {
        menuBtn.classList.remove("open");
        menu.classList.add("hidden");
        menu.classList.remove("flex");
      }
    }
  });
});

// Readdy
// Совмещённая логика фильтра и активной кнопки
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".course-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Обновление активной кнопки
    filterButtons.forEach((btn) => {
      btn.classList.remove(
        "active",
        "bg-indigo-600",
        "hover:bg-indigo-700",
        "text-white"
      );
      btn.classList.add("bg-gray-200", "text-gray-700");
    });

    this.classList.remove("bg-gray-200", "text-gray-700");
    this.classList.add(
      "active",
      "bg-indigo-600",
      "hover:bg-indigo-700",
      "text-white"
    );

    // Фильтрация карточек
    const age = this.getAttribute("data-age");

    cards.forEach((card) => {
      if (age === "all" || card.classList.contains(age)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Мобильное меню
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Аккордеон FAQ
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".accordion-icon");

      content.classList.toggle("active");
      icon.style.transform = content.classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0)";
    });
  });

  // Слайдер отзывов
  const reviewsTrack = document.querySelector(".reviews-track");
  const reviewSlides = document.querySelectorAll(".review-slide");
  const prevButton = document.querySelector(".review-prev");
  const nextButton = document.querySelector(".review-next");

  let currentIndex = 0;
  const slidesToShow =
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const slideWidth = 100 / slidesToShow;
  const maxIndex = reviewSlides.length - slidesToShow;

  reviewSlides.forEach((slide) => {
    slide.style.width = `${slideWidth}%`;
  });

  function updateSlider() {
    reviewsTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // // Совмещённая логика фильтра и активной кнопки
  // const filterButtons = document.querySelectorAll(".filter-btn");
  // const cards = document.querySelectorAll(".course-card");

  // filterButtons.forEach((button) => {
  //     button.addEventListener("click", function () {
  //         // Обновление активной кнопки
  //         filterButtons.forEach((btn) => {
  //             btn.classList.remove("active", "bg-indigo-600", "hover:bg-indigo-700", "text-white");
  //             btn.classList.add("bg-gray-200", "text-gray-700");
  //         });

  //         this.classList.remove("bg-gray-200", "text-gray-700");
  //         this.classList.add("active", "bg-indigo-600", "hover:bg-indigo-700", "text-white");

  //         // Фильтрация карточек
  //         const age = this.getAttribute("data-age");

  //         cards.forEach((card) => {
  //             if (age === "all" || card.classList.contains(age)) {
  //                 card.style.display = "block";
  //             } else {
  //                 card.style.display = "none";
  //             }
  //         });
  //     });
  // });

  // Кнопка наверх
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.remove("opacity-100", "visible");
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Плавная прокрутка к якорям
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Закрыть мобильное меню при клике на ссылку
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });

  // Кастомные чекбоксы
  const checkboxes = document.querySelectorAll(
    '.custom-checkbox input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const checkmark = this.nextElementSibling;
      if (this.checked) {
        checkmark.classList.add("checked");
      } else {
        checkmark.classList.remove("checked");
      }
    });
  });
});

const slides = [
  {
    title: "Программирование — суперсила будущего!",
    text: "Современные курсы для детей от 7 до 18 лет. Развиваем мышление и творчество.",
    image:
      "./assets/images/main/slider/slider_1.jpg",
  },
  {
    title: "Создавай игры и сайты с нуля!",
    text: "Обучение Unity, Python, веб-разработке и многому другому.",
    image:
      "https://img.freepik.com/free-photo/boys-gaming_23-2148141557.jpg?t=st=1746464262~exp=1746467862~hmac=bc427146e9006c9ae277b75d733ff0b86579aca70e5ec2ad94287d8ceac00070&w=1380",
  },
  {
    title: "Твое IT-будущее начинается здесь!",
    text: "Интерактивные курсы, реальные проекты, поддержка преподавателя.",
    image:
      "https://img.freepik.com/free-photo/kids-working-together-laptop_23-2148761989.jpg?t=st=1746464337~exp=1746467937~hmac=5a9cf89ea55816a1cd22a169e877b36f0dd3db1b7a81fd002a7af15c20011d96&w=1380",
  },
];

let currentIndex = 0;
const titleEl = document.getElementById("hero-title");
const textEl = document.getElementById("hero-text");
const imageEl = document.getElementById("hero-image");
const contentWrapper = document.getElementById("hero-content");
const imageWrapper = document.getElementById("hero-image-wrapper");

setInterval(() => {
  // Сначала запускаем исчезновение
  contentWrapper.classList.remove("fade-in");
  contentWrapper.classList.add("fade-out");
  imageWrapper.classList.remove("fade-in");
  imageWrapper.classList.add("fade-out");

  setTimeout(() => {
    // Меняем контент
    currentIndex = (currentIndex + 1) % slides.length;
    titleEl.innerHTML = slides[currentIndex].title;
    textEl.textContent = slides[currentIndex].text;
    imageEl.src = slides[currentIndex].image;

    // Запускаем появление
    contentWrapper.classList.remove("fade-out");
    contentWrapper.classList.add("fade-in");
    imageWrapper.classList.remove("fade-out");
    imageWrapper.classList.add("fade-in");
  }, 500); // Время анимации исчезновения
}, 5000);

// Кнопка "вверх"
(function () {
  const scrollUp = document.querySelector(".scroll-up");
  const path = document.querySelector(".scroll-up__svg-path");
  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = `${pathLength} ${pathLength}`;
  path.style.transition = "stroke-dashoffset 20ms";

  const getScrollTop = () =>
    window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener("scroll", () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollOffset =
      pathLength - (getScrollTop() * pathLength) / scrollHeight;
    path.style.strokeDashoffset = scrollOffset;

    if (getScrollTop() > 100) {
      scrollUp.classList.add("scroll-up--active");
    } else {
      scrollUp.classList.remove("scroll-up--active");
    }
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.closest("div").parentElement;
    const content = container.querySelector(".toggle-content");
    const inner = content.querySelector(".inner");
    const icon = btn.querySelector("i");

    if (content.style.height === "0px" || content.style.height === "") {
      const height = inner.scrollHeight;
      content.style.height = height + "px";
      icon.classList.add("rotate-180");

      // После завершения анимации - сбрасываем height, чтобы он подстраивался автоматически
      setTimeout(() => {
        content.style.height = "auto";
      }, 500);
    } else {
      // Устанавливаем высоту явно перед обнулением, чтобы анимация сработала
      content.style.height = inner.scrollHeight + "px";

      // Принудительно перерисовываем (reflow)
      void content.offsetHeight;

      content.style.height = "0px";
      icon.classList.remove("rotate-180");
    }
  });
});

// Проверка и установка темы при загрузке страницы
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Обработчик клика по кнопке смены темы
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
      if (btn.querySelector('.fa-moon') || btn.querySelector('.fa-sun')) {
          document.documentElement.classList.toggle('dark');
          if (document.documentElement.classList.contains('dark')) {
              localStorage.setItem('theme', 'dark');
          } else {
              localStorage.setItem('theme', 'light');
          }
      }
  });
});