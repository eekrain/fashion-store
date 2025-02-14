import { computed } from "vue";
import { useUrlSearchParams } from "@vueuse/core";

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

export function useFilter() {
  const priceRange = [0, 100];
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Black",
    "White",
    "Beige",
    "Navy",
    "Olive",
    "Violet",
    "Maroon",
    "Turquoise",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Silk", "Wool", "Denim"];
  const brands = ["Adidas", "Nike", "Puma", "Reebok", "Converse"];

  const params = useUrlSearchParams<FilterParams>("history", {
    initialValue: {
      category: "",
      gender: "",
      color: "",
      size: "",
      material: "",
      brand: "",
      minPrice: priceRange[0].toString(),
      maxPrice: priceRange[1].toString(),
      sort: "",
    },
  });

  const selectedColors = computed({
    get: () => (params.color ? params.color.split(",") : []),
    set: (values: string[]) => {
      params.color = values.join(",");
    },
  });

  const selectedSizes = computed({
    get: () => (params.size ? params.size.split(",") : []),
    set: (values: string[]) => {
      params.size = values.join(",");
    },
  });

  const selectedMaterials = computed({
    get: () => (params.material ? params.material.split(",") : []),
    set: (values: string[]) => {
      params.material = values.join(",");
    },
  });

  const selectedBrands = computed({
    get: () => (params.brand ? params.brand.split(",") : []),
    set: (values: string[]) => {
      params.brand = values.join(",");
    },
  });

  const selectedSort = computed({
    get: () => params.sort,
    set: (value: string) => {
      params.sort = value;
    },
  });

  const handleMaterialChange = (checked: boolean, material: string) => {
    if (checked) {
      selectedMaterials.value = [...selectedMaterials.value, material];
    } else {
      selectedMaterials.value = selectedMaterials.value.filter(
        (m) => m !== material,
      );
    }
  };

  const handleBrandChange = (checked: boolean | undefined, brand: string) => {
    if (checked) {
      selectedBrands.value = [...selectedBrands.value, brand];
    } else {
      selectedBrands.value = selectedBrands.value.filter((b) => b !== brand);
    }
  };

  const handleSortChange = (value: string) => {
    selectedSort.value = value;
  };

  return {
    params,
    priceRange,
    categories,
    colors,
    sizes,
    materials,
    brands,
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
