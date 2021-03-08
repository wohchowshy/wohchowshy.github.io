<template>
  <div class="markdown-body" v-html="markedContent"></div>
</template>

<script>
const marked = require("marked");
import hljs from "highlight.js";
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default {
  props: ["content"],
  computed: {
    markedContent() {
      let content = marked(this.content);
      let doc = new DOMParser().parseFromString(content, "text/html");
      let codes = doc.querySelectorAll('pre > code')
      for(let idx = 0; idx < codes.length; idx++){
        let lang = doc.createElement('div')
        let langString = 'plaintext'
        if(codes[idx].attributes['class'] != null){
          langString = codes[idx].attributes['class'].value.split('-')
          langString = langString[langString.length - 1]
        }
        langString = hljs.getLanguage(langString) ? langString : "plaintext";
        lang.innerText = langString
        lang.className += "text-xs text-gray-400 absolute right-4 bottom-1"
        codes[idx].parentNode.insertAdjacentElement('beforeend', lang)
        let wrapper = doc.createElement('div')
        codes[idx].parentNode.replaceChild(wrapper, codes[idx])
        wrapper.appendChild(codes[idx])
        wrapper.className += 'relative overflow-scroll'
      }
      return doc.body.outerHTML;
    }
  },
};
</script>

<style lang="scss">
// customized css style
.markdown-body {
  pre{
    // background-color: rgb(247, 246, 243);
    @apply bg-gray-800;
    @apply text-white;
    @apply rounded-md p-4 max-h-96 relative overflow-scroll;
  }
  a:link {
    @apply no-underline	transition duration-300 transform scale-105
  }
  hr {
    height: 0.05em !important;
  }
}
</style>
