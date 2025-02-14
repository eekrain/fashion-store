import { ref, computed } from "vue";

export interface FilterParams {
  category: string;
  gender: string;
  color: string;
  size: string;
  material: string;
  brand: string;
  minPrice: string;
  maxPrice: string;
  sort: string;
}

const priceRange = [0, 100];

const params = ref<FilterParams>({
  category: "",
  gender: "",
  color: "",
  size: "",
  material: "",
  brand: "",
  minPrice: priceRange[0].toString(),
  maxPrice: priceRange[1].toString(),
  sort: "",
});

const selectedColors = computed({
  get: () => (params.value.color ? params.value.color.split(",") : []),
  set: (values: string[]) => {
    params.value.color = values.join(",");
  },
});

const selectedSizes = computed({
  get: () => (params.value.size ? params.value.size.split(",") : []),
  set: (values: string[]) => {
    params.value.size = values.join(",");
  },
});

const selectedMaterials = computed({
  get: () => (params.value.material ? params.value.material.split(",") : []),
  set: (values: string[]) => {
    params.value.material = values.join(",");
  },
});

const selectedBrands = computed({
  get: () => (params.value.brand ? params.value.brand.split(",") : []),
  set: (values: string[]) => {
    params.value.brand = values.join(",");
  },
});

const selectedSort = computed({
  get: () => params.value.sort,
  set: (value: string) => {
    params.value.sort = value;
  },
});

// Define handlers for filter changes
const handleMaterialChange = (checked: boolean, material: string) => {
  console.log("Before material change:", { ...params.value });
  if (checked) {
    selectedMaterials.value = [...selectedMaterials.value, material];
  } else {
    selectedMaterials.value = selectedMaterials.value.filter(
      (m) => m !== material,
    );
  }
  console.log("After material change:", { ...params.value });
};

const handleBrandChange = (checked: boolean | undefined, brand: string) => {
  console.log("Before brand change:", { ...params.value });
  if (checked) {
    selectedBrands.value = [...selectedBrands.value, brand];
  } else {
    selectedBrands.value = selectedBrands.value.filter((b) => b !== brand);
  }
  console.log("After brand change:", { ...params.value });
};

const handleSortChange = (value: string) => {
  console.log("Before sort change:", { ...params.value });
  selectedSort.value = value;
  console.log("After sort change:", { ...params.value });
};

export function useFilter() {
  return {
    params, // shared reactive state
    priceRange,
    categories: ["Top Wear", "Bottom Wear"],
    colors: [
      "Black",
      "White",
      "Beige",
      "Navy",
      "Olive",
      "Violet",
      "Maroon",
      "Turquoise",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Cotton", "Polyester", "Silk", "Wool", "Denim"],
    brands: ["Adidas", "Nike", "Puma", "Reebok", "Converse"],
    selectedColors,
    selectedSizes,
    selectedMaterials,
    selectedBrands,
    selectedSort,
    handleMaterialChange,
    handleBrandChange,
    handleSortChange,
  };
}
