<template>
  <div :class="['skillCard', textColor]">
    <div class="skillHeader">
      {{ Info.header }}
    </div>
    <div class="hashtag ">
      <span class="eachHashtag" v-for="item in Info.hashtags" :key="item">
      {{
        item
      }}</span>
    </div>
    <div class="skillContent">
      {{ Info.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Info: Object,
  },
  computed: {
    textColor(){
      return this.$store.state.textColor
    }
  },
};
</script>

<style scoped>
.skillCard {
  @apply rounded-lg shadow-lg p-4 bg-blue-300 bg-opacity-20 tracking-wide text-justify;
}

.skillHeader {
  @apply font-semibold text-lg md:text-xl mb-2 border-b border-gray-400 pb-2 pl-1;
}

.hashtag {
  @apply mb-2
}

.eachHashtag {
  padding: 1px 6px 1px 6px;
  @apply inline-block rounded-full bg-amber-500 text-xs text-gray-100;
}
.eachHashtag:not(:first-child) {
  margin-left: 2px;
}
.eachHashtag:not(:last-child) {
  margin-right: 2px;
}


.skillContent {
  @apply text-xs md:text-sm;
}
</style>
