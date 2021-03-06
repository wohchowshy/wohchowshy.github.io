<template>
  <div class="skillCard, cardTextColor, cardBgColor" :style="Style">
    <div class="imgDiv">
      <img class="imgLogo" :src="Info.img"/>
    </div>
    <div class="content">
      <div class="skillHeader">{{ Info.header }}</div>
      <div class="horizontalLine"/>
      <ul class="list">
        <li v-for="item in Info.content" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Hashtags from "@/components/Hashtags.vue"
export default {
  components:{
    // Hashtags,
  },
  props: {
    Info: Object,
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    Style() {
      return {
        '--bgColor': this.Info.bgColor,
        '--transitionTime': "0.5s",
        '--upperHeight': "170px",
        '--lowerHeight': "30px",
      }
    }
  },
};
</script>

<style scoped>
.skillCard {
  @apply rounded-lg shadow-lg p-4 overflow-hidden;
  @apply p-4;
  @apply flex flex-col;
}
.imgDiv {
  position: relative;
  height: var(--upperHeight);
  transition: height var(--transitionTime);
  background-color: var(--bgColor);
  @apply -mt-4 -ml-4 -mr-4 mb-4;
  @apply overflow-hidden;
}
.skillCard:hover .imgDiv {
  height: var(--lowerHeight);
}
.skillCard:hover .imgDiv .imgLogo {
  transform: translateX(-50%) translateY(-50%) scale(3);
}
.skillCard:hover .content {
  height: var(--upperHeight);
}
.imgLogo {
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
  /* width: 128px; */
  width: auto;
  height: 128px;
  transition: transform var(--transitionTime);
  @apply top-1/2 left-1/2;
}
.content {
  height: var(--lowerHeight);
  transition: height var(--transitionTime);
  overflow: hidden;
}
.skillHeader {
  @apply font-semibold text-lg md:text-xl;
}
.horizontalLine {
  @apply border-t border-gray-400 my-2;
}
.list {
  @apply text-sm;
}
</style>
