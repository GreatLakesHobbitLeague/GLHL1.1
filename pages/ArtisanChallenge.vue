<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { createClient } from "@supabase/supabase-js";

// Define the type for image objects
interface Image {
  src: string;
}

// Initialize Supabase client
const supabaseUrl = "https://ienwmfvepudsgvruuuwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY";
const $supabase = createClient(supabaseUrl, supabaseKey);

const entries = ref<any[]>([]);
const images = ref<Image[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const screenWidth = ref();

onMounted(async () => {
  try {
    loading.value = true;
    const { data, error: fetchError } = await $supabase
      .from("paintingCompEntries")
      .select("*");
    if (fetchError) {
      throw new Error(fetchError.message);
    }
    entries.value = data;

    // Map entries to images array
    images.value = entries.value.map((entry) => ({
      src: entry.ImageSrc, // Adjust according to your database field
    }));
  } catch (err) {
    console.error("Error fetching data:", err.message);
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <section class="min-h-screen">
    <div class="mt-20 sm:mt-32 md:mt-52"></div>

    <!-- HEADER -->
    <div
      class="bg-[url(/public\images\cinematics\black_guard_desktop.webp)] bg-center bg-fit shadow-lg shadow-black"
    >
      <div class="bg-black bg-opacity-85 text-white flex justify-center mb-10">
        <!-- TEXTBOX -->
        <div class="my-auto flex flex-col">
          <p class="text-6xl font-Ringbearer justify-center py-10">
            Artisan Challenge
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto w-10/12">
      <ImageGallery :images="images" />
    </div>

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSehKxtnM_eP01ACTpmqZCbMMC0FJ2sssFjTgKrLcYkdZnv6_Q/viewform?embedded=true"
      :width="screenWidth > 640 ? 640 : 360"
      height="2500"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      class="mx-auto w-full"
      >Loading…</iframe
    >
  </section>
</template>
