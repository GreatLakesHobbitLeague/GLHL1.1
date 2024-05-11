<script setup lang="ts">
import { ref, onMounted } from "vue";

const dropDown = ref(true);
const scrolled = ref(false);

const openMenu = () => {
  dropDown.value = !dropDown.value;
};

const handleScroll = () => {
  scrolled.value = window.pageYOffset > 50;
};

const closeMenu = (event) => {
  // Check if the click occurred outside of the dropdown element
  const dropdownElement = document.querySelector(".dropdown");
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    dropDown.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", closeMenu);
});

// Don't forget to remove event listeners when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", closeMenu);
});
</script>
<template>
  <!-- Navigation container -->
  <div
    id="header"
    class="fixed top-0 z-50 w-full"
    :class="{ Shrink: scrolled }"
  >
    <div
      class="bg-gradient-to-b from-glhl-dark-gray to-black shadow-md w-full flex"
    >
      <!-- Separate Logo from text -->
      <NuxtLink class="max-w-[25%] mx-4 sm:mx-6 md:mx-10 lg:mx-16" to="/"
        ><img
          id="logo"
          :class="{ Shrink: scrolled }"
          class="max-w-[4rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[13rem] mx-auto"
          src="public\images\glhl_logo.png"
          alt="glhl logo"
      /></NuxtLink>
      <div
        id="title"
        :class="{ Shrink: scrolled }"
        class="w-full flex sm:flex-col my-auto sm:gap-x-2"
      >
        <transition name="logoFade">
          <p
            v-if="!scrolled"
            class="font-Ringbearer break-words text-balance hidden text-xl sm:flex sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white p-4 mt-4 mx-auto text-center"
          >
            Great Lakes Hobbit League
          </p></transition
        >

        <p
          class="font-Ringbearer break-words text-balance text-xl sm:hidden xs:text-2xl text-white p-1 mx-auto !my-auto text-center"
        >
          Great Lakes Hobbit League
        </p>

        <div class="sm:flex mx-auto my-auto hidden">
          <NuxtLink class="navlink" to="/">
            <p>home</p>
            <img
              src="\public\images\anduril.png"
              alt="active page"
              class="hidden max-w-15 max-h-5 mx-auto my-auto"
          /></NuxtLink>
          <NuxtLink class="navlink" to="/event"
            ><p>events</p>
            <img
              src="\public\images\anduril.png"
              alt="active page"
              class="hidden max-w-15 max-h-5 mx-auto my-auto"
          /></NuxtLink>
          <NuxtLink class="navlink" to="/rankings"
            ><p>rankings</p>
            <img
              src="\public\images\anduril.png"
              alt="active page"
              class="hidden max-w-15 max-h-5 mx-auto my-auto"
          /></NuxtLink>
          <!-- <NuxtLink class="navlink"
            ><p>resources</p>
            <img
              src="\public\images\anduril.png"
              alt="active page"
              class="hidden max-w-15 max-h-5 mx-auto my-auto"
          /></NuxtLink>
          <NuxtLink class="navlink"><p>merch</p></NuxtLink> -->
        </div>
      </div>
    </div>

    <div
      class="dropdown relative z-10 flex sm:h-5 border-transparent bg-gradient-to-t from-glhl-red-500 to-glhl-red-100 shadow-md shadow-black"
    >
      <button
        class="text-3xl text-center py-2 text-white mx-auto sm:hidden w-full"
        @click="openMenu"
      >
        &#8801;
      </button>
    </div>
    <Transition name="dropDown">
      <div
        v-if="!dropDown"
        class="dropdown flex flex-col mx-auto w-full z-0 shadow-md shadow-black sm:hidden"
      >
        <NuxtLink class="navlink" to="/">
          <p>home</p>
          <img
            src="\public\images\anduril.png"
            alt="active page"
            class="hidden max-w-15 max-h-5 mx-auto my-auto"
        /></NuxtLink>
        <NuxtLink class="navlink" to="/event"
          ><p>events</p>
          <img
            src="\public\images\anduril.png"
            alt="active page"
            class="hidden max-w-15 max-h-5 mx-auto my-auto"
        /></NuxtLink>
        <NuxtLink class="navlink" to="/rankings"
          ><p>rankings</p>
          <img
            src="\public\images\anduril.png"
            alt="active page"
            class="hidden max-w-15 max-h-5 mx-auto my-auto"
        /></NuxtLink>
        <!-- <NuxtLink class="navlink"
          ><p>resources</p>
          <img
            src="\public\images\anduril.png"
            alt="active page"
            class="hidden max-w-15 max-h-5 mx-auto my-auto"
        /></NuxtLink>
        <NuxtLink class="navlink"><p>merch</p></NuxtLink> -->
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.navlink {
  font-family: Ringbearer, "sans-serif";
  color: white;
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
  background-color: #520000;
  /* Gradient background */
  background-image: linear-gradient(to bottom, #520000, #290000);
  width: 100%;
}
.navlink:hover {
  background-image: linear-gradient(to bottom, #780000, #290000);
}

.Shrink {
  max-height: 4rem !important;
  padding: 0;
  font-size: 10px !important;
  margin: 0 !important;
  animation: navShrink 0.5s ease-in-out;
}

@media (min-width: 640px) {
  .navlink {
    font-size: 1rem;
    padding: 0.5rem;
    background-color: transparent;
    background-image: none;
    padding-bottom: none;
  }
  .navlink:hover {
    color: red;
    background-color: transparent;
    background-image: none;
    transform: scale(1.2);
    transition: 0.3s;
  }
  .Shrink {
    max-height: 6rem !important;
    padding: 0;
    font-size: 1rem !important;
    margin: 0 !important;
    animation: navShrink 0.5s ease-in-out;
  }
}
@media (min-width: 1200px) {
  .navlink {
    font-size: 1.5rem;
    padding: 2rem;
  }
}

.dropDown-enter-from {
  opacity: 0;
  transform: translateY(-25%);
}
.dropDown-enter-active {
  transition: 0.2s;
}

.dropDown-leave-to {
  opacity: 0;
  transform: translateY(-25%);
}
.dropDown-leave-active {
  transition: 0.2s;
}

.logoFade-enter-from {
  opacity: 0;
  transform: translateY(-10%) scale(10%);
}
.logoFade-enter-active {
  transition: 0.3s;
}

.logoFade-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
.logoFade-leave-active {
  transition: 0s;
}

@keyframes navShrink {
  0% {
    opacity: 0.6;
  }
  1% {
    transform: scale(2);
  }
  20% {
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
@media (min-width: 640px) {
  @keyframes navShrink {
    0% {
      opacity: 1;
    }
    1% {
      transform: scale(2.5);
    }
    20% {
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
}

.router-link-active img {
  display: flex;
}
</style>
