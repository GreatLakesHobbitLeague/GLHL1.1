<script setup>
const props = defineProps({
  text: { type: String },
  destination: { type: String },
  external: { type: Boolean, default: false },
});
</script>
<template>
  <NuxtLink
    v-if="!external"
    :to="destination"
    class="inline-block bg-[url(/public\images\textures\glhl_gold.webp)] text-black bg-cover bg-center text-center shadow-black hover:text-white shadow-md hover:scale-110 transition font-Ringbearer px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-glhl-gold-100"
  >
    {{ text }} ➔
  </NuxtLink>

  <a
    v-else
    :href="destination"
    target="_blank"
    class="inline-block bg-[url(/public\images\textures\glhl_gold.webp)] text-black bg-cover bg-center text-center shadow-black hover:text-white shadow-md hover:scale-110 transition font-Ringbearer px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-glhl-gold-100"
  >
    {{ text }} ➔
  </a>
</template>
