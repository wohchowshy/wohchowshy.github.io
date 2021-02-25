<template>
    <div class="blog">
        <!-- <div class="pt-40 text-gray-500 text-center text-3xl">
            To Be Published !
        </div> -->
        <Marked :content="content"/>
    </div>
</template>

<script>
import Marked from "@/components/Marked.vue"
import content from "@/assets/data/blog.js"

export default {
  components: {
      Marked,
  },
  computed: {
      content(){
          return content.content
      }
  }
}
</script>

<style scoped>
.blog {
    @apply max-w-sm md:max-w-screen-md lg:max-w-screen-lg;
    @apply h-full m-auto p-4;
}
</style>