<template>
  <div v-if="Info.length !== 0" class="w-full m-auto skillCardContainer">
    <SkillCard v-for="item in Info" :key="item" :Info="item" class="skillCard" />
  </div>
  <div v-else class="pt-40 text-gray-500 text-center text-3xl">
    To Be Published !
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue";
import state from "@/assets/data/skills.json";

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
      return state[this.skill()];
    },
  },
};
</script>

<style scoped>
.skillCardContainer {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center;
  @apply max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg ;
  @apply gap-4 px-5;
}

</style>
