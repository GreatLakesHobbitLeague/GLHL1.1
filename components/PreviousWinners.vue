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
  <div class="max-w-[80%] relative mx-auto">
    <img
      src="public/images/glhl_banner.png"
      alt=""
      class="absolute w-full hidden md:flex"
    />
  </div>
  <div
    class="lg:max-w-[90%] mx-auto bg-[url(/public\images\glhl_banner_mobile.png)] md:bg-none bg-cover bg-center"
  >
    <!-- TABLE -->
    <div class="w-[90%] md:w-[50%] xl:w-[35%] mx-auto relative">
      <p
        class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance lg:text-5xl pb-2"
      >
        Last Event's Finalists:
      </p>

      <div
        class="bg-gradient-to-b from-glhl-dark-gray to-black border-b-8 border-glhl-red-100 rounded-t-lg flex w-full shadow-lg shadow-black"
      >
        <p
          class="w-full font-Ringbearer my-auto py-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Best Tacticians
        </p>
        <p
          class="w-full font-Ringbearer my-auto py-4 text-white xs:text-xl sm:text-2xl text-center"
        >
          Top Artisans
        </p>
      </div>
      <!-- TABLE CONTENT -->
      <div class="py-3 bg-white rounded-b-lg shadow-xl shadow-black">
        <div class="rounded-lg">
          <p
            class="w-full flex flex-col font-bold text-lg text-center justify-center font-Cinzel"
          >
            <span class="font-sans">Hobby Focus:</span>
            {{ winners.length > 0 ? winners[0].HobbyFocus : "Loading" }}
          </p>
          <div
            v-for="(ranking, index) in winners"
            :key="index"
            class="text-center font-semibold last-of-type:rounded-b-lg"
          >
            <div v-if="index != 0" class="flex justify-center">
              <div
                class="justify-center text-center w-full flex flex-col gap-1 p-1 border-r-2 border-glhl-light-gray border-dotted"
              >
                <img
                  v-if="index === 1"
                  src="public/images/rankings/glhl_tactician_gold.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <img
                  v-if="index === 2"
                  src="public/images/rankings/glhl_tactician_silver.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <img
                  v-if="index === 3"
                  src="public/images/rankings/glhl_tactician_bronze.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <p class="w-full p-2 my-auto">
                  {{ ranking.Tactician }}
                </p>
              </div>

              <div
                class="justify-center text-center flex flex-col w-full gap-2"
              >
                <img
                  v-if="index === 1"
                  src="public/images/rankings/glhl_artisan_gold.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <img
                  v-if="index === 2"
                  src="public/images/rankings/glhl_artisan_silver.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <img
                  v-if="index === 3"
                  src="public/images/rankings/glhl_artisan_bronze.png"
                  alt="silver medal"
                  class="w-14 rounded-full mx-auto shadow-md shadow-black"
                />
                <p class="w-full p-2 my-auto">
                  {{ ranking.Artisan }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- SPACER -->
    </div>
  </div>
</template>
