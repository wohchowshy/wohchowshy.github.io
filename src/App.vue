<template>
  <div class="w-full h-full" :class="[$store.state.isDark? 'bg-gray-800':'bg-gray-100']">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
/* body {
  background-color: #F3F4F6;
} */
</style>
