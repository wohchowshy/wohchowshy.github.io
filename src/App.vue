<template>
  <div class="w-full h-full" :class="[$store.state.isDark? 'darkModeBackground-dark':'darkModeBackground']">
    <header-bar></header-bar>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  components:{
    HeaderBar
  }
}

</script>

<style>
</style>
