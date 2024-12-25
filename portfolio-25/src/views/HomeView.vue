<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <DefaultLayoutView>
    <!-- hero section -->
    <section id="home" class="pt-20 md:pt-0 px-4 md:px-16">
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
              UIX Designer
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
    <section id="about" class="px-4 md:px-16">
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
            class="w-20 md:w-32 transform transition-all duration-700 ease-in-out hover:scale-150"
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
            class="w-20 md:w-32 transform transition-all duration-700 ease-in-out hover:scale-150"
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
            class="w-20 md:w-32 transform transition-all duration-700 ease-in-out hover:scale-150"
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
            Technology Industries
          </h2>
        </div>
      </div>
    </section>
    <!-- work section -->
    <section id="works" class="px-4 md:px-16">
      <div class="flex flex-col gap-16">
        <h2 class="text-4xl md:text-[56px] font-LibreBaskerville text-light">
          Recently Work
        </h2>
        <div class="flex flex-col gap-12 w-full">
          <div
            class="flex p-4 md:p-6 bg-gradient-to-r from-greyCardDard to-dark rounded-xl flex-col md:flex-row gap-6 md:items-center transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-50/10 border-2 border-greyCardDard hover:border-greyDark"
          >
            <div class="relative rounded-2xl overflow-hidden">
              <img
                src="/src/assets/image/VarXSentry.png"
                alt="VarXSentry Case Study"
                class="object-cover w-full h-auto"
              />
              <div class="absolute top-3 left-3 sm:top-6 sm:left-6">
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <div
                    class="px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-xs sm:text-sm text-light">CASE STUDY</p>
                  </div>
                  <div
                    class="px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-xs sm:text-sm text-light">WEBSITE</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <h3
                class="text-[32px] md:text-[40px] font-LibreBaskerville text-light"
              >
                Sentry Error Monitoring Integration
              </h3>
              <p
                class="text-grayMist text-base md:text-xl leading-7 line-clamp-3"
              >
                Sentry Error Monitoring Integration connects two websites with
                Sentry to enable real-time error tracking and efficient issue
                resolution, enhancing system reliability
              </p>
              <router-link
                to="/sentry-project"
                class="text-light text-base md:text-xl leading-7 gap-1 flex items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img src="/src/assets/icon/thin-arrow-right.svg" alt="" />
              </router-link>
            </div>
          </div>
          <div
            class="flex-col-reverse flex p-4 md:p-6 bg-gradient-to-tr from-dark to-greyCardDard rounded-xl md:flex-row gap-6 md:items-center transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-50/10 border-2 border-greyCardDard hover:border-greyDark"
          >
            <div class="flex flex-col gap-4">
              <h3
                class="text-[32px] md:text-[40px] font-LibreBaskerville text-light"
              >
                International Event Performing Arts
              </h3>
              <p
                class="text-grayMist text-base md:text-xl leading-7 line-clamp-3"
              >
                The redesigned website for The Solo International Performing
                Arts (SIPA) Festival transformed its digital presence,
                showcasing vibrant cultural performances more effectively.
                Within 30 days, the redesign drove over 2,000 new users and
                achieved a remarkable 15,233% traffic increase, solidifying
                SIPA’s position as a global hub for cultural expression.
              </p>
              <router-link
                to="/work/sipa-new-face"
                class="text-light text-base md:text-xl leading-7 flex gap-1 items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img src="/src/assets/icon/thin-arrow-right.svg" alt="" />
              </router-link>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <img
                src="/src/assets/image/SIPA.png"
                alt=""
                class="object-cover h-auto w-full"
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
                    <p class="text-light text-sm">WEBSITE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex p-4 md:p-6 bg-gradient-to-r from-greyCardDard to-dark rounded-xl flex-col md:flex-row gap-6 md:items-center transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-50/10 border-2 border-greyCardDard hover:border-greyDark"
          >
            <div class="relative rounded-2xl overflow-hidden">
              <img
                src="/src/assets/image/WhatsNext.png"
                alt=""
                class="object-cover w-full h-auto"
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
            <div class="flex flex-col gap-4">
              <h3
                class="text-[32px] md:text-[40px] font-LibreBaskerville text-light"
              >
                What's next?
              </h3>
              <p
                class="text-grayMist text-base md:text-xl leading-7 line-clamp-3"
              >
                Application designed to help users, particularly students and
                young adults, navigate the challenges of choosing the right
                educational path and career
              </p>
              <router-link
                to="/work/whats-next-case-study"
                class="text-light text-base md:text-xl leading-7 flex gap-1 items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img src="/src/assets/icon/thin-arrow-right.svg" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Exploration Design -->
    <section id="exploration" class="px-4 md:px-16">
      <div class="flex flex-col gap-12">
        <div class="flex flex-row justify-between items-center">
          <h2 class="text-light font-LibreBaskerville text-4xl md:text-5xl">
            My Discovery Design
          </h2>
          <routee-link
            to="/exploration-design"
            class="flex items-center text-light text-base md:text-xl leading-7"
          >
            VIEW ALL
            <img
              src="/src/assets/icon/thin-arrow-up.svg"
              alt=""
              class="size-9"
            />
          </routee-link>
        </div>
        <div class="flex gap-6 flex-row overflow-x-auto overflow-hidden">
          <div class="flex flex-col gap-4 max-w-md">
            <img
              src="/src/assets/image/Dont-Explore.png"
              alt=""
              class="max-w-96 rounded-2xl"
            />
            <div class="flex flex-col gap-2">
              <h4 class="text-2xl font-LibreBaskerville text-light">
                Platform Donation
              </h4>
              <p class="text-base text-light">
                A "Platform Donation" is an online system for secure, easy
                donations to charitable causes.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-4 max-w-md">
            <img
              src="/src/assets/image/Fitns-Explore.png"
              alt=""
              class="max-w-96 rounded-2xl"
            />
            <div class="flex flex-col gap-2">
              <h4 class="text-2xl font-LibreBaskerville text-light">
                LifePulse
              </h4>
              <p class="text-base text-light">
                No matter where you start, every move builds a stronger, fitter
                you. Let’s grow together.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-4 max-w-md">
            <img
              src="/src/assets/image/Dive-Explore.png"
              alt=""
              class="max-w-96 rounded-2xl"
            />
            <div class="flex flex-col gap-2">
              <h4 class="text-2xl font-LibreBaskerville text-light">
                Dive for Live
              </h4>
              <p class="text-base text-light line-clamp-2">
                Dive into action! This microsite invites volunteers on ocean
                adventures to collect plastic waste, raise awareness, and
                promote a cleaner, sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section services -->
    <section id="Services" class="px-4 md:px-16">
      <div class="flex flex-col gap-12">
        <h2 class="text-light font-LibreBaskerville text-4xl md:text-5xl">
          Services
        </h2>
        <div class="flex flex-col gap-6">
          <div
            class="rounded-2xl bg-gradient-to-l from-greyCardDard to-greyDark p-[1.5px]"
          >
            <div
              class="flex flex-col md:flex-row p-6 md:p-8 justify-between rounded-2xl bg-gradient-to-r from-dark/90 to-greyCardDard md:gap-0 gap-6"
            >
              <div class="flex flex-col justify-between gap-10">
                <h4
                  class="text-[28px] md:text-[32px] font-LibreBaskerville text-light max-w-96"
                >
                  Empowered by Modern Frameworks
                </h4>
                <div class="flex flex-col gap-4">
                  <img
                    src="/src/assets/icon/react.svg"
                    alt=""
                    class="w-16 ml-32"
                  />
                  <img
                    src="/src/assets/icon/vuejs.svg"
                    alt=""
                    class="w-16 ml-24"
                  />
                  <img
                    src="/src/assets/icon/nextjs.svg"
                    alt=""
                    class="w-16 ml-12"
                  />
                </div>
              </div>
              <div
                class="flex flex-col justify-between max-w-2xl gap-4 md:gap-0"
              >
                <p class="text-base md:text-xl text-grayMist">
                  My approach delivers clean, maintainable code through
                  flexible, scalable frameworks. Whether you're working with
                  Vue.js, React, or Angular, I provide tailored architecture to
                  fit your specific needs. With a client-first mindset, I ensure
                  a seamless experience that evolves with your goals.
                </p>

                <div
                  class="font-bold text-light rounded-xl bg-gradient-to-t from-grayMist to-greyCardDard p-[1.5px]"
                >
                  <a
                    href="/contact"
                    class="flex size-full items-center rounded-xl justify-center bg-dark/85 px-6 py-3"
                  >
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex flex-col">
              <div
                class="rounded-2xl bg-gradient-to-l from-greyCardDard to-greyDark p-[1.5px]"
              >
                <div
                  class="flex flex-col p-6 md:p-8 gap-8 rounded-2xl bg-gradient-to-r from-dark/90 to-greyCardDard"
                >
                  <div class="flex flex-col gap-2">
                    <h4
                      class="text-[28px] md:text-[32px] font-LibreBaskerville text-light"
                    >
                      Website no-code? <span>I Got You</span>
                    </h4>
                    <p class="text-base md:text-xl text-grayMist">
                      Need a fast website without coding? I offer no-code
                      solutions to build your site quickly and efficiently,
                      tailored to your needs
                    </p>
                  </div>
                  <div class="flex flex-row gap-4">
                    <img
                      src="/src/assets/icon/framer.svg"
                      alt=""
                      class="w-10"
                    />
                    <img
                      src="/src/assets/icon/webflow.svg"
                      alt=""
                      class="w-16"
                    />
                    <img
                      src="/src/assets/icon/elementor.svg"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div
                    class="font-bold text-light rounded-xl bg-gradient-to-t from-grayMist to-greyCardDard p-[1.5px]"
                  >
                    <a
                      href="/contact"
                      class="flex size-full items-center rounded-xl justify-center bg-dark/85 px-6 py-3"
                    >
                      GET IN TOUCH
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="rounded-2xl bg-gradient-to-l from-greyCardDard to-greyDark p-[1.5px]"
              >
                <div
                  class="flex flex-col p-6 md:p-8 gap-8 rounded-2xl bg-gradient-to-r from-dark/90 to-greyCardDard"
                >
                  <div class="flex flex-col gap-2">
                    <h4
                      class="text-[28px] md:text-[32px] font-LibreBaskerville text-light"
                    >
                      User-Centric. Design-Driven
                    </h4>
                    <p class="text-base md:text-xl text-grayMist">
                      Delivering UI/UX designs that combine intuitive interfaces
                      with engaging user experiences, tailored to your vision
                    </p>
                  </div>
                  <div class="flex flex-row gap-4">
                    <img src="/src/assets/icon/figma.svg" alt="" class="w-16" />
                  </div>
                  <div
                    class="font-bold text-light rounded-xl bg-gradient-to-t from-grayMist to-greyCardDard p-[1.5px]"
                  >
                    <a
                      href="/contact"
                      class="flex size-full items-center rounded-xl justify-center bg-dark/85 px-6 py-3"
                    >
                      GET IN TOUCH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- why work with me -->
    <section id="workwithme" class="dark:bg-light">
      <div
        class="flex flex-col md:flex-row justify-between gap-6 bg-light px-4 md:px-16 py-20 md:py-32"
      >
        <h2
          class="text-dark font-LibreBaskerville text-4xl md:text-[56px] leading-10 md:leading-[77px]"
        >
          Why Work
          <hr />
          With Me?
        </h2>
        <div class="flex flex-col gap-16 max-w-3xl">
          <div class="flex flex-col">
            <div class="flex flex-row gap-1">
              <span
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
                >1.
              </span>
              <h4
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
              >
                Collaborative Problem Solver
              </h4>
            </div>
            <p class="text-xl text-grayMist pl-0 md:pl-10">
              Proven ability to enhance team productivity by 20% through
              effective cross-functional collaboration and Agile methodologies,
              consistently delivering complex web applications on schedule
            </p>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row gap-1">
              <span
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
                >2.
              </span>
              <h4
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
              >
                Performance-Driven Developer
              </h4>
            </div>
            <p class="text-xl text-grayMist pl-0 md:pl-10">
              Demonstrated expertise in optimizing web applications, achieving
              significant improvements like 40% better cross-device user
              experience, 25% reduced data loading times, and 15% faster page
              load performance.
            </p>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row gap-1">
              <span
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
                >3.
              </span>
              <h4
                class="font-LibreBaskerville text-dark text-[40px] leading-10 md:leading-[77px]"
              >
                Adaptable Tech Innovator
              </h4>
            </div>
            <p class="text-xl text-grayMist pl-0 md:pl-10">
              Versatile skills spanning frontend development (Vue, React,
              Next.JS), UI/UX design, and responsive web technologies, with a
              strong track record of translating design concepts into
              functional, high-performing digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
