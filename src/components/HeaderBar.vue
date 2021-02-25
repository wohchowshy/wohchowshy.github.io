<template>
  <div class="headerBar responsiveHeaderBar-pbm sticky" :class="[isDark? '':'HeaderBar', showNav && isDark? 'smallNavBg':'smallNav']">
    <!-- Logo -->
    <div id="Logo" class="hidden md:flex">
      <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
    </div>
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
    showNav() {
      return this.$store.state.showNavSmall;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  },
  watch: {
    $route: {
      handler: function(){
        let [page, subPage] = this.$router.currentRoute._rawValue.fullPath.split('/').slice(1, 3);
        this.$store.dispatch("changePage", [page, subPage])
      }, 
      immediate: true,
    }
  },
};
</script>


<style scoped>
.headerBar {
    @apply flex justify-between md:items-center items-start w-full top-0 bg-gray-800 z-50 ;
}
.responsiveHeaderBar-pbm {
    @apply py-3 md:py-1 px-2;
}
.HeaderBar {
  @apply shadow-2xl;
}
.smallNavBg {
  @apply transition duration-500 transform bg-gray-900 shadow-2xl;
}
.smallNav {
  @apply transition delay-150 duration-75 transform bg-gray-800;
}
</style>