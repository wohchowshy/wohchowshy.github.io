<template>
  <div
    :style="userStyle"
    class="verticalTimeline"
    :class="[isDark ? 'textDarkMode' : 'textLightMode']"
  >
    <ul class="outerBorder">
      <li class="eachBlock" v-for="item in info" :key="item">
        <div class="blockDiv">
          <span class="realLine"></span>
          <div class="flex justify-between items-start">
            <div class="school">{{ item.School }}</div>
            <div class="degree">{{ item.Degree }}</div>
          </div>
          <div class="otherContent">
            <div class="department">{{ item.Department }}</div>
            <div class="major">{{ item.Major }}</div>
          </div>
        </div>
        <span class="contentNumber">
          <span class="startTime">{{ item.EndTime }}</span>
          <span class="endTime">{{ item.StartTime }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
    },
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    userStyle() {
      if (this.isDark) {
        return {
          "--space": "80px",
          "--dotSize": "16px",
          "--realLineColor": "white",
        };
      }
      return {
        "--space": "80px",
        "--dotSize": "16px",
        "--realLineColor": "#6B7280",
      };
    },
  },
};
</script>

<style scoped>
.verticalTimeline {
  @apply relative flex justify-center items-center;
  @apply max-w-screen-lg h-full m-auto px-5;
}

.outerBorder {
  @apply m-auto list-none relative pl-16 pr-4 py-1 max-w-max;
  
}
.outerBorder::before {
  content: "";
  border-color: var(--realLineColor);
  transition: border-color 0.5s;
  @apply border-l-2 border-dashed h-full w-1 absolute;
}

/* if adjust margin-left, must adjust "left" in .realLine */
.eachBlock {
  margin-left: var(--space);
  @apply relative bg-blue-300 bg-opacity-20 p-4 rounded-lg shadow-lg ;
}

.eachBlock:not(:first-child) {
  @apply mt-16;
}

/* if adjust left, must adjust "margin-left" in .eachBlock */
.realLine {
  width: 2px;
  left: calc(-1 * var(--space));
  background-color: var(--realLineColor);
  transition: background-color 0.5s;
  @apply h-full top-0 absolute;
}
.realLine::before,
.realLine::after {
  content: "";
  width: var(--dotSize);
  height: var(--dotSize);
  left: calc(-0.5 * var(--dotSize));
  top: calc(-0.5 * var(--dotSize));
  border-color: var(--realLineColor);
  transition: border-color 0.5s;
  @apply rounded-full border-2 absolute bg-blue-200;
}

.realLine:after {
  @apply top-full;
}

.blockDiv {
  @apply leading-normal w-full;
}

.contentNumber {
  @apply h-full;
}

.contentNumber > span {
  left: calc(-1 * var(--space) - 60px);
  @apply absolute text-sm font-bold;
}

.startTime {
  @apply top-0;
}

.endTime {
  top: calc(100% - 10px);
}

.school {
    @apply text-base md:text-lg font-semibold mr-3;
}

.degree {
    @apply text-xs;
}

.otherContent {
    @apply mt-5 font-light text-sm md:text-base;
}

.department {
}

.major {
}

.startTime {
}

.endTime {
}

/* RWD */
@media (max-width: 768px) {
  .eachBlock {
    margin-left: calc(0.3 * var(--space));
  }
  .realLine {
    left: calc(-1 * 0.3 * var(--space));
  }
  .realLine:before,
  .realLine:after {
    content: "";
    left: calc(-0.5 * var(--dotSize));
    top: calc(-0.5 * var(--dotSize));
  }
  .realLine:after {
    @apply top-full;
  }
  .contentNumber > span {
    left: calc(-1 * var(--space));
  }
}
</style>
