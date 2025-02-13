<script setup lang="ts">
import { AiOutlineMinus, AiOutlinePlus } from "vue-icons-plus/ai";
import ProductThumbnail from "./ProductThumbnail.vue";
import ProductGrid from "./ProductGrid.vue";
import { toast } from "vue-sonner";

const mainImage = ref<{ url: string; altText: string } | null>(null);
const selectedSize = ref<string | null>(null);
const selectedColor = ref<string | null>(null);
const quantity = ref(1);
const isAddingToCart = ref(false);

const addToCart = () => {
  if (!selectedSize.value || !selectedColor.value) {
    toast.error("Please select a size and color");
    return;
  }
  isAddingToCart.value = true;
  setTimeout(() => {
    toast.success("Product added to cart");
    isAddingToCart.value = false;
  }, 2000);
};

const selectedProduct = ref({
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "A stylish jacket for the winter season",
  brand: "FashionHub",
  material: "Cotton",
  sizes: ["S", "M", "L"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
});

// set mainImage to the first image in the images array
mainImage.value = selectedProduct.value.images[0];

const similarProduct = [
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
];
</script>

<template>
  <div class="p-6">
    <div class="mx-auto max-w-6xl rounded-lg bg-white p-8">
      <div class="flex flex-col md:flex-row">
        <!-- Left thumbnail -->
        <div class="mr-6 hidden flex-col gap-4 md:flex">
          <ProductThumbnail
            v-for="image in selectedProduct.images"
            :key="image.url"
            :image="image"
            :selected="mainImage?.url === image.url"
            @click="mainImage = image"
          />
        </div>
        <!-- Main image -->
        <div class="md:w-1/2">
          <div class="mb-4">
            <NuxtImg
              v-if="mainImage"
              :src="mainImage.url"
              :alt="mainImage.altText"
              class="max-h-[500px] w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <!-- Mobile thumbnail -->
        <div class="mb-4 flex gap-4 overscroll-x-contain md:hidden">
          <ProductThumbnail
            v-for="image in selectedProduct.images"
            :key="image.url"
            :selected="mainImage?.url === image.url"
            :image="image"
            @click="mainImage = image"
          />
        </div>

        <!-- Right side -->
        <div class="md:ml-10 md:w-1/2">
          <h1 class="mb-2 text-2xl font-bold md:text-3xl">
            {{ selectedProduct.name }}
          </h1>

          <p
            v-if="selectedProduct.originalPrice"
            class="mb-1 text-lg text-gray-600 line-through"
          >
            {{ selectedProduct.originalPrice }}
          </p>

          <p class="mb-1 text-lg font-bold">$ {{ selectedProduct.price }}</p>

          <p class="mb-4 text-gray-600">
            {{ selectedProduct.description }}
          </p>

          <div class="mb-4">
            <p class="text-gray-700">Color:</p>
            <div class="mt-2 flex gap-2">
              <button
                v-for="color in selectedProduct.colors"
                :key="color"
                class="size-8 overflow-hidden rounded-full border-2"
                :class="{
                  'border-black': selectedColor === color,
                  'border-gray-300': selectedColor !== color,
                }"
                :style="{
                  backgroundColor: color.toLocaleLowerCase(),
                  filter: 'brightness(0.8)',
                }"
                @click="selectedColor = color"
              />
            </div>
          </div>

          <!-- Size -->
          <div class="mb-4">
            <p class="text-gray-700">Size:</p>
            <div class="mt-2 flex gap-2">
              <Button
                v-for="size in selectedProduct.sizes"
                :key="size"
                :variant="selectedSize === size ? 'default' : 'outline'"
                @click="selectedSize = size"
              >
                {{ size }}
              </Button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-6">
            <p class="text-gray-700">Quantity:</p>
            <div class="mt-2 flex items-center gap-4">
              <Button variant="outline" size="icon" @click="quantity--">
                <AiOutlineMinus />
              </Button>
              <span class="text-lg">{{ quantity }}</span>
              <Button variant="outline" size="icon" @click="quantity++">
                <AiOutlinePlus />
              </Button>
            </div>
          </div>

          <Button
            class="w-full uppercase"
            size="lg"
            :disabled="isAddingToCart"
            @click="addToCart"
          >
            Add to Cart
          </Button>

          <div class="mt-10 text-gray-700">
            <h3 class="mb-4 text-lg font-bold">Characteristics:</h3>
            <table class="w-full text-left text-sm text-gray-600">
              <tbody>
                <tr>
                  <td class="py-1">Brand</td>
                  <td class="py-1">
                    {{ selectedProduct.brand }}
                  </td>
                </tr>
                <tr>
                  <td class="py-1">Material</td>
                  <td class="py-1">
                    {{ selectedProduct.material }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- you may also like -->
      <div class="mt-20">
        <h2 class="mb-4 text-center text-2xl font-medium">You May Also Like</h2>
        <ProductGrid :products="similarProduct" />
      </div>
    </div>
  </div>
</template>
