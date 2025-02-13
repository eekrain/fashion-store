<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import HomeHero from "~/components/Home/HomeHero.vue";
import HomeCollection from "~/components/Home/HomeCollection.vue";
import NewArrivals from "~/components/Home/NewArrivals.vue";
import ProductDetails from "~/components/Product/ProductDetails.vue";
import FeaturedCollection from "~/components/Product/FeaturedCollection.vue";
import FeaturesSection from "~/components/Product/FeaturesSection.vue";

const placeholderProducts = [
  {
    id: "1",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    id: "2",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    id: "3",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket 3",
      },
    ],
  },
  {
    id: "4",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket 4",
      },
    ],
  },
];
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
    <ProductDetails />

    <div class="container mx-auto">
      <h2 class="mb-4 text-center text-3xl font-bold">Top Wears for Women</h2>
      <ProductGrid :products="placeholderProducts" />
    </div>

    <FeaturedCollection />

    <FeaturesSection />
  </HomeLayout>
</template>
