<template>
    <div class="onlineEditor" :style="LRPosition">
        <form class="editor" @submit.prevent="saveFile($event)">
            <div class="left">
                <label for="Title">Title</label>
                <input name="Title" class="titleArea" v-model="Title" required/>
                <div class="sepDiv"/>
                <label for="Time">Time</label>
                <input type="date" name="Time" class="dateArea" :class="[Time === ''? '': 'text-black']" v-model="Time" required/>
                <div class="sepDiv"/>
                <label for="Description">Description</label>
                <textarea name="Description" class="descriptionArea" v-model="Description" required/>
                <div class="sepDiv"/>
                <label for="Hashtags">Hashtags</label>
                <textarea name="Hashtags" class="hashtagArea" v-model="Hashtags" required/>
                <div class="sepDiv"/>
                <div class="nextButton justify-self-end" @click.stop="changeNext"> Next </div>
            </div>
            <div class="right">
                <label for="Content">Content</label>
                <textarea name="Content" v-model="Content" class="contentArea" required/>
                <div class="sepDiv"/>
                <div class="flex">
                    <div class="nextButton" @click.stop="changeNext"> Previous </div>
                    <button class="button">Save</button>
                </div>
            </div>
        </form>
        <div class="markdownPreview">
            <div class="title">{{ Title }}</div>
            <div class="homeTime">{{ Time }}</div>
            <div v-if="Title" class="sepLine"/>
            <Hashtags :hashtags="Hashtags"/>
            <Marked :content="Content" />
        </div>
    </div>
</template>

<script>
import Marked from "@/components/Marked.vue"

export default {
    components: {
        Marked, 
    },
    data() {
        return  {
            Title: "",
            Time: "",
            Description: "",
            Content: "",
            Hashtags: [],
            nextClick: false,
        }
    },
    methods: {
        saveFile: function() {
            const data = JSON.stringify({
                Title: this.Title,
                Date: this.Time,
                Description: this.Description,
                Content: this.Content
            })
            const blob = new Blob([data], {type: 'text/plain'})
            const e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = this.Title + ".json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        },
        changeNext: function () {
            this.nextClick = !this.nextClick;
        }
    },
    computed: {
        LRPosition() {
            if (!this.nextClick){
                return {
                    '--leftPosition': "0",
                    '--rightPosition': "100%",
                }
            }else {
                return {
                    '--leftPosition': "-100%",
                    '--rightPosition': "0",
                }
            }
        }
    },
}
</script>

<style scoped>
textarea {
    resize: none;
}
button, .nextButton {
    max-width: 200px;
    margin: auto;
    margin-bottom: 0;
    @apply p-2 font-light text-xl;
    @apply border-t border-b border-white;
    @apply cursor-pointer;
}
button:hover, .nextButton:hover {
    @apply transition duration-500 transform border-black;
    -webkit-tap-highlight-color: transparent;
}

.onlineEditor {
    @apply grid grid-cols-2 gap-4;
    @apply justify-center justify-items-auto items-stretch;
    @apply my-10 mx-4 md:mx-10 h-full;
    @apply overflow-hidden;
}
.onlineEditor > div, form {
    @apply flex-grow;
    @apply bg-white shadow-md p-4;
}
.editor {
    @apply relative overflow-hidden;
    @apply bg-white shadow-md;
    /* @apply h-full overflow-scroll; */
}
.left, .right {
    @apply flex flex-col h-full w-full overflow-scroll;
    @apply absolute;
}
.left {
    @apply top-0 p-4;
    left: var(--leftPosition);
    transition: left 0.3s linear;
}
.right {
    @apply top-0 p-4;
    left: var(--rightPosition);
    transition: left 0.3s linear;
}


.markdownPreview {
    @apply h-full overflow-y-scroll break-words;
}
.sepDiv {
    @apply my-2;
}
.editor > .left > label {
    @apply font-light text-2xl;
    @apply mb-2;
}
.editor > .right > label {
    @apply font-light text-2xl;
    @apply mb-2;
}

.titleArea {
    @apply rounded-md border p-2 text-xl;
}
.dateArea {
    @apply rounded-md border text-gray-200 p-2;
}
.dateArea:focus {
    @apply text-gray-400;
}
.descriptionArea, .hashtagArea {
    @apply rounded-md border p-2;
}
.contentArea {
    @apply rounded-md border flex-grow p-2;
}

.title {
    @apply text-2xl text-gray-800;
}
.homeTime {
    @apply text-sm font-light opacity-50;
}
.sepLine {
    @apply border-t my-2;
}
</style>