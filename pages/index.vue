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

    <MoviesCarousel title="Popular Movies" apiEndpoint="/api/movies/discover" />
    <SeriesCarousel
      title="Popular Tv Shows"
      apiEndpoint="/api/movies/discover"
    />
  </div>
</template>

<script setup>
const bannerData = ref(null);
const movieId = "823464"; // Replace with the specific movie ID you want to show

const fetchBannerData = async () => {
  try {
    const response = await fetch(`/api/movies/${movieId}`);
    const data = await response.json();
    bannerData.value = data;
  } catch (error) {
    console.error("Error fetching banner data:", error);
  }
};

onMounted(() => {
  fetchBannerData();
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
