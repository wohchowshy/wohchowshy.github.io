<template>
  <div class="skillCard" :class="[isDark? 'textDarkMode':'textLightMode']">
    <div class="skillHeader">
      {{ Info.header }}
    </div>
    <div class="skillContent">
      {{ Info.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Info: Object,
  },
  computed: {
    isDark: function () {
      return this.$store.state.isDark;
    },
  },
};
</script>

<style scoped>
.skillCard {
  @apply rounded-lg shadow-lg p-4 bg-blue-300 bg-opacity-20 tracking-wide text-justify;
}

.skillHeader {
  @apply font-semibold text-lg md:text-xl mb-2 md:mb-4;
}

.skillContent {
    @apply text-xs md:text-sm;
}

</style>
