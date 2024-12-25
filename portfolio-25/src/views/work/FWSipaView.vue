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
  {
    id: "result",
    title: "Results",
  },
];

const updateNavigation = () => {
  // Get the boundary elements
  const overviewSection = document.getElementById("overview");
  const learnedSection = document.getElementById("result");

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
            Redesign website for The Solo International Performing Arts (SIPA)
          </h2>
          <p class="text-grayMist text-lg md:text-xl uppercase">
            Revamped SIPA Festival's website boosted user experience, attracting
            2,000+ new users and a 15,233% traffic surge in 30 days, amplifying
            its cultural impact globally
          </p>
        </div>
        <div
          class="w-full flex md:flex-row flex-col-reverse justify-between bg-light items-center"
        >
          <div class="flex flex-col gap-2 px-4 md:py-16 md:pl-16 py-8">
            <h3 class="font-LibreBaskerville text-4xl md:text-5xl">Outcomes</h3>
            <ul class="flex flex-col gap-4 max-w-3xl">
              <li class="text-base md:text-lg text-greyDark font-medium">
                Redesigned an international event website to enhance branding
                and boost audience engagement
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                <span class="text-accent font-semibold"
                  >Increased engagement by 15,233%, bringing 2,000+ new users in
                  30 days</span
                >, amplifying brand presence and reach
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                Enhanced both the aesthetics and functionality of the website,
                delivering a more user-friendly and visually appealing
                experience
              </li>
            </ul>
          </div>
          <div class="w-full h-full">
            <img loading="lazy"
              src="/src/assets/image/SIPA-PREV.png"
              alt=""
              class="object-cover w-full h-auto rounded-none md:rounded-l-2xl my-0 md:my-6 shadow-lg shadow-green-950/45"
            />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center gap-6 md:gap-16 px-4 md:px-16 items-start"
        >
          <div class="flex flex-row gap-6 md:gap-16">
            <div class="flex flex-col justify-center">
              <h3
                class="font-LibreBaskerville text-2xl md:text-[32px] text-light uppercase"
              >
                Role
              </h3>
              <div class="flex flex-col">
                <span class="text-grayMist text-base md:text-lg"
                  >Wrodpress Developer</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Researcher</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Visual Designer</span
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
                  >Graphic Designer</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Social Media Specialist
                </span>
                <span class="text-grayMist text-base md:text-lg"
                  >Photographer</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Videographer</span
                >
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
                  >Future vision development
                </span>
                <span class="text-grayMist text-base md:text-lg"
                  >End-to-end Design</span
                >
                <span class="text-grayMist text-base md:text-lg"
                  >Build Micro Interaction</span
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
                Researching - Designing - Evaluating
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-10 md:px-16 mx-6">
          <div class="flex flex-col gap-16 max-w-4xl">
            <!-- project overview -->
            <div id="overview" class="flex flex-col gap-3 max-w-3xl">
              <div class="flex flex-col gap-3">
                <h4 class="text-grayMist uppercase text-base">
                  Project Overview
                </h4>
                <p class="text-light text-xl flex flex-col gap-2">
                  The project focuses on redesigning the user interface to
                  elevate satisfaction and engagement for a global audience. The
                  goal is to create an intuitive, visually appealing platform
                  that ensures seamless interactions and delivers an optimized
                  user experience on all devices
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
                    The website lacks an appealing design suitable for an
                    international art event and falls short in terms of
                    accessibility
                  </p>
                </div>
                <img loading="lazy" src="/src/assets/image/sipa-v1.png" alt="" />
                <div class="flex flex-col gap-4">
                  <p class="text-light text-xl flex flex-col">
                    <span class="text-grayMist uppercase text-base">
                      STRATEGY</span
                    >
                    Our approach focuses on user-centered design, integrating
                    feedback from real users to guide the redesign. We aim to
                    create a visually appealing, accessible, and functional
                    platform with streamlined navigation and modern aesthetics,
                    aligning with current UX/UI best practices to deliver an
                    engaging experience for a diverse audience
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
                    My goal is to redesign the website to prioritize user needs
                    with a sleek design, intuitive navigation, and enhanced
                    usability for a more inclusive and engaging experience
                  </p>
                </div>
                <img loading="lazy" src="/src/assets/image/sipa-after.png" alt="" />
                <div class="flex flex-col gap-0 md:gap-4 px-0 md:px-6">
                  <h5
                    class="text-light font-LibreBaskerville text-xl md:text-[28px]"
                  >
                    Key Highlights of the SIPA 2024 Website Redesign Process
                  </h5>
                  <ul class="list-disc list-inside">
                    <li class="text-light text-base md:text-xl gap-2 my-3">
                      The consistent use of a dark green and gold color palette
                      creates a strong, memorable brand identity.
                      <span class="text-grayMist">
                        It boosts the festival's recognition and conveys a sense
                        of professionalism.
                      </span>
                    </li>
                    <li class="text-light text-base md:text-xl gap-2 my-3">
                      The content is thoughtfully organized with a clear
                      hierarchy, starting from the hero section to grab
                      attention, followed by the director's profile to provide
                      key insights, and ending with the gallery to showcase
                      visuals.
                      <span class="text-grayMist">
                        helps website visitors navigate seamlessly, making it
                        easier and more efficient to find the information they
                        need while enhancing their overall experience
                      </span>
                    </li>
                    <li class="text-light text-base md:text-xl gap-2 my-3">
                      Clear call-to-action buttons, button back to top, a
                      user-friendly contact form, and intuitive navigation
                      streamline the user experience
                      <span class="text-grayMist">
                        helps website visitors navigate seamlessly, making it
                        easier and more efficient to find the information they
                        need while enhancing their overall experience
                      </span>
                    </li>
                    <li class="text-light text-base md:text-xl gap-2 my-3">
                      A 'Visual Journey Through Time' section highlighting the
                      festival's evolution from 2009 to 2024.
                      <span class="text-grayMist">
                        Fosters emotional connections by celebrating the
                        festival's rich heritage and growth over the years
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- result -->
            <div
              id="result"
              class="p-4 md:py-20 md:px-20 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-7 md:gap-10 w-full">
                <div class="flex flex-col gap-4">
                  <h4 class="text-grayMist uppercase text-base">Result</h4>
                  <p
                    class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10"
                  >
                    Increased engagement by 15,233%, bringing 2,000+ new users
                    in 30 days, amplifying brand presence and reach
                  </p>
                </div>
                <div class="flex flex-col gap-6 w-full">
                  <img loading="lazy" src="/src/assets/image/analy-cn.png" alt="" />
                  <img loading="lazy" src="/src/assets/image/analy-user.png" alt="" />
                </div>
                <div class="flex flex-col gap-4 px-0 md:px-6">
                  <h5
                    class="text-light font-LibreBaskerville text-xl md:text-[28px]"
                  >
                    Key Highlights of the SIPA 2024 Website Redesign Process
                  </h5>
                  <ul class="flex flex-col gap-3">
                    <li class="text-light text-base md:text-xl">
                      The platform experienced remarkable growth during late
                      summer,<span class="text-accent"
                        >reaching 2,600 active users—an impressive 2,395.2%
                        increase from the baseline.</span
                      >
                      A major milestone occurred on August 29, when active users
                      spiked from 42 to 460 in a single day, driven by targeted
                      strategic initiatives.
                      <span class="text-accent"
                        >Engagement was equally strong, with 13,000 total events
                        recorded, marking a 2,965.7% increase.</span
                      >
                      Additionally, the platform achieved a 44.9% engagement
                      rate, showing that nearly half of the users actively
                      interacted with its features and offerings
                    </li>
                    <li class="text-light text-base md:text-xl">
                      Indonesia leads our user base with 2,400 active users,
                      making up 92% of total users and showcasing strong market
                      penetration in Southeast Asia. Promising growth is also
                      evident in key markets like the United States (57 users),
                      Australia (38), and Malaysia (27).
                      <span class="text-accent"
                        >Early adoption signals from Japan, Singapore, and South
                        Korea highlight significant opportunities for strategic
                        expansion across the Asia-Pacific region</span
                      >
                    </li>
                    <li
                      class="text-light text-base md:text-xl px-4 py-2 rounded-xl bg-accent w-fit my-4"
                    >
                      <a href="https://sipafestival.com/" target="_blank"
                        >Live Website</a
                      >
                    </li>
                  </ul>
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
        <div
          class="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-32 justify-center my-6 md:my-20"
        >
          <h4 class="font-LibreBaskerville text-light text-3xl md:text-6xl">
            Next Project
          </h4>
          <div class="flex flex-col gap-4 max-w-xl">
            <div class="flex flex-col gap-4 relative">
              <img loading="lazy"
                src="/src/assets/image/WhatsNext.png"
                alt=""
                class="max-w-xl h-auto w-full rounded-2xl"
              />
              <div class="absolute top-3 left-3 md:top-6 md:left-6">
                <div class="flex gap-3">
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">CASE STUDY</p>
                  </div>
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">MOBILE</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h6 class="font-LibreBaskerville text-light text-2xl">
                What’s Next?
              </h6>
              <p class="text-grayMist text-base leading-7 line-clamp-3">
                Application designed to help users, particularly students and
                young adults, navigate the challenges of choosing the right
                educational path and career
              </p>
            </div>
            <router-link
              to="/whats-next-case-study"
              class="text-light text-base md:text-lg leading-7 gap-1 flex items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
            >
              VIEW
              <img loading="lazy"
                src="/src/assets/icon/thin-arrow-right.svg"
                width="24px"
                alt=""
              />
            </router-link>
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