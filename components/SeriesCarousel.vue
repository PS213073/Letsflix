   <template>
  <div class="container mx-auto px-4 py-8 relative">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold text-white">{{ title }}</h2>
      <a href="#" class="text-gray-400 hover:text-white transition">
        Explore more
      </a>
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
          <SeriesCard
            v-for="tvSeries in series"
            :key="tvSeries.id"
            :poster_path="tvSeries.poster_path"
            :name="tvSeries.name"
            :id="tvSeries.id"
            :overview="tvSeries.overview"
            :first_air_date="tvSeries.first_air_date"
            :popularity="tvSeries.popularity"
            :item="tvSeries"
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
import { ref, onMounted, watch } from "vue";

const carousel = ref(null);

const props = defineProps({
  title: String,
  apiEndpoint: String,
});

const title = ref(props.title);
const series = ref([]);

const fetchSeries = async () => {
  const { data, error } = await useFetch(props.apiEndpoint, {
    transform: (response) => {
      if (response.series) {
        return response.series.results;
      } else if (response.topRatedSeries) {
        return [...response.topRatedSeries.results];
      }
      return [];
    },
  });

  if (error.value) {
    console.error("Failed to fetch series:", error.value);
    return;
  }

  series.value = data.value;
};

onMounted(fetchSeries);
watch(() => props.apiEndpoint, fetchSeries);

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
  