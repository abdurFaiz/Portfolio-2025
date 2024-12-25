<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HeaderView from "@/components/header/HeaderView.vue";
import FooterView from "@/components/footer/FooterView.vue";
import Lenis from "@studio-freight/lenis";

let lenis = null;
const showBackToTop = ref(false);

onMounted(() => {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  // Get scroll value and handle back to top visibility
  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    // Show button when scrolled down 300px
    showBackToTop.value = scroll > 300;
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
});

// Scroll to specific elements
const scrollTo = (target) => {
  if (lenis) {
    lenis.scrollTo(target);
  }
};

// Back to top function
const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
  }
};

// Toggle scroll
const toggleScroll = (shouldEnable) => {
  if (lenis) {
    lenis.start();
  }
};
</script>

<template>
  <div>
    <div>
      <div class="h-screen">
        <!-- header area -->
        <HeaderView />
        <!-- main area -->
        <main>
          <div class="bg-dark flex flex-col gap-20 md:gap-[120px] mx-auto w-full">
            <slot></slot>
          </div>
        </main>
        <!-- footer area -->
        <FooterView />

        <!-- Back to Top Button -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-10"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-10"
        >
          <button
            v-show="showBackToTop"
            @click="scrollToTop"
            class="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-accent/60 hover:bg-accent/70 text-dark transform transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
            aria-label="Back to top"
          >
            <img
              src="/src/assets/icon/thin-arrow-right.svg"
              alt=""
              class="-rotate-90 size-7 md:size-10"
            />
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>