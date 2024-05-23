<script setup>
import { createClient } from "@supabase/supabase-js";
// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const legend = ref([]);
const valour = ref([]);
const fortitude = ref([]);
const loading = ref(false);
const error = ref(null);
const isAtBottom = ref(false);

onMounted(async () => {
  try {
    loading.value = true;

    // Fetch data from the "legend" table
    const { data: legendData, error: legendError } = await $supabase
      .from("artisansOfLegend")
      .select("*");

    if (legendError) {
      throw new Error(legendError.message);
    }
    legend.value = legendData;

    // Fetch data from the "valour" table
    const { data: valourData, error: valourError } = await $supabase
      .from("artisansOfValour")
      .select("*");

    if (valourError) {
      throw new Error(valourError.message);
    }
    valour.value = valourData;

    // Fetch data from the "fortitude" table
    const { data: fortitudeData, error: fortitudeError } = await $supabase
      .from("artisansOfFortitude")
      .select("*");

    if (fortitudeError) {
      throw new Error(fortitudeError.message);
    }
    fortitude.value = fortitudeData;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});

const handleScroll = () => {
  const scrollContainer = scrollContainerRef.value;
  const scrollTop = scrollContainer.scrollTop;
  const scrollHeight = scrollContainer.scrollHeight;
  const clientHeight = scrollContainer.clientHeight;

  isAtBottom.value = scrollTop + clientHeight >= scrollHeight;
};

const scrollContainerRef = ref(null);
</script>

<template>
  <div v-if="!loading">
    <div
      ref="scrollContainerRef"
      @scroll="handleScroll"
      class="bg-white rounded-b-md flex flex-col gap-1 h-96 overflow-y-scroll relative"
    >
      <div
        class="flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-cover bg-[url(/public\images\textures/glhl_gold.webp)] p-2 shadow-md shadow-black rounded-b-md"
      >
        <p class="w-[25%]"></p>
        <p class="w-[75%] text-left">Artisans of Legend</p>
      </div>
      <!-- Artisans of Legend   -->
      <div
        v-for="(player, index) in legend"
        :key="index"
        class="flex w-full text-left items-center even:bg-glhl-light-gray px-2"
      >
        <p class="w-[50%] font-bold text-lg font-Cinzel">{{ player.Rank }}</p>
        <p
          class="w-full"
          :class="player.Qualified ? 'font-semibold' : 'font-light'"
        >
          {{ player.Name }}
        </p>
        <p class="w-[50%] text-center">{{ player.TotalPoints }}</p>
      </div>

      <div
        class="sticky top-0 flex text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\images\textures/glhl_silver.webp)] p-2 shadow-md shadow-black rounded-b-md"
      >
        <p class="w-[25%]"></p>
        <p class="w-[75%] text-left">Artisans of Valour</p>
      </div>
      <!-- Artisans of Valour  -->
      <div
        v-for="(player, index) in valour"
        :key="index"
        class="flex w-full text-left items-center even:bg-glhl-light-gray px-2"
      >
        <p class="w-[50%] font-bold text-lg font-Cinzel">{{ player.Rank }}</p>
        <p
          class="w-full"
          :class="player.Qualified ? 'font-semibold' : 'font-light'"
        >
          {{ player.Name }}
        </p>
        <p class="w-[50%] text-center">{{ player.TotalPoints }}</p>
      </div>

      <!-- Artisans of Fortitude  -->
      <div
        class="flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\images\textures/glhl_bronze.webp)] p-2 shadow-md shadow-black rounded-b-md"
      >
        <p class="w-[25%]"></p>
        <p class="w-[75%] text-left">Artisans of Fortitude</p>
        <p class=""></p>
      </div>

      <div
        v-for="(player, index) in fortitude"
        :key="index"
        class="flex w-full text-left items-center even:bg-glhl-light-gray px-2"
      >
        <p class="w-[50%] font-bold text-lg font-Cinzel">{{ player.Rank }}</p>
        <p
          class="w-full"
          :class="player.Qualified ? 'font-semibold' : 'font-light'"
        >
          {{ player.Name }}
        </p>
        <p class="w-[50%] text-center">{{ player.TotalPoints }}</p>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="!isAtBottom"
        class="h-10 bottom-0 opacity-85 left-0 z-40 absolute rounded-b-lg w-full bg-gradient-to-b from-transparent to-glhl-dark-gray"
      ></div
    ></transition>
  </div>
</template>
