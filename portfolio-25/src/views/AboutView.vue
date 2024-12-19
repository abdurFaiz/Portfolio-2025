<script setup>
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
</script>

<template>
  <DefaultLayoutView>
    <section id="welcome" class="pt-24 md:pt-28 px-4 md:px-16">
      <div class="flex flex-col gap-48">
        <div class="flex flex-col items-center gap-12 md:gap-32">
          <div class="flex flex-col items-center relative">
            <img
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
        <div class="flex flex-col items-center gap-12">
          <h2 class="font-LibreBaskerville text-4xl md:text-[56px] text-light">
            What have I done?
          </h2>
          <div class="flex flex-col gap-9">
            <div class="flex flex-col gap-5">
              <h3 class="font-LibreBaskerville text-light text-2xl md:text-[32px]">
                Frontend Developer ● Dispendukcapil SKH
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>
