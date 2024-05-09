<script lang="ts" setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const events = ref([]);
const loading = ref(false);
const error = ref(null);

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
</script>

<template>
  <NuxtLayout>
    <div class="md:mt-60"></div>

    <!-- HEADER -->
    <div
      class="bg-[url(/public\images\cinematics\woses_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"
    >
      <div class="bg-black bg-opacity-85 text-white flex justify-center my-32">
        <!-- TEXTBOX -->
        <div class="my-auto flex flex-col">
          <p class="text-6xl font-Ringbearer justify-center py-10">Events</p>
        </div>
      </div>
    </div>

    <PreviousWinners></PreviousWinners>

    <!-- PAGEBREAK -->
    <div
      class="flex justify-center mx-auto gap-8 md:mb-20 lg:mb-20 max-w-[90%]"
    >
      <img
        class="md:w-[50%] w-full opacity-10 my-[5rem] flex"
        src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Gimli_1.png"
        alt="gimli axe"
      />
      <img
        class="w-[50%] opacity-10 my-[5rem] transform scale-x-[-1] md:flex hidden"
        src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Gimli_1.png"
        alt="gimli axe"
      />
    </div>

    <p
      class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 pb-16"
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
            </div>
          </div>
          <p class="font-mono lg:text-left">
            {{ event.EventDescription }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
