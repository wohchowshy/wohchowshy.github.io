import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: true,
    textColor: "textColor-dark",
    cardBgColor: "cardBgColor-dark",
    navigations: {
      'About': [], 
      'Educations': [], 
      'Experience': [], 
      'Blog': [],
      'Skills': ['All', 'Programming', 'Leisure', 'Other'], 
      'Projects': ['Bachelor', 'Master'], 
      // 'Contact': [],
    },
    nowPage: 'About',
    showNavSmall: false,
  },
  mutations: {
    CHANGE_DARK_MODE(state){
      state.isDark = !state.isDark
      if(state.isDark == true){
        state.textColor = "textColor-dark"
        state.cardBgColor = "cardBgColor-dark"
      }else{
        state.textColor = "textColor-light"
        state.cardBgColor = "cardBgColor-light"
      }
    },
    CHANGE_PAGE(state, navigation) {
      state.nowPage = navigation
    },
    CHANGE_NAV_SMALL(state, status) {
      if (status === false) {
        state.showNavSmall = false
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
    // addNumber(context,number) {
    //   context.commit("ADD_NUMBER", number)
    // },
  },
  modules: {
  },
})
