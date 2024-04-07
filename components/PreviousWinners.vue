<script setup>
import { ref, onMounted } from "vue";

const winners = ref([]);

onMounted(async () => {
  try {
    const result = await $fetch("/api/query?col=previousWinners");
    winners.value = result.result;
  } catch (error) {
    console.error("Error fetching pages:", error);
    // Handle error if needed
  }
});
</script>
<template>
  <!-- LAST EVENT"S WINNERS -->
  <div class="max-w-[80%] mx-auto">
    <p
      class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 py-10"
    >
      Last Event's Finalists:
    </p>
  </div>
  <div
    class="lg:max-w-[90%] mx-auto bg-[url(/public\images\glhl_banner_mobile.png)] md:bg-[url(/public\images\glhl_banner.png)] bg-cover bg-center p-4"
  >
    <!-- TABLE -->
    <div class="py-10 md:w-[90%] md:w-[60%] mx-auto">
      <div
        class="bg-gradient-to-b from-glhl-dark-gray to-black border-b-8 border-glhl-red-100 rounded-t-lg flex w-full shadow-lg shadow-black"
      >
        <p
          class="w-full font-Ringbearer my-auto p-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Top Generals
        </p>
        <p
          class="w-full font-Ringbearer my-auto p-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Best in Hobby
        </p>
      </div>
      <!-- TABLE CONTENT -->
      <div class="bg-white rounded-b-lg shadow-xl shadow-black">
        <div class="rounded-lg">
          <p class="p-4 w-full font-bold text-center mx-auto">
            Hobby Focus: Best Warband
          </p>
          <div
            v-for="(ranking, index) in winners"
            class="flex text-center font-semibold last-of-type:rounded-b-lg"
            :class="index % 2 === 0 ? 'bg-glhl-light-gray' : ''"
          >
            <p class="p-2">
              {{ winners.length > 0 ? ranking.place : "Loading..." }}
            </p>
            <p class="w-full p-2">
              {{ winners.length > 0 ? ranking.general : "" }}
            </p>
            <p class="w-full p-2">
              {{ winners.length > 0 ? ranking.hobby : "" }}
            </p>
          </div>
        </div>
      </div>
      <!-- SPACER -->
      <div class="2xl:h-32"></div>
    </div>
  </div>
</template>
