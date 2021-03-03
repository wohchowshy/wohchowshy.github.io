<template>
  <div class="marked" v-html="markedContent"></div>
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

// Default html tag css style
.marked {
  html, address, blockquote,
  body, dd, div,
  dl, dt, fieldset, form,
  frame, frameset,
  h1, h2, h3, h4,
  h5, h6, noframes,
  ol, p, ul, center,
  dir, hr, menu, pre   { display: block; unicode-bidi: embed }
  li              { display: list-item }
  head            { display: none }
  table           { display: table }
  tr              { display: table-row }
  thead           { display: table-header-group }
  tbody           { display: table-row-group }
  tfoot           { display: table-footer-group }
  col             { display: table-column }
  colgroup        { display: table-column-group }
  td, th          { display: table-cell }
  caption         { display: table-caption }
  th              { font-weight: bolder; text-align: center }
  caption         { text-align: center }
  body            { margin: 8px }
  h1              { font-size: 2em; margin: .67em 0 }
  h2              { font-size: 1.5em; margin: .75em 0 }
  h3              { font-size: 1.17em; margin: .83em 0 }
  h4, p,
  blockquote, ul,
  fieldset, form,
  ol, dl, dir,
  // menu            { margin: 0.5em 0 }
  menu            { margin: 1.12em 0 }
  h5              { font-size: .83em; margin: 1.5em 0 }
  h6              { font-size: .75em; margin: 1.67em 0 }
  h1, h2, h3, h4,
  h5, h6, b,
  strong          { font-weight: bolder }
  blockquote      { margin-left: 40px; margin-right: 40px }
  i, cite, em,
  var, address    { font-style: italic }
  pre, tt, code,
  kbd, samp       { font-family: monospace }
  pre             { white-space: pre }
  button, textarea,
  input, select   { display: inline-block }
  big             { font-size: 1.17em }
  small, sub, sup { font-size: .83em }
  sub             { vertical-align: sub }
  sup             { vertical-align: super }
  table           { border-spacing: 2px; }
  thead, tbody,
  tfoot           { vertical-align: middle }
  td, th, tr      { vertical-align: inherit }
  s, strike, del  { text-decoration: line-through }
  hr              { border: 1px inset }
  ol, ul, dir,
  menu, dd        { margin-left: 40px }
  ol              { list-style-type: decimal }
  ul              { list-style-type: disc }
  ol ul, ul ol,
  ul ul, ol ol    { margin-top: 0; margin-bottom: 0 }
  u, ins          { text-decoration: underline }
  br:before       { content: "\A"; white-space: pre-line }
  center          { text-align: center }
  :link, :visited { text-decoration: underline }
  :focus          { outline: thin dotted invert }

  /* Begin bidirectionality settings (do not change) */
  BDO[DIR="ltr"]  { direction: ltr; unicode-bidi: bidi-override }
  BDO[DIR="rtl"]  { direction: rtl; unicode-bidi: bidi-override }

  *[DIR="ltr"]    { direction: ltr; unicode-bidi: embed }
  *[DIR="rtl"]    { direction: rtl; unicode-bidi: embed }

  @media print {
    h1            { page-break-before: always }
    h1, h2, h3,
    h4, h5, h6    { page-break-after: avoid }
    ul, ol, dl    { page-break-before: avoid }
  }
}

// customized css style
.marked {
  pre{
    // background-color: rgb(247, 246, 243);
    @apply bg-gray-800;
    @apply text-white;
    @apply rounded-md p-4 max-h-96 relative overflow-scroll;
  }
  a:link {
    @apply no-underline	transition duration-300 transform scale-105
  }
}
.text-green {
  @apply text-green-600;
}
.emphasis {
  @apply text-amber-600;
}
</style>
