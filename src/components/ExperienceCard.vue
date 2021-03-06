<template>
  <div class="card cardBgColor">
    <div class="imgDiv" :style="{ 'background-image': 'url(' + Info.Img + ')' }"></div>
    <div class="content cardTextColor">
      <div class="title">{{ Info.Title }}</div>
      <div class="time">{{ Info.StartTime }} ~ {{ Info.EndTime }}</div>
      <!-- <div class="location">{{ Info.Location }}</div> -->
      <Hashtags :hashtags="Info.Hashtags" class="hashtags"/>
      <Marked :content="Info.Detail"/>
    </div>
  </div>
</template>

<script>
import Hashtags from "@/components/Hashtags.vue"
import Marked from "@/components/Marked.vue"

export default {
  components: {
    Hashtags,
    Marked,
  },
  props: {
    Info: {
      type: Object,
    },
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
  },
};
</script>

<style scoped>
.card {
  /* max-width: 300px; */
  @apply rounded-lg shadow-lg z-10 justify-self-center;
  @apply w-full;
  @apply flex flex-col;
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
  @apply text-lg md:text-xl font-semibold;
}
.time {
  @apply italic;
}
.hashtags {
  @apply mt-2 justify-center;
}
</style>
