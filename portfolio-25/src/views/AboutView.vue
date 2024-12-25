<script setup>
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
import lightPlus from "@/assets/icon/light-plus.svg";
import lightMinus from "@/assets/icon/light-minus.svg";
import { ref } from "vue";

// Create an array of work experiences
const experiences = [
  {
    id: 1,
    title: "Frontend Developer • GMEDIA",
    description:
      "Delivered high-quality web applications by collaborating with cross-functional teams. Increased productivity by 20% with Agile practices. Ensured responsive design for superior user experience across all devices.",
  },
  {
    id: 2,
    title: "Wordpress Developer • SIPA",
    description:
      "Worked as a Frontend Developer (WordPress) for global performing arts events. Used UI/UX skills to turn mockups into visually appealing, high-performance WordPress themes, ensuring full responsiveness on all devices.",
  },
  {
    id: 3,
    title: "Frontend Developer • Dispendukcapil SKH",
    description:
      "Delivered high-quality web applications by collaborating with cross-functional teams. Increased productivity by 20% with Agile practices. Ensured responsive design for superior user experience across all devices.",
  },
  {
    id: 4,
    title: "Head of Website Division • UNS",
    description:
      "Created a high-quality WordPress website with a smooth, device-friendly user experience. Led a team of four in UI design and development. Collaborated closely with design, branding, and fundraising teams.",
  },
  {
    id: 5,
    title: "UIX Designer • Project Tim UNS",
    description:
      "I conducted user research to enhance user experience, designed a 10+ screen website using design thinking, and collaborated with developers for seamless design-functionality integration.",
  },
];

// Create a Map to store open states for each dropdown
const openStates = ref(new Map(experiences.map((exp) => [exp.id, false])));

const toggleDropdown = (id) => {
  openStates.value.set(id, !openStates.value.get(id));
};
</script>

<template>
  <DefaultLayoutView>
    <section id="welcome" class="pt-24 md:pt-28 px-4 md:px-16">
      <div class="flex flex-col gap-20 md:gap-48">
        <!-- Previous sections remain unchanged -->
        <div class="flex flex-col items-center gap-12 md:gap-32">
          <div class="flex flex-col items-center relative">
            <img
            loading="lazy"
              src="/src/assets/image/profile-img.png"
              alt=""
              class="max-w-64 md:max-w-md h-auto"
            />
            <div class="absolute -bottom-5 md:-bottom-9">
              <h1
                class="font-LibreBaskerville text-5xl md:text-[80px] text-light"
              >
                Hi, I’m Faiz
              </h1>
            </div>
          </div>
          <div class="flex flex-col justify-center max-w-4xl">
            <p
              class="font-LibreBaskerville text-light text-2xl leading-10 w-full text-center"
            >
              I'm an undergraduate student majoring in Informatics Engineering.
              More than just a developer,
              <span class="text-accent">I'm a digital problem solver</span> who
              turns challenges into elegant solutions. With a mix of technical
              skills and creativity, I craft websites that tell stories and
              solve real-world problems.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center gap-12">
          <h2 class="font-LibreBaskerville text-4xl md:text-[56px] text-light">
            I’m here to provide
          </h2>
          <div class="flex flex-col md:flex-row gap-9">
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-2 items-end">
                <span class="font-LibreBaskerville text-light text-2xl"
                  >01/</span
                >
                <h3
                  class="font-LibreBaskerville text-4xl md:text-[40px] text-light"
                >
                  Frontend Dev
                </h3>
              </div>
              <p class="text-base text-grayMist uppercase leading-6">
                Transform your design into clean, responsive code with modern
                frameworks like JavaScript, Vue.js, and React. I specialize in
                creating pixel-perfect, functional websites with a strong focus
                on great user experience and seamless performance
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-2 items-end">
                <span class="font-LibreBaskerville text-light text-2xl"
                  >02/</span
                >
                <h3
                  class="font-LibreBaskerville text-4xl md:text-[40px] text-light"
                >
                  UI/UX Design
                </h3>
              </div>
              <p class="text-base text-grayMist uppercase leading-6">
                I craft intuitive and visually appealing interfaces that enhance
                user experiences. From research and wireframes to high-fidelity
                designs, I focus on creating seamless, user-centered solutions
                that not only look great but are also easy to navigate
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-2 items-end">
                <span class="font-LibreBaskerville text-light text-2xl"
                  >03/</span
                >
                <h3
                  class="font-LibreBaskerville text-4xl md:text-[40px] text-light"
                >
                  Website No-code
                </h3>
              </div>
              <p class="text-base text-grayMist uppercase leading-6">
                I help you build fast, fully functional websites without the
                need for coding. Using powerful no-code tools, I create
                responsive, custom websites that meet your needs, allowing you
                to launch quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
          <h2 class="font-LibreBaskerville text-4xl md:text-[56px] text-light">
            What have I done?
          </h2>
          <div class="flex flex-col gap-9 w-full md:max-w-3xl">
            <div class="flex flex-col gap-5">
              <!-- Map through experiences array -->
              <div
                v-for="exp in experiences"
                :key="exp.id"
                class="flex flex-col gap-3"
              >
                <!-- Clickable header with toggle -->
                <div
                  @click="toggleDropdown(exp.id)"
                  class="flex flex-row justify-between gap-6 items-center py-4 border-b border-b-greyDark hover:bg-grayMist/25 backdrop-blur-2xl rounded-xl hover:px-4 transform transition-all duration-500 ease-in-out cursor-pointer group"
                >
                  <h3
                    class="font-LibreBaskerville text-light text-2xl md:text-[32px] transition-all duration-500"
                  >
                    {{ exp.title }}
                  </h3>

                  <!-- Transition for icon switch -->
                  <transition name="fade" mode="out-in">
                    <img
                    loading="lazy"
                      :key="openStates.get(exp.id) ? 'minus' : 'plus'"
                      :src="openStates.get(exp.id) ? lightMinus : lightPlus"
                      alt=""
                      class="rounded-2xl p-1 md:p-0 w-12 md:w-14 h-10 md:h-11 bg-light/90 backdrop-blur-xl border-2 border-grayMist transform transition-all duration-500 hover:scale-105"
                    />
                  </transition>
                </div>

                <!-- Transition for dropdown content -->
                <transition
                  name="expand"
                  @enter="(el) => (el.style.height = el.scrollHeight + 'px')"
                  @leave="(el) => (el.style.height = '0')"
                >
                  <div
                    v-show="openStates.get(exp.id)"
                    class="overflow-hidden transition-all duration-500 ease-in-out"
                    style="height: 0"
                  >
                    <p class="uppercase text-base text-grayMist md:pl-20 py-4">
                      {{ exp.description }}
                    </p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>

<style scoped>
/* Fade transition for icons */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Expand transition for content */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>