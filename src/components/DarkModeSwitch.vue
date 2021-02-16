<template>
    <div class="darkModeButton-Common" @click="changeDark">
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
</template>

<script>
export default {
    name: "DarkModeSwitch",
    computed: {
        isDark() {
            return this.$store.state.isDark;
        },
    },
    methods: {
        changeDark() {
            this.$store.dispatch("changeDarkMode");
        },
    }
}
</script>

<style scoped>
.darkModeButton-Common {
    @apply order-last mx-2 w-10 h-10 flex justify-center items-center;
}

.darkModeBackground-Common {
    @apply w-full h-full relative transition duration-500;
}

.darkModeBackground {
    @apply transform bg-gray-100;
}

/* Common for light/dark */
.darkModeSwitchBorder-Common {
    @apply rounded-full border-gray-300 border-2 w-10 transition duration-500;
}

.darkModeSwitchBorder {
    @apply transform bg-transparent;
}

/* Common for light/dark */
.darkModeSwitchInner-Common {
    @apply rounded-full w-5 h-5 flex justify-center items-center transition duration-500;
}

.darkModeSwitchInner {
    @apply bg-gray-300 transform hover:bg-white;
}

/* Common for light/dark */
.darkModeSwitchMoon-Common {
    @apply w-4 h-4 transition duration-500;
}

.darkModeSwitchMoon {
    @apply transform text-gray-800;
}


.darkModeBackground-dark {
    @apply transform bg-gray-800;
}

.darkModeSwitchBorder-dark {
    /* @apply bg-green-500 flex justify-between; */
    @apply transform bg-green-500;
}

.darkModeSwitchInner-dark {
    /* @apply bg-white order-last transform hover:bg-gray-300 ; */
    @apply bg-white transform hover:bg-gray-300 translate-x-4;
}

.darkModeSwitchMoon-dark {
    @apply transform text-yellow-500;
}
</style>