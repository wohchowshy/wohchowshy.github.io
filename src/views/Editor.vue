<template>
    <div class="onlineEditor HeaderMargin" :style="LRPosition">
        <!-- Editor's left hand side -->
        <form class="editor" @submit.prevent="saveFile($event)">
            <!-- LHS of LHS -->
            <div class="left">
                <label for="Title">Title</label>
                <input name="Title" class="titleArea" v-model="Title" required/>
                <div class="sepDiv"/>
                <!-- <label for="Time">Time</label>
                <input type="date" name="Time" class="dateArea" :class="[PublishTime === ''? '': 'text-black']" v-model="PublishTime" required/>
                <div class="sepDiv"/> -->
                <label for="Author">Author</label>
                <input name="Author" class="authorArea" v-model="Author" required>
                <div class="sepDiv"/>
                <label for="Image">Image</label>
                <div class="imageDiv" @click.stop="triggerImgFile">
                    <i class="fas fa-upload imgUploadIcon" v-show="!Image">
                        <span class="text-sm" > Click to upload</span>
                    </i>
                    <i class="far fa-thumbs-up imgUploadIcon" v-show="Image">
                    </i>
                    <input type="file" name="Image" ref="img" @change.stop="handleImgUpload()" style="display: none;" accept=".pdf,.jpg,.jpeg,.png">
                </div>
                <div class="sepDiv"/>
                <label for="Subclass">Subclass</label>
                <input name="Subclass" class="subclassArea" v-model="Subclass" required/>
                <div class="sepDiv"/>
                <label for="Description">Description</label>
                <textarea name="Description" class="descriptionArea" v-model="Description" required/>
                <div class="sepDiv"/>
                <label for="hashtagsGroup">Hashtags <span class="text-xs">(Max: 10)</span></label>
                <div class="hashtagsGroup" name="hashtagsGroup">
                    <input v-for="idx in Hashtags.length" :key="idx" v-model="Hashtags[idx-1]" class="hashtagArea"/>
                </div>
                <div class="sepDiv"/>
                <div class="leftButtonDiv">
                    <div class="dropFileDiv items-end">
                        <i class="fas fa-upload uploadIcon"  @click.stop="triggerInputFile"> From Disk</i>
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
                    <button class="buttonDiv">Save</button>
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
            Hashtags: ['', '', '', '', '', '', '', '', '', ''],
            nextClick: false,
        }
    },
    methods: {
        saveFile: function() {
            let yesOrNo = confirm('存檔後，要一併清除 Editor 上的內容嗎？')
            // console.log(yesOrNo)
            let data = JSON.stringify({
                Title: this.Title,
                PublishTime: this.PublishTime,
                Author: this.Author,
                Subclass: this.Subclass,
                Description: this.Description,
                Content: this.Content,
                Hashtags: this.Hashtags,
                Image: this.Image,
            })
            let blob = new Blob([data], {type: 'text/plain'})
            let e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = this.Title + ".json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            // Clear localStorage cache if user want
            if (yesOrNo){
                this.$store.dispatch("SetBlogContent", {
                    Title: "",
                    PublishTime: null,
                    Author: "",
                    Subclass: "",
                    Image: "",
                    Description: "",
                    Content: "",
                    Hashtags: ['', '', '', '', '', '', '', '', '', ''],
                })
                this.refreshContent()
            }
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
        },
        refreshContent() {
            let blogContents = this.$store.state.blogContents
            this.Title = blogContents.Title
            this.PublishTime = blogContents.PublishTime
            this.Author = blogContents.Author
            this.Subclass = blogContents.Subclass
            this.Image = blogContents.Image
            this.Description = blogContents.Description
            this.Content = blogContents.Content
            this.Hashtags = blogContents.Hashtags
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
        },
        
    },
    watch: {
        Title() {
            this.$store.dispatch("SetBlogContent", {"Title": this.Title})
        },
        PublishTime() {
            this.$store.dispatch("SetBlogContent", {"PublishTime": this.PublishTime})
        },
        Author() {
            this.$store.dispatch("SetBlogContent", {"Author": this.Author})
        },
        Subclass() {
            this.$store.dispatch("SetBlogContent", {"Subclass": this.Subclass})
        },
        Image() {
            this.$store.dispatch("SetBlogContent", {"Image": this.Image})
        },
        Description() {
            this.$store.dispatch("SetBlogContent", {"Description": this.Description})
        },
        Content() {
            this.$store.dispatch("SetBlogContent", {"Content": this.Content})
        },
        Hashtags: {
            handler: function() {
                this.$store.dispatch("SetBlogContent", {"Hashtags": this.Hashtags})
            },
            deep: true, 
        }
    },
    mounted() {
        this.refreshContent()
        this.PublishTime = Date.now()
        // this.PublishTime = new Date().toLocaleString()
    }
}
</script>

<style scoped>
textarea {
    resize: none;
}
input, textarea {
    @apply text-sm;
}
.buttonDiv, .nextButton {
    max-width: 200px;
    @apply p-2 font-light text-base font-extralight;
    @apply text-green-600;
    @apply cursor-pointer;
}
.buttonDiv:hover, .nextButton:hover {
    @apply transition duration-300 transform underline;
    -webkit-tap-highlight-color: transparent;
}

.onlineEditor {
    @apply grid grid-cols-2;
    @apply justify-center justify-items-auto items-stretch;
    @apply h-screen;
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
    @apply my-1.5;
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
.imageDiv {
    @apply flex flex-col;
    @apply cursor-pointer rounded-md border border-dashed text-gray-200 p-2 ;
}
.imgUploadIcon {
    @apply text-gray-300 text-xl m-auto relative;
}
.imageDiv:hover > .imgUploadIcon {
    @apply text-gray-400
}
.imgUploadChecked {
    @apply absolute right-0 bottom-0 text-green-600;
    font-size: 2px;
}
.descriptionArea {
    @apply rounded-md border p-2 w-full;
    min-height: 40px;
}
.hashtagArea {
    @apply rounded-md border w-full;
    @apply my-0.5 px-1 py-0.5;
    font-size: 5px;
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
    @apply flex-shrink items-center;
    min-height: 2rem;
}

.uploadIcon {
    @apply cursor-pointer text-gray-400 text-xs;
}
.uploadIcon:hover {
    @apply text-black;
}

.hashtagsGroup {
    @apply flex-grow overflow-y-scroll;
    min-height: 9rem;
}
</style>