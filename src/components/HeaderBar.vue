<template>
    <div class="flex justify-between py-4 px-2 darkModeBackground-dark">
        <!-- Logo -->
        <div id="Logo" class="">
        </div>
        <!-- dark mode button -->
        <div id="darkButton" class="order-last" @click="changeDark">
            <!-- class in darkmode.css/lightmode.css -->
            <div :class="[isDark? 'darkModeSwitchBorder-dark': 'darkModeSwitchBorder']">
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
        }
    },
    methods: {
        changeDark(){
            this.$store.dispatch('changeDarkMode')
        },
    },
}
</script>