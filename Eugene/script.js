document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navigationMenu = document.querySelector(".navigation--menu");
    const body = document.body;

    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    body.appendChild(overlay);

    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        navigationMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
    });

    overlay.addEventListener("click", function () {
        burgerMenu.classList.remove("active");
        navigationMenu.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "";
    });

    const navLinks = document.querySelectorAll(".nav--link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            burgerMenu.classList.remove("active");
            navigationMenu.classList.remove("active");
            overlay.classList.remove("active");
            body.style.overflow = "";
        });
    });

    const swiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
});
