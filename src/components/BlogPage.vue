<template>
    <div class="BlogPage">
        <!-- Title Block -->
        <div v-if="!content.key" class="title">{{ content.Title }}</div>
        <div v-else class="homeTitle" @click="enterPage(content.key)">{{ content.Title }}</div>
        <!-- Sep Line -->
        <div v-if="!content.key" class="sepLine" v-show="content.Title"></div>
        <!-- Metadata -->
        <div :class="{'metadata':true, 'homeMetadata':content.key}">
            <div class="author" v-show="content.Author"><i class="far fa-user"></i> {{ content.Author }}</div>
            <div class="date" v-show="content.PublishTime"><i class="far fa-clock"></i>{{ getPublishTime }}</div>
            <div class="subclass" v-show="content.Subclass">
                <i class="far fa-folder"></i>
                <router-link :to="'/blog'" class="classLink">Blog </router-link>
                /
                <router-link :to="genLink(content.Subclass, 'class')" class="classLink">{{ content.Subclass }}</router-link>
            </div>
        </div>
        <!-- Image Block -->
        <div v-if="!content.key" class="image" v-show="content.Image"><img :src="content.Image" alt="oops"/></div>
        <!-- Markdown / Description -->
        <div v-if="!content.key" class="markdown">
            <Marked :content="content.Content"/>
        </div>
        <div v-else class="homeDescription">{{ content.Description }}</div>
        <!-- Sep Line -->
        <div v-if="!content.key" class="sepLine" v-show="content.Title"></div>
        <!-- Hashtags -->
        <div class="hashtags">
            <i v-show="getCleanHashtags.length" class="fas fa-tags mr-2 my-auto"></i>
            <div v-for="(tag, idx) in getCleanHashtags" :key="tag+idx" v-show="tag" class="tags">
                <router-link :to="genLink(tag, 'tag')" class="classLink">{{ tag }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Marked from "@/components/Marked.vue"

export default {
    components: {
        Marked,
    },
    props: {
        content: Object 
    },
    methods: {
        genLink(link, key) {
            return '/blog?'+key+'='+link;
        },
        enterPage(page) {
          this.$router.push("/blog/"+page);
        },
    },
    computed: {
        getCleanHashtags() {
            let newHashtags = [...this.content.Hashtags]
            while(newHashtags.length !== 0 && newHashtags[newHashtags.length-1] === ""){
                newHashtags.pop()
            }
            return [...newHashtags]
        },
        getPublishTime() {
            return new Date(this.content.PublishTime).toLocaleString()
        }
    }
    
}
</script>

<style scoped>
.metadata {
    @apply flex text-gray-400 text-xs mb-4;
}
.homeMetadata {
    @apply mt-2;
}
.metadata > div {
    @apply my-2 mr-4;
}
.metadata > div > i {
    @apply mr-1;
}

.title {
    @apply text-3xl text-gray-700;
}
.homeTitle {
    @apply text-2xl text-green-700 max-w-max cursor-pointer;
}
.homeTitle:hover {
    @apply duration-500 text-green-500;
}
.sepLine {
    @apply border-t border-gray-200 mt-4;
}
.classLink:hover {
    @apply underline;
}
.homeDescription {
    @apply text-sm md:text-base;
}
.hashtags {
    @apply flex flex-wrap mt-4 text-xs;
}
.tags {
    @apply mx-0.5 text-green-600;
}
.tags:not(:last-child)::after {
    content: ",";
    @apply text-black;
}
</style>