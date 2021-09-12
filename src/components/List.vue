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
  overflow: scroll;
}
</style>
