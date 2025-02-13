<template>
  <section class="relative">
    <NuxtImg
      src="/images/rabbit-hero.webp"
      alt="Hero Banner"
      class="h-[400px] w-full object-cover md:h-[600px] lg:h-[750px]"
    />

    <div
      class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black/50 text-white"
    >
      <div class="p-6 text-center">
        <h1
          class="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-9xl"
        >
          Vacation<br />
          Ready
        </h1>
        <p class="mb-6 text-sm font-semibold tracking-tighter md:text-lg">
          Explore our vacation-ready outfits with fast worldwide shipping.
        </p>

        <NuxtLink
          to="/products"
          class="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-tighter text-black transition-colors hover:bg-gray-200"
        >
          Shop Now
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
