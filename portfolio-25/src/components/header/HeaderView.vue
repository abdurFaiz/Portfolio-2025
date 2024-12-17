<template>
  <header class="w-full bg-transparent backdrop-blur-xl fixed top-0 z-50">
    <div class="flex items-center  justify-between p-4 md:px-16 md:py-3">
      <!-- Logo -->
      <span
        class="text-2xl text-light transition duration-300 ease-in-out hover:font-semibold hover:text-opacity-80 cursor-pointer active:scale-95"
      >
        FAIZ
      </span>

      <!-- Mobile Menu Button -->
      <button class="md:hidden">
        <img src="/src/assets/icon/menu-hamburger.svg" alt="Menu" />
      </button>

      <!-- Navigation Links -->
      <nav class="hidden md:flex gap-6 items-center">
        <router-link
          to="/"
          class="text-light font-LibreBaskerville text-2xl hover:text-opacity-80"
        >
          Home
        </router-link>
        <router-link
          to="/hello"
          class="text-light font-LibreBaskerville text-2xl hover:text-opacity-80"
        >
          Hello
        </router-link>
        <router-link
          to="/work"
          class="text-light font-LibreBaskerville text-2xl hover:text-opacity-80"
        >
          Work
        </router-link>
        <router-link
          to="/service"
          class="text-light font-LibreBaskerville text-2xl hover:text-opacity-80"
        >
          Services
        </router-link>
      </nav>

      <!-- Call-to-Action Link -->
      <router-link
        to="/contact"
        class="hidden md:block relative text-2xl text-light font-LibreBaskerville pb-3 overflow-hidden group"
      >
        Work with me
        <span
          class="absolute bottom-0 left-0 h-[2px] bg-light w-full -translate-y-full group-hover:animate-slide"
        ></span>
      </router-link>
    </div>
  </header>
</template>
  