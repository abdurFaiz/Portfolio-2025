<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";

const hoveredCards = ref([]);

const mouseHover = (index) => {
  hoveredCards.value[index] = true;
};

const mouseLeave = (index) => {
  hoveredCards.value[index] = false;
};

const cards = [
  {
    image: "/src/assets/image/Dont-Explore.png",
    title: "Platform Donation",
    description:
      'A "Platform Donation" is an online system for secure, easy donations to charitable causes.',
    link: "/donation-platform",
  },
  {
    image: "/src/assets/image/Fitns-Explore.png",
    title: "LifePulse",
    description:
      "No matter where you start, every move builds a stronger, fitter you. Let’s grow together.",
    link: "/fitness-app",
  },
  {
    image: "/src/assets/image/Dive-Explore.png",
    title: "Dive for Live",
    description:
      "Dive into action! This microsite invites volunteers on ocean adventures to collect plastic waste, raise awareness, and promote a cleaner, sustainable future.",
    link: "/valounteer-platform",
  },
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from("#works h2", {
    scrollTrigger: {
      trigger: "#works h2",
      start: "top bottom-=150",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  const workItems = document.querySelectorAll("#works .flex-col.gap-12 > div");

  workItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=100",
        end: "center center+=100",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: index * 0.15,
      ease: "power3.out",
    });

    const image = item.querySelector("img");
    if (image) {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "top bottom-=50",
          end: "center center",
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0,
        duration: 2,
        delay: index * 0.15 + 0.2,
        ease: "power2.inOut",
      });
    }

    const textContent = item.querySelector(".flex-col.gap-4");
    if (textContent) {
      gsap.from(textContent, {
        scrollTrigger: {
          trigger: textContent,
          start: "top bottom-=50",
          end: "center center",
          scrub: 1,
        },
        y: 20,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: index * 0.15 + 0.3,
        ease: "power2.inOut",
      });
    }

    // Tags animation
    const tags = item.querySelector(".absolute");
    if (tags) {
      gsap.from(tags.children, {
        scrollTrigger: {
          trigger: tags,
          start: "top bottom-=50",
          scrub: 1,
        },
        x: -20,
        opacity: 0,
        stagger: 0.1,
      });
    }

    const routerLink = item.querySelector("router-link");
    if (routerLink) {
      gsap.from(routerLink.children, {
        scrollTrigger: {
          trigger: routerLink,
          start: "top bottom-=50",
          end: "center center",
          scrub: 1,
        },
        y: 20,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: index * 0.15 + 0.5,
        ease: "power2.inOut",
      });
    }
  });
});
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
            loading="lazy"
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
            loading="lazy"
            class="w-20 md:w-32 transition-all duration-700 ease-in-out hover:scale-150"
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
            loading="lazy"
            class="w-20 md:w-32 transition-all duration-700 ease-in-out hover:scale-150"
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
            loading="lazy"
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
                loading="lazy"
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
                  <div
                    class="px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-xs sm:text-sm text-light">VUE</p>
                  </div>
                  <div
                    class="px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-xs sm:text-sm text-light">LARAVEL</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <h3
                class="text-[32px] md:text-[40px] font-LibreBaskerville text-light"
              >
                Real-Time Error Tracking with Sentry Integration
              </h3>
              <p
                class="text-grayMist text-base md:text-xl leading-7 line-clamp-3"
              >
                Sentry Error Monitoring Integration connects two websites with
                Sentry to enable real-time error tracking and efficient issue
                resolution, enhancing system reliability
              </p>
              <router-link
                to="/integrator-web-case-study"
                class="text-light text-base md:text-xl leading-7 gap-1 flex items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img
                  loading="lazy"
                  src="/src/assets/icon/thin-arrow-right.svg"
                  alt=""
                />
              </router-link>
            </div>
          </div>
          <div
            class="max-h-full flex-col-reverse flex p-4 md:p-6 bg-gradient-to-tr from-dark to-greyCardDard rounded-xl md:flex-row gap-6 md:items-center transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-50/10 border-2 border-greyCardDard hover:border-greyDark"
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
                The redesigned SIPA website boosted traffic by 15,233%, gained
                2,000+ users in 30 days, and cemented its status as a global
                cultural hub
              </p>
              <router-link
                to="/sipa-new-face"
                class="text-light text-base md:text-xl leading-7 flex gap-1 items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img
                  loading="lazy"
                  src="/src/assets/icon/thin-arrow-right.svg"
                  alt=""
                />
              </router-link>
            </div>
            <div class="relative rounded-2xl overflow-hidden max-w-xl">
              <img
                loading="lazy"
                src="/src/assets/image/SIPA.png"
                alt=""
                class="object-cover"
              />
              <div class="absolute top-3 left-3 md:top-6 md:left-6">
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">CASE STUDY</p>
                  </div>
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">REVAMP</p>
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
                loading="lazy"
                src="/src/assets/image/WhatsNext.png"
                alt=""
                class="object-cover w-full h-auto"
              />
              <div class="absolute top-3 left-3 md:top-6 md:left-6">
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">CASE STUDY</p>
                  </div>
                  <div
                    class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                  >
                    <p class="text-light text-sm">UIX DESIGN</p>
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
                to="/whats-next-case-study"
                class="text-light text-base md:text-xl leading-7 flex gap-1 items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img
                  loading="lazy"
                  src="/src/assets/icon/thin-arrow-right.svg"
                  alt=""
                />
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
              loading="lazy"
              src="/src/assets/icon/thin-arrow-up.svg"
              alt=""
              class="size-9"
            />
          </routee-link>
        </div>
        <div
          class="flex gap-6 flex-row overflow-x-auto overflow-hidden scrollbar-hide"
        >
          <div
            class="flex flex-col gap-4 max-w-md"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div
              class="relative group"
              @mouseenter="mouseHover(index)"
              @mouseleave="mouseLeave(index)"
            >
              <img
                loading="lazy"
                :src="card.image"
                alt=""
                :class="[
                  'max-w-96 rounded-2xl transition-all duration-300 ease-in-out transform',
                  hoveredCards[index] ? 'brightness-[0.2]' : 'brightness-100',
                ]"
              />
              <div
                class="absolute top-1/2 left-1/2"
                :class="{
                  'opacity-100': hoveredCards[index],
                  'opacity-0': !hoveredCards[index],
                }"
              >
                <div
                  class="flex flex-col gap-4 md:gap-6 items-center justify-center w-full"
                >
                  <div
                    class="w-fit px-4 py-2 rounded-full bg-light drop-shadow-sm shadow-light"
                  >
                    <router-link
                      :to="card.link"
                      class="text-base md:text-xl text-greyCardDard hover:text-accent transform transition-all ease-in-out hover:duration-500"
                      >View</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-2xl font-LibreBaskerville text-light">
                {{ card.title }}
              </h4>
              <p class="text-base text-light line-clamp-3">
                {{ card.description }}
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
                    loading="lazy"
                    src="/src/assets/icon/react.svg"
                    alt=""
                    class="w-16 ml-32"
                  />
                  <img
                    loading="lazy"
                    src="/src/assets/icon/vuejs.svg"
                    alt=""
                    class="w-16 ml-24"
                  />
                  <img
                    loading="lazy"
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
                      loading="lazy"
                      src="/src/assets/icon/framer.svg"
                      alt=""
                      class="w-10"
                    />
                    <img
                      loading="lazy"
                      src="/src/assets/icon/webflow.svg"
                      alt=""
                      class="w-16"
                    />
                    <img
                      loading="lazy"
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
                    <img
                      loading="lazy"
                      src="/src/assets/icon/figma.svg"
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
