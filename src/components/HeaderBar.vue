<template>
  <div class="headerBar responsiveHeaderBar-pbm fixed">
    <!-- Logo -->
    <div id="Logo" class="hidden md:flex">
      <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
    </div>
    <!-- Navi -->
    <navigation/>
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

</style>