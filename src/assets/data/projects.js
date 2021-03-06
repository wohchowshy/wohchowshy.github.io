export default {
    'projects':[
        {
            "Title": "NoMoney",
            "Thumbnail": require("@/assets/img/projects/nomoney/nomoney-thumbnail.jpg"),
            "Imgs": [
                require('@/assets/img/projects/nomoney/nomoney1.jpg'),
                require('@/assets/img/projects/nomoney/nomoney2.png'),
                require('@/assets/img/projects/nomoney/nomoney3.png'),
                require('@/assets/img/projects/nomoney/nomoney4.png'),
                require('@/assets/img/projects/nomoney/nomoney5.png'),
                require('@/assets/img/projects/nomoney/nomoney6.png'),
                require('@/assets/img/projects/nomoney/nomoney7.png'),
                require('@/assets/img/projects/nomoney/nomoney8.png'),
            ],
            "ForShort": `
A novel LINE application, gives us more chances to earn extra income.
`,
            "Introduction": `
<big class="text-green">**NoMoney**</big>, an novel application in LINE, gives us more chances to earn extra income in our leisure time.

***Features***
1. NoMoney will send a notification either you are accepted in a case or someone applies for your case. 
2. NoMoney provides you the most relavant cases according to your county, your introduction and your expected pay.
`,
            "Detail": `
***My contributions***
1. Code backend codes by Django includes:
    - CRUD for Database
    - Send response to frontend
2. Logic design for database.
3. Security of request/response data.

`,
            "Hashtags": ["LIFF", "Django", "SQL", "backend"],
            "SimpleHashtags": ["Django", "SQL"],
            "Link": "https://nomoney.nlplab.cc"
        },
        {
            "Title": "Multilingual Linggle",
            "Thumbnail": require("@/assets/img/projects/jplinggle/jplinggle-thumbnail.png"),
            "Imgs": [
                require("@/assets/img/projects/jplinggle/jplinggle1.png"),
                require("@/assets/img/projects/jplinggle/jplinggle2.png"),
                require("@/assets/img/projects/jplinggle/jplinggle3.png"),
            ],
            "ForShort": `
A phrases querying system in 3 languages, especially suitable for language learners.
`,
            "Introduction": `
<big class="text-green">**Multilingual Linggle**</big> aims to provide a self-learning chance to language learner.
We have 3 language supports - Japanese, Chinese, and English.

No people can learn a language without any confusion. 
For example, a learner is confused between *“discuss about the issue”* and *“discuss the issue”*. Just easily type *"discuss ?about the issue"* in our system, then find out the correct one is *"discuss the issue"*.

***Features***
1. The system is easy to use. Try the quick start tutorials in Linggle <a class="cursor-pointer" href="https://linggle.com/" target="_blank"><span class="fas fa-external-link-alt"></span></a>.
2. Especially suitable for the learners who are interested in self-learning.
3. Support using Zhuyin (e.g. ㄅㄆㄇ...) in Chinese version.
`,
            "Detail": `
***My contributions***
1. Code frontend codes by Vue.js.
2. Code backend codes for Chinese and English version by Flask.
3. Maintain huge databases (up to 500GB) by PostgreSQL.
`,
            "Hashtags": ["Vue.js", "Flask", "PostgreSQL", "Big Data", "Japanese", "Chinese", "English"],
            "SimpleHashtags": ["Vue.js", "Flask", "PostgreSQL", "Big Data"],
            "Link": "http://jp.linggle.com/"
        },
        {
            "Title": "LingConc",
            "Thumbnail": require("@/assets/img/projects/lingconc/lingconc-thumbnail.png"),
            "Imgs": [
                require("@/assets/img/projects/lingconc/lingconc1.png"),
                require("@/assets/img/projects/lingconc/lingconc2.png"),
            ],
            "ForShort": `
A linguistic statistic tool, provides 4 kinds of statistics - Words, Keywords, Collocations, and Lexical Bundles.
`,
            "Introduction": `
<big class="text-green">**LingConc**</big>, a powerful linguistic statistic tool, provides 3 major services: Reader, Linggle Booster, and Statistics.

***Features***
- <u>Reader:</u>
    online pdf files reader.
- <u>Linggle Booster</u> <a class="cursor-pointer" target="_blank" href="https://r.linggle.com/"><span class="fas fa-external-link-alt"></span></a>:
    Just serve like a dictionary, and all words will be separated into 3 levels according to the difficulty.
- <u>Reader:</u>
    Read a pdf file like a book.
- <u>Statistics:</u>
    Summaries of uploaded pdf files, include words count, keywords, collocations, and lexical bundles.
`,
            "Detail": `
***My contributions*** <small>(All in Statistics part)</small>
1. Words (count): counts all word frequency in all uploaded files.
2. Keywords: use chi Square Test score to rank all Ngrams (N = 1 to 3).
3. Collocations: use Smadja algorithm as metrix and find .
4. Lexical Bundles: keep 4-gram and 5-gram that have more functional words than a threshold.
`,
            "Hashtags": ["NLP", "Statistic", "Chi Square Test", "Collocation", "Lexical Bundle"],
            "SimpleHashtags": ["NLP", "Statistic"],
            "Link": "https://zenodo.org/record/3871325#.YDoNh2ozZhE"
        },
        {
            "Title": "IEEE Big Data 2019 Poster",
            "Thumbnail": require("@/assets/img/projects/ieee/ieee-thumbnail.png"),
            "Imgs": [
                require('@/assets/img/projects/ieee/ieee1.png'),
                require('@/assets/img/projects/ieee/ieee2.png'),
                require('@/assets/img/projects/ieee/ieee3.png'),
                require('@/assets/img/projects/ieee/ieee4.png'),
                require('@/assets/img/projects/ieee/ieee5.png'),
            ],
            "ForShort": `
The biggest parallel data for Grammatical Error Correction. Generated data can be used in many fields.
`,
            "Introduction": `
In this paper, we released the largest GEC parallel data in that time, which aims to reinforce neural network model.
We extracted grammar-related errors, and then splited them into finer classes such as NOUN, ADJ, VERB, and so on.

***Features***
1. MapReduce to process huge data in parallel.
2. Use ERRANT <a class="cursor-pointer" target="_blank" href="https://github.com/chrisjbryant/errant"><span class="fas fa-external-link-alt"></span></a> to automatically parse error type.
`,
            "Detail": `
***My contributions***
1. Write python codes for ERRENT, word tokenize, and HTML symbols unescaping.
2. Run codes in parallel by using local-mapreduce <a class="cursor-pointer" target="_blank" href="https://github.com/d2207197/local-mapreduce"><span class="fas fa-external-link-alt"></span></a>.
`,
            "Hashtags": ["IEEE", "GEC", "Big Data", "MapReduce", "parallel process"],
            "SimpleHashtags": ["IEEE", "GEC", "Big Data"],
            "Link": "https://ieeexplore.ieee.org/abstract/document/9005618"
        },
        {
            "Title": "ETF Price Prediction",
            "Thumbnail": require('@/assets/img/projects/etf/etf-thumbnail.png'),
            "Imgs": [
                require('@/assets/img/projects/etf/etf1.svg'),
                require('@/assets/img/projects/etf/etf2.png'),
                require('@/assets/img/projects/etf/etf3.png'),
                require('@/assets/img/projects/etf/etf4.png'),
                require('@/assets/img/projects/etf/etf5.png'),
                require('@/assets/img/projects/etf/etf6.png'),
            ],
            "ForShort": `
A neural network system aims to predict ETF prices. It is a interesting project but not stable yet.
`,
            "Introduction": `
Our goal is to predict ETF prices in the following week, using Bi-directional LSTM and AutoEncoder.
Also, we try different cost function to train a more stable and pricise model.
The project encourages us to do more interesting things and lets us be more imaginative. 

***Performance***
1. AutoEncoder helps a lot in a faster trainging speed.
2. Waveloss is a key to perform more stable.
`,
            "Detail": `
***My contributions***
1. Coded Bi-directional LSTM and AutoEncoder by Tensorflow
`,
            "Hashtags": ["Neural Network", "LSTM", "AutoEncoder", "ETF", "Sequence to Sequence"],
            "SimpleHashtags": ["Neural Network", "LSTM", "ETF"],
            "Link": "https://drive.google.com/file/d/1CAGPotIq0jLkg8GonbG0nTqnakgfsTgQ/view"
        },
    ],
}