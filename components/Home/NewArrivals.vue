<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css"; // Make sure this is imported

const newArrivals = ref([
  {
    id: 1,
    name: "Stylish Jacket",
    price: 120.99,
    images: [
      { url: "https://picsum.photos/500/500?random=39", alt: "Stylish Jacket" },
    ],
  },
  {
    id: 2,
    name: "Stylish Jacket",
    price: 120.99,
    images: [
      { url: "https://picsum.photos/500/500?random=42", alt: "Stylish Jacket" },
    ],
  },
  {
    id: 3,
    name: "Stylish Jacket",
    price: 120.99,
    images: [
      { url: "https://picsum.photos/500/500?random=45", alt: "Stylish Jacket" },
    ],
  },
  {
    id: 4,
    name: "Stylish Jacket",
    price: 120.99,
    images: [
      { url: "https://picsum.photos/500/500?random=48", alt: "Stylish Jacket" },
    ],
  },
  {
    id: 5,
    name: "Stylish Jacket",
    price: 120.99,
    images: [
      { url: "https://picsum.photos/500/500?random=51", alt: "Stylish Jacket" },
    ],
  },
]);
</script>

<template>
  <section class="py-16">
    <div class="container relative mx-auto px-4">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold">Explore New Arrivals</h2>
        <p class="mx-auto max-w-3xl text-gray-600">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
      </div>

      <div class="relative">
        <Carousel
          :autoplay="3000"
          :wrap-around="true"
          :transition="500"
          :mouseDrag="true"
          :breakpoints="{
            '1024': {
              itemsToShow: 3,
            },
            '768': {
              itemsToShow: 2,
            },
            '480': {
              itemsToShow: 1,
            },
          }"
        >
          <template #addons>
            <Navigation />
          </template>
          <Slide v-for="item in newArrivals" :key="item.id">
            <div class="carousel__item mx-2">
              <div class="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  :src="item.images[0].url"
                  :alt="item.images[0].alt"
                  class="h-full w-full object-cover"
                />
                <div class="absolute bottom-4 left-4 text-white">
                  <h3 class="text-xl font-medium">{{ item.name }}</h3>
                  <p class="mt-1">${{ item.price }}</p>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>
