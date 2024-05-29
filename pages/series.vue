<template>
  <div class="bg-gray-900 text-white">
    <Banner
      v-if="bannerData"
      :backdrop_path="bannerData.backdrop_path"
      :title="bannerData.name"
      :rating="bannerData.vote_average"
      :reviews="bannerData.vote_count"
      :year="
        bannerData.first_air_date ? bannerData.first_air_date : 'N/A'
      "      
      :description="bannerData.overview"
    />

    <SeriesCarousel
      title="Popular Tv Shows"
      apiEndpoint="/api/movies/discover"
    />
    <!-- <MoviesCarousel
      title="Upcoming Movies"
      apiEndpoint="/api/movies/upcoming"
    />
    <MoviesCarousel
      title="Now Playing Movies"
      apiEndpoint="/api/movies/nowplaying"
    /> -->
    <SeriesCarousel
      title="Top Rated Tv Shows"
      apiEndpoint="/api/movies/toprated"
    />
  </div>
</template>

<script setup>
const bannerData = ref(null);
const seriesId = "1429"; // Replace with the specific series ID you want to show

const fetchBannerData = async () => {
  try {
    const response = await fetch(`/api/series/${seriesId}`);
    const data = await response.json();
    bannerData.value = data;
  } catch (error) {
    console.error("Error fetching banner data:", error);
  }
};

onMounted(() => {
  fetchBannerData();
});

console.log(bannerData);
</script>