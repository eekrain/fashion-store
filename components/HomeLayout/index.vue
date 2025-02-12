<script setup lang="ts">
import MainNavbar from "./MainNavbar.vue";
import NotifBar from "./NotifBar.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header class="border-b border-gray-200">
      <NotifBar />
      <MainNavbar />
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
