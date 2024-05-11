<script setup>
import { ref, onMounted, TransitionGroup } from "vue";

// tab controls
const activeTab = ref("tactician");

const changeTabs = (tab) => {
  if (tab === "tactician") {
    activeTab.value = "artisan";
  } else if (tab === "artisan") {
    activeTab.value = "tactician";
  }
};
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
      <section class="flex justify-center items-baseline gap-8">
        <div class="justify-center text-center flex flex-col gap-2">
          <img
            src="/images/rankings/glhl_silver.png"
            alt="silver medal"
            class="w-28 rounded-full mx-auto shadow-md shadow-black"
          />
          <p>Todd Skinner</p>
        </div>

        <div class="justify-center text-center flex flex-col gap-2">
          <img
            src="/images/rankings/glhl_legend.png"
            alt="gold medal"
            class="w-52 mx-auto"
          />
          <p>Todd Skinner</p>
        </div>

        <div class="justify-center text-center flex flex-col gap-2">
          <img
            src="/images/rankings/glhl_bronze.png"
            alt="bronze medal"
            class="w-28 rounded-full mx-auto shadow-md shadow-black"
          />
          <p>Todd Skinner</p>
        </div>
      </section>

      <div class="mx-auto w-full flex flex-col px-2">
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
          class="container relative min-h-96 bg-gradient-to-t to-glhl-red-400 from-glhl-red-100 rounded-b-md"
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
