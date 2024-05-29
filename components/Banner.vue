<template>
  <div class="relative mb-8">
    <div class="relative h-[25rem] overflow-hidden">
      <img
        :src="`${imageSiteUrl}${backdrop_path}`"
        :alt="title"
        class="absolute inset-0 shadow-lg object-center"
      />
    </div>

    <div
      class="absolute inset-0 gradient-overlay flex flex-col md:flex-row items-center p-8"
    >
      <div class="text-white">
        <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
        <div class="flex items-center mb-4">
          <span class="text-green-400 text-lg mr-2">{{ rating.toFixed(2) }}</span>
          <span class="text-sm text-gray-400">
            • {{ reviews }} Reviews • {{ year }} • {{ duration }}
          </span>
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-300 mb-4 truncate-3-lines">{{ description }}</p>
        </div>
        <a
          href="#"
          class="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >Watch Trailer</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const imageSiteUrl = "https://image.tmdb.org/t/p/original";

defineProps({
  backdrop_path: String,
  title: String,
  rating: Number,
  reviews: Number,
  year: Number,
  duration: String,
  description: String,
});
</script>

<style>
.truncate-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gradient-overlay {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
}
</style>
