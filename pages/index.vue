<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import HomeHero from "~/components/Home/HomeHero.vue";
import HomeCollection from "~/components/Home/HomeCollection.vue";
import NewArrivals from "~/components/Home/NewArrivals.vue";
import ProductDetails from "~/components/Product/ProductDetails.vue";
import FeaturedCollection from "~/components/Product/FeaturedCollection.vue";
import FeaturesSection from "~/components/Product/FeaturesSection.vue";
import { getProductSlides } from "~/lib/api";

const { data: bestSeller } = await useAsyncData("product-slides", () =>
  getProductSlides(4),
);
</script>

<template>
  <HomeLayout>
    <!-- Hero Section -->
    <HomeHero />

    <!-- Collection Section -->
    <HomeCollection />

    <!-- New Arrivals Section -->
    <NewArrivals />

    <!-- Best Sellers Section -->
    <h2 class="mb-4 text-center text-3xl font-bold">Best Sellers</h2>
    <div class="container mx-auto">
      <h2 class="mb-4 text-center text-3xl font-bold">Top Wears for Women</h2>
      <ProductGrid v-if="bestSeller" :products="bestSeller" />
    </div>

    <FeaturedCollection />

    <FeaturesSection />
  </HomeLayout>
</template>
