<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";
import { AiOutlineMinus, AiOutlinePlus } from "vue-icons-plus/ai";
import { RiDeleteBin3Line } from "vue-icons-plus/ri";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);

const incrementQuantity = (item: (typeof cartStore.items)[number]) => {
  cartStore.updateQuantity(item.sku, item.quantity + 1);
};

const decrementQuantity = (item: (typeof cartStore.items)[number]) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.sku, item.quantity - 1);
  } else {
    cartStore.removeItem(item.sku);
  }
};

const removeCartItem = (item: (typeof cartStore.items)[number]) => {
  cartStore.removeItem(item.sku);
};
</script>

<template>
  <div>
    <div
      v-for="item in cartItems"
      :key="`${item.sku}-${item.size}-${item.color}`"
    >
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
              <Button
                variant="outline"
                size="icon"
                @click="decrementQuantity(item)"
              >
                <AiOutlineMinus />
              </Button>
              <span>{{ item.quantity }}</span>
              <Button
                variant="outline"
                size="icon"
                @click="incrementQuantity(item)"
              >
                <AiOutlinePlus />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm font-medium">${{ item.price.toLocaleString() }}</p>
          <Button
            variant="outline"
            size="icon"
            class="mt-2 text-red-500"
            @click="removeCartItem(item)"
          >
            <RiDeleteBin3Line />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
