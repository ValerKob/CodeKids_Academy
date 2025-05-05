// Tailwind
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                accent: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                violet: "#1E3D59",
            },
            fontFamily: {
                sans: ['"Comic Neue"', 'sans-serif'],
                heading: ['"Baloo 2"', 'sans-serif'],
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
        }
    }
}

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

// FAQ accordion
const faqButtons = document.querySelectorAll('#faq button');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle content visibility
        content.classList.toggle('hidden');
        
        // Rotate icon
        icon.classList.toggle('rotate-180');
        
        // Close other items
        faqButtons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.nextElementSibling.classList.add('hidden');
                otherButton.querySelector('i').classList.remove('rotate-180');
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!menu.classList.contains('hidden')) {
                menuBtn.classList.remove('open');
                menu.classList.add('hidden');
                menu.classList.remove('flex');
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
            btn.classList.remove("active", "bg-indigo-600", "hover:bg-indigo-700", "text-white");
            btn.classList.add("bg-gray-200", "text-gray-700");
        });

        this.classList.remove("bg-gray-200", "text-gray-700");
        this.classList.add("active", "bg-indigo-600", "hover:bg-indigo-700", "text-white");

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
        '.custom-checkbox input[type="checkbox"]',
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