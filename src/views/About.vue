<template>
  <div class="h-full w-full">
    <header-bar></header-bar>
    <intro-card></intro-card>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue"
import IntroCard from "@/components/IntroCard.vue"

export default {
  components: {
    HeaderBar, IntroCard
  },

}
</script>