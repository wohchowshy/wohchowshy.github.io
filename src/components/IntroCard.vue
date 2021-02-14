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
