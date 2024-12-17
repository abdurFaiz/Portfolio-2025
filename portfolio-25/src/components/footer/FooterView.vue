<template>
  <footer class="px-4 md:px-16 bg-dark pt-20 md:pt-32">
    <div class="flex flex-col gap-20">
      <div class="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">
        <h2 class="font-LibreBaskerville text-[64px] md:text-8xl text-light">
          Let’s Make it happen Together.
        </h2>
        <div class="flex flex-col gap-3">
          <p class="text-base md:text-xl text-light">
            Turning your ideas into beautifully crafted, scalable web
            experiences —let’s make magic together!
          </p>
          <router-link
            to="/contact"
            class="font-LibreBaskerville text-xl text-light flex items-center gap-2"
          >
            START A CONVERSTATION
            <img src="/src/assets/icon/thin-arrow-up.svg" alt="" />
          </router-link>
        </div>
      </div>
      <div class="flex flex-row gap-6 justify-center">
        <router-link
          to="/fabdurrahman@gmail.com"
          class="text-light flex flex-row"
        >
          Gmail
          <img src="/src/assets/icon/thin-arrow-up.svg" alt="" class="size-6" />
        </router-link>
        <router-link
          to="/https://www.linkedin.com/in/abdurrahman-faiz-af/"
          class="text-light flex flex-row"
        >
          LinkedIn
          <img src="/src/assets/icon/thin-arrow-up.svg" alt="" class="size-6" />
        </router-link>
        <router-link
          to="/https://dribbble.com/FaizXOXO"
          class="text-light flex flex-row"
        >
          Dribble
          <img src="/src/assets/icon/thin-arrow-up.svg" alt="" class="size-6" />
        </router-link>
      </div>
      <div class="flex flex-row items-center overflow-hidden ">
        <p class="font-bold text-light text-[124px] md:text-[248px]">FAIZ</p>
        <img
          src="/src/assets/icon/bold-arrow-right.svg"
          alt=""
          class="size-[128px] md:size-[236px]"
        />
      </div>
    </div>
  </footer>
</template>