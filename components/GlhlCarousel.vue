<template>
  <div class="relative mt-14">
    <div class="absolute -top-14 h-14 w-full bg-gradient-to-t from-black to-glhl-dark-gray z-20 shadow-md shadow-black"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(photo, index) in photos" :key="index">
          <img :src="photo.image" alt="carousel-image" class="shadow-xl shadow-black">
        </div>
      </div>
      <!-- Add pagination if needed -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const photos = [
  { image: "/images/event-photos/mchc.webp" },
  { image: "/images/event-photos/february2024.webp" },
  { image: "/images/event-photos/adepticon2024.webp" },
  { image: "/images/event-photos/october2023.webp" }
];

const swiperInstance = ref(null);
let autoplayInterval;

onMounted(() => {
  swiperInstance.value = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true, // Center the active slide
    // Disable autoplay in the Swiper options
    autoplay: false,
    // Add slide effect
    effect: 'slide',
    // Add pagination if needed
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Add breakpoints to adjust slidesPerView on different screen sizes
    breakpoints: {
      // When window width is >= 768px (tablet and larger screens)
      768: {
        slidesPerView: 3,
      },
      // When window width is < 768px (mobile screens)
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Start autoplay manually
  startAutoplay();
});

onBeforeUnmount(() => {
  // Cleanup interval before component unmounts
  clearInterval(autoplayInterval);
});

function startAutoplay() {
  // Set interval to change slides every 3000 milliseconds
  autoplayInterval = setInterval(() => {
    swiperInstance.value.slideNext(); // Move to the next slide
  }, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval); // Stop autoplay
}
</script>

<style scoped>
.swiper-slide-active {
  z-index: 2;
}

/* Customize the size of the center slide */
.swiper-slide-active img {
  width: 100%;
  height: auto;
  transform: scale(1.2); /* Adjust the scale factor as needed */
  transition: transform 0.5s ease; /* Increase the transition duration for smoother animation */
  border-radius: 0 0 12px 12px; /* Border radius only on the bottom */
}

/* Fade effect for previous and next slides */
.swiper-slide-prev img,
.swiper-slide-next img {
  opacity: 0.8; /* Adjust the opacity as needed */
}

/* Hide the extra slides on mobile */
@media (max-width: 767px) {
  .swiper-slide:not(.swiper-slide-active) {
    display: none;
  }
}
</style>
