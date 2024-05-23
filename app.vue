<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Great Lakes Hobbit League",
  meta: [
    // Open Graph meta tags
    { name: "og:title", content: "Great Lakes Hobbit League" },
    {
      name: "og:description",
      content:
        "Join the Great Lakes Hobbit League for monthly Middle Earth Strategy Battle Game tournaments across Kalamazoo, Detroit, Ann Arbor, and Fort Wayne! Discover the excitement brewing in the Great Lakes area!",
    },
    { name: "og:image", content: "/images/cinematics/hero_desktop.webp" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://glhl.org" },

    // Twitter Card meta tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Great Lakes Hobbit League" },
    {
      name: "twitter:description",
      content:
        "Join the Great Lakes Hobbit League for monthly Middle Earth Strategy Battle Game tournaments across Kalamazoo, Detroit, Ann Arbor, and Fort Wayne! Discover the excitement brewing in the Great Lakes area!",
    },
    { name: "twitter:image", content: "/images/cinematics/hero_desktop.webp" },
  ],
  link: [
    // Apple touch icon
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }, // Favicon (optional)
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, // Ensure this path is correct
  ],
});
</script>
<template>
  <NuxtLayout>
    <Header></Header>
    <div
      class="bg-[url('/public\images\map-background.webp')] bg-fixed bg-cover bg-center h-full"
    >
      <div class="h-20 md:h-30"></div>
      <NuxtPage> </NuxtPage>
    </div>
    <Footer></Footer>
  </NuxtLayout>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active {
  animation: slide-in 0.5s ease-in-out;
}
@keyframes slide-in {
  from {
    transform: translateX(-100%) scale(2);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
