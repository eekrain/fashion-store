<script setup lang="ts">
interface Props {
  products: {
    id: string;
    name: string;
    price: number;
    images: {
      url: string;
      altText: string;
    }[];
  }[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    <div v-for="product in products" :key="product.id">
      <NuxtLink :to="`/product/${product.id}`" class="block">
        <div class="rounded-lg bg-white p-4">
          <div class="mb-4 h-96 w-full">
            <NuxtImg
              :src="product.images[0].url"
              :alt="product.images[0].altText"
              class="h-full w-full rounded-lg object-cover"
            />
          </div>
          <h3 class="mb-2 text-sm">
            {{ product.name }}
          </h3>
          <p class="text-sm font-medium tracking-tight text-gray-500">
            $ {{ product.price }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
