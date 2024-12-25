<script setup>
import DefaultLayoutView from "../layout/DefaultLayoutView.vue";
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
              src="/src/assets/image/gmed-detl.png"
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
        <div class="flex flex-row gap-10 md:px-16 mx-6">
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
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>