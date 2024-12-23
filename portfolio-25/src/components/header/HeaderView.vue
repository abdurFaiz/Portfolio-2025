<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();
const router = useRouter();

const menuToggle = () => {
  isOpen.value = !isOpen.value;
};
const handleSubSection = () => {
  if (route.path !== "/") {
    router.push({ path: "/", hash: `${sectionId}` });
  } else {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header
    class="w-full bg-transparent backdrop-blur-xl fixed top-0 z-50 shadow-lg"
  >
    <div class="flex items-center justify-between p-4 md:px-16 md:py-3">
      <!-- Logo -->
      <span
        class="text-2xl block z-50 font-LibreBaskerville bg-gradient-to-t contrast-125 text-transparent bg-clip-text from-greyDark to-accent font-bold transition duration-300 ease-in-out hover:text-opacity-80 cursor-pointer active:scale-95"
      >
        FAIZ
      </span>

      <!-- Mobile Menu Button -->
      <button @click="menuToggle" class="md:hidden z-50" aria-label="Open Menu">
        <img src="/src/assets/icon/menu-hamburger.svg" alt="Menu" />
      </button>

      <!-- Navigation Links -->
      <nav
        :class="[
          'flex flex-col md:flow-row gap-10 md:items-center h-screen md:h-auto px-6 pb-4 pt-20 md:pb-0 md:pt-0 md:block',
          'absolute md:static left-0 right-0 top-0 bg-dark md:bg-transparent ',
          isOpen ? 'block' : 'hidden',
        ]"
      >
        <div class="flex flex-col md:flex-row gap-6 h-auto">
          <div
            class="flex flex-row justify-between gap-0 md:gap-6 items-center"
          >
            <router-link to="/">
              <span
                class="relative bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 active:text-accent"
              >
                Home
              </span>
            </router-link>
            <router-link to="/about">
              <span
                class="relative bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 active:text-accent"
              >
                About
              </span>
            </router-link>
          </div>
          <div
            class="flex flex-row justify-between gap-0 md:gap-6 items-center"
          >
            <router-link @click="handleSubSection('works')" to="/#works">
              <span
                class="relative bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 active:text-accent"
              >
                Work
              </span>
            </router-link>
            <router-link @click="handleSubSection('Services')" to="/#Services">
              <span
                class="relative bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 active:text-accent"
              >
                Services
              </span>
            </router-link>
            <router-link to="/fun">
              <span
                class="relative bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 active:text-accent"
              >
                Fun
              </span>
            </router-link>
          </div>
        </div>
        <router-link
          to="/contact"
          class="bg-gradient-to-tr md:hidden text-center text-transparent bg-clip-text from-greyDark to-accent font-LibreBaskerville text-[52px] md:text-xl transition-all duration-300 ease-in-out hover:text-opacity-80 hover:contrast-125 hover:pb-[6px]"
        >
          Work with me
        </router-link>
      </nav>
      <!-- Call-to-Action Link -->
      <router-link
        to="/contact"
        class="hidden md:block relative text-xl bg-gradient-to-t text-transparent bg-clip-text from-greyDark to-accent hover:contrast-125 font-LibreBaskerville pb-3 overflow-hidden group"
      >
        Work with me
        <span
          class="absolute bottom-0 left-0 h-[2px] bg-gradient-to-t from-greyDark to-accent hover:contrast-125 w-full -translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        ></span>
      </router-link>
    </div>
  </header>
</template>
  
  <style scoped>
/* Add smooth slide animation for the underline */
@keyframes slide {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.group-hover:animate-slide {
  animation: slide 0.3s ease-in-out;
}
</style>
  