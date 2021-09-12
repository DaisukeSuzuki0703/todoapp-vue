// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoKeyWord: 'Todos',
    todos: [],
    targetTodo: {
      id: 1,
      title: '',
      detail: '',
      completed: false,
    },

  },
  mutations: {
    updateTextValue(state, payload) {
      state.targetTodo[payload.name] = payload.value;
    },
    resisterTodo(state, targetTodo) {
      state.todos.push(targetTodo);
      localStorage.setItem(state.todoKeyWord, JSON.stringify(state.todos));
    }
  },
  actions: {
    updateTextValue({commit}, {value, name}) {
      commit('updateTextValue', {value, name});
    },
    resisterTodo({commit, state}) {
      const targetTodo = Object.assign({}, {
        title: state.targetTodo.title,
        detail: state.targetTodo.detail,
        id: state.targetTodo.id++,
        completed: false,
      })
      commit('resisterTodo', targetTodo);
      state.targetTodo.title = '';
      state.targetTodo.detail = '';
    }
  }
});