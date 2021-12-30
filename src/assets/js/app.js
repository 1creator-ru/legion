import "bootstrap/js/src/modal.js";
import "bootstrap/js/src/dropdown.js";
import "bootstrap/js/src/button.js";
import { Controller, Navigation, Pagination, Swiper, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination]);
const blogVideoSlider = new Swiper(".blog__video-slider", {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".video-slider__button-next",
        prevEl: ".video-slider__button-prev",
    },
    breakpoints: {
        960: {
            slidesPerView: 3,
        },
        // 1230: {
        //     slidesPerView: 3,
        // },
    },
});
