<template>
  <div class="relative w-full h-[30rem] lg:max-w-[67.35rem] bg-black">
    <div class="absolute top-0 right-0 w-full h-full lg:left-1/3 lg:bottom-0">
      <NuxtImg
        :src="`${imageSiteUrl}/w780${backdrop_path}`"
        :alt="title"
        :srcset="generateSrcset(backdrop_path)"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="absolute bottom-0 md:left-0 md:top-0 flex flex-col justify-center px-10 bg-gradient-to-t from-black via-black to-transparent lg:bg-gradient-to-r lg:px-25 lg:w-2/3"
    >
      <div>
        <h1 class="mt-2 text-5xl lg:text-5xl leading-relaxed mb-4">
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
          class="mt-2 text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-5 text-xs md:text-base"
        >
          {{ description }}
        </p>
        <div class="py-5 lg:block">
          <button
            class="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white transition rounded"
            @click="playTrailer"
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
  year: Number,
  duration: String,
  description: String,
  trailer: Boolean,
});

// Function to generate the srcset attribute
const generateSrcset = (path) => {
  return `${imageSiteUrl}/w300${path} 300w, ${imageSiteUrl}/w780${path} 780w, ${imageSiteUrl}/w1280${path} 1280w, ${imageSiteUrl}/original${path} 2000w`;
};
</script>
