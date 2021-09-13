<template>
  <li class="todo__item">
    <div class="todo__item__box">
      <button
        class="todo__completed btn"
        type="button"
        @click="changeCompleted(todo)"
      >
        <template v-if="todo.completed">
          <span>finished</span>
        </template>
        <template v-else>
          <span>unfinish</span>
        </template>
      </button>
      <div>
        <p class="todo__title">Title: {{ todo.title }}</p>
        <p>Detail: {{ todo.detail }}</p>
      </div>
    </div>
    <div class="todo__option">
      <button class="btn todo__edit__btn" @click="editTodo">Edit</button>
      <button class="btn todo__delete__btn" @click="deleteTodo(todo.id)">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    todo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    isfinished() {
      return this.todo.completed;
    },
  },
  methods: {
    editTodo() {
      this.$store.dispatch("editTodo");
    },
    deleteTodo(targetId) {
      this.$store.dispatch("deleteTodo", targetId);
    },
  },
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
button {
  background-color: transparent;
}
.todo__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 10px;
}
.todo__item:last-child {
  margin-bottom: 0;
}
.todo__item__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo__title {
  margin-bottom: 5px;
}
.todo__option {
  display: flex;
  flex-direction: column;
}
.btn {
  border-radius: 10px;
  border: none;
  background-color: #ffb6c1;
}
.todo__completed {
  margin-right: 20px;
  padding: 10px 20px;
  background-color: #add8e6;
}
.todo__edit__btn {
  background-color: #7fffd4;
  padding: 5px 10px;
  margin-bottom: 5px;
}
.todo__delete__btn {
  padding: 5px 10px;
}
</style>
