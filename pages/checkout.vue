<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { checkoutSchema } from "~/lib/schema";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "vue-sonner";

const formSchema = toTypedSchema(checkoutSchema);
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "eka@gmail.com",
    firstName: "eka",
    lastName: "candra",
    address: "jalan aja dulu",
    city: "jakarta",
    phone: "081234567890",
    country: "Indonesia",
    postalCode: "123456",
  },
});
const data = ref<any>(null);

const onSubmit = form.handleSubmit((values) => {
  console.log(values);

  setTimeout(() => {
    data.value = values;
    toast.success("Checkout successful");
  }, 1000);
});
</script>

<template>
  <HomeLayout>
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 tracking-tighter md:grid-cols-2"
    >
      <div class="rounded-lg bg-white p-6">
        <h2 class="mb-6 text-2xl uppercase">Checkout</h2>

        <form @submit="onSubmit">
          <!-- Contact Details Section -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Contact Details</h3>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    v-bind="componentField"
                    placeholder="admin@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <!-- Delivery Section -->
          <div class="mt-8 space-y-4">
            <h3 class="text-lg font-medium">Delivery</h3>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField v-slot="{ componentField }" name="firstName">
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      placeholder="John"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="lastName">
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input v-bind="componentField" placeholder="Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>

            <FormField v-slot="{ componentField }" name="address">
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    v-bind="componentField"
                    placeholder="John Doe address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField v-slot="{ componentField }" name="city">
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input v-bind="componentField" placeholder="NY" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="postalCode">
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input v-bind="componentField" placeholder="123456" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>

            <FormField v-slot="{ componentField }" name="country">
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="USA" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="phone">
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="6789490002" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <button
            type="submit"
            class="mt-8 w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-black/90"
          >
            Continue to Payment
          </button>
        </form>
      </div>

      <!-- Order Summary Section -->
      <div class="space-y-6 rounded-lg bg-gray-50 p-6">
        <h2 class="text-2xl uppercase">Order Summary</h2>

        <!-- Product Item -->
        <div class="flex items-center gap-4 border-b pb-6">
          <img
            src="https://picsum.photos/500/500?random=1"
            alt="Classic Oxford Button-Down Shirt"
            class="h-20 w-20 rounded-md object-cover"
          />
          <div class="flex-1">
            <h3 class="font-medium">Classic Oxford Button-Down Shirt</h3>
            <p class="text-sm text-gray-600">Size: M</p>
            <p class="text-sm text-gray-600">Color: Red</p>
          </div>
          <p class="font-medium">€39.99</p>
        </div>

        <!-- Summary Details -->
        <div class="space-y-4">
          <div class="flex justify-between">
            <p>Subtotal</p>
            <p class="font-medium">€39.99</p>
          </div>
          <div class="flex justify-between">
            <p>Shipping</p>
            <p class="font-medium">FREE</p>
          </div>
          <div class="flex justify-between border-t pt-4">
            <p class="font-medium">Total</p>
            <p class="font-medium">€39.99</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview result -->

    <Dialog :open="data !== null" v-on:update:open="data = null">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout Success</DialogTitle>
          <DialogDescription>
            We are not ready for payment integration yet. This is just a preview
            of what will happen when the payment is successful.
          </DialogDescription>
        </DialogHeader>

        <pre>
          {{ JSON.stringify(data, null, 2) }}
        </pre>

        <DialogFooter> Save changes </DialogFooter>
      </DialogContent>
    </Dialog>
  </HomeLayout>
</template>
