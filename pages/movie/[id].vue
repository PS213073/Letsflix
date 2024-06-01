<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <!-- Header Section -->
    <Banner
      :backdrop_path="movieDetails.backdrop_path"
      :title="movieDetails.title"
      :rating="movieDetails.vote_average"
      :reviews="movieDetails.vote_count"
      :year="movieDetails.release_date.split('-')[0]"
      :duration="`${movieDetails.runtime} min`"
      :description="movieDetails.overview"
    />

    <div v-if="movieDetails" class="container mx-auto p-4">
      <h1
        class="mb-10 flex justify-center text-5xl font-semibold tracking-wider"
      >
        Overview
      </h1>
      <div class="flex flex-col gap-10 md:flex-row items-center md:items-start">
        <img
          :src="
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : '/poster.jpg'
          "
          class="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
        />
        <div class="md:w-2/3 mt-10">
          <h2 class="text-3xl font-semibold mb-4">{{ movieDetails.title }}</h2>
          <p class="text-gray-300">{{ movieDetails.overview }}</p>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Movie Details</h2>
            <ul class="list-disc list-inside text-gray-300">
              <li>
                <strong>Release Date: </strong> {{ movieDetails.release_date }}
              </li>
              <li><strong>Rating: </strong> {{ movieDetails.vote_average }}</li>
              <li><strong>Runtime: </strong> {{ movieDetails.runtime }} min</li>
              <li><strong>Budget: </strong>€ {{ movieDetails.budget }}</li>
              <li><strong>Revenue: </strong>€ {{ movieDetails.revenue }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
const route = useRoute();
const { data: movieDetails } = await useFetch(`/api/movies/${route.params.id}`);

// Set the meta tags and title dynamically
useHead({
  meta: [
    { name: "description", content: movieDetails.value.overview },
    { property: "og:title", content: movieDetails.value.title },
    { property: "og:description", content: movieDetails.value.overview },
    {
      property: "og:image",
      content: `https://image.tmdb.org/t/p/w500${movieDetails.value.poster_path}`,
    },
    { property: "twitter:title", content: movieDetails.value.title },
    { property: "twitter:description", content: movieDetails.value.overview },
    {
      property: "twitter:image",
      content: `https://image.tmdb.org/t/p/w500${movieDetails.value.poster_path}`,
    },
  ],
});
</script>

<style scoped>
.bg-gray-900 {
  background-color: #1a202c;
}
.text-gray-300 {
  color: #d1d5db;
}
.container {
  max-width: 1200px;
}
</style>