// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    targetTodo: {
      id: '',
      title: '',
      detail: '',
    },

  },
  mutations: {
    updateTextValue(state, payload) {
      state.targetTodo[payload.name] = payload.value;
    }
  },
  actions: {
    updateTextValue({commit}, {value, name}) {
    commit('updateTextValue', {value, name});
    }
  }
});