<template>
  <div class="experience">
    <ExperienceCard v-for="item in Info" :Info="item" :key="item"/>
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard.vue";
import Info from "@/assets/data/experience.js";

export default {
  components: {
    ExperienceCard,
  },
  computed: {
    Info: function () {
      return Info;
    },
  },
};
</script>

<style scoped>
.experience {
  /* @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5; */
  @apply grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 justify-center;
  @apply max-w-sm md:max-w-screen-md;
  @apply w-full m-auto;
}

</style>
