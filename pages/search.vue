<template>
  <div class="bg-gray-900 text-white min-h-screen p-4">
    <form class="mb-4">
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="searchTerm"
          type="text"
          id="default-search"
          class="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies, Series..."
          required
        />
      </div>
    </form>

    <section v-if="movies.length" class="mt-5">
      <h1
        class="mb-4 text-3xl font-semibold leading-none tracking-tight text-white md:text-4xl"
      >
        Movie Results
      </h1>
      <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="mov in movies" :key="mov.id">
          <MovieCard
            :poster_path="mov.poster_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :item="mov"
          />
        </li>
      </ul>
    </section>

    <section v-if="series.length" class="mt-5">
      <h1
        class="mb-4 text-3xl font-semibold leading-none tracking-tight text-white md:text-4xl"
      >
        TV Series Results
      </h1>
      <ul
        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <li v-for="tvSeries in series" :key="tvSeries.id">
          <SeriesCard
            :poster_path="tvSeries.poster_path"
            :name="tvSeries.name"
            :id="tvSeries.id"
            :overview="tvSeries.overview"
            :first_air_date="tvSeries.first_air_date"
            :popularity="tvSeries.popularity"
            :item="tvSeries"
          />
        </li>
      </ul>
    </section>

    <div
      v-if="!movies.length && !series.length"
      class="mt-20 text-center text-gray-500 text-3xl"
    >
      <p>Type something to search...</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const searchTerm = useState("searchTerm", () => "");
const movies = useState(() => []);
const series = useState(() => []);

const { data } = await useFetch("/api/movies/search", {
  query: {
    searchTerm,
  },
  immediate: false,
  transform: (data) => {
    movies.value = data.movies.results;
    series.value = data.series.results;
  },
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
