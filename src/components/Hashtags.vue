<template>
    <div class="hashtagDiv">
        <div class="hashtag" v-for="item in hashtags" :key="item">{{ item }}</div>
    </div>
</template>

<script>
export default {
    props: {
        hashtags : {
            type: Array
        }
    }
}
</script>

<style scoped>
.hashtagDiv {
    @apply flex flex-wrap items-center;
    /* @apply text-center */
}
.hashtag {
    @apply px-1.5 mx-0.5 my-0.5;
    @apply rounded bg-amber-500 text-xs text-gray-100 font-semibold;
}
</style>