<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/composables/useFilter";

const { selectedSort, handleSortChange } = useFilter();
</script>

<template>
  <div class="mb-4 flex items-center justify-end">
    <Select v-model="selectedSort" @update:model-value="handleSortChange">
      <SelectTrigger class="w-30">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="name-asc">Name: A-Z</SelectItem>
        <SelectItem value="name-desc">Name: Z-A</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
