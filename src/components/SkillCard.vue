<template>
  <div :class="['skillCard', textColor, cardBgColor]">
    <div class="skillHeader">
      {{ Info.header }}
    </div>
    <div class="horizontalLine" />
    <Marked :content="Info.content" class="markedContent"/>
    <div class="hashContainer">
      <Hashtags :hashtags="Info.hashtags"/>
    </div>
  </div>
</template>

<script>
import Hashtags from "@/components/Hashtags.vue"
import Marked from "@/components/Marked.vue"
export default {
  components:{
    Hashtags,
    Marked,
  },
  props: {
    Info: Object,
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    textColor() {
      if (this.isDark) {
        return ["card-textColor-dark"];
      } else {
        return ["card-textColor-light"];
      }
    },
    cardBgColor() {
      return this.$store.state.cardBgColor;
    }
  },
};
</script>

<style scoped>
.skillCard {
  /* @apply rounded-lg shadow-lg p-4 bg-blue-300 bg-opacity-20 tracking-wide text-justify; */
  @apply rounded-lg shadow-lg p-4 pb-2;
  @apply flex flex-col;
}

.skillHeader {
  @apply font-semibold text-lg md:text-xl pl-1;
}

.horizontalLine {
  @apply border-t my-2 border-gray-200
}

.skillContent {
  @apply text-xs md:text-sm;
}

.hashContainer {
  @apply flex-grow flex content-end flex-wrap
}

.markedContent {
  @apply text-xs;
  @apply md:text-sm;
  @apply mr-2 md:mr-4
}
</style>
