<template>
    <div class="h-full max-w-screen-xl m-auto p-10">
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