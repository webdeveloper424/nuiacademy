var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
    slidesPerView: 1,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});