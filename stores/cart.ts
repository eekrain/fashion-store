import { defineStore } from "pinia";

interface CartItem {
  sku: number;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    addItem(item: CartItem) {
      const existingItem = this.items.find(
        (i) =>
          i.sku === item.sku && i.size === item.size && i.color === item.color,
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push({ ...item });
      }
    },

    removeItem(itemsku: number) {
      const index = this.items.findIndex((item) => item.sku === itemsku);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(itemsku: number, quantity: number) {
      const item = this.items.find((item) => item.sku === itemsku);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart() {
      this.items = [];
    },
  },

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  persist: true,
});
