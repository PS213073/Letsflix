<template>
  <div class="bg-gray-900 text-white">
    <!-- Header Section -->
    <Banner
      v-if="bannerData"
      :backdrop_path="bannerData.backdrop_path"
      :title="bannerData.title"
      :rating="bannerData.vote_average"
      :reviews="bannerData.vote_count"
      :year="
        bannerData.release_date ? bannerData.release_date.split('-')[0] : 'N/A'
      "
      :duration="bannerData.runtime ? `${bannerData.runtime} min` : 'N/A'"
      :description="bannerData.overview"
    />
    <MoviesCarousel
      v-if="moviesData"
      title="Popular Movies"
      :movies="moviesData"
    />
    <SeriesCarousel
      v-if="seriesData"
      title="Popular TV Shows"
      :series="seriesData"
    />
    <div v-else class="text-center text-white">Loading...</div>
  </div>
</template>

<script setup>
const movieId = "823464";

const { data: bannerData, error: bannerError } = await useAsyncData(
  "bannerData",
  () => $fetch(`/api/movies/${movieId}`)
);
const { data: moviesSeriesData, error: moviesSeriesError } = await useAsyncData(
  "moviesSeriesData",
  () => $fetch("/api/movies/discover")
);

if (bannerError.value || moviesSeriesError.value) {
  console.error(
    "Error fetching data:",
    bannerError.value || moviesSeriesError.value
  );
}

const moviesData = moviesSeriesData.value?.movies.results || [];
const seriesData = moviesSeriesData.value?.series.results || [];

useHead({
  title: "Lets Flix Movies en Series App",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: "description", content: "Lets Flix is a comprehensive platform for movie and series enthusiasts." },
   
  ],
});
</script>

<style>
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
