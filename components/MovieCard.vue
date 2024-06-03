<template>
  <NuxtLink @click="changeItemState(item)" :to="`/movie/${id}`">
    <div
      class="w-60 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <img
        :src="poster_path ? `${imageSiteUrl}${poster_path}` : '/no-image.jpg'"
        :alt="title"
        class="w-full h-96 object-cover"
      />
      <div class="p-4 flex flex-col flex-grow">
        <h3
          class="text-lg font-semibold text-white mb-2 truncate flex-grow"
        >
          {{ title }}
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>
  
  <script setup>
defineProps([
  "title",
  "id",
  "overview",
  "release_date",
  "popularity",
  "poster_path",
  "item",
]);

const imageSiteUrl = "https://image.tmdb.org/t/p/w500";

const itemState = useState("chosenItem", () => {});
const changeItemState = (item) => {
  itemState.value = item;
};
</script>
  