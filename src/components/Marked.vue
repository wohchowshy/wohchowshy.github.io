<template>
  <div v-html="compileMarkdown"></div>
</template>

<script>
import marked from "marked";

var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});
export default {
    name: "Marked",
    data(){ 
        return {
            input: "# Hello, World"
        }
    },
    computed: {
        compileMarkdown: function(){
            return marked(this.input, )
        }
    }
};
</script>
