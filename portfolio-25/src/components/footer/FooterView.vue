<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

let lenis;
let animation;

onMounted(() => {
  lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "horizontal",
    gestureDirection: "horizontal",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  const scrollContent = document.querySelector(".scroll-content");
  const totalWidth = scrollContent.scrollWidth;

  const containerWidth = document.querySelector(
    ".animation-container"
  ).offsetWidth;
  while (scrollContent.scrollWidth < containerWidth * 2) {
    const clone = scrollContent.firstElementChild.cloneNode(true);
    scrollContent.appendChild(clone);
  }

  animation = gsap.to(".scroll-content", {
    x: `-=${totalWidth}`,
    duration: 12,
    ease: "none",
    repeat: 1000,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });

  function raf(time) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

onBeforeUnmount(() => {
  lenis?.destroy();
  animation?.kill();
});
</script>

<template>
  <!-- Rest of the template remains the same -->
  <footer class="px-4 md:px-16 bg-dark pt-20 md:pt-32">
    <div class="flex flex-col gap-20">
      <div
        class="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between max-w-7xl"
      >
        <h2 class="font-LibreBaskerville text-[64px] md:text-8xl text-light">
          Let's Make it Happen Together.
        </h2>
        <div class="flex flex-col gap-3">
          <p class="text-base md:text-xl text-light">
            Turning your ideas into beautifully crafted, scalable web
            experiences — let's make magic together!
          </p>
          <router-link
            to="/contact"
            class="font-LibreBaskerville text-xl text-light flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            START A CONVERSATION
            <img
              loading="lazy"
              src="/src/assets/icon/thin-arrow-up.svg"
              alt="Arrow up icon"
              class="w-6 h-6"
            />
          </router-link>
        </div>
      </div>

      <div class="flex flex-row gap-6 justify-center">
        <a
          href="mailto:fabdurrahman@gmail.com"
          class="text-light flex flex-row items-center gap-1 hover:opacity-80 transition-opacity"
        >
          Gmail
          <img
            loading="lazy"
            src="/src/assets/icon/thin-arrow-up.svg"
            alt="Arrow up icon"
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdurrahman-faiz-af/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light flex flex-row items-center gap-1 hover:opacity-80 transition-opacity"
        >
          LinkedIn
          <img
            loading="lazy"
            src="/src/assets/icon/thin-arrow-up.svg"
            alt="Arrow up icon"
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://dribbble.com/FaizXOXO"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light flex flex-row items-center gap-1 hover:opacity-80 transition-opacity"
        >
          Dribbble
          <img
            loading="lazy"
            src="/src/assets/icon/thin-arrow-up.svg"
            target="_blank"
            alt="Arrow up icon"
            class="w-6 h-6"
          />
        </a>
      </div>

      <div class="animation-container overflow-hidden">
        <div class="scroll-content">
          <div class="scroll-item -mb-9 md:-mb-20">
            <p class="font-bold text-light text-[124px] md:text-[248px]">
              FAIZ
            </p>
            <img
              loading="lazy"
              src="/src/assets/icon/bold-arrow-right.svg"
              alt="Bold arrow right"
              class="size-[128px] md:size-[236px]"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.animation-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.scroll-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  gap: 240px;
  will-change: transform;
}

.scroll-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}

@media (max-width: 640px) {
  .scroll-content {
    gap: 120px;
  }
}
</style>