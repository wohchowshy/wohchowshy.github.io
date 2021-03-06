<template>
  <div :class="[isDark? 'darkModeBackground-dark': 'darkModeBackground', showNavSmall && isDark? 'smallNavBg':'smallNav', 'headerBar']">
    <!-- Navi -->
    <navigation />
    <!-- dark mode button -->
    <dark-mode-switch/>
  </div>  
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import DarkModeSwitch from "@/components/DarkModeSwitch.vue"
export default {
  components:{
    Navigation,
    DarkModeSwitch
  },
  name: "HeaderBar",
  computed: {
    showNavSmall() {
      return this.$store.state.showNavSmall;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  },
  watch: {
    $route: {
      handler: function(){
        let page = this.$router.currentRoute._rawValue.fullPath.split('/')[1];
        this.$store.dispatch("changePage", page)
      }, 
      immediate: true,
    }
  },
};
</script>


<style scoped>
.headerBar {
  @apply sticky;
  @apply flex justify-between items-start md:items-center;
  @apply w-full top-0 z-50;
  @apply bg-gray-800;
  @apply py-3 md:py-1 px-2;
}
.HeaderBar {
  @apply shadow-2xl;
}
.smallNavBg {
  @apply transition duration-500 transform shadow-2xl;
  /* @apply bg-gray-900; */
}
.smallNav {
  /* @apply transition delay-150 duration-75 transform bg-gray-800; */
}
</style>