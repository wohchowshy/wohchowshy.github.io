import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    isDark: false,
    textColor: "textColor-light",
    navigations: ['About', 'Educations', 'Experience', 'Blog', 'Projects', 'Skills', ],
    nowPage: 'About',
    showNavSmall: false,
  },
  mutations: {
    CHANGE_DARK_MODE(state){
      state.isDark = !state.isDark
      if(state.isDark == true){
        state.textColor = "textColor-dark"
      }else{
        state.textColor = "textColor-light"
      }
    },
    CHANGE_PAGE(state, nowPage) {
      state.nowPage = nowPage
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
    changeDarkMode({commit}){
      commit("CHANGE_DARK_MODE");
    },
    changePage({commit}, page){
      let nowPage = page || 'about'
      nowPage = nowPage.charAt(0).toUpperCase() + nowPage.slice(1)
      commit("CHANGE_PAGE", nowPage)
    },
    ChangeNavSmall({commit}, status) {
      commit("CHANGE_NAV_SMALL", status);
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
