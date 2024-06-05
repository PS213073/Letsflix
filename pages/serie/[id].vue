<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Banner
      :backdrop_path="seriesDetails.backdrop_path"
      :title="seriesDetails.name"
      :description="seriesDetails.overview"
      :rating="seriesDetails.vote_average"
      :reviews="seriesDetails.vote_count"
      :year="seriesDetails.first_air_date"
    />

    <div v-if="seriesDetails" class="container mx-auto p-4">
      <h1
        class="mb-10 flex justify-center text-5xl font-semibold tracking-wider"
      >
        Overview
      </h1>
      <div class="flex flex-col gap-10 md:flex-row items-center md:items-start">
        <NuxtImg
          :src="
            seriesDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`
              : '/poster.jpg'
          "
          class="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
        />
        <div class="md:w-2/3 mt-10">
          <h2 class="text-3xl font-semibold mb-4">{{ seriesDetails.name }}</h2>
          <p class="text-gray-300">{{ seriesDetails.overview }}</p>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Serie Details</h2>
            <ul class="list-disc list-inside text-gray-300">
              <li>
                <strong>First Air Date: </strong>
                {{ seriesDetails.first_air_date }}
              </li>
              <li>
                <strong>Last Air Date: </strong>
                {{ seriesDetails.last_air_date }}
              </li>
              <li>
                <strong>Popularity: </strong> {{ seriesDetails.popularity }}
              </li>
              <li>
                <strong>Number of Seasons: </strong>
                {{ seriesDetails.number_of_seasons }}
              </li>
              <li>
                <strong>Number of Episodes: </strong>
                {{ seriesDetails.number_of_episodes }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  
  <script setup>
const route = useRoute();

const { data: seriesDetails } = await useFetch(
  `/api/series/${route.params.id}`
);
// console.log(seriesDetails.value);

useHead({
  title: seriesDetails.value.name,
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: "description", content: seriesDetails.value.overview },
    { property: "og:title", content: seriesDetails.value.name },
    { property: "og:description", content: seriesDetails.value.overview },
    {
      property: "og:image",
      content: `https://image.tmdb.org/t/p/w500${seriesDetails.value.poster_path}`,
    },
    { property: "twitter:name", content: seriesDetails.value.title },
    { property: "twitter:description", content: seriesDetails.value.overview },
    {
      property: "twitter:image",
      content: `https://image.tmdb.org/t/p/w500${seriesDetails.value.poster_path}`,
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