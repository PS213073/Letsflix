<template>
  <div class="flex flex-col md:flex-row">
    <Navbar />
    <div class="md:ml-20 md:w-[94.7%] w-full">
      <slot />
      <div>
        <Footer/>
      </div>
    </div>
  </div>
</template>