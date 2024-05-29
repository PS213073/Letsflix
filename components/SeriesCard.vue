<template>
  <NuxtLink @click="changeItemState(item)" :to="`/serie/${id}`">
    <div
      class="w-60 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <img
        :src="`${imageSiteUrl}${poster_path}`"
        :alt="name"
        class="w-full h-96 object-cover"
      />
      <div class="p-4 flex flex-col flex-grow">
        <h3
          class="text-lg font-semibold text-white mb-2 line-clamp-2 flex-grow"
        >
          {{ name }}
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps([
  "name",
  "id",
  "overview",
  "first_air_date",
  "popularity",
  "poster_path",
  "item",
]);

const imageSiteUrl = "https://image.tmdb.org/t/p/w500";

const itemState = useState("chosenItem", () => null);
const changeItemState = (item) => {
  itemState.value = item;
  // console.log(itemState.value); // Check if the item state is being set correctly
};
</script>


<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>