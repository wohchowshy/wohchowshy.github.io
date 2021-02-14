<template>
  <div class="headerBar darkModeBackground-dark fixed">
    <!-- Logo -->
    <div id="Logo" class="">
      <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
    </div>
    <!-- Navi -->
    <!-- > 768px -->
    <div class="md:flex justify-end flex-grow hidden">
      <div
        v-for="(navigation, idx) in navigations"
        :key="idx"
        @click="changePage(navigation)"
      >
        <div
          class="headerBarNavStyle"
          :class="[
            nowPage == navigation ? 'headerBarNavStyle-now' : 'headerBarNavStyle-notNow',
          ]"
        >
          {{ navigation }}
        </div>
      </div>
    </div>
    <!-- small than 768px -->
    <div class="flex justify-end flex-grow md:hidden text-gray-300 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <!-- dark mode button -->
    <div id="darkButton" class="order-last mx-2 sm:self-center md:self-start" @click="changeDark">
      <!-- class in darkmode.css/lightmode.css -->
      <div :class="[isDark ? 'darkModeSwitchBorder-dark' : 'darkModeSwitchBorder']">
        <div></div>
        <div :class="[isDark ? 'darkModeSwitchInner-dark' : 'darkModeSwitchInner']"></div>
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
    changeDark() {
      this.$store.dispatch("changeDarkMode");
    },
    changePage(page) {
      let oldPage = this.$router.currentRoute._rawValue.fullPath;
      let newPage = "/" + page.toLowerCase();
      if (oldPage == newPage) {
        return;
      }
      this.$router.push(newPage);
    },
  },
  mounted() {
    this.$store.dispatch(
      "changePage",
      this.$router.currentRoute._rawValue.fullPath.split("/")[1]
    );
  },
};
</script>
