<template>
  <transition-group
    mode="in-out"
    appear
    tag="ul"
    name="fadeList"
    class="todo__list"
    :class="[todoFilter === 'completed' ? 'is-large' : '']"
  >
    <app-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></app-list-item>
  </transition-group>
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
  methods: {
    beforeCreate(el) {
      el.style.opacity = 0;
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
  max-height: 575px;
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
.fadeList-enter-active,
.fadeList-leave-active {
  transition: all 0.5s ease;
}
.fadeList-enter,
.fadeList-leave-to {
  opacity: 0;
  /* transform: translateY(30px); */
}
.fadeList-leave,
.fadeList-enter-to {
  opacity: 1;
}
.fadeList-move {
  transition: transform 0.5s;
}

@media screen and (max-width: 400px) {
  .todo__list {
    max-height: 1000px;
    overflow-y: auto;
  }
}
</style>
