document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé !");

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    let swiperInstance = null;

    if (!menuToggle || !navLinks) {
        console.error("Erreur : Élément introuvable !");
        return;
    }

    if (window.location.pathname.includes("contact.html")) {
        document.querySelector(".header").classList.add("bg-contact");
    }

    menuToggle.addEventListener("click", function () {
        console.log("Bouton menu cliqué !");
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    function initSwiper() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile && !swiperInstance) {
            console.log("Activation de Swiper en mode mobile...");
            swiperInstance = new Swiper(".swiper-container", {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
                // loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    // dynamicBullets: true,
                },
                breakpoints: {
                    // when window width is >= 769px
                    769: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                }
            });
        } else if (isMobile && swiperInstance) {
            swiperInstance.enable();
        } else if (!isMobile && swiperInstance) {
            swiperInstance.disable();
        }
    }

    initSwiper();

    let resizeTimeout;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initSwiper();
        }, 200);
    });
});

window.addEventListener("submit", function () {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("return-message").style.display = "flex";
    canvas.height = document.body.clientHeight;
});