<template>
  <div class="introCard" :class="[isDark? 'textDarkMode':'textLightMode']">
    <div class="introCard-col1">
      <img
        src="@/assets/img/yizzy.pic.600.jpg"
        class="introCard-img"
        alt="Oops, picture flies out.."
      />
      <contact-icon />
    </div>
    <div class="introCard-col2" ref="introCard-col2">
      <ul v-for="(item, key, idx) in introCard" :key="idx">
        <li class="introCard-col2-text" :class="fontSize(item, key)">{{ item }}</li>
      </ul>
    </div>
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
  computed: {
    isDark: function(){
      return this.$store.state.isDark;
    }
  },
};
</script>

<style scoped>
.introCard {
  @apply grid grid-cols-1 md:grid-cols-2 h-full max-w-screen-lg items-center justify-items-center m-auto;
}

.introCard-col1 {
  @apply self-end md:self-center pb-10 md:pb-0;
}

.introCard-img {
  @apply w-32 md:w-52 object-cover rounded-full;
}

.introCard-col2 {
  @apply justify-self-center md:justify-self-start self-start md:self-center text-center md:text-left list-none;
}

.introCard-col2-text {
  @apply leading-loose tracking-normal;
}

</style>
