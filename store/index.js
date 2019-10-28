import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userId: null,
    users: [],
    api: [
      {
        id: 0,
        name: 'Lorem Picsum',
        url: 'lorem-picsum',
        desc: 'Images from Unsplash'
      },
      {
        id: 1,
        name: 'Ghibli',
        url: 'ghibli',
        desc: 'Resources from Studio Ghibli films'
      },
      {
        id: 2,
        name: 'The report of the week',
        url: 'the-report-of-the-week',
        desc: 'Food & Drink Reviews'
      },
      {
        id: 3,
        name: 'Magic the gathering',
        url: 'magic-the-gathering',
        desc: 'Magic The Gathering Game Information'
      },
      {
        id: 4,
        name: 'Kanye.rest',
        url: 'kanye',
        desc: 'REST API for random Kanye West quotes'
      }
    ]
  },

  getters: {
    userData: (state) => {
      return state.users[state.userId]
    },
    userID: (state) => {
      if (state.users.length > 0) {
        return state.users[state.users.length - 1].id + 1
      } else {
        return 0
      }
    },
    apiData: (state) => {
      return state.api
    },
  },

  mutations: {
    SET_USER (state, payload) {
      state.userId = payload
    },
    ADD_USER (state, payload) {
      state.users.push(payload)
    },
    ADD_DASHBOARD(state, payload) {
      state.users[state.userId].dashboard = payload
    },
    UPDATE_USER(state, payload) {
      Vue.set(state.users, payload.id, payload)
    }
  },

  actions: {
    setAuthToken (context, payload) {
      sessionStorage.setItem('authToken', payload)
    },
    removeAuthToken () {
      sessionStorage.removeItem('authToken')
    },
  }
})
