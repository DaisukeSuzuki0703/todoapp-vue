<template>
  <ul class="todo__list">
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
};
</script>

<style scoped>
.todo__list {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 320px;
  overflow-y: scroll;
}
.todo__list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.todo__list::-webkit-scrollbar-track {
  background: #ffe6ea;
  box-shadow:0 0 2px #ff99aa inset ;
}
.todo__list::-webkit-scrollbar-thumb {
  background: #ffb6c1;
  border-radius: 5px;
}
</style>
