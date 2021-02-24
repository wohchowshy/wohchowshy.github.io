<template>
  <div class="card">
    <div class="imgDiv" :style="{ 'background-image': 'url(' + Info.Img + ')' }"></div>
    <div :class="['content', textColor]">
      <div class="title">{{ Info.Title }}</div>
      <div class="time">{{ Info.StartTime }} ~ {{ Info.EndTime }}</div>
      <!-- <div class="location">{{ Info.Location }}</div> -->
      <div class="horizontalLine"></div>
      <Marked :content="Info.Detail" class="text-left"/>
      <Hashtags :hashtags="Info.Hashtags" class="hashtags"/>
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
    textColor() {
      if (this.isDark) {
        return ["Experience-textColor-dark"];
      } else {
        return ["Experience-textColor-light"];
      }
    },
  },
};
</script>

<style scoped>
.card {
  /* max-width: 300px; */
  @apply bg-white bg-opacity-70 rounded-lg z-10 justify-self-center;
  @apply w-full;
  @apply flex flex-col
}
.imgDiv {
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @apply rounded-t-lg;
}

.content {
  @apply m-4 mb-2 text-xs md:text-sm text-center;
  @apply flex-grow flex flex-col;
}
.title {
  @apply text-lg md:text-xl font-semibold;
}
.time {
  @apply italic;
}
.horizontalLine {
  @apply border-t my-2
}

.hashtags {
  @apply flex-grow flex content-end flex-wrap;
}

.Experience-textColor-dark {
  @apply transition duration-500 transform text-gray-800;
}
.Experience-textColor-light {
  @apply transition duration-500 transform text-gray-700;
}
</style>
