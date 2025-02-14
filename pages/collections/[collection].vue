<script setup lang="ts">
import FilterSidebar from "@/components/Collection/FilterSidebar.vue";
import { FaFilter } from "vue-icons-plus/fa";
import { onClickOutside } from "@vueuse/core";
import SortOptions from "@/components/Collection/SortOptions.vue";
import ProductGrid from "@/components/Product/ProductGrid.vue";
import { useFilter } from "@/composables/useFilter";

const isFilterSidebarOpen = ref(false);
const sidebarRef = ref<HTMLElement | null>(null);

// Initialize filter state
const { params } = useFilter();

onClickOutside(sidebarRef, () => {
  isFilterSidebarOpen.value = false;
});

// Watch filter params to fetch products when they change
watch(
  () => ({ ...params }),
  (newParams) => {
    // Here you would typically fetch products based on the filter params
    console.log("Filters changed:", newParams);
  },
  { deep: true },
);

const placeholderProducts = ref([
  {
    id: "1",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    id: "2",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    id: "3",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket 3",
      },
    ],
  },
  {
    id: "4",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket 4",
      },
    ],
  },
]);
</script>

<template>
  <HomeLayout>
    <div class="flex flex-col lg:flex-row">
      <!-- Mobile filter button -->
      <button
        @click="isFilterSidebarOpen = !isFilterSidebarOpen"
        class="flex items-center justify-center border p-2 lg:hidden"
      >
        <FaFilter class="mr-2 size-5" />
      </button>

      <!-- Filter Sidebar -->
      <div
        ref="sidebarRef"
        class="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white transition-transform duration-300 lg:static lg:translate-x-0"
        :class="{
          'translate-x-0': isFilterSidebarOpen,
          '-translate-x-full': !isFilterSidebarOpen,
        }"
      >
        <FilterSidebar />
      </div>

      <div class="flex-grow p-4">
        <h2 class="mb-4 text-2xl font-bold uppercase">All Collection</h2>

        <!-- Sort Options  -->
        <SortOptions />

        <!-- Product List -->
        <ProductGrid :products="placeholderProducts" />
      </div>
    </div>
  </HomeLayout>
</template>
