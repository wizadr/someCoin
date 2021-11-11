import Swiper from "swiper";

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 2,
            spaceBetweenSlides: 15,
        },
        // when window width is <= 999px
        550: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        650: {
            slidesPerView: 4,
            spaceBetweenSlides: 40
        },
    }
});

const swiperLogo = new Swiper('.swiper-container-logo', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 2,
            spaceBetweenSlides: 15,
        },
        // when window width is <= 999px
        550: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        768: {
            slidesPerView: 4,
            spaceBetweenSlides: 40
        },
    }
});


const swiperAboutUs = new Swiper('.swiper-container-aboutUs', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 1,
            spaceBetweenSlides: 15,
        },

        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
    }
});



const swiperExpertise = new Swiper('.swiper-container-expertise', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 2,
            spaceBetweenSlides: 15,
        },

        550: {
            slidesPerView: 3,
            spaceBetweenSlides: 20,
        },
    }
});



const swiperSectors = new Swiper('.swiper-container-sectors', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 2,
            spaceBetweenSlides: 15,
        },

        550: {
            slidesPerView: 3,
            spaceBetweenSlides: 20,
        },
    }
});