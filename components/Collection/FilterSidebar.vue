<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/composables/useFilter";

const {
  params,
  categories,
  colors,
  sizes,
  materials,
  brands,
  selectedColors,
  selectedSizes,
  selectedMaterials,
  selectedBrands,
  handleMaterialChange,
  handleBrandChange,
} = useFilter();
</script>

<template>
  <div class="p-4">
    <h3 class="mb-4 text-xl font-medium text-gray-800">Filter</h3>

    <!-- Category Filter -->
    <div class="mb-4">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Category</h4>

      <RadioGroup v-model="params.category">
        <div v-for="category in categories" :key="category">
          <div class="flex items-center space-x-2">
            <RadioGroupItem :id="category" :value="category" />
            <Label :for="category">{{ category }}</Label>
          </div>
        </div>
      </RadioGroup>
    </div>

    <!-- Color Filter -->
    <div class="mb-6">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Color</h4>

      <ToggleGroup
        v-model="selectedColors"
        type="multiple"
        class="flex flex-wrap gap-4"
      >
        <ToggleGroupItem
          v-for="color in colors"
          :key="color"
          :value="color"
          class="size-7 rounded-full border-2 border-gray-200 data-[state=on]:ring-2 data-[state=on]:ring-blue-400"
          :style="{ backgroundColor: color }"
        />
      </ToggleGroup>
    </div>

    <!-- Size Filter   -->
    <div class="mb-6">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Size</h4>

      <ToggleGroup
        v-model="selectedSizes"
        type="multiple"
        class="flex flex-wrap gap-4"
      >
        <ToggleGroupItem
          v-for="size in sizes"
          :key="size"
          :value="size"
          class="rounded border border-gray-200 data-[state=on]:ring-2 data-[state=on]:ring-blue-400"
        >
          {{ size }}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>

    <!-- Material Filter -->
    <div class="mb-6">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Material</h4>
      <div class="flex flex-col gap-4">
        <div
          v-for="material in materials"
          :key="material"
          class="flex items-center space-x-2"
        >
          <Checkbox
            :id="material"
            :checked="selectedMaterials.includes(material)"
            @update:checked="
              (checked) => handleMaterialChange(checked, material)
            "
          />
          <Label :for="material">{{ material }}</Label>
        </div>
      </div>
    </div>

    <!-- Brand Filter -->
    <div class="mb-6">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Brand</h4>
      <div class="flex flex-col gap-4">
        <div
          v-for="brand in brands"
          :key="brand"
          class="flex items-center space-x-2"
        >
          <Checkbox
            :id="brand"
            :checked="selectedBrands.includes(brand)"
            @update:checked="
              (e: boolean | undefined) => handleBrandChange(e, brand)
            "
          />
          <Label :for="brand">{{ brand }}</Label>
        </div>
      </div>
    </div>

    <!-- Price range filter -->
    <div class="mb-6">
      <h4 class="mb-2 text-sm font-medium text-gray-800">Price</h4>
      <div class="flex flex-col gap-2">
        <Input
          :model-value="params.minPrice"
          placeholder="Min"
          @update:model-value="(value) => (params.minPrice = value.toString())"
        />

        <Input
          :model-value="params.maxPrice"
          placeholder="Max"
          @update:model-value="(value) => (params.maxPrice = value.toString())"
        />
      </div>
    </div>
  </div>
</template>
