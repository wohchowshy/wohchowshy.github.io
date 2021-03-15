<template>
    <div class="bigDiv">
    <div v-if="hasContent" class="blog">
        <div v-if="isHome" class="homeDiv">
            <div v-for="(item, key) in folder" :key="item" class="eachFile">
                <BlogPage :content="getHomeContent(item, key)"/>
            </div>
        </div>
        <div v-else class="contentDiv">
            <BlogPage :content="getContent"/>
        </div>
    </div>
    <div v-else class="text-center text-3xl text-light p-10">To Be Published ASAP! </div>
    </div>
</template>

<script>
import BlogPage from "@/components/BlogPage.vue"
import folder from "@/assets/blog/index.js"

export default {
  components: {
    BlogPage
  },
  methods: {
      getHomeContent(item, key) {
          return  {
            key: key,
            Title: item.Title,
            PublishTime: item.PublishTime,
            Author: item.Author,
            Subclass: item.Subclass,
            Image: item.Image,
            Description: item.Description,
            Content: item.Content,
            Hashtags: item.Hashtags,
          }
      }
  },
  computed: {
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
      getContent() {
          let file = folder[this.$route.params.file]
          return  {
            Title: file.Title,
            PublishTime: file.PublishTime,
            Author: file.Author,
            Subclass: file.Subclass,
            Image: file.Image,
            Description: file.Description,
            Content: file.Content,
            Hashtags: file.Hashtags,
          }
      }

  }
}
</script>

<style scoped>
.bigDiv {
    @apply w-full h-full overflow-scroll;
}
.blog {
    @apply max-w-screen-md lg:max-w-screen-lg;
    @apply m-auto px-4;
}
.eachFile {
    @apply my-8 py-4 px-8;
    @apply border-l-4 border-green-600;
    @apply bg-white shadow-lg;
}

.contentDiv {
    @apply bg-white shadow-md w-full break-words;
    @apply p-10;
}
</style>