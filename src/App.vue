<template>
  <div
    class="darkModeBackground-Common"
    :class="[$store.state.isDark ? 'darkModeBackground-dark' : 'darkModeBackground']"
  >
    <header-bar></header-bar>
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";

// Vue.config.productionTip = false

export default {
  components: {
    HeaderBar,
  },
};
</script>

<style scoped>
.darkModeBackground-Common {
  overflow: scroll;
  @apply w-full h-full flex flex-col;
  /* @apply w-full h-full relative transition duration-500 flex flex-col; */
}
</style>

<style>
.textColor-dark {
  @apply transition duration-500 transform text-gray-400;
}
.textColor-light {
  @apply transition duration-500 transform text-gray-700;
}

/* .navTextColor-dark {
  @apply transition duration-500 transform text-white border-white opacity-70;
}
.navTextColor-light {
  @apply transition duration-500 transform text-black border-black opacity-70;
} */

.darkModeBackground-dark {
  @apply transition duration-500 transform bg-gray-800;
}
.darkModeBackground {
  @apply transition duration-500 transform bg-gray-100;
}

.cardTextColor {
  @apply text-gray-800;
}
.cardBgColor {
  @apply bg-white bg-opacity-95;
}

body {
  font-family: 'Roboto', sans-serif !important;
  @apply relative;
}
</style>
