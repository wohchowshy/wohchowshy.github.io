<template>
  <!-- larger than 768px -->
  <div class="NavTypesetting-large">
    <div v-for="(subNav, nav, idx) in navigations" :key="idx" @click="changePage(nav, '', subNav.length)">
      <div class="NavStyle-large relative" :class="[isNowPage(nowPage, nav, ProxyToList(subNav)) ? 'NavStyle-now' : '']">
        {{ nav }}
        <!-- arrow svg -->
        <svg v-if="subNav.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 inline" >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
        <!-- sub Navigation here (default hidden) -->
        <div v-if="subNav.length" class="absolute subNavStyle">
          <div v-for="(item, idx) in subNav" :key="idx" @click.stop="changePage(nav, item, 0)" class="subNavStyle-text" :class="[nowPage == item ? 'SubNavStyle-now' : '']">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- small than 768px -->
  <div class="NavTypesetting-small">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
    </svg>
    <div class="NavStyle-small">

    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
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
  },
};
</script>
