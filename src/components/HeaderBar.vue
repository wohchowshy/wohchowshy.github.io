<template>
  <div class="headerBar">
    <!-- Navi -->
    <navigation />
  </div>  
</template>

<script>
import Navigation from "@/components/Navigation.vue"
export default {
  components:{
    Navigation,
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
        let page = this.$router.currentRoute._rawValue.fullPath.split('/')[1].split('?')[0];
        this.$store.dispatch("changePage", page)
      }, 
      immediate: true,
    }
  },
};
</script>


<style scoped>
.headerBar {
  @apply fixed;
  @apply w-full top-0 z-50;
  @apply bg-gray-800;
  @apply py-3 md:py-2 px-2;
}
</style>