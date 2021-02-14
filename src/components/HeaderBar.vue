<template>
  <div class="headerBar fixed">
    <!-- Logo -->
    <div id="Logo" class="">
      <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
    </div>
    <!-- Navi -->
    <!-- Larger than 768px (md) -->
    <div class="md:flex justify-end flex-grow hidden">
      <div v-for="(subNav, nav, idx) in navigations" :key="idx" @click="changePage(nav, '', subNav.length)">
        <div class="headerBarNavStyle relative" :class="[isNowPage(nowPage, nav, ProxyToList(subNav)) ? 'headerBarNavStyle-now' : 'headerBarNavStyle-notNow',]" >
          {{ nav }}
          <svg v-if="subNav.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 inline">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          <div v-if="subNav.length" class="absolute subNavStyle">
            <div v-for="(item, idx) in subNav" :key="idx" @click.stop="changePage(nav, item, 0)" class="subNavStyle-text" :class="[nowPage == item ? 'SubNavStyle-now' : '',]">
                {{ item }}
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <!-- small than 768px -->
    <div class="flex justify-end flex-grow md:hidden text-gray-300 mr-4 relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
      <div class="absolute top-0 right-0">
      </div>
    </div>
    <!-- dark mode button -->
    <div id="darkButton" class="order-last mx-2 self-center md:self-start" @click="changeDark">
      <!-- class in darkmode.css/lightmode.css -->
      <div class="darkModeSwitchBorder-Common" :class="[isDark ? 'darkModeSwitchBorder-dark' : '']">
        <div></div>
        <div class="darkModeSwitchInner-Common" :class="[isDark ? 'darkModeSwitchInner-dark' : 'darkModeSwitchInner']">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="[isDark ? 'darkModeSwitchMoon-dark' : 'darkModeSwitchMoon']" class="darkModeSwitchMoon-Common">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
    };
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    nowPage() {
      return this.$store.state.nowPage;
    },
    navigations() {
      return this.$store.state.navigations;
    },
  },
  methods: {
    isNowPage(nowPage, nav, subNav){
        if(nowPage == nav || subNav.find(el => el == nowPage)){
            return true
        }
        return false
    },
    ProxyToList(p){
        return p.toString().split(',');
    },
    changeDark() {
      this.$store.dispatch("changeDarkMode");
    },
    changePage(page, subPage, childsLenght) {
      let oldPage = this.$router.currentRoute._rawValue.fullPath;
      let newPage = "/" + page.toLowerCase();
      if (subPage){
          newPage += "/" + subPage.toLowerCase();
      }
      if ((oldPage == newPage) || (subPage == '' && childsLenght != 0)) {
        return;
      }
      this.$router.push(newPage);
    },
  },
  watch: {
    $route: {
        handler: function(){
            this.$store.dispatch(
             "changePage",
              this.$router.currentRoute._rawValue.fullPath.split("/").pop()
            )
        }, 
        immediate: true,
    }
  },
};
</script>
