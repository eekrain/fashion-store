<script setup lang="ts">
import { RiTwitterXLine } from "vue-icons-plus/ri";
import { TbBrandInstagram, TbBrandMeta } from "vue-icons-plus/tb";
import { FiPhoneCall } from "vue-icons-plus/fi";
</script>

<template>
  <footer class="border-t py-12">
    <div
      class="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 lg:px-0"
    >
      <div>
        <h3 class="mb-4 text-lg text-gray-800">Newsletter</h3>
        <p class="mb-4 text-gray-500">
          Be the first to know about our latest products and offers.
        </p>
        <p class="mb-6 text-sm font-medium text-gray-600">
          Sign up and get 10% off your first order.
        </p>

        <!-- Newsletter Form -->
        <form class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full rounded-l-md border-y border-l border-gray-300 p-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            class="rounded-r-md bg-black px-4 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </div>

      <!-- Shop links -->
      <div>
        <h3 class="mb-4 text-lg text-gray-800">Shop</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/products" class="text-gray-600 hover:text-gray-800"
              >Men's Top Wear</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products" class="text-gray-600 hover:text-gray-800"
              >Women's Top Wear</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products" class="text-gray-600 hover:text-gray-800"
              >Men's Bottom Wear</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products" class="text-gray-600 hover:text-gray-800"
              >Women's Bottom Wear</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Support links -->
      <div>
        <h3 class="mb-4 text-lg text-gray-800">Support</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="#" class="text-gray-600 hover:text-gray-800"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="#" class="text-gray-600 hover:text-gray-800"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="#" class="text-gray-600 hover:text-gray-800"
              >FAQ's</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="#" class="text-gray-600 hover:text-gray-800"
              >Features</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Follow us -->
      <div>
        <h3 class="mb-4 text-lg text-gray-800">Follow us</h3>
        <div class="mb-6 flex items-center gap-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandMeta class="size-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandInstagram class="size-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine class="size-5" />
          </a>
        </div>

        <p class="text-gray-500">Call us</p>
        <p class="text-sm">
          <FiPhoneCall class="mr-2 inline-block size-4" />
          1 (234) 567-890
        </p>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div
      class="container mx-auto mt-12 border-t border-gray-200 px-4 pt-6 lg:px-0"
    >
      <p class="text-center text-sm text-gray-500">
        &copy; 2025 Ardian Eka Candra. All rights reserved.
      </p>
    </div>
  </footer>
</template>
