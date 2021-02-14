import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: true,
    navigations: {
      'About': [], 
      'Educations': [], 
      'Experiments': [], 
      'Skills': ['Programming', 'Leisure', 'Other'], 
      'Projects': ['Bachelor', 'Master'], 
      'Contact': []
    },
    nowPage: 'About',
    // numbers: [1,3,5,7,9],
  },
  mutations: {
    CHANGE_DARK_MODE(state){
      state.isDark = !state.isDark
    },
    CHANGE_PAGE(state, navigation) {
      state.nowPage = navigation
    }
  },
  actions: {
    changeDarkMode({commit}){
      commit("CHANGE_DARK_MODE");
    },
    changePage({commit}, page){
      let nowPage = page || 'about'
      nowPage = nowPage.charAt(0).toUpperCase() + nowPage.slice(1)
      commit("CHANGE_PAGE", nowPage)
    }
    // addNumber(context,number) {
    //   context.commit("ADD_NUMBER", number)
    // },
  },
  modules: {
  },
})
