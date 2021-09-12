<template>
  <li class="todo__item">
    <div>
      <p>Title: {{todo.title}}</p>
      <p>Detail: {{todo.detail}}</p>
    </div>
    <div>
      <button @click="editTodo">Edit</button>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
  </li>
</template>

<script>

export default ({
  props: {
    id: {
      type: Number,
    },
    todo: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    editTodo() {
      this.$store.dispatch("editTodo");
    },
    deleteTodo(targetId) {
      this.$store.dispatch("deleteTodo", targetId);

    }
  }
})
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.todo__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
}
.todo__item:last-child {
  margin-bottom: 0;
}
</style>
