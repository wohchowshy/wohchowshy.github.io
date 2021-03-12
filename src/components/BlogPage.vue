<template>
    <div class="BlogPage">
        <div class="title">{{ content.Title }}</div>
        <div class="sepLine" v-show="content.Title"></div>
        <div class="metadata">
            <div class="author" v-show="content.Author"><i class="far fa-user"></i> {{ content.Author }}</div>
            <div class="date" v-show="content.PublishTime"><i class="far fa-clock"></i>{{ content.PublishTime }}</div>
            <!-- <div class="subclass" v-show="content.Subclass"><i class="far fa-folder"></i>{{ content.Subclass }}</div> -->
        </div>
        <div class="image" v-show="content.Image"><img :src="content.Image" alt="oops"/></div>
        <div class="markdown">
            <Marked :content="content.Content"/>
        </div>
        <div class="hashtags">
            <Hashtags :hashtags="content.Hashtags"/>
        </div>
    </div>
</template>

<script>
import Marked from "@/components/Marked.vue"
import Hashtags from "@/components/Hashtags.vue"

export default {
    components: {
        Marked,
        Hashtags
    },
    props: {
        content: Object 
    },
    
}
</script>

<style scoped>
.metadata {
    @apply flex text-gray-400 text-xs;
}
.metadata > div {
    @apply my-2 mr-4;
}
.metadata > div > i {
    @apply mr-1;
}

.title {
    @apply text-3xl;
}
.sepLine {
    @apply border-t border-gray-200 mt-4;
}
</style>