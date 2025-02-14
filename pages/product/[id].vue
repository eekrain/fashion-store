<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import ProductDetails from "~/components/Product/ProductDetails.vue";
import { getProductBySku } from "~/lib/api";

const route = useRoute();
const { id } = route.params;

const { data: product } = await useAsyncData("product", () =>
  getProductBySku(id as string),
);
</script>

<template>
  <HomeLayout>
    <ProductDetails v-if="product" :selected-product="product" />
  </HomeLayout>
</template>
