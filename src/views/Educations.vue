<template>
  <div class="h-full w-full">
    <vertical-timeline :info="Info" :timeLength="4"/>
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline.vue";
import Info from "@/assets/data/education.js"

export default {
  components: {
    VerticalTimeline,
  },
  computed: {
    Info() {
      return Info
    }
  }
};
</script>
