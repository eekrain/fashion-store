<script setup lang="ts">
import { HiOutlineShoppingBag } from "vue-icons-plus/hi2";
import { IoClose } from "vue-icons-plus/io";
import CartContent from "./CartContent.vue";
const isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <button class="relative hover:text-black" @click="toggleDrawer">
    <HiOutlineShoppingBag class="size-6 text-gray-700" />
    <span
      class="absolute -right-3 -top-2 rounded-full bg-rabbit-red px-2 py-0.5 text-xs text-white"
    >
      4
    </span>
  </button>
  <div
    class="fixed right-0 top-0 z-50 flex h-full w-4/5 transform flex-col bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-[30rem]"
    :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
  >
    <!-- Close button -->
    <div class="flex justify-end p-4">
      <button @click="toggleDrawer">
        <IoClose class="size-6 text-gray-600" />
      </button>
    </div>

    <!-- Cart content with scrollable area -->
    <div class="flex-grow overflow-y-auto">
      <div class="p-4">
        <h2 class="mb-4 text-lg font-semibold">Your Cart</h2>
        <!-- Component for cart contents -->
        <CartContent />
      </div>
    </div>
    <!-- Checkout button fixed at bottom -->
    <div class="sticky bottom-0 bg-white p-4">
      <Button class="w-full" size="lg">Checkout</Button>
      <p class="text-center text-sm tracking-tight text-gray-500">
        Shipping, taxes, and discounts calculated at checkout.
      </p>
    </div>
  </div>
</template>
