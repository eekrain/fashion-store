<script setup lang="ts">
import { AiOutlineMinus, AiOutlinePlus } from "vue-icons-plus/ai";
import { RiDeleteBin3Line } from "vue-icons-plus/ri";
const cartItems = ref([
  {
    id: 1,
    name: "T-Shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 15,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Jeans",
    size: "L",
    color: "Blue",
    quantity: 1,
    price: 25,
    image: "https://picsum.photos/200?random=2",
  },
]);
</script>

<template>
  <div>
    <div v-for="item in cartItems" :key="item.id">
      <div class="flex justify-between border-b border-gray-200 py-4">
        <div class="flex gap-4">
          <img
            :src="item.image"
            alt="Product Image"
            class="h-24 w-20 rounded object-cover"
          />
          <div>
            <h3 class="text-sm font-medium">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">
              size : {{ item.size }} | color : {{ item.color }}
            </p>
            <div class="flex items-center gap-2 font-medium">
              <Button variant="outline" size="icon">
                <AiOutlineMinus />
              </Button>
              <span>{{ item.quantity }}</span>
              <Button variant="outline" size="icon">
                <AiOutlinePlus />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm font-medium">${{ item.price.toLocaleString() }}</p>
          <Button variant="outline" size="icon" class="mt-2 text-red-500">
            <RiDeleteBin3Line />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
