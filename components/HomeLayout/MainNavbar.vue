<script setup lang="ts">
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "vue-icons-plus/hi2";
import SearchBar from "./SearchBar.vue";
import CartDrawer from "./CartDrawer.vue";
import MobileNavigation from "./MobileNavigation.vue";
</script>

<template>
  <nav class="container mx-auto flex items-center justify-between px-6 py-4">
    <!-- Left logo -->
    <div>
      <NuxtLink to="/" class="text-2xl font-medium">Rabbit</NuxtLink>
    </div>
    <!-- Center Nav -->
    <div class="hidden space-x-6 md:flex">
      <NuxtLink
        to="/collections/all"
        class="text-sm font-medium uppercase text-gray-700 hover:text-black"
        >Men</NuxtLink
      >
      <NuxtLink
        to="/collections/women"
        class="text-sm font-medium uppercase text-gray-700 hover:text-black"
        >Women</NuxtLink
      >
      <NuxtLink
        to="/collections/top-wear"
        class="text-sm font-medium uppercase text-gray-700 hover:text-black"
        >Top Wear</NuxtLink
      >
      <NuxtLink
        to="/collections/bottom-wear"
        class="text-sm font-medium uppercase text-gray-700 hover:text-black"
        >Bottom Wear</NuxtLink
      >
    </div>
    <!-- Right - Icons -->
    <div class="flex items-center space-x-4">
      <NuxtLink to="#" class="hover:text-black">
        <HiOutlineUser class="size-6 text-gray-700" />
      </NuxtLink>

      <!-- Cart Drawer -->
      <CartDrawer />

      <!-- Search  -->
      <div class="overflow-hidden">
        <SearchBar />
      </div>

      <!-- Mobile Navigation -->
      <MobileNavigation />
    </div>
  </nav>
</template>
