<script setup lang="ts">
import { toast } from "vue-sonner";
import HomeLayout from "~/components/HomeLayout/index.vue";
import type { Order } from "~/components/Profile/MyOrders.vue";
import MyOrders from "~/components/Profile/MyOrders.vue";
import { authClient } from "~/lib/auth-client";

const router = useRouter();

const logout = () => {
  authClient.signOut().then((res) => {
    if (res.error) {
      toast.error(res.error.message || "Something went wrong");
    } else {
      toast.success("Logout successful");
      router.push("/login");
    }
  });
};

const orders = ref<Order[]>([
  {
    id: "1",
    createdAt: "2024-01-01 12:00:00",
    shippingAddress: "123 Main St, Anytown, USA",
    orderItems: [
      {
        name: "Product 1",
        image: "https://picsum.photos/300/300?random=1",
      },
    ],
    totalPrice: 100,
    isPaid: true,
  },
  {
    id: "2",
    createdAt: "2024-01-02 12:00:00",
    shippingAddress: "456 Main St, Anytown, USA",
    orderItems: [
      {
        name: "Product 2",
        image: "https://picsum.photos/300/300?random=2",
      },
    ],
    totalPrice: 200,
    isPaid: false,
  },
]);
</script>

<template>
  <HomeLayout>
    <div
      class="container mx-auto grid grid-cols-1 gap-8 py-16 lg:grid-cols-[25%_1fr]"
    >
      <div>
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: john.doe@example.com</p>

            <Button variant="destructive" @click="logout">Logout</Button>
          </CardContent>
        </Card>
      </div>

      <MyOrders :orders="orders" />
    </div>
  </HomeLayout>
</template>
