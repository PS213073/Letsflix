<template>
  <div class="bg-gray-900 text-white min-h-screen p-4">
    <MoviesCarousel title="Popular Movies" apiEndpoint="/api/movies/discover" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>