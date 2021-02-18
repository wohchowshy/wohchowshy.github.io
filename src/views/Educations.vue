<template>
  <div class="h-full w-full">
    <vertical-timeline :info="Info"/>
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline.vue";
export default {
  components: {
    VerticalTimeline,
  },
  data() {
    return {
      Info: [
        {
          School: "National Tsing Hua University",
          Degree: "Master's student",
          Department: "Department of Computer Science",
          Major: "Major in Natural Language Process",
          StartTime: 2019,
          EndTime: "",
        },
        {
          School: "National Taiwan University",
          Degree: "Bachelor",
          Department: "Department of Computer Science and Information Engineering",
          Major: "Major in Computer Science",
          StartTime: 2015,
          EndTime: 2019,
        },
        {
          School: "National Changhua Senior High School",
          Degree: "Senior High",
          Department: "Normal",
          Major: "Normal",
          StartTime: 2012,
          EndTime: 2015,
        },
      ],
    };
  },
};
</script>
