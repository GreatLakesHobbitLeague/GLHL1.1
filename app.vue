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
