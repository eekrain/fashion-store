<script setup lang="ts">
import { IoClose } from "vue-icons-plus/io";
import { HiBars3BottomRight } from "vue-icons-plus/hi2";
const isOpen = ref(false);
const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <button class="hover:text-black md:hidden" @click="toggleDrawer">
    <HiBars3BottomRight class="size-6 text-gray-700" />
  </button>
  <div
    class="fixed left-0 top-0 z-50 !m-0 h-full w-3/4 transform bg-white shadow-lg transition-all duration-300 sm:w-1/2 md:w-1/3"
    :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
  >
    <div class="flex justify-end p-4">
      <button @click="toggleDrawer">
        <IoClose class="size-6 text-gray-600" />
      </button>
    </div>
    <div class="p-4">
      <h2 class="mb-4 text-xl font-semibold">Menu</h2>
      <nav class="space-y-4">
        <NuxtLink
          to="#"
          @click="toggleDrawer"
          class="block text-gray-600 hover:text-black"
        >
          Men
        </NuxtLink>
        <NuxtLink
          to="#"
          @click="toggleDrawer"
          class="block text-gray-600 hover:text-black"
        >
          Women
        </NuxtLink>
        <NuxtLink
          to="#"
          @click="toggleDrawer"
          class="block text-gray-600 hover:text-black"
        >
          Top Wear
        </NuxtLink>
        <NuxtLink
          to="#"
          @click="toggleDrawer"
          class="block text-gray-600 hover:text-black"
        >
          Bottom Wear
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>
