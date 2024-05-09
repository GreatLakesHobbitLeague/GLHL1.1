<script setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const winners = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    const { data, error: fetchError } = await $supabase
      .from("previousWinners")
      .select("*");
    if (fetchError) {
      throw new Error(fetchError.message);
    }
    winners.value = data;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <!-- LAST EVENT"S WINNERS -->
  <div class="max-w-[80%] mx-auto">
    <p
      class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 pt-10"
    >
      Last Event's Finalists:
    </p>
  </div>
  <div
    class="lg:max-w-[90%] mx-auto bg-[url(/public\images\glhl_banner_mobile.png)] md:bg-[url(/public\images\glhl_banner.png)] bg-cover bg-center p-4"
  >
    <!-- TABLE -->
    <div class="pb-10 w-[90%] md:w-[60%] mx-auto">
      <div
        class="bg-gradient-to-b from-glhl-dark-gray to-black border-b-8 border-glhl-red-100 rounded-t-lg flex w-full shadow-lg shadow-black"
      >
        <p
          class="w-full font-Ringbearer my-auto p-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Best Tacticians
        </p>
        <p
          class="w-full font-Ringbearer my-auto p-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Top Artisans
        </p>
      </div>
      <!-- TABLE CONTENT -->
      <div class="bg-white rounded-b-lg shadow-xl shadow-black">
        <div class="rounded-lg">
          <p
            class="p-4 w-full font-bold text-lg text-center mx-auto font-Cinzel"
          >
            <span class="font-sans">Hobby Focus:</span> <wbr />
            {{ winners.length > 0 ? winners[0].HobbyFocus : "Loading" }}
          </p>
          <div
            v-for="(ranking, index) in winners"
            :key="index"
            class="text-center font-semibold last-of-type:rounded-b-lg"
            :class="index % 2 === 0 ? '' : 'bg-glhl-light-gray'"
          >
            <div v-if="index != 0" class="flex">
              <p class="p-2 px-4 my-auto font-extrabold text-lg">
                {{ ranking.Place }}
              </p>
              <p class="w-full p-2 my-auto">
                {{ ranking.Tactician }}
              </p>
              <p class="w-full p-2 my-auto">
                {{ ranking.Artisan }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- SPACER -->
      <div class="2xl:h-32"></div>
    </div>
  </div>
</template>
