<template>
  <div class="container mx-auto px-4 py-8 relative">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold text-white">{{ title }}</h2>
      <!-- <NuxtLink
        :to="`/explore`"
        class="text-gray-400 hover:text-white transition"
        >Explore more</NuxtLink
      > -->
    </div>
    <div class="relative">
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full focus:outline-none z-10 hover:h-full"
      >
        &lt;
      </button>
      <div
        ref="carousel"
        class="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        <div class="inline-flex space-x-4">
          <MovieCard
            v-for="mov in movies"
            :key="mov.id"
            :poster_path="mov.poster_path"
            :backdrop_path="mov.backdrop_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :item="mov"
          />
        </div>
      </div>
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full focus:outline-none z-10 hover:h-full"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
const carousel = ref(null);

const props = defineProps({
  title: String,
  apiEndpoint: String,
});

const title = ref(props.title);
const movies = ref([]);
const fetchMovies = async () => {
  const { data, error } = await useFetch(() => props.apiEndpoint, {
    transform: (response) => {
      // Check if the response has 'movies' property and use it
      if (response.movies) {
        return response.movies.results;
      }
      // Otherwise, check for 'topRatedMovies' and 'topRatedSeries'
      else if (response.topRatedMovies) {
        return [...response.topRatedMovies.results];
      } else if (response.nowPlayingMovies) {
        return [...response.nowPlayingMovies.results];
      } else if (response.upcoming) {
        return [...response.upcoming.results];
      }
      return [];
    },
  });

  if (error.value) {
    console.error("Failed to fetch movies:", error.value);
    return;
  }

  movies.value = data.value;
};

onMounted(fetchMovies);

watch(() => props.apiEndpoint, fetchMovies);

const scrollLeft = () => {
  carousel.value.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  carousel.value.scrollBy({ left: 300, behavior: "smooth" });
};
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>



