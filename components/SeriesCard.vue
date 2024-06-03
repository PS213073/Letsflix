<template>
  <NuxtLink @click="changeItemState(item)" :to="`/serie/${id}`">
    <div
      class="w-60 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <NuxtImg
        :src="
          poster_path ? `${imageSiteUrl}/w500${poster_path}` : '/no-image.jpg'
        "
        :alt="name"
        :srcset="poster_path ? generateSrcset(poster_path) : ''"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        class="w-full h-96 object-cover"
      />
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-semibold text-white mb-2 truncate flex-grow">
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

const imageSiteUrl = "https://image.tmdb.org/t/p";

// Function to generate the srcset attribute
const generateSrcset = (path) => {
  return `${imageSiteUrl}/w300${path} 300w, ${imageSiteUrl}/w500${path} 500w, ${imageSiteUrl}/w780${path} 780w, ${imageSiteUrl}/original${path} 2000w`;
};

const itemState = useState("chosenItem", () => null);
const changeItemState = (item) => {
  itemState.value = item;
  // console.log(itemState.value); // Check if the item state is being set correctly
};
</script>
