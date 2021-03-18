<template>
    <div class="blogDiv HeaderMargin">
        <div v-if="hasContent" class="blog">
            <div v-if="isHome" class="homeDiv">
                <div v-for="item in getFolder" :key="item" class="eachFile">
                    <BlogPage :content="getHomeContent(item)"/>
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
      getHomeContent(item) {
          return  {
            key: item.Title,
            Title: item.Title,
            PublishTime: item.PublishTime,
            Author: item.Author,
            Subclass: item.Subclass,
            Image: item.Image,
            Description: item.Description,
            Content: item.Content,
            Hashtags: item.Hashtags,
          }
      },
      compare(a, b){
        if(a.PublishTime > b.PublishTime) return -1
        if(a.PublishTime < b.PublishTime) return 1
        return 0
      }
  },
  computed: {
      isHome() {
          return this.$route.params.file === ''? true:false;
      },
      hasContent(){
          return Object.keys(folder).length == 0 ? false:true;
      },
      getFolder(){
          let items = Object.values(folder)
          let query = this.$route.query
          // Filter if `query`
          if(query.class){
              items = items.filter((item) => {
                  return query.class == item.Subclass
              })
          }else if(query.tag){
              items = items.filter((item) => {
                  return item.Hashtags.includes(query.tag)
              })
          }
          //  Sort By Date
          items.sort(this.compare)
          return items;
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
.blogDiv {
    @apply w-full h-full overflow-scroll;
}
.blog {
    @apply max-w-screen-md lg:max-w-screen-lg;
    @apply m-auto md:px-4;
}
.eachFile {
    @apply my-8 py-4 px-8;
    @apply border-l-4 border-green-600;
    @apply bg-white shadow-lg;
}
.homeDiv {
    @apply px-2;
}

.contentDiv {
    @apply bg-white shadow-md w-full break-words;
    @apply p-8;
}
</style>