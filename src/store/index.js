import { createStore } from 'vuex'
// import VuexPersistence from 'vuex-persist'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default createStore({
  state: {
    navigations: ['Home', 'About', 'Blog', 'Projects', 'Skills', 'Editor'],
    nowPage: 'Home',
    showNavSmall: false,
    scrolled: false,
    opacity: "1",
  },
  mutations: {
    CHANGE_PAGE(state, nowPage) {
      state.nowPage = nowPage
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
  },
  actions: {
    changePage({commit}, page){
      let nowPage = page || 'home'
      nowPage = nowPage.charAt(0).toUpperCase() + nowPage.slice(1)
      commit("CHANGE_PAGE", nowPage)
    },
    changeScroll({commit}, [status, opacity]){
      commit("CHANGE_SCROLL", [status, opacity])
    },
    ChangeNavSmall({commit}, status) {
      commit("CHANGE_NAV_SMALL", status);
    },
  },
  modules: {
  },
  // plugins: [vuexLocal.plugin]
})
