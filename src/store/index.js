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
      id: null,
      title: '',
      detail: '',
      completed: false,
    },
    emptyMessage: '',
    errorMessage: '',
  },
  getters: {
    completed: (state) => state.todos.filter((todo) => todo.completed),
    incomplete: (state) => state.todos.filter((todo) => !todo.completed),
  },
  mutations: {
    setTodoFilter(state, routeName) {
      state.todoFilter = routeName;
    },
    updateTextValue(state, payload) {
      state.targetTodo[payload.name] = payload.value;
    },
    initTargetTodo(state) {
      state.targetTodo = {
        id: null,
        title: '',
        detail: '',
        completed: false,
      };
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
    showError(state, payload) {
      if (payload) {
        state.errorMessage = payload.data;
      } else {
        state.errorMessage = 'ネットに接続がされていない、もしくはサーバーとの接続がされていません。ご確認ください。';
      }
    },
    showEditor(state, todo) {
      state.targetTodo = Object.assign({}, todo);
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
      localStorage.setItem(state.todoKeyWord, JSON.stringify(state.todos));
    },
    setEmptyMessage(state, todoFilter) {
      if(todoFilter === "completed") {
        state.emptyMessage = "There are no completed TODOs."
      }else if(todoFilter === "incomplete") {
        state.emptyMessage = "There are no incomplete TODOs."
      }else {
        state.emptyMessage = "There is no registered TODO."
      }
    },
    editTodo(state, todo) {
      state.todos = state.todos.map((todoItem) => {
        if(todo.id === todoItem.id) {
          return todo;
        }
        return todoItem;
      });
      localStorage.setItem(state.todoKeyWord, JSON.stringify(state.todos));
      state.targetTodo.title = "";
      state.targetTodo.detail = "";
    },
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
      if (!state.targetTodo.title || !state.targetTodo.detail) {
        commit({
          type: 'showError',
          data: 'タイトルと内容はどちらも必須項目です。',
        });
        return;
      }
      let targetTodoLength = state.todos.length + 1;
      const targetTodo = Object.assign({}, {
        title: state.targetTodo.title,
        detail: state.targetTodo.detail,
        id: targetTodoLength,
        completed: false,
      })
      commit('resisterTodo', targetTodo);
      commit("initTargetTodo");
      state.errorMessage = '';
    },
    showEditor({commit, state}, todo) {
      commit("showEditor", todo);
      state.errorMessage = '';
    },
    deleteTodo({ commit, state }, targetId) {
      commit("deleteTodo", targetId);
      commit("initTargetTodo");
      state.errorMessage = '';
    },
    changeCompleted({commit}, todo) {
      todo.completed = !todo.completed;
      commit("changeCompleted", todo);
      commit("initTargetTodo");
    },
    setEmptyMessage({commit}, todoFilter) {
      commit("setEmptyMessage", todoFilter);
    },
    editTodo({commit, state}) {
      const targetTodo = state.todos.find(todo => todo.id === state.targetTodo.id);
      if(targetTodo.title === state.targetTodo.title && targetTodo.detail === state.targetTodo.detail) {
        commit("initTargetTodo");
        return
      }
      const updateTodo = Object.assign({}, {
        title: state.targetTodo.title,
        detail: state.targetTodo.detail,
        id: state.targetTodo.id,
        completed: state.targetTodo.completed,
      })
      commit("editTodo", updateTodo);
    },
    initTargetTodo({commit}) {
      commit("initTargetTodo");
    }
  }
});
