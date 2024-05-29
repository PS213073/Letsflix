<template>
  <div class="fixed h-20 w-screen bottom-0 bg-slate-950 md:h-screen md:w-20 z-10">
    <div class="h-full flex items-center justify-center">
      <ul class="flex flex-row justify-around space-x-28 md:space-x-0 md:flex-col md:justify-between items-center md:space-y-32 space-y-0">
        <li>
          <NuxtLink to="/">
            <font-awesome
              icon="house"
              style="font-size: 25px"
              :class="$route.path === '/' ? 'icon-active' : 'icon-inactive'"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/movies">
            <font-awesome
              icon="film"
              style="font-size: 25px"
              :class="$route.path === '/movies' ? 'icon-active' : 'icon-inactive'"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/series">
            <font-awesome
              icon="tv"
              style="font-size: 25px"
              :class="$route.path === '/series' ? 'icon-active' : 'icon-inactive'"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search">
            <font-awesome
              icon="search"
              style="font-size: 25px"
              :class="$route.path === '/search' ? 'icon-active' : 'icon-inactive'"
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
