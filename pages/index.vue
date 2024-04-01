<template>
  <NuxtLayout>
    <div class="pt-20">
      <img
        class="hidden sm:flex object-cover w-full"
        src="public\images\cinematics\hero_desktop.webp"
        alt="hero"
      />
      <img
        class="flex object-cover sm:hidden"
        src="public\images\cinematics\hero_mobile.webp"
        alt="hero"
      />
    </div>
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

    <img
      class="w-full opacity-10 mx-auto my-40 max-w-[90%]"
      src="C:\Users\whata\OneDrive\Documents\GLHL\public\images\mesbg-silhouettes\Anduril.png"
      alt="gandalf staff"
    />

    <div class="flex"></div>
    <div class="py-20"></div>
  </NuxtLayout>
</template>

