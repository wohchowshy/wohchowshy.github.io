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
      return content
    }
  },
};
</script>

<style lang="scss">
// customized css style
.markdown-body {
  pre{
    @apply bg-gray-800 text-white;
    @apply rounded-md p-4 max-h-96 overflow-scroll;
    @apply text-xs;
  }
  hr {
    height: 0.05em !important;
  }
  p {
    @apply leading-relaxed tracking-wide;
  }
}
</style>
