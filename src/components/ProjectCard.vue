<template>
  <div :class="['projectCard', textColor, cardBgColor]">
    <img class="bgImg" :src="project.Imgs[0]" />
    <div class="contentSimple">
        <div class="relativeAlign">
            <div class="titleSimple">
                {{ project.Title }}
            </div>
            <div class="introSimple">
                {{ project.ForShort}}
            </div>
            <div class="showMore">
                More
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
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
    },
  },
};
</script>

<style scoped>
.projectCard {
  @apply relative rounded-lg shadow-2xl overflow-hidden;
  /* @apply max-h-96 */
  max-height: 400px;
}
@media (max-width: 767px){
    .projectCard {
        height: 300px;
    }
}
/* .projectCard (max-width:) */
.projectCard::before {
  @apply block absolute z-10 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50;
  content: "";
}

.bgImg {
  @apply h-full w-full;
  min-height: 500px;
  width: auto;
  height: auto;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  transition: all 0.5s ease;
}
.projectCard:hover .bgImg {
    transform: scale(1.1);
}

.contentSimple {
    @apply absolute z-20 text-center text-white m-auto px-4;
    @apply top-0 bottom-0 left-0 right-0;
}
.relativeAlign {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.titleSimple {
    @apply text-xl font-bold mb-6;
}
.introSimple {
    @apply text-base
}
.showMore {
    @apply mt-10 m-auto cursor-pointer;
    @apply font-bold bg-gray-100 text-black;
    max-width: 100px;
    transition: all 0.5s ease;
}
.showMore:hover {
    @apply border-t border-b font-light bg-transparent text-white;
}
</style>
