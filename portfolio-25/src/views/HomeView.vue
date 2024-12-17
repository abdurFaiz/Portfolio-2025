<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <DefaultLayoutView>
    <!-- hero section -->
    <section id="home" class="pt-20 md:pt-0">
      <div
        class="h-screen hero-section flex flex-col md:flex-row gap-6 md:gap-0 items-center"
      >
        <div class="flex flex-col gap-12 md:gap-24 max-w-lg z-10 content">
          <div class="flex flex-col gap-0 md:gap-4">
            <h1
              class="font-LibreBaskerville text-[40px] md:text-7xl text-light"
            >
              Frontend Developer
            </h1>
            <span
              class="font-LibreBaskerville text-2xl md:text-[32px] text-light"
            >
              with expertise in
            </span>
            <h1
              class="font-LibreBaskerville text-[40px] md:text-7xl text-light"
            >
              UI/UX Design
            </h1>
          </div>
          <p class="text-2xl leading-8 text-light">
            DEVELOPER & DESIGNER EXPERT HELPING YOU BUILD BEAUTIFUL AND SCALABLE
            WEBSITE EXPERIENCES
          </p>
        </div>
        <div class="hero-image">
          <img
            src="/src/assets/image/hero-img-xl.png"
            alt="Hero Image"
            class="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    <!-- welcoming section -->
    <section id="about" class="">
      <div
        class="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 px-4"
      >
        <!-- Introduction -->
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            Hi👋, I'm
          </h2>
          <img
            class="w-20 md:w-32"
            src="/src/assets/image/hero-img-sm.png"
            alt="Hero Image"
          />
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            Faiz
          </h2>
        </div>

        <!-- Nationality and Role -->
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            Indonesian
          </h2>
          <img
            class="w-20 md:w-32"
            src="/src/assets/image/indonesian.png"
            alt="Indonesian Flag"
          />
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            Developer &
          </h2>
        </div>

        <!-- Job Description -->
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            UIX Designer
          </h2>
          <img
            class="w-20 md:w-32"
            src="/src/assets/image/activity.png"
            alt="Activity Icon"
          />
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            working on
          </h2>
        </div>

        <!-- Industry -->
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <h2
            class="text-light font-LibreBaskerville text-4xl md:text-5xl text-center"
          >
            technology industries
          </h2>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>

<style scoped>
</style>
