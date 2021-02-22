<template>
  <div class="h-full w-full">
    <vertical-timeline :info="Info" :timeLength="4" />
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline"
import Info from "@/assets/data/experience.js"

export default {
  components: {
      VerticalTimeline,
  },
  computed: {
      Info: function(){
          return Info
      }
  }
};
</script>
