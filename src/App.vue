<template>
  <div class="w-full h-full" :class="[$store.state.isDark? 'darkModeBackground-dark':'darkModeBackground']">
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
</style>
