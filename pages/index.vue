<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import HomeHero from "~/components/Home/HomeHero.vue";
import HomeCollection from "~/components/Home/HomeCollection.vue";
import NewArrivals from "~/components/Home/NewArrivals.vue";
</script>

<template>
  <HomeLayout>
    <!-- Hero Section -->
    <HomeHero />

    <!-- Collection Section -->
    <HomeCollection />

    <!-- New Arrivals Section -->
    <NewArrivals />
  </HomeLayout>
</template>
