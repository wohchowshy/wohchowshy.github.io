<template>
    <div v-if="hasContent" :class="['blog', textColor]">
        <div v-if="isHome" class="homeDiv">
            <div v-for="(item, key) in folder" :key="item" class="eachFile">
                <div class="homeHeader" @click="enterPage(key)">{{ item.Title }}</div>
                <div class="homeTime">{{ item.PublishTime }}</div>
                <div class="homeDescription">{{ item.Description }}</div>
            </div>
        </div>
        <div v-else class="contentDiv">
            <div class="title">{{ getTitle }}</div>
            <div class="homeTime">{{ getDate }}</div>
            <div class="sepLine"/>
            <Hashtags :hashtags="getHashtag"/>
            <Marked :content="getContent"/>
        </div>
    </div>
    <div v-else class="text-center text-3xl text-light p-10" :class="[textColor]">To Be Published ASAP! </div>
</template>

<script>
import Marked from "@/components/Marked.vue"
import Hashtags from "@/components/Hashtags.vue"
import folder from "@/assets/blog/index.js"

export default {
  components: {
      Marked,
      Hashtags
  },
  methods: {
      enterPage(page) {
          this.$router.push("/blog/"+page);
      },
  },
  computed: {
      textColor() {
          return this.$store.state.textColor;
      },
      isHome() {
          return this.$route.params.file === ''? true:false;
      },
      hasContent(){
          return Object.keys(folder).length == 0 ? false:true;
      },
      folder(){
          return folder;
      },
      getFile(){
          return this.$route.params.file;
      },
      getTitle() {
          return folder[this.$route.params.file].Title;
      },
      getDate() {
          return folder[this.$route.params.file].PublishTime;
      },
      getHashtag() {
          return folder[this.$route.params.file].Hashtag;
      },
      getContent() {
          return folder[this.$route.params.file].Content;
      }
  }
}
</script>

<style scoped>
.blog {
    @apply max-w-screen-md;
    @apply h-full w-full m-auto p-4 py-10;
}
.homeDiv {

}
.eachFile {
    @apply my-8 p-4;
    @apply border-l-4 border-green-600;
    @apply bg-white shadow-lg;
}
.homeHeader {
    @apply cursor-pointer max-w-max;
    @apply text-2xl text-gray-800;
}
.homeHeader:hover {
    @apply text-green-600 underline;
}
.homeTime {
    @apply text-sm font-light opacity-50;
}
.homeDescription {
    @apply mt-4
}

.contentDiv {
    @apply bg-white shadow-md w-full h-full break-words;
    @apply p-4;
}
.title {
    @apply text-2xl text-gray-800;
}
.sepLine {
    @apply border-t my-2;
}
</style>