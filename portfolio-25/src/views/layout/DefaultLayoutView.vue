<script setup>
import HeaderView from "@/components/header/HeaderView.vue";
import FooterView from "@/components/footer/FooterView.vue";
</script> 
<template>
  <div class="h-screen">
    <!-- header area -->
    <HeaderView />
    <!-- main area -->
    <main>
      <div class="bg-dark max-w-screen-2xl  flex flex-col gap-[120px]">
        <slot></slot>
      </div>
    </main>
    <!-- footer area -->
    <FooterView />
  </div>
</template>