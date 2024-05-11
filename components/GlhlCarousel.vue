<template>
  <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide" v-for="(item, index) in items" :key="index">
          <img :src="item.image" alt="" class="mx-auto rounded-xl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Splide from "@splidejs/splide";

const items = [
  { image: "/images/event-photos/mchc.webp" },
  { image: "/images/event-photos/february2024.webp" },
  { image: "/images/event-photos/adepticon2024.webp" },
  { image: "/images/event-photos/october2023.webp" }
];

let splide = null;

onMounted(() => {
  const options = {
    type: "slide", // Set the transition type to slide
    perPage: getPerPage(), // Show multiple images at once
    autoplay: true, // Enable autoplay
    interval: 500, // Delay between slides (in milliseconds)
    rewind: true, // Enable seamless looping
    pauseOnHover: false // Do not pause autoplay on hover
  };

  splide = new Splide(".splide", options).mount();

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  if (splide !== null) {
    splide.destroy();
  }
  window.removeEventListener("resize", handleResize);
});

function getPerPage() {
  return window.innerWidth < 600 ? 1 : 3;
}

function handleResize() {
  splide.options.perPage = getPerPage();
  splide.refresh();
}
</script>

<style scoped>
.splide__slide {
  transition: transform 0.5s ease; /* Smooth transition effect */
}

.splide__slide img {
  width: 90%;
}

.splide__slide.is-active {
}
</style>
