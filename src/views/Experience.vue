<template>
  <div class="h-full w-full">
    <div class="h-full w-full">
      <vertical-timeline :info="Info" :timeLength="4" />
    </div>
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline"
import states from "@/assets/data/experience.json"

export default {
  components: {
      VerticalTimeline,
  },
  computed: {
      Info: function(){
          return states.Info
      }
  }
};
</script>
