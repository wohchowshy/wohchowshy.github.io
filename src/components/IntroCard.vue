<template>
  <div class="introCard relative">
    <div class="introCard-col1">
      <img
        src="@/assets/img/yizzy.pic.jpg"
        class="introCard-img"
        alt="Oops, picture flies out.."
      />
      <contact-icon class="justify-center mt-5 md:mt-8"/>
    </div>
    <div class="introCard-col2" ref="introCard-col2">
      <ul v-for="(item, key, idx) in introCard" :key="idx">
        <li class="introCard-col2-text" :class="fontSize(item, key)">{{ item }}</li>
      </ul>
    </div>
    <slot name="more"></slot>
  </div>
</template>

<script>
import ContactIcon from "@/components/ContactIcon.vue";
export default {
  components: {
    ContactIcon,
  },
  name: "IntroCard",
  data() {
    return {
      introCard: {
        name: "Yi Dong, Wu",
        degree: "MS in Computer Science",
        school: "National Tsing Hua University",
        scope: "Natural Language Processing Lab",
      },
    };
  },
  methods: {
    fontSize(item, key) {
      switch (key) {
        case "name":
          return ["text-2xl", "pb-2"];
        default:
          return ["md:text-base", "text-sm", "font-light"];
      }
    },
  },
};
</script>

<style scoped>
.introCard {
  @apply grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-end; 
  @apply h-screen max-w-screen-lg m-auto;
  min-height: 500px;
}

.introCard-col1 {
  @apply self-end md:self-center p-10;
}

.introCard-img {
  @apply w-32 md:w-52 object-cover rounded-full m-auto;
}

.introCard-col2 {
  @apply justify-self-center md:justify-self-start;
  @apply self-start md:self-center;
  @apply text-center md:text-left;
  @apply pb-10 md:p-0;
}

.introCard-col2-text {
  @apply leading-loose tracking-normal;
}
</style>
