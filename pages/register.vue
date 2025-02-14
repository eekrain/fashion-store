<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { registerSchema } from "~/lib/schema";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "~/lib/auth-client";
import { toast } from "vue-sonner";
const router = useRouter();
const formSchema = toTypedSchema(registerSchema);
const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  authClient.signUp.email(values).then((res) => {
    if (res.error) {
      toast.error(res.error.message || "Something went wrong");
    } else {
      toast.success("Register successful");
      router.push("/profile");
    }
  });
});
</script>

<template>
  <HomeLayout>
    <div
      class="grid grid-cols-1 items-center justify-center md:grid-cols-[1fr_40%] lg:grid-cols-2"
    >
      <Card class="mx-auto w-3/4 lg:w-1/2">
        <CardHeader class="text-center">
          <CardTitle>Rabbit</CardTitle>
          <CardDescription>
            Let's get you started with a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="onSubmit" class="space-y-4">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="your name"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="your@email.com"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <Button type="submit" class="w-full">Register</Button>
          </form>
        </CardContent>
        <CardFooter class="flex justify-center">
          <p class="text-sm">
            Already have an account?
            <NuxtLink to="/login" class="text-blue-500">Login</NuxtLink>
          </p>
        </CardFooter>
      </Card>

      <NuxtImg
        src="/images/login.webp"
        alt="Card Image"
        class="hidden h-[calc(100vh-200px)] w-full object-cover md:block"
      />
    </div>
  </HomeLayout>
</template>
