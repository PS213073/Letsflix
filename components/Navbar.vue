<template>
  <div class="fixed h-20 w-full bottom-0 bg-slate-950 md:h-full md:w-20 z-50">
    <div class="h-full flex items-center justify-center">
      <ul
        class="flex flex-row justify-around w-full px-4 md:space-x-0 md:flex-col md:justify-between items-center md:space-y-32 space-y-0"
      >
        <li>
          <NuxtLink to="/" alt="home">
            <font-awesome
              icon="house"
              alt="home"
              class="text-2xl"
              :class="$route.path === '/' ? 'icon-active' : 'icon-inactive'"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/movies" alt="movies">
            <font-awesome
              icon="film"
              alt="movies"
              class="text-2xl"
              :class="
                $route.path === '/movies' ? 'icon-active' : 'icon-inactive'
              "
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/series" alt="series">
            <font-awesome
              icon="tv"
              alt="series"
              class="text-2xl"
              :class="
                $route.path === '/series' ? 'icon-active' : 'icon-inactive'
              "
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search" alt="search">
            <font-awesome
              icon="search"
              alt="search"
              class="text-2xl"
              :class="
                $route.path === '/search' ? 'icon-active' : 'icon-inactive'
              "
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.icon-active {
  color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.icon-inactive {
  color: white;
}
</style>
