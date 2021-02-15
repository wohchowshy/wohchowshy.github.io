<template>
  <div class="headerBar responsiveHeaderBar-pbm fixed">
    <!-- Logo -->
    <div id="Logo" class="hidden md:flex">
      <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
    </div>
    <!-- Navi -->
    <navigation/>
    <!-- dark mode button -->
    <div id="darkButton" class="order-last mx-2 self-center md:self-start" @click="changeDark">
      <!-- class in darkmode.css/lightmode.css -->
      <div class="darkModeSwitchBorder-Common" :class="[isDark ? 'darkModeSwitchBorder-dark' : '']">
        <div class="darkModeSwitchInner-Common" :class="[isDark ? 'darkModeSwitchInner-dark' : 'darkModeSwitchInner']">
          <!-- Moon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="[isDark ? 'darkModeSwitchMoon-dark' : 'darkModeSwitchMoon']" class="darkModeSwitchMoon-Common">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
export default {
  components:{
    Navigation,
  },
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
