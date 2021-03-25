// import { keyFor } from 'core-js/fn/symbol'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    blogContents: state.blogContents,
  }),
})

export default createStore({
  state: {
    navigations: ['About', 'Blog', 'Projects', 'Skills', 'Editor'],
    nowPage: 'About',
    showNavSmall: false,
    scrolled: false,
    opacity: "1",
    blogContents: {
      Title: "",
      PublishTime: "",
      Author: "",
      Subclass: "",
      Image: "",
      Description: "",
      Content: "",
      Hashtags: ['','','','','','','','','',''],
    },
  },
  mutations: {
    CHANGE_PAGE(state, nowPage) {
      state.nowPage = nowPage
      console.log('CHANGE PAGE!', state.nowPage)
    },
    CHANGE_SCROLL(state, [status, opacity]) {
      state.scrolled = status
      state.opacity = opacity.toString()
    },
    CHANGE_NAV_SMALL(state, status) {
      if (status === false) {
        state.showNavSmall = false
      }else if (status === true) {
        state.showNavSmall = true
      }
      else{
        state.showNavSmall = !state.showNavSmall
      }
    },
    SET_BLOG_CONTENT(state, content) {
      for (let key in content){
        state.blogContents[key] = content[key]
      }
    }
  },
  actions: {
    changePage({commit}, page){
      let nowPage = page || 'about'
      nowPage = nowPage.charAt(0).toUpperCase() + nowPage.slice(1)
      commit("CHANGE_PAGE", nowPage)
    },
    changeScroll({commit}, [status, opacity]){
      commit("CHANGE_SCROLL", [status, opacity])
    },
    ChangeNavSmall({commit}, status) {
      commit("CHANGE_NAV_SMALL", status)
    },
    SetBlogContent({commit}, content) {
      commit("SET_BLOG_CONTENT", content)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
