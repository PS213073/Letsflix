<template>
  <div class="bg-gray-900 text-white">
    <Banner
      v-if="bannerData"
      :backdrop_path="bannerData.backdrop_path"
      :title="bannerData.name"
      :rating="bannerData.vote_average"
      :reviews="bannerData.vote_count"
      :year="bannerData.first_air_date ? bannerData.first_air_date : 'N/A'"
      :description="bannerData.overview"
    />

    <SeriesCarousel
      v-if="popularSeries"
      title="Popular Tv Shows"
      :series="popularSeries"
    />
    <SeriesCarousel
      v-if="popularSeries"
      title="Top Rated Tv Shows"
      :series="topRatedSeries"
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

const { data: popularSeriesData } = await useAsyncData(
  "popularSeriesData",
  () => $fetch("/api/movies/discover")
);
const popularSeries = popularSeriesData.value?.series.results || [];

const { data: topRatedSeriesData } = await useAsyncData(
  "topRatedSeriesData",
  () => $fetch("/api/movies/toprated")
);
const topRatedSeries = topRatedSeriesData.value?.topRatedSeries.results || [];
</script>