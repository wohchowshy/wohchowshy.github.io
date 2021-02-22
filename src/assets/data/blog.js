export default{
    "content": `
### To Be Published! Take a break~

\`\`\`python
import spacy

nlp = spacy.load('en_core_web_md')
sentence = "I'm a master's student."

print(*[token.pos_ for token in nlp(sentence)], sep=', ')

###### outputs ######
# PRON, AUX, DET, NOUN, PART, NOUN, PUNCT

\`\`\`


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