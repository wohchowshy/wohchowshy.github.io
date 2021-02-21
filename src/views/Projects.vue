<template>
    <div class="h-full w-full">
        <div class="container relative pl-20 pt-20 max-w-max">
            <div class="Text">test test test test test</div>
            <div class="Emoji absolute flex justify-items-center items-center">
            &#128514;<span class="text-xs ml-1">1</span>
            </div>
        </div>
        <!-- <div class="pt-40 text-gray-500 text-center text-3xl">
            To Be Published !
        </div> -->
    </div>
</template>

<script>

export default {
  components: {
  },

}
</script>

<style scoped>
.Text {
    @apply rounded-xl bg-gray-500 bg-opacity-50 text-center px-4 py-1;
}

.Emoji {
    @apply absolute bg-transparent bg-gray-500 rounded-full px-2 -bottom-5 right-2;
}
</style>