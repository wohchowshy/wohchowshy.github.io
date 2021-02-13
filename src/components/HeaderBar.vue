<template>
    <div class="headerBar darkModeBackground-dark fixed">
        <!-- Logo -->
        <div id="Logo" class="">
            <!-- {{this.$router.currentRoute._rawValue.fullPath}} -->
        </div>
        <!-- About -->
        <div class="flex justify-end flex-grow">
            <div v-for="(navigation, idx) in navigations" :key="idx" @click="changePage(navigation)">
                <div class="headerBarNavStyle" :class="[nowPage == navigation? 'headerBarNavStyle-now':'headerBarNavStyle-notNow']">
                    {{ navigation }}
                </div>
            </div>
        </div>
        <!-- dark mode button -->
        <div id="darkButton" class="order-last mx-2" @click="changeDark">
            <!-- class in darkmode.css/lightmode.css -->
            <div :class="[isDark? 'darkModeSwitchBorder-dark': 'darkModeSwitchBorder']">
                <div></div>
                <div :class="[isDark? 'darkModeSwitchInner-dark': 'darkModeSwitchInner']">
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
        isDark(){
            return this.$store.state.isDark;
        },
        nowPage(){
            return this.$store.state.nowPage
        },
        navigations(){
            return this.$store.state.navigations
        }
    },
    methods: {
        changeDark(){
            this.$store.dispatch('changeDarkMode')
        },
        changePage(page){
            let oldPage = this.$router.currentRoute._rawValue.fullPath
            let newPage = '/'+page.toLowerCase()
            if (oldPage == newPage){ return; }
            this.$router.push(newPage)
        }
    },
    mounted() {
        this.$store.dispatch('changePage', this.$router.currentRoute._rawValue.fullPath.split('/')[1])
    },
}
</script>