<template>
  <div class="experienceDiv">
    <div class="Words">
      Experiences
    </div>
    <div v-for="Info in Infos" :key="Info"  class="card">
      <div class="imgDiv" :style="{ 'background-image': 'url(' + Info.Img + ')' }"></div>
      <div class="content cardTextColor">
        <div class="title">{{ Info.Title }}</div>
        <div class="time">{{ Info.StartTime }} ~ {{ Info.EndTime }}</div>
        <div class="location">{{ Info.Location }}</div>
        <Hashtags :hashtags="Info.Hashtags" class="hashtags"/>
        <div class="description">{{ Info.Detail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hashtags from "@/components/Hashtags.vue"
import Info from "@/assets/data/experience.js"

export default {
  components: {
    Hashtags,
  },
  computed: {
    Infos() {
      return Info;
    }
  },
};
</script>

<style scoped>
.Words {
    @apply text-5xl max-w-max mb-8 pb-4 m-auto font-light;
    @apply border-b border-gray-400;
}
.experienceDiv {
  @apply max-w-screen-lg m-auto mx-4;
}
.card {
  max-width: 500px;
  @apply rounded-md shadow-md justify-self-center;
  @apply bg-white;
  @apply flex flex-col;
  @apply m-auto my-8;
}
.imgDiv {
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @apply rounded-t-lg;
}

.content {
  @apply m-4 mb-2;
  @apply text-xs md:text-sm text-center leading-relaxed;
  @apply flex flex-col;
}
.title {
  @apply text-sm md:text-lg font-semibold;
}
.time {
  @apply italic text-gray-400;
}
.hashtags {
  @apply mt-2 justify-center;
}
.description {
  @apply my-4;
}
</style>
