<script setup lang="ts">
import { TbBrandMeta } from "vue-icons-plus/tb";
import { IoLogoInstagram } from "vue-icons-plus/io";
import { RiTwitterXLine } from "vue-icons-plus/ri";
</script>

<template>
  <div class="bg-rabbit-red text-white">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <div class="hidden items-center space-x-4 md:flex">
        <a href="#" class="hover:text-gray-300">
          <TbBrandMeta class="size-5" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <IoLogoInstagram class="size-5" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <RiTwitterXLine class="size-4" />
        </a>
      </div>
      <div class="text-center text-sm">
        <span>We ship worldwide - Fast and reliable shipping!</span>
      </div>

      <div class="hidden text-sm md:block">
        <a href="tel:+1234567890" class="hover:text-gray-300">
          +1 (234) 567-890
        </a>
      </div>
    </div>
  </div>
</template>
