import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: true,
    // numbers: [1,3,5,7,9],
  },
  mutations: {
    CHANGE_DARK_MODE(state){
      state.isDark = !state.isDark;
    },
    // ADD_NUMBER(state,payload) {
    //   state.numbers.push(payload)
    // },
  },
  actions: {
    changeDarkMode({commit}){
      commit("CHANGE_DARK_MODE");
    },
    // addNumber(context,number) {
    //   context.commit("ADD_NUMBER", number)
    // },
  },
  modules: {
  }
})
