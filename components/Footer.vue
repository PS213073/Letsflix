<template>
  <footer class="bg-gray-900 text-gray-400 pt-8 pb-28 pl-10 md:pl-16">
    <div
      class="container mx-auto px-4 flex flex-col gap-y-5"
    >
      <div class="flex items-center space-x-2">
        <img src="/Movies.png" alt="Nuxt Logo" class="h-8 w-8" />
        <span class="text-xl font-semibold text-white">Let's Flix</span>
      </div>
      <div
        class="flex flex-col space-y-5"
      >
        <div class="flex items-center space-x-1">
          <span>Made with</span>
          <img src="/nuxt.png" alt="Nuxt Icon" class="h-5 " />
        </div>
        <div class="flex items-center space-x-1">
          <span>Data provided by</span>
          <img src="/tmdb2.svg" alt="TMDB Logo" class="h-5 w-20" />
        </div>
        <span
          >This project uses the TMDB API but is not endorsed or certified by
          TMDB.</span
        >
      </div>
      <div class="flex items-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.svg" alt="Twitter" class="h-6 w-6" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" class="h-6 w-6" />
        </a>
        <div class="flex items-center space-x-1">
          <img src="/vercel.svg" alt="Vercel Logo" class="h-7" />
        </div>        
      </div>
    </div>
  </footer>
</template>
  
  <style>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
  