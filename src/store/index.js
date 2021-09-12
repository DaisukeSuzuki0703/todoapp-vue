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
    getItem(state) {
      const targetTodos = JSON.parse(localStorage.getItem(state.todoKeyWord));
      if(targetTodos !== null) {
        state.todos.push(...targetTodos);
      }
    },
    resisterTodo(state, targetTodo) {
      state.todos.unshift(targetTodo);
      localStorage.setItem(state.todoKeyWord, JSON.stringify(state.todos));
    },
    editTodo(state) {
      console.log(state, "edit");
    },
    deleteTodo(state) {
      console.log(state, "delete");
    }
  },
  actions: {
    updateTextValue({commit}, {value, name}) {
      commit('updateTextValue', {value, name});
    },
    getItem({commit}) {
      commit("getItem");
    },
    resisterTodo({commit, state}) {
      let targetTodoLength = state.todos.length + 1;
      const targetTodo = Object.assign({}, {
        title: state.targetTodo.title,
        detail: state.targetTodo.detail,
        id: targetTodoLength++,
        completed: false,
      })
      commit('resisterTodo', targetTodo);
      state.targetTodo.title = '';
      state.targetTodo.detail = '';
    },
    editTodo({commit}) {
      commit("editTodo")
    },
    deleteTodo({commit}) {
      commit("deleteTodo")
    }
  }
});