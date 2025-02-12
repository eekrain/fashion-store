<script setup lang="ts">
import { HiMagnifyingGlass, HiMiniXMark } from "vue-icons-plus/hi2";

const search = ref("");
const isOpen = ref(false);

const handleSearch = () => {
  console.log(search.value);
  isOpen.value = false;
};
</script>

<template>
  <!-- only show when isOpen is true -->
  <div
    v-if="isOpen"
    class="absolute left-0 top-0 z-50 flex h-24 w-full items-center justify-center bg-white"
  >
    <form
      class="relative flex w-full items-center justify-center"
      @submit.prevent="handleSearch"
    >
      <div class="relative w-1/2">
        <input
          type="text"
          v-model="search"
          placeholder="Search"
          class="w-full rounded-lg bg-gray-100 py-2 pl-2 pr-12 placeholder:text-gray-700 focus:outline-none"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
        >
          <HiMagnifyingGlass class="size-6" />
        </button>
      </div>
      <!-- close button -->
      <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
        @click="isOpen = false"
      >
        <HiMiniXMark class="size-6" />
      </button>
    </form>
  </div>
  <!-- show search icon when isOpen is false -->
  <div
    v-else
    class="flex w-auto items-center justify-center transition-all duration-300"
  >
    <button @click="isOpen = !isOpen">
      <HiMagnifyingGlass class="size-6 text-gray-700" />
    </button>
  </div>
</template>
