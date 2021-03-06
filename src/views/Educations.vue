<template>
  <div class="adjustSize">
    <div class="education">
      <VerticalTimeline v-for="item in Info" :key="item">
        <template v-slot:card>
          <div class="card cardTextColor cardBgColor">
            <div class="firstRow">
              <div class="img"> <img :src="item.Img" alt="Oops!"/> </div>
              <div class="headerContent">
                <div class="title"> {{ item.Title }} </div>
                <div class="duration"> {{ item.StartTime }} ~ {{ item.EndTime }} </div>
                <div class="department"> {{item.Department}} </div>
                <div class="status"> {{item.Degree}} </div>
              </div>
            </div>
            <div class="horizontalLine"/>
            <div class="secondRow">
              <Marked :content="item.Courses"/>
            </div>
          </div>
        </template>
      </VerticalTimeline>
    </div>
  </div>
</template>

<script>
import VerticalTimeline from "@/components/VerticalTimeline.vue";
import Marked from "@/components/Marked.vue"
import Info from "@/assets/data/education.js";

export default {
  components: {
    VerticalTimeline,
    Marked
  },
  computed: {
    Info() {
      return Info;
    },
    isDark() {
      return this.$store.state.isDark;
    },
  },
};
</script>

<style scoped>
.adjustSize {
  @apply w-full h-full px-4 flex items-center;
}

.education {
  @apply relative;
  @apply flex flex-col justify-center;
  @apply border-blue-gray-400;
  @apply m-auto h-full max-w-screen-lg;
}

.card {
  @apply ml-10 p-4;
  @apply rounded-lg shadow-lg;
  @apply text-xs md:text-sm;
}

.firstRow {
  @apply flex items-center mb-4;
}

.img {
  max-width: 80px;
  @apply mr-4
}
@media (max-width: 767px){
  .img {
    max-width: 60px;
    @apply mr-4;
  }
}

.headerContent {
  @apply flex-1 
}

.title {
  @apply text-sm md:text-base font-semibold;
}

.duration {
  @apply italic
}

.horizontalLine {
  @apply border-t my-2 border-gray-500;
}

.secondRow {
  @apply mt-4;
}
</style>
