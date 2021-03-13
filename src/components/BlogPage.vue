<template>
    <div class="BlogPage">
        <div class="title">{{ content.Title }}</div>
        <div class="sepLine" v-show="content.Title"></div>
        <div class="metadata">
            <div class="author" v-show="content.Author"><i class="far fa-user"></i> {{ content.Author }}</div>
            <div class="date" v-show="content.PublishTime"><i class="far fa-clock"></i>{{ content.PublishTime }}</div>
            <div class="subclass" v-show="content.Subclass">
                <i class="far fa-folder"></i>
                <router-link :to="genLink(content.Subclass)" class="classLink">{{ content.Subclass }}</router-link>
            </div>
        </div>
        <div class="image" v-show="content.Image"><img :src="content.Image" alt="oops"/></div>
        <div class="markdown">
            <Marked :content="content.Content"/>
        </div>
        <div class="sepLine" v-show="content.Title"></div>
        <div class="hashtags">
            <i class="fas fa-tags mr-2"></i>
            <div v-for="(tag, idx) in getCleanHashtags" :key="tag+idx" v-show="tag" class="tags">
                <router-link :to="genLink(tag)" class="classLink">{{ tag }}</router-link>
            </div>
            <!-- <Hashtags :hashtags="content.Hashtags"/> -->
        </div>
    </div>
</template>

<script>
import Marked from "@/components/Marked.vue"
// import Hashtags from "@/components/Hashtags.vue"

export default {
    components: {
        Marked,
        // Hashtags
    },
    props: {
        content: Object 
    },
    methods: {
        genLink(link) {
            return '/blog?class='+link;
        }
    },
    computed: {
        getCleanHashtags() {
            let newHashtags = [...this.content.Hashtags]
            while(newHashtags.length !== 0 && newHashtags[newHashtags.length-1] === ""){
                newHashtags.pop()
            }
            return newHashtags
        }
    }
    
}
</script>

<style scoped>
.metadata {
    @apply flex text-gray-400 text-xs mb-4;
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
.classLink:hover {
    @apply underline;
}

.hashtags {
    @apply flex mt-4 text-xs text-center;
}
.tags {
    @apply mx-0.5 text-green-600;
}
.tags:not(:last-child)::after {
    content: ",";
    @apply text-black;
}
</style>