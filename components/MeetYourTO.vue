<template>
  <!-- hex container -->

  <p class="font-Ringbearer text-center text-3xl sm:text-4xl break-words text-balance md:text-5xl px-8 pb-16">
    Meet Your GlHlTournament Organizers!
  </p>
  <!-- DESKTOP RIBBON & CONTAINER-->
  <div
    class="flex flex-col justify-center lg:bg-[url('/public\images\glhl_banner.png')] bg-cover bg-center lg:max-w-[90%] mx-auto"
  >
    <div
      class="flex justify-center sm:mx-0 lg:mx-auto flex-col lg:flex-row my-auto lg:max-w-[90%] gap-20 lg:gap-6"
    >
      <!-- TABLET RIBBON & CONTAINER-->
      <div
        class="flex-col justify-center sm:flex-row flex  gap-20 sm:gap-6  sm:bg-[url('/public\images\glhl_banner.png')] lg:bg-none w-full bg-center md:justify-end bg-cover"
      >
        <!-- MOBILE RIBBON & CONTAINER-->
        <div
          class="bg-[url('/public\images\glhl_banner.png')] sm:bg-none w-full bg-cover bg-center flex justify-center"
        >
          <div class="hexagon flex bg-glhl-gold-400 mx-auto sm:mx-0">
            <div
              class="innerHex bg-glhl-red-400 mx-auto my-auto flex flex-col justify-center"
            >
              <img />
              <p
                class="font-Ringbearer mx-auto text-center text-5xl lg:text-3xl 2xl:text-5xl p-4"
              >
                Julian Micu
              </p>
              <p
                class="font-Ringbearer text-2xl italic text-center lg:text-lg 2xl:text-2xl"
              >
                league steward
              </p>
              <p class="font-Ringbearer text-xl text-center">Kalamazoo</p>
            </div>
          </div>
        </div>

        <!-- MOBILE RIBBON & CONTAINER-->
        <div
          class="bg-[url('/public\images\glhl_banner.png')] sm:bg-none w-full bg-cover bg-center flex justify-center"
        >
          <div class="hexagon flex bg-glhl-gold-400 mx-auto sm:mx-0">
            <div
              class="innerHex bg-glhl-red-400 mx-auto my-auto flex flex-col justify-center"
            >
              <img />
              <p
                class="font-Ringbearer mx-auto text-center text-5xl lg:text-3xl 2xl:text-5xl p-4"
              >
                Charles Sadler
              </p>
              <p
                class="font-Ringbearer text-2xl italic text-center lg:text-lg 2xl:text-2xl"
              >
                event organizer
              </p>
              <p class="font-Ringbearer text-xl text-center">Detroit</p>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLET RIBBON & CONTAINER-->
      <div
        class="flex-col justify-center sm:flex-row flex gap-20 sm:gap-6 sm:bg-[url('/public\images\glhl_banner.png')] lg:bg-none w-full bg-center md:justify-end bg-cover"
      >
        <!-- MOBILE RIBBON & CONTAINER-->
        <div
          class="bg-[url('/public\images\glhl_banner.png')] sm:bg-none w-full bg-cover bg-center flex justify-center"
        >
          <div class="hexagon flex bg-glhl-gold-400 mx-auto sm:mx-0">
            <div
              class="innerHex bg-glhl-red-400 mx-auto my-auto flex flex-col justify-center"
            >
              <img />
              <p
                class="font-Ringbearer mx-auto text-center text-5xl lg:text-3xl 2xl:text-5xl p-4"
              >
                Paul Watson
              </p>
              <p
                class="font-Ringbearer text-2xl italic text-center lg:text-lg 2xl:text-2xl"
              >
                event organizer
              </p>
              <p class="font-Ringbearer text-xl text-center">Fort Wayne</p>
            </div>
          </div>
        </div>

        <!-- MOBILE RIBBON & CONTAINER-->
        <div
          class="bg-[url('/public\images\glhl_banner.png')] sm:bg-none w-full bg-cover bg-center flex justify-center"
        >
          <div class="hexagon flex bg-glhl-gold-400 mx-auto sm:mx-0">
            <div
              class="innerHex bg-glhl-red-400 mx-auto my-auto flex flex-col justify-center"
            >
              <img />
              <p
                class="font-Ringbearer mx-auto text-center text-5xl p-4 lg:text-3xl 2xl:text-5xl"
              >
                Dennis Chitko
              </p>
              <p
                class="font-Ringbearer text-2xl italic lg:text-lg 2xl:text-2xl text-center"
              >
                event organizer
              </p>
              <p class="font-Ringbearer text-xl text-center">Ann Arbor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.hexagon {
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0);
  height: 36rem;
  width: 18rem;

  background-image: url("/public\images\textures\glhl_gold.webp");
  background-position: center;
}
.innerHex {
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0);
  height: 34rem;
  width: 17rem;

  background: linear-gradient(to bottom, #780000, #290000);
  background-image: url("/public\images\textures\red_leather.webp");
  background-position: center;
  color: white;
}

@media (min-width: 640px) {
  .hexagon {
    height: 30rem /* 640px */;
    width: 15rem;
  }
  .innerHex {
    height: 28rem;
    width: 14rem;
  }
  @media (min-width: 1024px) {
    .hexagon {
      height: 22rem /* 640px */;
      width: 11rem;
    }
    .innerHex {
      height: 21rem;
      width: 10.5rem;
    }
  }
  @media (min-width: 1535px) {
    .hexagon {
      height: 31rem /* 640px */;
      width: 15.5rem;
    }
    .innerHex {
      height: 29rem;
      width: 14.5rem;
    }
  }
}
</style>
