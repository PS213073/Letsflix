<template>
  <div class="container mx-auto px-4 relative">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold text-white">{{ title }}</h2>
      <a href="#" class="text-gray-400 hover:text-white transition"
        >Explore more</a
      >
    </div>
  </div>
</template>
  
  <script>
export default {
  setup(props) {
    const title = ref(props.title);

    return {
      title,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>