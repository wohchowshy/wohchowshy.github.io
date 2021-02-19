<template>
  <div class="h-full w-full">
    <vertical-timeline :info="Info" :timeLength="4"/>
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
          Title: "National Tsing Hua University",
          Status: "Master's student",
          Department: "Department of Computer Science",
          Major: "Major in Natural Language Process",
          StartTime: "2019",
          EndTime: "",
        },
        {
          Title: "National Taiwan University",
          Status: "Bachelor",
          Department: "Department of Computer Science and Information Engineering",
          Major: "Major in Computer Science",
          StartTime: "2015",
          EndTime: "2019",
        },
        {
          Title: "National Changhua Senior High School",
          Status: "Senior High",
          Department: "Normal",
          Major: "Normal",
          StartTime: "2012",
          EndTime: "2015",
        },
      ],
    };
  },
};
</script>
