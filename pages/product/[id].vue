<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import ProductDetails from "~/components/Product/ProductDetails.vue";

const route = useRoute();
</script>

<template>
  <HomeLayout>
    <ProductDetails />
  </HomeLayout>
</template>
