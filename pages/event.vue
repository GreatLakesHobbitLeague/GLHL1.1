<script setup>
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const events = ref([]);
const loading = ref(false);
const error = ref(null);

// const eventImages = [
//   { src: "images/event-photos/mchc.webp" },
//   { src: "images/event-photos/february2024.webp" },
//   { src: "images/event-photos/adepticon2024.webp" },
//   { src: "images/event-photos/october2023.webp" },

//   // Add more images here if needed
// ];

onMounted(async () => {
  try {
    loading.value = true;
    const { data, error: fetchError } = await $supabase
      .from("events")
      .select("*");
    if (fetchError) {
      throw new Error(fetchError.message);
    }
    events.value = data;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});

//check screen size for carousel
const screenWidth = ref(0); // Initialize with 0

const isSmallScreen = computed(() => {
  return screenWidth.value < 1024; // You can adjust this threshold according to your needs
});

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// Only execute code on the client-side
if (process.client) {
  onMounted(() => {
    screenWidth.value = window.innerWidth; // Initialize screenWidth on mount
    window.addEventListener("resize", updateScreenWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateScreenWidth);
  });
}
</script>

<template>
  <NuxtLayout>
    <div class="mt-20 sm:mt-32 md:mt-52"></div>

    <!-- HEADER -->
    <div
      class="bg-[url(/public\images\cinematics\woses_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"
    >
      <div class="bg-black bg-opacity-85 text-white flex justify-center">
        <!-- TEXTBOX -->
        <div class="my-auto flex flex-col">
          <p class="text-6xl font-Ringbearer justify-center py-10">Events</p>
        </div>
      </div>
    </div>

    <GlhlCarousel v-if="!isSmallScreen" />
    <div v-else>
      <div
        class="h-14 w-full bg-gradient-to-t from-black to-glhl-dark-gray z-20 shadow-md shadow-black"
      ></div>
      <img
        src="/images/event-photos/adepticon2024.webp"
        alt="adepticon 2024"
        class="shadow-xl shadow-black"
      />
    </div>

    <div class="flex justify-center mx-auto gap-8 max-w-[90%]">
      <img
        class="md:w-[50%] w-full opacity-10 my-[5rem] flex"
        src="/images/mesbg-silhouettes/Sting.png"
        alt="sting"
      />
      <img
        class="w-[50%] opacity-10 my-[5rem] transform scale-x-[-1] md:flex hidden"
        src="/images/mesbg-silhouettes/Sting.png"
        alt="sting"
      />
    </div>

    <PreviousWinners />

    <!-- PAGEBREAK -->
    <div class="flex justify-center mx-auto gap-8 max-w-[90%]">
      <img
        class="md:w-[50%] w-full opacity-10 my-[5rem] flex"
        src="/images/mesbg-silhouettes/Gimli_1.png"
        alt="gimli axe"
      />
      <img
        class="w-[50%] opacity-10 my-[5rem] transform scale-x-[-1] md:flex hidden"
        src="/images/mesbg-silhouettes/Gimli_1.png"
        alt="gimli axe"
      />
    </div>

    <p
      class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8"
    >
      Upcoming Events
    </p>

    <!-- EVENT INFO CONTAINER -->
    <div
      v-for="(event, index) in events"
      :key="index"
      class="odd:bg-[url(/public\images\textures\red_leather.webp)] bg-[url(/public\images\textures\black_iron.webp)] bg-cover my-8"
    >
      <div
        class="w-full bg-[url(/public\images\textures\glhl_gold.webp)] bg-cover shadow-lg shadow-black text-white h-2"
      ></div>
      <div
        class="w-full shadow-lg shadow-black text-white py-20 flex flex-col lg:flex-row justify-center gap-16 bg-cover lg:bg-auto"
      >
        <img
          v-if="index % 2 === 0"
          class="max-w-[30%] lg:max-w-[15%] brightness-0 invert-[1] my-auto mx-auto lg:mx-0"
          src="public\images\mesbg-silhouettes\HoG.png"
          alt="horn of gondor"
        />
        <img
          v-if="index % 2 != 0"
          class="max-w-[30%] lg:max-w-[10%] brightness-0 invert-[1] my-auto mx-auto lg:mx-0"
          src="public\images\mesbg-silhouettes\white_hand.png"
          alt="horn of gondor"
        />

        <div
          class="flex flex-col px-6 lg:max-w-[50%] gap-6 my-auto lg:mx-0 mx-auto leg:text-left text-center"
        >
          <div class="flex lg:justify-between justify-center">
            <div class="flex gap-2 flex-col">
              <p class="font-Ringbearer text-3xl lg:text-4xl xl:text-5xl">
                {{ event.EventTitle }}
              </p>
              <p class="font-Ringbearer text-2xl italic">
                {{ event.EventDate }}
              </p>
              <p class="font-Ringbearer text-xl">
                {{ event.EventCity }}
              </p>
              <p class="font-Cinzel font-bold text-xl">
                Hobby Focus:
                <span class="font-sans font-medium">
                  {{ event.HobbyFocus }}</span
                >
              </p>
            </div>
          </div>
          <p class="lg:text-left">
            {{ event.EventDescription }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
