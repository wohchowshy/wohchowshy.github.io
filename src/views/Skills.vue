<template>
  <div class=" skillCardContainer">
    <SkillCard v-for="item in Info" :key="item" :Info="item" class="skillCard" />
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue";
import Info from "@/assets/data/skills.js";

export default {
  components: {
    SkillCard,
  },
  data() {
    return {};
  },
  methods: {
    skill() {
      return this.$route.params.skill;
    },
  },
  computed: {
    Info() {
      return Info.skills;
    },
  },
  watch:{
    "$route.params.skill": function() {
      this.$store.dispatch("ChangeNavSmall", false)
    }
  }
};
</script>

<style scoped>
.skillCardContainer {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center;
  @apply max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg ;
  @apply gap-5 px-5;
  @apply w-full m-auto py-10 max-w-max;
}

</style>
