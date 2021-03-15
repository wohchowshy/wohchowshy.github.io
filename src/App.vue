<template>
  <div class="outer bgColor" @click.stop="changeNavStatSmall" @scroll="changeScroll">
    <HeaderBar />
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
  methods: {
    changeNavStatSmall() {
      this.$store.dispatch("ChangeNavSmall", false)
    },
    changeScroll(e) {
      this.$store.dispatch("changeScroll", [true, 1 - e.srcElement.scrollTop / 100])
    }
  }
};
</script>

<style scoped>
.outer {
  @apply w-full h-full flex flex-col overflow-scroll;
}
.bgColor {
  @apply bg-gray-100;
}
</style>

<style>
.textColor {
  @apply text-gray-700;
}
.HeaderMargin {
  margin-top: 72px;
}
body {
  font-family: 'Montserrat', sans-serif !important;
  @apply relative;
}
html, body {
  @apply h-screen;
}
</style>
