<template>
  <!-- larger than 768px -->
  <div class="NavTypesetting-large">
    <div v-for="(subNav, nav, idx) in navigations" :key="idx" @click="changePage(nav, '', subNav.length)" >
      <div class="NavStyle-large relative" :class="[isNowPage(nowPage, nav, ProxyToList(subNav)) ? 'NavStyle-now-large' : '']">
        {{ nav }}
        <!-- arrow svg -->
        <svg v-if="subNav.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 inline">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
        <!-- sub Navigation here (default hidden) -->
        <div v-if="subNav.length" class="absolute subNavStyle-large">
          <div v-for="(item, idx) in subNav" :key="idx" @click.stop="changePage(nav, item, 0)" class="subNavStyle-text-large" :class="[nowPage == item ? 'subNavStyle-now-large' : '']">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- small than 768px -->
  <div class="NavTypesetting-small-extra">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10 block" @click.stop="changeNavStatSmall">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
    </svg>
    <div v-if="NavStatSmall" class="NavTypesetting-small">
      <div v-for="(subNav, nav, idx) in navigations" :key="idx" @click="changePage(nav, '', subNav.length)" class="flex">
        <div class="NavStyle-small" :class="[isNowPage(nowPage, nav, ProxyToList(subNav)) ? 'NavStyle-now-small' : '']">
          {{ nav }}
          <!-- arrow svg -->
          <svg v-if="subNav.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 inline">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          <!-- sub Navigation here (default hidden) -->
          <div v-if="subNav.length" class="subNavStyle-small">
            <div v-for="(item, idx) in subNav" :key="idx" @click.stop="changePage(nav, item, 0)" class="subNavStyle-text-small" :class="[nowPage == item ? 'subNavStyle-now-small' : '']">
            {{ item }}
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
      return {
          NavStatSmall: false
      }
  },
  computed: {
    nowPage() {
      return this.$store.state.nowPage;
    },
    navigations() {
      return this.$store.state.navigations;
    },
  },
  methods: {
    isNowPage(nowPage, nav, subNav) {
      if (nowPage == nav || subNav.find((el) => el == nowPage)) {
        return true;
      }
      return false;
    },
    ProxyToList(p) {
      return p.toString().split(",");
    },
    changePage(page, subPage, childsLenght) {
      let oldPage = this.$router.currentRoute._rawValue.fullPath;
      let newPage = "/" + page.toLowerCase();
      if (subPage) {
        newPage += "/" + subPage.toLowerCase();
      }
      if (oldPage == newPage || (subPage == "" && childsLenght != 0)) {
        return;
      }
      this.$router.push(newPage);
    },
    changeNavStatSmall() {
        this.NavStatSmall = !this.NavStatSmall;
    }
  },
  watch: {
      "$store.state.nowPage": function(){
          this.NavStatSmall = false;
      }
  }
};
</script>

<style scoped>
/* Large Style */
.NavTypesetting-large {
  @apply justify-end flex-grow hidden md:flex;
}
.NavStyle-large {
  @apply text-gray-300 mx-2 tracking-wide font-light cursor-pointer transition duration-300 transform hover:text-gray-400 hover:-translate-y-1;
}
.NavStyle-now-large {
  @apply border-b-2 pb-3 text-white font-medium;
}
div.NavStyle-large.relative:hover > div.absolute.subNavStyle-large {
  @apply block;
}
.subNavStyle-large {
  @apply hidden right-0 leading-10 text-gray-300 bg-gray-800 px-4 pt-6 pb-2 min-w-full shadow-md rounded-b-md; /**/
}
.subNavStyle-text-large {
  @apply text-center font-light transform hover:scale-105;
}
.subNavStyle-now-large {
  @apply text-white font-medium;
}


/* Small Style */
.NavTypesetting-small-extra {
  @apply justify-start flex flex-col md:hidden text-gray-300 leading-10 text-sm ml-4;
}
.NavTypesetting-small {
  @apply ml-1 mt-5 relative;
}
/* div.NavTypesetting-small-extra:hover > div.NavTypesetting-small {
  @apply block;
} */
.NavStyle-small {
  @apply text-gray-300 mx-2 w-20 tracking-wide font-light cursor-pointer hover:text-gray-400;
}
.NavStyle-now-small {
  @apply text-white font-medium;
}
div.NavStyle-small:hover div.subNavStyle-small {
  @apply flex;
}
.subNavStyle-small {
  @apply flex text-gray-300 font-light ml-4 hidden;
}
.subNavStyle-text-small {
  @apply cursor-pointer px-3 hover:text-gray-400;
}
.subNavStyle-now-small {
  @apply text-white font-medium;
}

</style>
