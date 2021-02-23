<template>
  <div class="adjustSize">
    <div :class="['education', borderColor]">
      <VerticalTimeline v-for="item in Info" :key="item">
        <template v-slot:card>
          <div :class="['card', textColor]">
            <div class="firstRow">
              <div class="img"> <img :src="item.Img" alt="Oops!"/> </div>
              <div class="headerContent">
                <div class="title"> {{ item.Title }} </div>
                <div class="duration"> {{ item.StartTime }} ~ {{ item.EndTime }} </div>
                <div class="department"> {{item.Department}} </div>
                <div class="status"> {{item.Degree}} </div>
              </div>
            </div>
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
    borderColor() {
      if (this.isDark) {
        return ["borderColor-dark"];
      } else {
        return ["borderColor-light"];
      }
    },
    textColor() {
      if (this.isDark) {
        return ["textColor-dark"];
      } else {
        return ["textColor-light"];
      }
    }
  },
};
</script>

<style scoped>
.adjustSize {
  @apply w-full h-full px-4 flex items-center;
}

.education {
  @apply relative max-w-screen-lg m-auto h-full flex flex-col justify-center;
}

.card {
  @apply ml-10 p-4;
  @apply rounded-lg bg-white bg-opacity-70 shadow-2xl;
  @apply text-xs md:text-sm;
}


.firstRow {
  @apply flex items-center;
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

.secondRow {
  @apply mt-5
}

.courses {
  @apply flex
}


/* Responsive style */
.borderColor-dark {
  @apply transition duration-500 transform border-blue-gray-400;
}
.borderColor-light {
  @apply transition duration-500 transform border-blue-gray-400;
}
.textColor-dark {
  @apply transition duration-500 transform text-gray-800;
}
.textColor-light {
  @apply transition duration-500 transform text-gray-700;
}
</style>
