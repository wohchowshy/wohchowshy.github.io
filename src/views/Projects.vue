<template>
  <div v-if="Info.length != 0" class="projectContainer">
    <ProjectCard v-for="item in Info" :key="item" :project="item" />
  </div>
  <div v-else class="pt-40 text-gray-500 text-center text-3xl">To Be Published !</div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import Info from "@/assets/data/projects.js";

export default {
  components: {
    ProjectCard,
  },
  methods: {
    project() {
      return this.$route.params.project;
    },
  },
  computed: {
    Info: function () {
      if (this.project() === "all") {
        return [].concat(...Object.values(Info));
      }
      return Info[this.project()];
    },
  },
};
</script>

<style scoped>
.projectContainer {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center;
  @apply max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg;
  @apply gap-5 px-10 py-10;
  @apply w-full h-full m-auto;
}
</style>
