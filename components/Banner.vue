<template>
  <div class="relative w-full h-[30rem] bg-black">
    <div class="absolute top-0 right-0 h-full lg:left-1/3 lg:bottom-0">
      <NuxtImg
        :src="`${imageSiteUrl}/original/${backdrop_path}`"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="absolute bottom-0 md:left-0 md:top-0 flex flex-col justify-center px-10 bg-gradient-to-t from-black via-black to-transparent lg:bg-gradient-to-r lg:px-25 lg:w-2/3"
    >
      <div>
        <h1 class="mt-2 text-5xl lg:text-5xl">
          {{ title }}
        </h1>
        <div class="flex flex-row flex-wrap gap-2 items-center mt-4">
          <div class="flex items-center gap-1">
            <div class="text-gray-400">{{ rating.toFixed(2) }}</div>
          </div>
          <span class="text-gray-400 md:block">·</span>
          <div class="text-gray-400 md:block">{{ reviews }} Reviews</div>
          <span class="text-gray-400 md:block">·</span>
          <div class="text-gray-400 md:block">{{ year }}</div>
          <span v-if="duration" class="text-gray-400">·</span>
          <div v-if="duration" class="text-gray-400">{{ duration }}</div>
        </div>
        <p
          class="mt-2 text-gray-300 leading-relaxed line-clamp-3 text-xs md:text-base"
        >
          {{ description }}
        </p>
        <div class="py-5 lg:block">
          <button
            class="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white transition rounded"
          >
            <font-awesome icon="play" />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageSiteUrl = "https://image.tmdb.org/t/p";

defineProps({
  backdrop_path: String,
  title: String,
  rating: Number,
  reviews: Number,
  year: String,
  duration: String,
  description: String,
});
</script>


<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>