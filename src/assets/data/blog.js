export default{
    "content": `
<div class='text-green-600'>
<span class="text-2xl">跟老師討論的內容</span>

- 2 dataset are more informative
    - 小資料集：FEC, lang-8
    - 大資料集：EF

- distance bigram 可以再用 annotated data（隱含的註記）過濾
- 不一定要用比賽的測試集來 evaluate，要看最終目標是什麼
- 可以朝英文學習者的方向走
- 可考慮先做 Delete, Insert. Replace 之後再做

\`\`\`python
import spacy

nlp = spacy.load('en_core_web_md')
sentence = "I'm a master's student."

print(*[token.pos_ for token in nlp(sentence)], sep=', ')

###### outputs ######
# PRON, AUX, DET, NOUN, PART, NOUN, PUNCT

\`\`\`

</div>
`
}

// # H1
// ---

// ## H2

// linebreak-1  linebreak-2

// _italic_

// **blod**

// \`Monospace\`

// * 張三
//     * 張三之子
// * 李四
// * 王二

// 1. 不論
//     1. 不論之子
// 2. 三七
// 3. 二十一

// [Google](https://www.google.com/)

// ![Image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

// > 引用文字