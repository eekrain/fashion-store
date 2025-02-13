<template>
  <section class="px-4 py-16 lg:px-0">
    <div class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="relative">
        <NuxtImg
          src="/images/womens-collection.webp"
          alt="Collection 2"
          class="h-[700px] w-full object-cover"
        />

        <div
          class="absolute bottom-8 left-0 bg-white/90 p-4 text-gray-900 md:left-6"
        >
          <h2 class="text-2xl font-bold">Women's Collection</h2>
          <NuxtLink
            to="/collections/all?gender=women"
            class="text-gray-900 underline"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <NuxtImg
          src="/images/mens-collection.webp"
          alt="Collection 1"
          class="h-[700px] w-full object-cover"
        />

        <div
          class="absolute bottom-8 left-0 bg-white/90 p-4 text-gray-900 md:left-6"
        >
          <h2 class="text-2xl font-bold">Men's Collection</h2>
          <NuxtLink
            to="/collections/all?gender=men"
            class="text-gray-900 underline"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
