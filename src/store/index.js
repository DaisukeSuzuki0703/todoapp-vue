// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoKeyWord: 'Todos',
    todos: [],
    todoFilter: '',
    targetTodo: {
      id: 1,
      title: '',
      detail: '',
      completed: false,
    },
    emptyMessage: '',
  },
  getters: {
    completed: (state) => state.todos.filter((todo) => todo.completed),
    incomplete: (state) => state.todos.filter((todo) => !todo.completed),
  },
  mutations: {
    setTodoFilter(state, routeName) {
      console.log(routeName)
      state.todoFilter = routeName;
    },
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
    deleteTodo(state, targetId) {
      const newTodos = state.todos.filter(todo => {
        return todo.id !== targetId;
      })
      state.todos = newTodos;
      localStorage.setItem(state.todoKeyWord, JSON.stringify(state.todos));
    },
    changeCompleted(state, todo) {
      state.targetTodo.completed = todo.completed;
    },
    setEmptyMessage(state, todoFilter) {
      if(todoFilter === "completed") {
        state.emptyMessage = "There are no completed TODOs."
      }else if(todoFilter === "incomplete") {
        state.emptyMessage = "There are no incomplete TODOs."
      }else {
        state.emptyMessage = "There is no registered TODO."
      }
    }
  },
  actions: {
    setTodoFilter({commit}, routeName) {
      commit("setTodoFilter", routeName);
    },
    updateTextValue({commit}, {value, name}) {
      commit('updateTextValue', {value, name});
    },
    getItem({commit}) {
      commit("getItem");
    },
    resisterTodo({ commit, state }) {
      let targetTodoLength = state.todos.length + 1;
      const targetTodo = Object.assign({}, {
        title: state.targetTodo.title,
        detail: state.targetTodo.detail,
        id: targetTodoLength,
        completed: false,
      })
      commit('resisterTodo', targetTodo);
      state.targetTodo.title = '';
      state.targetTodo.detail = '';
    },
    editTodo({commit}) {
      commit("editTodo")
    },
    deleteTodo({ commit }, targetId) {
      commit("deleteTodo", targetId)
    },
    changeCompleted({commit}, todo) {
      todo.completed = !todo.completed;
      commit("changeCompleted", todo);
    },
    setEmptyMessage({commit}, todoFilter) {
      commit("setEmptyMessage", todoFilter);
    }
  }
});
