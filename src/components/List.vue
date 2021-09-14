<template>
  <ul class="todo__list" :class="[todoFilter !== 'all' ? 'is-large' : '']">
    <app-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></app-list-item>
  </ul>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  components: {
    AppListItem: ListItem,
  },
  props: {
    todos: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    todoFilter() {
      return this.$store.state.todoFilter;
    },
  },
};
</script>

<style scoped>
.todo__list {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 436px;
  border-radius: 10px;
  overflow-y: scroll;
}
.todo__list.is-large {
  max-height: 560px;
}
.todo__list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.todo__list::-webkit-scrollbar-track {
  background-color: transparent;
}
.todo__list::-webkit-scrollbar-thumb {
  background: #ffb6c1;
  border-radius: 5px;
}
</style>
