<script setup lang="ts">
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "vue-icons-plus/hi2";
</script>

<template>
  <section class="px-4 py-16">
    <div
      class="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3"
    >
      <!-- Feature 1 -->
      <div class="flex flex-col items-center">
        <div class="mb-4 rounded-full p-4">
          <HiShoppingBag class="text-xl" />
        </div>
        <h4 class="mb-2 uppercase tracking-tighter">
          Free International Shipping
        </h4>
        <p class="text-sm tracking-tighter text-gray-600">
          We offer free international shipping on all orders over $100.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="flex flex-col items-center">
        <div class="mb-4 rounded-full p-4">
          <HiArrowPathRoundedSquare class="text-xl" />
        </div>
        <h4 class="mb-2 uppercase tracking-tighter">45 Days Return</h4>
        <p class="text-sm tracking-tighter text-gray-600">
          Money back guarantee if you are not satisfied with your purchase.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="flex flex-col items-center">
        <div class="mb-4 rounded-full p-4">
          <HiOutlineCreditCard class="text-xl" />
        </div>
        <h4 class="mb-2 uppercase tracking-tighter">Secure Checkout</h4>
        <p class="text-sm tracking-tighter text-gray-600">
          100% secure checkout with SSL encryption.
        </p>
      </div>
    </div>
  </section>
</template>
