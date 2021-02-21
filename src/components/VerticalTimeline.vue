<template>
  <div :style="userStyle" class="verticalTimeline" :class="[isDark ? 'textDarkMode' : 'textLightMode']">
    <ul class="outerBorder">
      <li class="eachBlock" v-for="item in info" :key="item">
        <div v-if="item.Img" class="backgroundImg">
          <img :src="item.Img" alt="Oops, picture flies out.." class="optionImg">
        </div>
        <div class="blockDiv">
          <span class="realLine"></span>
          <div class="flex justify-between items-start">
            <div class="title textCommon">{{ item.Title }}</div>
            <div class="status textCommon">{{ item.Status }}</div>
          </div>
          <div class="otherContent">
            <div v-for="(content, key) in filterContent(item)" :key="content" :class="key" class="mt-2">
              <pre v-if="key.includes('nowrap')" class="textCommon">{{ content }}</pre>
              <pre v-else class="textWrap">{{ content }}</pre>
            </div>
          </div>
        </div>
        <div v-if="item.Links" class="showLinks">
          <div v-for="(link, key) in item.Links" :key="key" class="eachLink">
            <a :href="link" target="_blank" >{{ key }}</a>
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
    timeLength: {
      type: Number, 
    }
  },
  methods: {
    filterContent(item) {
      let content = Object()
      for (let key in item) {
        if (key == 'Title' || key == 'Status' || key == 'EndTime' || key == 'StartTime' || key == 'Img' || key == 'Links') {
          continue
        } else {
          content[key] = item[key];
        }
      }
      return content
    },
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    userStyle() {
      if (this.isDark) {
        return {
          "--space": "60px",
          "--dotSize": "16px",
          "--timeLength" : this.timeLength,
          "--realLineColor": "white",
        };
      }
      return {
        "--space": "60px",
        "--dotSize": "16px",
        "--timeLength" : this.timeLength,
        "--realLineColor": "#6B7280",
      };
    },
  },
};
</script>

<style scoped>
.verticalTimeline {
  @apply relative flex justify-center items-center;
  @apply max-w-screen-sm h-full m-auto px-2 py-10;
}

.outerBorder {
  padding-left: calc(8px * var(--timeLength) + 12px);
  @apply m-auto list-none relative pr-6 py-1 max-w-full;
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
  @apply relative bg-blue-300 bg-opacity-20 rounded-lg shadow-lg ;
  /* @apply relative bg-blue-300 bg-opacity-20 p-4 rounded-lg shadow-lg ; */
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

.backgroundImg {
  @apply opacity-70 px-4 pb-2 pt-4;
}

.optionImg {
  max-width: 300px;
  filter: drop-shadow(0 0 16px white);
  @apply m-auto h-auto w-full object-cover rounded;
}

.blockDiv {
  @apply leading-normal w-full px-4 pb-4 pt-4 ;
}

.contentNumber {
  @apply h-full;
}

.contentNumber > span {
  left: calc(-1 * var(--space) - (10px * var(--timeLength)));
  @apply absolute text-xs font-bold;
}

.startTime {
  @apply top-0;
}

.endTime {
  top: calc(100% - 10px);
}

/* customized text css*/
.title {
    @apply text-sm md:text-lg font-semibold mr-1 md:mr-4;
}

.status {
    @apply text-xs text-right opacity-50 ml-1 md:ml-4 min-w-max;
}

.otherContent{
    @apply mt-5 font-light text-xs md:text-sm;
}

.textCommon {
  @apply overflow-x-auto;
}

.showLinks {
  @apply p-4 border-t border-gray-400 border-opacity-30 text-center;
}

.eachLink {
  @apply cursor-pointer font-bold transition duration-300 transform hover:scale-110;
}

/* RWD */
@media (max-width: 767px) {
  .eachBlock {
    margin-left: calc(0.5 * var(--space));
  }
  .realLine {
    left: calc(-1 * 0.5 * var(--space));
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
    left: calc( -1 * 0.5 * var(--space) - (10px * var(--timeLength)) );
  }
}


.textWrap {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap !important; /* Mozilla, since 1999*/
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

</style>
