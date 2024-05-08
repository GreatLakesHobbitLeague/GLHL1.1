<script setup>
import { ref, onMounted, TransitionGroup } from "vue";

const rankings = ref([]);
const activeTab = ref("tactician");

const changeTabs = (tab) => {
  if (tab === "tactician") {
    activeTab.value = "artisan";
  } else if (tab === "artisan") {
    activeTab.value = "tactician";
  }
};

onMounted(async () => {
  try {
    const result = await $fetch("/api/query?col=rankings");
    events.value = result.result;
  } catch (error) {
    console.error("Error fetching pages:", error);
    // Handle error if needed
  }
});
</script>
<template>
  <div class="md:mt-60"></div>

  <!-- HEADER -->
  <div
    class="bg-[url(/public\images\cinematics\hero_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"
  >
    <div class="bg-black bg-opacity-85 text-white flex justify-center my-32">
      <!-- TEXTBOX -->
      <div class="my-auto flex flex-col">
        <p class="text-6xl font-Ringbearer justify-center py-10">Rankings</p>
      </div>
    </div>
  </div>

  <div class="mx-auto flex flex-col px-2 sm:max-w-[600px] pb-20">
    <div class="flex justify-between">
      <!-- Buttons -->
      <p class="my-auto font-Ringbearer text-sm xs:text-xl">
        current standings
      </p>
      <div class="flex gap-1 mr-2">
        <button
          @click="changeTabs('artisan')"
          class="w-20 sm:w-28 text-xs sm:text-base bg-gradient-to-t hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 rounded-t-md sm:px-2 p-1.5 text-white font-Ringbearer"
          :class="
            activeTab === 'tactician'
              ? ' shadow-black shadow-lg '
              : ' opacity-80'
          "
        >
          Tactician
        </button>
        <button
          @click="changeTabs('tactician')"
          class="w-20 sm:w-28 bg-gradient-to-t text-xs sm:text-base rounded-t-md hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 sm:px-2 p-1 text-white font-Ringbearer"
          :class="
            activeTab === 'artisan' ? 'shadow-black shadow-lg  ' : 'opacity-80'
          "
        >
          Artisan
        </button>
      </div>
    </div>
    <div
      class="flex bg-glhl-red-400 text-sm sm:text-base rounded-t-md font-Cinzel italic z-10 text-white p-2 text-center"
    >
      <p class="w-full">Rank</p>
      <p class="w-full">Player</p>
      <p class="w-full">W-L-D</p>
      <p class="w-full">TP</p>
      <p class="w-full">VP</p>
    </div>
    <div
      class="bg-gradient-to-t to-glhl-red-400 from-glhl-red-100 rounded-b-md"
    >
      <div class="m-0.5">
        <Transition name="slide-in" mode="out-in">
          <rankings-artisan v-if="activeTab === 'artisan'" class="w-full" />

          <rankings-tactician
            v-else-if="activeTab === 'tactician'"
            class="w-full"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
