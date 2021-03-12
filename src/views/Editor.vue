<template>
    <div class="onlineEditor" :style="LRPosition">
        <!-- Editor's left hand side -->
        <form class="editor" @submit.prevent.self="saveFile($event)">
            <!-- LHS of LHS -->
            <div class="left">
                <label for="Title">Title</label>
                <input name="Title" class="titleArea" v-model="Title" required/>
                <div class="sepDiv"/>
                <div class="flex gap-4 overflow-x-scroll w-full">
                    <div class="flex-grow flex flex-col">
                        <label for="Time">Time</label>
                        <input type="date" name="Time" class="dateArea" :class="[PublishTime === ''? '': 'text-black']" v-model="PublishTime" required/>
                    </div>
                    <div class="flex-grow flex flex-col">
                        <label for="Author">Author</label>
                        <input name="Author" class="authorArea" v-model="Author" required>
                    </div>
                    <div class="flex flex-col">
                        <label for="Image">Image</label>
                        <i class="far fa-image imageArea" @click="triggerImgFile"><i class="fas fa-check imgChecked" v-show="Image"></i></i>
                        <input type="file" name="Image" ref="img" @change.stop="handleImgUpload()" style="display: none;" accept=".pdf,.jpg,.jpeg,.png">
                    </div>
                </div>
                <div class="sepDiv"/>
                <label for="Subclass">Subclass</label>
                <input name="Subclass" class="subclassArea" v-model="Subclass" required/>
                <div class="sepDiv"/>
                <label for="Description">Description</label>
                <textarea name="Description" class="descriptionArea" v-model="Description" required/>
                <div class="sepDiv"/>
                <label for="Hashtags">
                    <div class="flex justify-between">
                    <div>Hashtags <span class="text-xs">(Max: 5)</span></div>
                        <div class="flex gap-2">
                            <div @click.stop="deleteHashtagDiv"><i class="fas fa-minus-circle addHashtagButton"></i></div>
                            <div @click.stop="addHashtagDiv"><i class="fas fa-plus-circle addHashtagButton"></i></div>
                        </div>
                    </div>
                </label>
                <div class="hashtagsGroup123456789">
                    <input v-for="idx in 5" v-show="idx<=hashCount" :key="idx" v-model="Hashtags[idx]" :name="'Hashtags'+idx" class="hashtagArea"/>
                </div>
                <div class="sepDiv"/>
                <div class="leftButtonDiv">
                    <div class="dropFileDiv items-end">
                        <i class="fas fa-upload uploadIcon"  @click="triggerInputFile"> From Disk</i>
                        <input type="file" accept="application/json" id="file" ref="file" @change.stop="handleFileUpload()" style="display:none;"/>
                    </div>
                    <div class="nextButton items-end" @click.stop="changeNext"> Next </div>
                </div>
            </div>
            <!-- RHS of LHS (default hidden) -->
            <div class="right">
                <label for="Content">Content</label>
                <textarea name="Content" v-model="Content" class="contentArea" required/>
                <div class="sepDiv"/>
                <div class="rightButtonDiv">
                    <div class="nextButton" @click.stop="changeNext"> Previous </div>
                    <button class="button">Save</button>
                </div>
            </div>
        </form>
        <div class="markdownPreview">
            <BlogPage :content="propsToPage"/>
        </div>
    </div>
</template>

