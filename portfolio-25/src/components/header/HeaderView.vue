<script setup>
const handleSubSection = () => {
  if (this.$route.path !== "/") {
    this.$router.push({ path: "/", hash: "#Services" });
  } else {
    document.getElementById("Services").scrollIntoView({ behavior: "smooth" });
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
        class="text-2xl text-light font-bold transition duration-300 ease-in-out hover:text-opacity-80 cursor-pointer active:scale-95"
      >
        FAIZ
      </span>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" aria-label="Open Menu">
        <img src="/src/assets/icon/menu-hamburger.svg" alt="Menu" />
      </button>

      <!-- Navigation Links -->
      <nav class="hidden md:flex gap-6 items-center">
        <router-link
          to="/"
          class="text-light font-LibreBaskerville text-lg hover:text-opacity-80 transition"
        >
          Home
        </router-link>
        <router-link
          to="/hello"
          class="text-light font-LibreBaskerville text-lg hover:text-opacity-80 transition"
        >
          Hello
        </router-link>
        <router-link
          to="/work"
          class="text-light font-LibreBaskerville text-lg hover:text-opacity-80 transition"
        >
          Work
        </router-link>
        <router-link
          @click="handleSubSection"
          to="/#Services"
          class="text-light font-LibreBaskerville text-lg hover:text-opacity-80 transition"
        >
          Services
        </router-link>
      </nav>
      <!-- Call-to-Action Link -->
      <router-link
        to="/contact"
        class="hidden md:block relative text-lg text-light font-LibreBaskerville pb-3 overflow-hidden group"
      >
        Work with me
        <span
          class="absolute bottom-0 left-0 h-[2px] bg-light w-full -translate-y-full group-hover:translate-y-0 transition-transform duration-300"
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
  