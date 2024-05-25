<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const screenWidth = ref();

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <section class="min-h-screen">
    <div class="mt-20 sm:mt-32 md:mt-52"></div>

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSehKxtnM_eP01ACTpmqZCbMMC0FJ2sssFjTgKrLcYkdZnv6_Q/viewform?embedded=true"
      :width="screenWidth > 640 ? 640 : 360"
      height="1000"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      class="mx-auto"
      >Loading…</iframe
    >
  </section>
</template>
