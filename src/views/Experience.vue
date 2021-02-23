<template>
  <div class="experience">
    <!-- <div class="text-center text-xl text-gray-400 mt-10"> Rearrange... </div> -->
    <!-- <Marked :content="Info"/> -->
    <div class="card">
      123
    </div>
  </div>
</template>

<script>
// import Marked from "@/components/Marked.vue"
import Info from "@/assets/data/experience.js"

export default {
  components: {
      // Marked,
  },
  computed: {
      Info: function(){
          return Info
      }
  }
};
</script>

<style scoped>
.experience {
  @apply w-full h-full max-w-screen-lg;
}

.card {
  @apply rounded-lg shadow-xl
}
</style>