<script>
import BlogPage from "@/components/BlogPage.vue"
export default {
    components: {
        // Marked, 
        // Hashtags,
        BlogPage
    },
    data() {
        return  {
            Title: "",
            PublishTime: "",
            Author: "",
            Subclass: "",
            Image: "",
            Description: "",
            Content: "",
            Hashtags: ['', '', '', '', ''],
            nextClick: false,
            hashCount: 1,
        }
    },
    methods: {
        saveFile: function() {
            const data = JSON.stringify({
                Title: this.Title,
                PublishTime: this.PublishTime,
                Author: this.Author,
                Subclass: this.Subclass,
                Description: this.Description,
                Content: this.Content,
                Hashtags: this.Hashtags,
                Image: this.Image,
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
        triggerInputFile: function() {
            this.$refs.file.click();
        },
        triggerImgFile: function() {
            this.$refs.img.click();
        },
        inputFileToJSON: function(file) {
            let fileReader = new FileReader();
            return new Promise((resolve, reject) => {
                fileReader.onerror = () => {
                    fileReader.abort()
                    reject(new DOMException("Problem parsing input file."));
                }
                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
                fileReader.readAsText(file);
            })
        },
        handleFileUpload: async function() {
            let file = this.$refs.file.files[0]
            try {
                let content = await this.inputFileToJSON(file)
                content = JSON.parse(content);
                if (!content.Content || !content.PublishTime || !content.Author || !content.Subclass || !content.Description || !content.Hashtags || !content.Title || !content.Image){
                    alert("Format Incorrect! Please check and try again!")
                    this.$refs.file.value = ""
                    return
                }
                this.Title = content.Title
                this.PublishTime = content.PublishTime
                this.Author = content.Author
                this.Subclass = content.Subclass
                this.Description = content.Description
                this.Content = content.Content
                this.Hashtags = content.Hashtags
                this.Image = content.Image
            } catch(e) {
                alert(e)
                this.$refs.file.value = ""
                return
            }
            this.$refs.file.value = ""
        },
        changeNext: function () {
            this.nextClick = !this.nextClick;
        },
        addHashtagDiv: function() {
            if (this.hashCount == 5) return
            this.hashCount += 1;
        },
        deleteHashtagDiv: function() {
            if (this.hashCount == 1) return
            this.hashCount -= 1;
        },
        inputImgToBase64: function(img) {
            let fileReader = new FileReader();
            return new Promise((resolve, reject) => {
                fileReader.onerror = () => {
                    fileReader.abort()
                    reject(new DOMException("Problem parsing input image."));
                }
                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
                fileReader.readAsDataURL(img);
            })
        },
        handleImgUpload: async function() {
            let img = this.$refs.img.files[0]
            try {
                let content = await this.inputImgToBase64(img)
                // console.log(content)
                this.Image = content;
            } catch(e) {
                alert(e)
                this.$refs.img.value = ""
                return
            }
            this.$refs.img.value = ""
        }
    },
    computed: {
        propsToPage() {
            return  {
                Title: this.Title,
                PublishTime: this.PublishTime,
                Author: this.Author,
                Subclass: this.Subclass,
                Image: this.Image,
                Description: this.Description,
                Content: this.Content,
                Hashtags: this.Hashtags,
            }
        },
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
label {
    @apply font-light mb-1;
}

.titleArea, .authorArea, .subclassArea{
    @apply rounded-md border p-2;
    min-height: 40px;
}
.dateArea {
    @apply rounded-md border text-gray-200 p-2;
    min-height: 40px;
}
.dateArea:focus {
    @apply text-gray-400;
}
.imageArea {
    @apply cursor-pointer text-gray-300 text-center text-3xl m-auto relative;
    height: 40px;
    width: 40px;
}
.imageArea:hover {
    @apply text-gray-400
}
.imgChecked {
    @apply absolute right-0 bottom-0 text-green-600;
    font-size: 2px;
}
.descriptionArea, .hashtagArea {
    @apply rounded-md border p-2 w-full;
    min-height: 40px;
}
.hashtagArea {
    @apply my-1;
}
.contentArea {
    @apply rounded-md border flex-grow p-2;
}

.title {
    @apply text-2xl md:text-3xl text-gray-800;
}
.homeTime {
    @apply text-sm font-light opacity-50;
}
.sepLine {
    @apply border-t my-2;
}
.addHashtagButton {
    @apply text-green-800 text-sm cursor-pointer;
}

.rightButtonDiv, .leftButtonDiv {
    @apply flex justify-between mx-2 overflow-scroll;
}
.leftButtonDiv {
    @apply flex-grow items-end;
}

.uploadIcon {
    @apply cursor-pointer text-gray-400;
}
.uploadIcon:hover {
    @apply text-black;
}
</style>