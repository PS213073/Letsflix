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

    <MoviesCarousel
      v-if="popularMovies"
      title="Popular Movies"
      :movies="popularMovies"
    />
    <MoviesCarousel
      v-if="upcomingMovies"
      title="Upcoming Movies"
      :movies="upcomingMovies"
    />
    <MoviesCarousel
      v-if="nowPlayingMovies"
      title="Now Playing Movies"
      :movies="nowPlayingMovies"
    />
    <MoviesCarousel
      v-if="topRatedMovies"
      title="Top Rated Movies"
      :movies="topRatedMovies"
    />
  </div>
</template>

<script setup>
const bannerData = ref(null);

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

const { data: popularMoviesData } = await useAsyncData(
  "popularMoviesData",
  () => $fetch("/api/movies/discover")
);
const popularMovies = popularMoviesData.value?.movies.results || [];

const { data: upcomingMoviesData } = await useAsyncData(
  "upcomingMoviesData",
  () => $fetch("/api/movies/upcoming")
);
const upcomingMovies = upcomingMoviesData.value?.upcoming.results || [];

const { data: nowPlayingMoviesData } = await useAsyncData(
  "nowPlayingMoviesData",
  () => $fetch("/api/movies/nowplaying")
);
const nowPlayingMovies =
  nowPlayingMoviesData.value?.nowPlayingMovies.results || [];

const { data: topRatedMoviesData } = await useAsyncData(
  "topRatedMoviesData",
  () => $fetch("/api/movies/toprated")
);
const topRatedMovies = topRatedMoviesData.value?.topRatedMovies.results || [];
</script>



