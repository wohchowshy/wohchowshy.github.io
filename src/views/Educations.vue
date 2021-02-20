<template>
  <div class="h-full w-full">
    <vertical-timeline :info="Info" :timeLength="4"/>
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline.vue";
import states from "@/assets/data/education.json"

export default {
  components: {
    VerticalTimeline,
  },
  computed: {
    Info() {
      return states.Info
    }
  }
};
</script>
