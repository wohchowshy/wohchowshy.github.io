<template>
  <!-- larger than 768px -->
  <div class="NavTypesetting-large">
    <div class="flex">
      <div v-for="nav in navigations" :key="nav" @click="changePage(nav)" >
        <div :class="[nowPage == nav ? 'NavStyle-now-large':'NavStyle-notNow-large', 'NavStyle-large']">
          {{ nav }}
        </div>
      </div>
    </div>
    <contact-icon class="contactIcon"/>
  </div>

  <!-- small than 768px -->
  <div class="NavTypesetting-small-extra">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 block" @click.stop="changeNavStatSmall('')">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
    </svg>
    <transition name="scale">
      <div v-if="showNav" class="NavTypesetting-small">
        <div v-for="nav in navigations" :key="nav">
          <div @click="changePage(nav)" :class="[nowPage == nav ? 'NavStyle-now-small':'NavStyle-notNow-small', 'NavStyle-small']">
            {{ nav }}
          </div>
        </div>
        <contact-icon class="justify-start m-2" @click.stop="changeNavStatSmall(true)"/>
      </div>
    </transition>
  </div>
</template>

<script>
import ContactIcon from "@/components/ContactIcon.vue"
export default {
  name: "Navigation",
  components:{
    ContactIcon,
  },
  computed: {
    nowPage() {
      return this.$store.state.nowPage;
    },
    navigations() {
      return this.$store.state.navigations;
    },
    showNav() {
      return this.$store.state.showNavSmall;
    },
  },
  methods: {
    changePage(page) {
      let oldPage = this.$router.currentRoute._rawValue.fullPath;
      let newPage = "/" + page.toLowerCase();
      if (oldPage == newPage) return;
      this.$router.push(newPage);
    },
    changeNavStatSmall(status) {
      this.$store.dispatch("ChangeNavSmall", status)
    }
  },
  watch: {
    "$store.state.nowPage": function(){
      this.$store.dispatch("ChangeNavSmall", false)
    },
  }
};
</script>

<style scoped>
/* Large Style */
.NavTypesetting-large {
  @apply justify-between flex-grow hidden md:flex items-center;
  @apply mx-5;
}
.NavStyle-large {
  @apply relative font-light text-gray-300;
  @apply px-2 py-4;
}
.NavStyle-now-large {
  @apply border-b-2 pb-3;
  @apply font-medium cursor-default;
  @apply transition duration-500 transform text-white border-white;
}
.NavStyle-notNow-large {
  @apply cursor-pointer;
  @apply transition duration-300 transform hover:text-gray-400;
  /* @apply transition duration-300 transform hover:text-gray-400 hover:-translate-y-1; */
}


/* Small Style */
.NavTypesetting-small-extra {
  @apply justify-start flex flex-col md:hidden;
  @apply text-gray-300 leading-10 text-sm mx-2;
}
.NavTypesetting-small {
  @apply relative overflow-hidden;
  @apply ml-1 mt-5;
}
.NavStyle-small {
  -webkit-tap-highlight-color: transparent;
  @apply flex text-gray-300 mx-2 w-20 tracking-wide font-light;
}
.NavStyle-now-small {
  @apply text-white font-medium cursor-default;
}
.NavStyle-notNow-small {
  @apply cursor-pointer hover:text-gray-400;
}

.contactIcon {
  @apply justify-center h-full text-gray-300;
}

.scale-enter-active {
  animation: bounce-in .8s;
}
.scale-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    /* transform: translateY(-30%) scaleY(0.8); */
    max-height: 0;
    overflow: hidden;
  }
  100% {
    /* transform: translateY(0) scaleY(1); */
    max-height: 300px;
  }
}


</style>
