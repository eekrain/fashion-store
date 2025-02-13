<script setup lang="ts">
interface Props {
  image: {
    url: string;
    altText: string;
  };
  selected: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    class="size-20 cursor-pointer overflow-hidden rounded-lg border-2 object-cover"
    :class="{
      'border-black': selected,
      'border-gray-300': !selected,
    }"
  >
    <NuxtImg :src="image.url" :alt="image.altText" />
  </div>
</template>
