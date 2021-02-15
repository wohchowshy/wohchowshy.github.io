<template>
  <div class="headerBar responsiveHeaderBar-pbm fixed" :class="[isDark? '':'HeaderBar', showNav && isDark? 'smallNavBg':'smallNav']">
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
            this.$store.dispatch(
             "changePage",
              this.$router.currentRoute._rawValue.fullPath.split("/").pop()
            )
        }, 
        immediate: true,
    }
  },
};
</script>


<style scoped>
.headerBar {
    @apply flex justify-between w-full top-0 bg-gray-800;
}
.responsiveHeaderBar-pbm {
    @apply py-3 px-2 md:pt-6 md:pb-1;
}
.HeaderBar {
  @apply shadow-2xl;
}
.smallNavBg {
  @apply transition duration-500 transform bg-gray-900 shadow-2xl;
}
.smallNav {
  @apply transition delay-300 duration-300 transform bg-gray-800;
}
</style>