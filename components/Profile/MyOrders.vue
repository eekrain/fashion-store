<script setup lang="ts">
export type Order = {
  id: string;
  createdAt: string;
  shippingAddress: string;
  orderItems: { name: string; image: string }[];
  totalPrice: number;
  isPaid: boolean;
};

defineProps<{
  orders: Order[];
}>();
</script>

<template>
  <div class="">
    <h2 class="mb-6 text-xl font-bold sm:text-2xl">My Orders</h2>
    <div
      class="relative w-[320px] overflow-x-scroll rounded-lg border sm:w-[400px] md:w-full"
    >
      <table class="w-full text-left text-gray-500">
        <thead class="bg-gray-100 text-sm uppercase text-gray-700">
          <tr>
            <th scope="col" class="px-8 py-2 sm:py-3">Image</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Order ID</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Created</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Shipping Address</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Items</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Price</th>
            <th scope="col" class="px-8 py-2 sm:py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <!-- Show you have no orders if orders is empty -->
          <tr v-if="orders.length === 0">
            <td colspan="7" class="py-2 text-center">You have no orders</td>
          </tr>
          <!-- Show orders if orders is not empty -->
          <tr v-for="order in orders" :key="order.id">
            <td class="px-8 py-2 sm:py-3">
              <img
                :src="order.orderItems[0].image"
                alt="Product"
                class="h-12 w-12 rounded-md object-cover"
              />
            </td>
            <td class="px-8 py-2 sm:py-3">{{ order.id }}</td>
            <td class="px-8 py-2 sm:py-3">{{ order.createdAt }}</td>
            <td class="px-8 py-2 sm:py-3">{{ order.shippingAddress }}</td>
            <td class="px-8 py-2 sm:py-3">{{ order.orderItems.length }}</td>
            <td class="px-8 py-2 sm:py-3">${{ order.totalPrice }}</td>
            <td class="px-8 py-2 sm:py-3">
              {{ order.isPaid ? "Paid" : "Pending" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
