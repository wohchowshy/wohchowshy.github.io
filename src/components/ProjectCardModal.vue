<template>
  <teleport to="body">
    <div class="modal-mask" @click.self="closeModal">
      <div class="closeBtn">
        <i class="fas fa-times closeIcon" @click.stop="closeModal"></i>
      </div>
      <div class="container">
        <div class="content">
          <!-- Title -->
          <div class="title">
            <a :href="project.Link" target="_blank">
              {{ project.Title }} <i class="fas fa-link text-sm"></i>
            </a>
          </div>
          <!-- SplitLine -->
          <!-- <div class="splitLine" /> -->
          <!-- Img -->
          <div class="img">
            <!-- If at least 1 image -->
            <div v-if="project.Imgs.length" class="showImg">
              <div class="showIdx">
                <div v-for="idx in project.Imgs.length" :key="idx" :class="['dots', idx==nowImgIdx+1? 'dotNow':'']"></div>
              </div>
              <div class="arrow left" @click.stop="changePicture(-1)">
                <i class="fas fa-chevron-left"></i>
              </div>
              <div class="allImg">
                <img v-for="(item, idx) in project.Imgs" :key="item" v-show="idx === nowImgIdx" :src="item" class="nowImg" />
              </div>
              <div class="arrow right" @click.stop="changePicture(1)">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
            <!-- If no image -->
            <div v-else class="showImg">
                <i class="fas fa-exclamation text-5xl opacity-50 w-full text-center"></i>
            </div>
          </div>
          <!-- SplitLine -->
          <!-- <div class="splitLine" /> -->
          <!-- Hashtag -->
          <div class="hashtag"><Hashtags class="justify-start" :hashtags="project.Hashtags"/></div>
          <div class="contentPadding">
            <!-- Introduction -->
            <div class="introduction">
                <Marked :content="project.Introduction" />
            </div>
            <!-- Detail -->
            <div class="detail">
                <Marked :content="project.Detail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Marked from "@/components/Marked.vue";
import Hashtags from "@/components/Hashtags.vue"
export default {
  components: {
    Marked,
    Hashtags,
  },
  emits: ["childCloseModal"],
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      nowImgIdx: 0,
    };
  },
  methods: {
    closeModal() {
      this.$emit("childCloseModal");
    },
    changePicture(offset) {
      if (this.nowImgIdx === 0 && offset === -1) {
        return;
      } else if (this.nowImgIdx === this.project.Imgs.length - 1 && offset == 1) {
        return;
      } else {
        this.nowImgIdx += offset;
      }
    },
  },
  computed: {
    getImg() {
      return this.project.Imgs[this.nowImgIdx];
    },
  },
};
</script>

<style scoped>
.modal-mask {
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.8);
  @apply fixed top-0 left-0 bottom-0 right-0 w-full h-full;
  @apply flex justify-center items-stretch;
  @apply py-20 md:px-20 px-4;
  /* @apply py-20 md:py-40; */
  /* transition: opacity 0.5s ease; */
}

.closeBtn {
  @apply absolute right-4 top-4;
}
.closeIcon {
  @apply cursor-pointer text-white;
  font-size: 200%;
  -webkit-tap-highlight-color: transparent;
}

/* Below are CSSs of modal Component */
.container {
  @apply relative overflow-scroll;
  /* @apply mx-5 md:mx-40 my-auto pt-8; */
  @apply py-4 md:py-8;
  @apply max-w-sm sm:max-w-screen-sm md:max-w-screen-md max-h-full;
  @apply bg-white;
  /* transition: all 0.5s ease; */
}

/* Title */
.title {
  @apply max-w-max;
  @apply text-2xl md:text-3xl font-bold;
  @apply mx-4 md:mx-8 mb-2 md:mb-4;
}
.title:hover {
  @apply text-green-600 underline;
}

/* SplitLine */
.splitLine {
  @apply border-b my-2 border-gray-200;
}

/* Img */
.showImg {
  @apply flex justify-between items-center relative;
  @apply bg-gray-100;
  /* max-height: 500px; */
  height: 500px;
  /* height: auto; */
  /* height: 384px; */
}
.showIdx {
  @apply absolute bottom-0;
  @apply flex items-center;
  left: 50%;
  transform: translateX(-50%);
}
.allImg {
  @apply max-h-full h-full w-full;
}
.nowImg {
  @apply h-full w-full object-contain object-center mx-auto;
  max-height: 500px;
}
.arrow {
  @apply p-2 md:p-4 cursor-pointer;
  @apply text-xl md:text-2xl opacity-20;
  @apply absolute h-full flex items-center;
  -webkit-tap-highlight-color: transparent;
  z-index: 5;
}
.arrow:hover {
    @apply transition duration-200 transform opacity-50;
}
.arrow.left {
  @apply left-0;
}
.arrow.right {
  @apply right-0;
}
.dots {
  @apply rounded-full border w-2 h-2 border-white mx-1 my-1 shadow bg-gray-200 bg-opacity-50;
}
.dotNow {
    @apply bg-white;
    /* @apply transition duration-200 transform bg-white; */
}

/* Content below image */
.contentPadding {
    @apply px-4 md:px-8 leading-relaxed tracking-wide;
}
.hashtag {
    @apply px-4 md:px-8 my-2 mb-4;
}
.introduction {
    @apply my-5 ;
}
.detail {
    @apply my-5;
}
</style>
