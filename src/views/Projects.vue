<template>
  <div class="projectContainer HeaderMargin">
    <ProjectCard v-for="item in Info" :key="item" :project="item" />
  </div>
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
      return Info.projects;
    },
  },
  watch:{
    "$route.params.project": function() {
      this.$store.dispatch("ChangeNavSmall", false)
    }
  }
};
</script>

<style scoped>
.projectContainer {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center;
  @apply max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg;
  @apply gap-5 px-10 py-10;
  @apply w-full mx-auto;
}
</style>
