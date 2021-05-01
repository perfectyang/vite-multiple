import { createStore, createLogger } from 'vuex'

const userInfo = {
  state () {
    return {
      user: 0
    }
  },
  mutations: {
    updateUser (state, {user}) {
      state.user = user
    }
  },
  actions: {
    updateUser ({commit}, payload) {
      commit('updateUser', payload)
    }
  }
}

// Create a new store instance.
const store = createStore({
  modules: {
    userInfo 
  },
  plugins: [createLogger()]
})

export default store