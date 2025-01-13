<script setup>
import DefaultLayoutView from "../layout/DefaultLayoutView.vue";
</script>

<template>
  <DefaultLayoutView>
    <section class="pt-16 md:pt-36">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-1 px-4 md:px-16 justify-center">
          <h2
            class="font-LibreBaskerville text-[32px] md:text-[56px] text-light text-center"
          >
            Dive for Live
          </h2>
          <p class="text-grayMist text-lg uppercase text-center">
            Dive into action! This microsite invites volunteers on ocean
            adventures to collect plastic waste, raise awareness, and promote a
            cleaner, sustainable future
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <img src="/src/assets/image/voulounteer-landing.png" alt="" />
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>