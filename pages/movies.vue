<template>
  <div class="bg-gray-900 text-white">
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
    <MoviesCarousel
      title="Upcoming Movies"
      apiEndpoint="/api/movies/upcoming"
    />
    <MoviesCarousel
      title="Now Playing Movies"
      apiEndpoint="/api/movies/nowplaying"
    />
    <MoviesCarousel
      title="Top Rated Movies"
      apiEndpoint="/api/movies/toprated"
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



