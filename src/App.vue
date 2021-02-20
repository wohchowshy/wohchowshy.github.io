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

// Vue.config.productionTip = false

export default {
  components:{
    HeaderBar
  },
  watch: {
    "$store.state.isDark": function(){
    }
  }
}

</script>


<style scoped>
.darkModeBackground-Common {
    overflow: scroll;
    @apply w-full h-full relative transition duration-500 flex flex-col;
}

.darkModeBackground-dark {
    @apply transform bg-gray-800;
}

.darkModeBackground {
    @apply transform bg-gray-100;
}
</style>


<style>
.textLightMode {
  @apply transition duration-500 transform text-gray-500
}

.textDarkMode {
  @apply transition duration-500 transform text-gray-400
}
</style>
