<template>
  <div class="container mx-auto py-16">
    <div
      class="flex flex-col-reverse items-center rounded-3xl bg-green-50 lg:flex-row"
    >
      <div class="p-8 text-center lg:w-1/2 lg:text-left">
        <h2 class="mb-2 text-lg font-semibold text-gray-700">
          Comfortable and Stylish
        </h2>
        <h2 class="text-4xl font-bold text-gray-900 lg:text-5xl">
          Apparel made for every occasion
        </h2>
        <p class="mb-6 text-lg text-gray-600">
          Discover high quality apparel, comfortable and stylish clothing that
          you'll love wearing. Designed to make you feel confident and
          comfortable in every situation.
        </p>
        <NuxtLink to="/collection/all" as-child>
          <Button size="lg">Shop Now</Button>
        </NuxtLink>
      </div>

      <div class="lg:w-1/2">
        <NuxtImg
          src="/images/featured.webp"
          alt="Featured Collection"
          class="h-full w-full object-cover lg:rounded-r-3xl"
        />
      </div>
    </div>
  </div>
</template>
