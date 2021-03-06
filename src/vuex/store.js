import Vue from 'vue'
import Vuex from 'vuex'

import actionsList from './actions/actions'
import actionsApi from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";

const actions = {...actionsApi, ...actionsList};

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    users: [],
    isMobile: false,
    isDesktop: true
  },
  mutations,
  actions,
  getters,
});

export default store;