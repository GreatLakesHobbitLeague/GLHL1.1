<template>
  <div>
    <div
      class="flex h-5 bg-gradient-to-b from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    ></div>

    <div
      class="bg-gradient-to-t from-glhl-dark-gray to-black shadow-md w-full flex text-center"
    >
      <div class="flex flex-col w-full">
        <p class="!text-white mx-auto text-center my-4 w-full">
          Great Lakes Hobbit League 2024
        </p>

        <div class="text-center mx-auto font-Ringbearer text-white sm:text-2xl">
          <p>Join us on Discord and Facebook!</p>

          <div class="flex mx-auto gap-6 justify-center">
            <a
              href="https://discord.com/invite/XyjjrP8vre?fbclid=IwAR288ZVSve2e-tCN7rTEPVPxzrpIzFtbTiR7qWgQiirO6dnNBwmrGsV0MOk_aem_ASPhtNwkDzoWDEAn0YmmWFVBexTaeRkFu0l-L9II2rDEoDw1TcRxtsvdBc70b5hO0VeGLZvImJChUsXLCB7RWyY5"
              target="blank"
              ><img
                class="icon"
                src="public\images\icons\discord_icon.png"
                alt="discord icon"
            /></a>

            <a
              href="https://www.facebook.com/groups/465510938759401/?ref=share&mibextid=K35XfP&rdid=KWqM4yMUBRtPH7KN"
              target="blank"
              ><img
                class="icon"
                src="public\images\icons\facebook_icon.png"
                alt="facebook icon"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon {
  max-width: 4rem;
  filter: brightness(0) invert(1);
}
.icon:hover {
  filter: brightness(1) invert(0);
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
