<template>
  <div class="darkModeBackground-Common" :class="[$store.state.isDark? 'darkModeBackground-dark':'darkModeBackground']">
    <header-bar></header-bar>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  components:{
    HeaderBar
  }
}

</script>

<style scoped>
.darkModeBackground-Common {
    @apply w-full h-full relative transition duration-500;
}

.darkModeBackground-dark {
    @apply transform bg-gray-800;
}

.darkModeBackground {
    @apply transform bg-gray-100;
}
</style>
