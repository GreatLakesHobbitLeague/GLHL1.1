<script setup>
import { ref, onMounted, TransitionGroup } from "vue";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const artisans = ref([]);
const tacticians = ref([]);
const helperText = ref(false);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;

    // Fetch data from the "artisansOfLegend" table
    const { data: artisansData, error: artisansError } = await $supabase
      .from("artisansOfLegend")
      .select("*");

    if (artisansError) {
      throw new Error(artisansError.message);
    }
    artisans.value = artisansData;

    // Fetch data from the "tacticiansOfLegend" table
    const { data: tacticiansData, error: tacticiansError } = await $supabase
      .from("tacticiansOfLegend")
      .select("*");

    if (tacticiansError) {
      throw new Error(tacticiansError.message);
    }
    tacticians.value = tacticiansData;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});

// tab controls
const activeTab = ref("tactician");

const changeTabs = (tab) => {
  if (tab === "tactician") {
    activeTab.value = "artisan";
  } else if (tab === "artisan") {
    activeTab.value = "tactician";
  }
};

const toggleHelperText = () => {
  helperText.value = !helperText.value;
};
</script>
<template>
  <div class="mt-20 sm:mt-32 md:mt-52"></div>

  <!-- HEADER -->
  <div
    class="bg-[url(/public\images\cinematics\hero_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"
  >
    <div class="bg-black bg-opacity-85 text-white flex justify-center mb-10">
      <!-- TEXTBOX -->
      <div class="my-auto flex flex-col">
        <p class="text-6xl font-Ringbearer justify-center py-10">Rankings</p>
      </div>
    </div>
  </div>

  <!-- Main Body -->
  <section class="pb-20 flex justify-center items-center">
    <div>
      <img
        src="/images/mesbg-silhouettes/Legolas.png"
        alt="legolas knives"
        class="-rotate-45 opacity-10 w-full hidden lg:flex"
      />
    </div>

    <div class="flex flex-col gap-8 sm:max-w-[600px] w-full">
      <!-- Coin Podium -->
      <section
        class="flex justify-center items-baseline gap-8 relative font-Ringbearer px-4"
      >
        <div class="justify-center text-center flex flex-col gap-2 z-10">
          <img
            src="/images/rankings/glhl_silver.png"
            alt="silver medal"
            class="w-28 rounded-full mx-auto shadow-md shadow-black"
          />
          <div v-if="!loading">
            <transition name="slide-in" mode="out-in">
              <p v-if="activeTab === 'tactician'">
                {{ tacticians.length > 0 ? tacticians[1].Name : "Loading..." }}
              </p>
              <p v-else>
                {{ artisans.length > 0 ? artisans[1].Name : "Loading..." }}
              </p>
            </transition>
          </div>
        </div>

        <div class="justify-center text-center flex flex-col gap-2 z-10">
          <img
            src="/images/rankings/glhl_legend.png"
            alt="gold medal"
            class="w-52 mx-auto"
          />
          <div v-if="!loading">
            <transition name="slide-in" mode="out-in">
              <p v-if="activeTab === 'tactician'">
                {{ tacticians.length > 0 ? tacticians[0].Name : "Loading..." }}
              </p>
              <p v-else>
                {{ artisans.length > 0 ? artisans[0].Name : "Loading..." }}
              </p>
            </transition>
          </div>
        </div>

        <div class="justify-center text-center flex flex-col gap-2 z-10">
          <img
            src="/images/rankings/glhl_bronze.png"
            alt="bronze medal"
            class="w-28 rounded-full mx-auto shadow-md shadow-black"
          />
          <div v-if="!loading">
            <transition name="slide-in" mode="out-in">
              <p v-if="activeTab === 'tactician'">
                {{ tacticians.length > 0 ? tacticians[2].Name : "Loading..." }}
              </p>
              <p v-else>
                {{ artisans.length > 0 ? artisans[2].Name : "Loading..." }}
              </p>
            </transition>
          </div>
        </div>
      </section>

      <div class="mx-auto w-full flex flex-col px-2">
        <transition name="slide-in"
          ><p v-if="helperText" class="mb-4">
            Names that are <span class="font-semibold">Bolded</span> are
            qualified. To qualify, a player must participate in 3 events.
            Rankings are determined by the sum of each player's 3 lowest scores.
          </p>
        </transition>

        <div class="flex justify-between">
          <!-- Buttons -->
          <p class="my-auto font-Ringbearer text-sm xs:text-xl flex gap-1">
            current standings
            <button
              @click="toggleHelperText"
              class="w-5 h-5 hover:scale-110 transition-all"
            >
              <img src="/images/icons/question.png" alt="question mark icon" />
            </button>
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
                activeTab === 'artisan'
                  ? 'shadow-black shadow-lg  '
                  : 'opacity-80'
              "
            >
              Artisan
            </button>
          </div>
        </div>
        <div
          class="flex bg-glhl-red-400 text-sm sm:text-base rounded-t-md font-Cinzel italic z-10 text-white items-center p-2 text-left"
        >
          <p class="w-full">Rank</p>
          <p class="w-full">Player</p>
          <p class="w-[50%]">Total Points</p>
        </div>
        <div
          class="container relative min-w-full min-h-96 bg-gradient-to-t to-glhl-red-400 from-glhl-red-100 rounded-b-md"
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
    </div>
    <div>
      <img
        src="/images/mesbg-silhouettes/Legolas.png"
        alt="legolas knives"
        class="rotate-45 scale-x-[-1] opacity-10 w-full hidden lg:flex"
      />
    </div>
  </section>
</template>
<style scoped></style>
