<script setup>
import DefaultLayoutView from "../layout/DefaultLayoutView.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeSection = ref("overview");
const isNavVisible = ref(false);

const sections = [
  {
    id: "overview",
    title: "Project Overview",
  },
  {
    id: "problem",
    title: "Problem",
  },
  {
    id: "solution",
    title: "Solution",
  },
];

const updateNavigation = () => {
  // Get the boundary elements
  const overviewSection = document.getElementById("overview");
  const learnedSection = document.getElementById("solution");

  if (overviewSection && learnedSection) {
    const overviewRect = overviewSection.getBoundingClientRect();
    const learnedRect = learnedSection.getBoundingClientRect();

    // Show nav when overview section top reaches viewport top and hide when learned section bottom passes viewport
    isNavVisible.value = overviewRect.top <= 100 && learnedRect.bottom >= 0;

    // Only update active section if nav is visible
    if (isNavVisible.value) {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            activeSection.value = section.id;
            break;
          }
        }
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateNavigation);
  updateNavigation();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateNavigation);
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <DefaultLayoutView>
    <section class="pt-16 md:pt-36">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-1 px-4 md:px-16 max-w-4xl">
          <h2
            class="font-LibreBaskerville text-[32px] md:text-[56px] text-light"
          >
            Real-Time Error Tracking with Sentry Integration
          </h2>
          <p class="text-grayMist text-lg md:text-xl uppercase">
            Sentry Error Monitoring Integration connects two websites with
            Sentry to enable real-time error tracking and efficient issue
            resolution, enhancing system reliability
          </p>
        </div>
        <div
          class="w-full flex md:flex-row flex-col-reverse justify-between bg-light items-center"
        >
          <div class="flex flex-col gap-2 px-4 md:py-16 md:pl-16 py-8">
            <h3 class="font-LibreBaskerville text-4xl md:text-5xl">Outcomes</h3>
            <ul class="flex flex-col gap-4 max-w-3xl">
              <li class="text-base md:text-lg text-greyDark font-medium">
                Developed an MVP feature for real-time system error tracking and
                monitoring
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                Integrated Sentry for seamless third-party error tracking and
                monitoring
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                Presented insights to highlight the scope and impact of my
                contributions
              </li>
            </ul>
          </div>
          <div class="w-full h-full flex justify-end">
            <img
              loading="lazy"
              src="/src/assets/image/outcomes-gmed.png"
              alt=""
              class="object-cover h-auto rounded-none md:rounded-l-2xl my-0 md:my-6 shadow-lg shadow-blue-800/20"
            />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center gap-6 md:gap-16 px-4 md:px-16 items-start"
        >
          <div class="flex flex-row gap-6 md:gap-16">
            <div class="flex flex-col">
              <h3
                class="font-LibreBaskerville text-2xl md:text-[32px] text-light uppercase"
              >
                Role
              </h3>
              <div class="flex flex-col">
                <span class="text-grayMist text-base md:text-lg"
                  >Frontend Developer</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >UIX Designer</span
                >
              </div>
            </div>
            <div class="flex flex-col">
              <h3
                class="font-LibreBaskerville text-2xl md:text-[32px] text-light uppercase"
              >
                Tim
              </h3>
              <div class="flex flex-col">
                <span class="text-grayMist text-base md:text-lg"
                  >Chief Technology Officer
                </span>
                <span class="text-grayMist text-base md:text-lg"
                  >DevOPS Engineer</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Backend Developer
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-6 md:gap-16">
            <div class="flex flex-col">
              <h3
                class="font-LibreBaskerville text-2xl md:text-[32px] text-light uppercase"
              >
                My Impacts
              </h3>
              <div class="flex flex-col">
                <span class="text-grayMist text-base md:text-lg"
                  >Conceptualized and conducted research</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >End-to-end Design</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Slicing design to code</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Integration Frontend with Rest API</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Testing and Debugging Frontend code</span
                >
              </div>
            </div>
            <div class="flex flex-col">
              <h3
                class="font-LibreBaskerville text-2xl md:text-[32px] text-light uppercase"
              >
                Duration
              </h3>
              <p class="text-grayMist text-base md:text-lg">
                3 Month - Status: <br />
                Designing - Development - Testing
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-10 md:px-16 mx-6 mt-6 md:mt-32">
          <div class="flex flex-col gap-16 max-w-4xl">
            <!-- project overview -->
            <div id="overview" class="flex flex-col gap-3 max-w-3xl">
              <div class="flex flex-col gap-3">
                <h4 class="text-grayMist uppercase text-base">
                  Project Overview
                </h4>
                <p class="text-light text-xl flex flex-col gap-2">
                  As an intern, I was tasked with designing and developing an
                  integration system connecting two platforms: Sentry, an error
                  tracking tool, and a project management website hosting
                  multiple projects.
                  <span
                    >My role involved creating a feature that identifies and
                    displays project errors from the project management site,
                    leveraging Sentry's capabilities. The system ensures that
                    every error detected by Sentry is seamlessly captured and
                    presented on the integration platform, enabling efficient
                    monitoring and issue resolution across projects.</span
                  >
                </p>
              </div>
            </div>
            <!-- problem -->
            <div
              id="problem"
              class="p-4 md:py-20 md:px-20 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-7 md:gap-10 w-full">
                <div class="flex flex-col gap-4">
                  <h4 class="text-grayMist uppercase text-base">Problem</h4>
                  <p
                    class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10"
                  >
                    The lack of a unified system to efficiently monitor and
                    display errors across projects, requiring seamless
                    integration between the error tracking platform (Sentry) and
                    the project management website
                  </p>
                </div>
                <img
                  loading="lazy"
                  src="/src/assets/image/problem.png"
                  alt=""
                />
                <div class="flex flex-col gap-4">
                  <p class="text-light text-xl flex flex-col">
                    <span class="text-grayMist uppercase text-base">
                      identification
                    </span>
                    Issue and task management is a critical aspect of software
                    development. The manual data transfer from Sentry to
                    OpenProject is time-consuming and increases the risk of
                    errors. An automated solution is required to optimize work
                    efficiency, allowing teams to focus more on problem-solving
                    and product innovation
                  </p>
                </div>
              </div>
            </div>
            <!-- solution -->
            <div
              id="solution"
              class="p-4 md:py-20 md:px-20 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-7 md:gap-10 w-full">
                <div class="flex flex-col gap-4">
                  <h4 class="text-grayMist uppercase text-base">Solution</h4>
                  <p
                    class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10"
                  >
                    Developing a real-time integration system focused on
                    monitoring issues or errors within the project management
                    system, aimed at enhancing developer productivity in
                    debugging
                  </p>
                </div>
                <img
                  loading="lazy"
                  src="/src/assets/image/solution.png"
                  alt=""
                />
                <div class="flex flex-col gap-4">
                  <p class="text-light text-xl flex flex-col">
                    <span class="text-grayMist uppercase text-base">
                      STRATEGY</span
                    >
                    Designing and developing an integrated system between Sentry
                    and OpenProject to automatically and in real-time track
                    errors caused by human error or system failures, enhancing
                    issue management efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="isNavVisible"
            class="fixed right-16 top-24 hidden md:flex flex-col gap-6 max-w-48 w-full transition-opacity duration-300"
            :class="{ 'opacity-100': isNavVisible, 'opacity-0': !isNavVisible }"
          >
            <p class="text-grayMist text-base">On This Page</p>
            <nav class="flex flex-col gap-2">
              <button
                v-for="section in sections"
                :key="section.id"
                @click="scrollToSection(section.id)"
                :class="[
                  'text-left px-4 py-2 rounded-md transition-all duration-500 transform',
                  'hover:bg-greyDark hover:text-light',
                  activeSection === section.id
                    ? 'bg-greyDark text-light px-8 py-4'
                    : 'text-grayMist',
                ]"
              >
                {{ section.title }}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>
<style scoped>
.fixed {
  position: fixed;
}
</style>