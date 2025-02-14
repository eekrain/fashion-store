<script setup lang="ts">
import FilterSidebar from "@/components/Collection/FilterSidebar.vue";
import { FaFilter } from "vue-icons-plus/fa";
import { onClickOutside, useDebounceFn } from "@vueuse/core";
import SortOptions from "@/components/Collection/SortOptions.vue";
import ProductGrid from "@/components/Product/ProductGrid.vue";
import { useFilter } from "@/composables/useFilter";
import { getFilteredProducts } from "~/lib/api";
import { ref, watch, onMounted } from "vue";
import type { ProductSlide } from "~/lib/api";

const isFilterSidebarOpen = ref(false);
const sidebarRef = ref<HTMLElement | null>(null);

const { params } = useFilter();
console.log("Initial params:", { ...params.value });

const products = ref<ProductSlide[]>([]);
const isLoading = ref(true);

// Function to fetch products with debouncing
const fetchProducts = useDebounceFn(async () => {
  console.log("Browser: fetchProducts called with params:", {
    ...params.value,
  });
  isLoading.value = true;
  try {
    const result = await getFilteredProducts(params.value);
    console.log("Browser: Got products:", result.length);
    products.value = result;
  } catch (error) {
    console.error("Browser: Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
}, 300);

// Watch for changes on the shared params state
watch(
  () => ({ ...params.value }), // create a shallow copy to trigger changes
  (newParams) => {
    console.log("Browser: Params changed to:", newParams);
    fetchProducts();
  },
  { deep: true, immediate: true },
);

// Initial fetch
onMounted(() => {
  console.log("Browser: Component mounted");
  fetchProducts();
});

onClickOutside(sidebarRef, () => {
  isFilterSidebarOpen.value = false;
});
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

        <!-- Loading state -->
        <div v-if="isLoading" class="py-4 text-center">Loading...</div>

        <!-- Product List -->
        <ProductGrid v-else-if="products.length" :products="products" />

        <!-- No results -->
        <div v-else class="py-4 text-center">No products found</div>
      </div>
    </div>
  </HomeLayout>
</template>
