<script setup lang="ts">
import HomeLayout from "~/components/HomeLayout/index.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { loginSchema } from "~/lib/schema";

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
const formSchema = toTypedSchema(loginSchema);
const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  authClient.signIn.email(values).then((res) => {
    if (res.error) {
      toast.error(res.error.message || "Something went wrong");
    } else {
      toast.success("Login successful");
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
      <Card class="mx-auto w-1/2">
        <CardHeader class="text-center">
          <CardTitle>Rabbit</CardTitle>
          <CardDescription>
            <p class="my-2 text-2xl font-semibold text-gray-900">
              Hey there! 👋
            </p>
            <p class="text-sm">
              Enter your email and password to login to your account
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="onSubmit" class="space-y-4">
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

            <Button type="submit" class="w-full">Login</Button>
          </form>
        </CardContent>
        <CardFooter class="flex justify-center">
          <p class="text-sm">
            Dont have an account?
            <NuxtLink to="/register" class="text-blue-500">Register</NuxtLink>
          </p>
        </CardFooter>
      </Card>

      <NuxtImg
        src="/images/login.webp"
        alt="Card Image"
        class="h-[calc(100vh-200px)] w-full object-cover"
      />
    </div>
  </HomeLayout>
</template>
