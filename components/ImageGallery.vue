<template>
  <div class="gallery">
    <Lightbox
      :images="images"
      :initialIndex="lightboxIndex"
      :visible="lightboxVisible"
      @update:visible="lightboxVisible = $event"
    />
    <div
      class="image-container hover:scale-105 transition-all"
      v-for="(image, idx) in images"
      :key="idx"
    >
      <img
        :src="image"
        :alt="`Entry ${idx + 1}`"
        @click="showImage(idx)"
        class="gallery-image rounded-t-lg"
      />
      <p
        class="image-caption bg-gradient-to-b from-glhl-red-100 to-glhl-red-400 w-full rounded-b-lg shadow-sm shadow-black font-Cinzel font-bold"
      >
        Entry {{ idx + 1 }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Lightbox from "./Lightbox.vue";

// Define props
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

// State variables
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

// Methods
const showImage = (idx) => {
  lightboxIndex.value = idx;
  lightboxVisible.value = true;
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.image-container {
  width: 200px;
  height: 250px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.image-caption {
  text-align: center;
  padding: 5px;
  font-size: 0.9rem;
  color: white;
}
</style>
