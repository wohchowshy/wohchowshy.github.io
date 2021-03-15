<template>
  <div class="aboutDiv textColor HeaderMargin">
    <IntroCard>
      <template v-slot:more >
      <!-- <template v-slot:more v-if="scrolled"> -->
        <div class="showMore" :style="getOpacity">
          <div>
            Educations & Experiences
          </div>
          <i class="fas fa-chevron-down text-2xl"></i>
        </div>
      </template>
    </IntroCard>
    <EducationCard />
    <ExperienceCard />
  </div>
</template>

<script>
import IntroCard from "@/components/IntroCard.vue";
import EducationCard from "@/components/EducationCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";


export default {
  components: {
    IntroCard,
    EducationCard,
    ExperienceCard,
  },
  methods: {
    changeScroll(e){
      console.log(e)
      this.scrolled = false;
    }
  },
  computed: {
    scrolled() {
      return !this.$store.state.scrolled;
    },
    getOpacity() {
      return {
        opacity: this.$store.state.opacity,
      }
    }
  }
};
</script>

<style scoped>
.aboutDiv {
  @apply flex-grow max-w-screen-md m-auto;
}
.showMore {
  @apply animate-bounce;
  @apply absolute bottom-2 m-auto w-full text-sm;
  @apply flex flex-col items-center;
  @apply text-gray-500;
}
</style>