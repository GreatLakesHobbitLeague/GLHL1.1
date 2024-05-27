<template>
  <transition name="fade"
    ><div v-if="visible" class="lightbox" @click.self="close">
      <div class="lightbox-content">
        <button class="close-btn" @click="close">×</button>
        <NuxtImg :src="images[index].src" alt="Image" />
        <p
          class="caption image-caption bg-gradient-to-b from-glhl-red-100 to-glhl-red-400 w-full rounded-b-2xl font-Cinzel font-bold"
        >
          Entry {{ index + 1 }}
        </p>
      </div>
    </div></transition
  >
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:visible"]);

const index = ref(props.initialIndex);

// Watch for prop changes to reset index if the lightbox is reopened
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      index.value = props.initialIndex;
    }
  }
);

const close = () => {
  emit("update:visible", false);
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

.lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.caption {
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
