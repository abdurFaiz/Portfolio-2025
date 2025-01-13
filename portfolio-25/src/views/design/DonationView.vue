<script setup>
import DefaultLayoutView from "../layout/DefaultLayoutView.vue";
</script>

<template>
  <DefaultLayoutView>
    <section class="pt-16 md:pt-36">
      <div class="flex flex-col gap-12 w-full">
        <div class="flex flex-col gap-1 px-4 md:px-16 justify-center">
          <h2
            class="font-LibreBaskerville text-[32px] md:text-[56px] text-light text-center px-10"
          >
            Platform Donation
          </h2>
          <p class="text-grayMist text-lg uppercase text-center">
            A "Platform Donation" is an online system for secure, easy donations
            to charitable causes
          </p>
        </div>
        <div class="flex flex-col gap-1">
            <img src="/src/assets/image/Landing-page-donate.png" alt="">
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>