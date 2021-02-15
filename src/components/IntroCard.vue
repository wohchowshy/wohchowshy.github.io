<template>
  <div class="introCard">
    <div class="introCard-col1">
      <img
        src="@/assets/img/yizzy.pic.600.jpg"
        class="introCard-img"
        alt="Oops, picture flies out.."
      />
    </div>
    <div class="introCard-col2">
        <ul v-for="(item, key, idx) in introCard" :key="idx">
            <li class="introCard-col2-text" :class="fontSize(item, key)">{{ item }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroCard",
  data() {
      return {
          introCard: {
              name: "Yi Dong, Wu", 
              degree: "MS in Computer Science", 
              school: "National TsingHua University", 
              scope: "Natural Language Processing Lab"
          }
      }
  },
  methods: {
      fontSize(item, key){
        switch(key){
            case "name":
                return ["text-4xl", "pb-2"]
            default:
                return "text-xl"
        }
      }
  }
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
    @apply w-52 object-cover rounded-full;
}

.introCard-col2 {
    @apply justify-self-center md:justify-self-start self-start md:self-center text-center md:text-left list-none text-gray-500;
}

.introCard-col2-text {
    @apply tracking-wider leading-loose;
}
</style>