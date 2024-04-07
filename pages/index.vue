<script setup>
import { ref, onMounted } from "vue";

const events = ref([]);

onMounted(async () => {
  try {
    const result = await $fetch("/api/query?col=events");
    events.value = result.result;
  } catch (error) {
    console.error("Error fetching pages:", error);
    // Handle error if needed
  }
});
</script>
<template>
  <NuxtLayout>
    <div
      class="relative z-10 flex h-7 bg-gradient-to-t from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    ></div>

    <div
      class="bg-[url(/public\images\cinematics\hero_mobile.webp)] md:bg-[url(/public\images\cinematics\hero_desktop.webp)] h-[25rem] lg:h-[50rem] lg:bg-center bg-cover shadow-lg shadow-black"
    ></div>
    <div
      class="relative z-10 flex h-7 bg-gradient-to-b from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    ></div>

    <div
      class="relative z-10 flex h-[5px] bg-gradient-to-t from-glhl-gold-200 to-glhl-gold-100 shadow-md shadow-black"
    ></div>

    <img
      class="w-full opacity-10 mx-auto my-40 max-w-[90%]"
      src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Gandalf.png"
      alt="gandalf staff"
    />

    <MeetYourTO></MeetYourTO>

    <!-- SPACER -->
    <img
      class="w-full opacity-10 mx-auto my-40 max-w-[90%]"
      src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Anduril.png"
      alt="Anduril"
    />

    <!-- ART PageBreak Links to standings -->
    <div
      class="relative z-10 flex h-7 bg-gradient-to-t from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    ></div>
    <div
      class="bg-[url(/public\images\cinematics\black_guard_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"
    >
      <div
        class="bg-black h-[30rem] md:h-[50rem] bg-opacity-85 text-white flex justify-center"
      >
        <!-- TEXTBOX -->
        <div class="my-auto flex flex-col">
          <p
            class="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-4 font-Ringbearer justify-center"
          >
            A New Power is Rising.
          </p>
          <p class="text-center font-mono sm:text-xl my-2">
            Check the latest standings here!
          </p>
          <GlhlButton
            text="View Rankings"
            destination="rankings"
            class="text-black text-center mx-auto my-4"
            >View Rankings</GlhlButton
          >
        </div>
      </div>
    </div>

    <div
      class="flex justify-center mx-auto gap-8 md:my-30 lg:my-40 max-w-[90%]"
    >
      <img
        class="md:w-[50%] w-full opacity-10 my-[5rem] flex"
        src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Uruk_1.png"
        alt="uruk sword"
      />
      <img
        class="w-[50%] opacity-10 my-[5rem] transform scale-x-[-1] md:flex hidden"
        src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Uruk_1.png"
        alt="uruk sword"
      />
    </div>

    <p
      class="font-Ringbearer text-center lg:text-left text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 pb-16"
    >
      Get Ready For Our Next Big Event!
    </p>

    <div
      class="w-full bg-[url(/public\images\textures\glhl_gold.webp)] bg-cover shadow-lg shadow-black text-white h-2"
    ></div>
    <div
      class="w-full bg-[url(/public\images\textures\red_leather.webp)] shadow-lg shadow-black text-white py-20 flex flex-col lg:flex-row justify-center gap-16 bg-cover lg:bg-auto"
    >
      <img
        class="max-w-[30%] lg:max-w-[15%] brightness-0 invert-[1] my-auto mx-auto lg:mx-0"
        src="public\images\mesbg-silhouettes\HoG.png"
        alt="horn of gondor"
      />

      <div
        class="flex flex-col px-6 lg:max-w-[50%] gap-6 my-auto lg:mx-0 mx-auto leg:text-left text-center"
      >
        <div class="flex lg:justify-between justify-center">
          <div class="flex gap-2 flex-col">
            <p class="font-Ringbearer text-3xl lg:text-4xl xl:text-5xl">
              {{ events.length > 0 ? events[0].eventTitle : "Loading..." }}
            </p>
            <p class="font-Ringbearer text-2xl italic">
              {{ events.length > 0 ? events[0].eventDate : "" }}
            </p>
            <p class="font-Ringbearer text-xl">
              {{ events.length > 0 ? events[0].eventCity : "" }}
            </p>
          </div>
          <GlhlButton
            to="events"
            text="Full details"
            class="my-auto text-2xl hidden lg:flex"
          ></GlhlButton>
        </div>
        <p class="font-mono lg:text-left">
          {{ events.length > 0 ? events[0].eventDescription : "" }}
        </p>
        <GlhlButton
          to="events"
          text="Full details"
          class="my-auto mx-auto text-2xl lg:hidden"
        ></GlhlButton>
      </div>
    </div>

    <!-- PAGEBREAK -->
    <div
      class="flex justify-center mx-auto gap-8 md:my-30 lg:my-40 max-w-[90%]"
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
      class="font-Ringbearer text-center text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 pb-4"
    >
      GLHL Sponsors
    </p>
    <div
      class="h-2 bg-gradient-to-b from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    ></div>
    <div class="py-4 flex flex-col xs:flex-row justify-center">
      <a
        class="sponsor"
        href="https://www.barrowhoardrecords.com/"
        target="_blank"
        ><img
          class="rounded-full"
          src="/public\images\sponsors\bhr_logo.webp"
          alt="barrow hoard records"
      /></a>

      <a
        class="sponsor"
        href="https://www.instagram.com/paragonminiatures/"
        target="_blank"
      >
        <img
          src="/public\images\sponsors\paragon_logo.png"
          alt="paragon miniatures"
        />
      </a>
      <img
        class="sponsor"
        src="/public\images\sponsors\paragon_logo.png"
        alt="paragon miniatures"
      />
    </div>
  </NuxtLayout>
</template>
<style scoped>
.sponsor {
  max-width: 90%;
  filter: sepia();
  transform: scale(0.9);
  margin: 0 auto;

  & img {
    border-radius: 100%;
  }

  &:hover {
    filter: none;
    transform: scale(1);
    transition: 0.2s;
  }
}
@media (min-width: 480px) {
  .sponsor {
    max-width: 20%;
  }
}
</style>
