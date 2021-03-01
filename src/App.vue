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

.darkModeBackground-dark {
  @apply transition duration-500 transform bg-gray-800;
}

.darkModeBackground {
  @apply transition duration-500 transform bg-gray-100;
}
</style>

<style>
.textColor-dark {
  @apply transition duration-500 transform text-gray-400 border-gray-400;
}
.textColor-light {
  @apply transition duration-500 transform text-gray-500 border-gray-500;
}

.card-textColor-dark {
  @apply transition duration-500 transform text-gray-800;
}
.card-textColor-light {
  @apply transition duration-500 transform text-gray-700;
}

.cardBgColor-dark {
  @apply transition duration-500 transform bg-white bg-opacity-90;
}
.cardBgColor-light {
  @apply transition duration-500 transform bg-white bg-opacity-100;
}

body {
  /* font-family: 'Cormorant Garamond', serif !important; */
  /* font-family: 'Alegreya Sans', sans-serif; */
  font-family: 'Roboto', sans-serif !important;
  @apply relative;
}
</style>
