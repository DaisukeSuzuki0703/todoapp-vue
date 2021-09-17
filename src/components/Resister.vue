<template>
  <div class="todo__box">
    <div>
      <label for="inputText">Title</label>
      <input
        type="text"
        id="inputText"
        class="input__area"
        placeholder="input your Todo title"
        v-model="targetTodoText"
      />
      <label for="inputDetail">Detail</label>
      <input
        type="text"
        id="inputDetail"
        class="input__area"
        placeholder="input your Todo detail"
        v-model="targetTodoDetail"
      />
    </div>
    <div class="submit">
      <button class="submitbtn btn" @click="(targetTodo.id === null) ? resisterTodo() : editTodo()">
        <template v-if="targetTodo.id === null">
          <span>resister</span>
        </template>
        <template v-else>
          <span>update</span>
        </template>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    targetTodo() {
      return this.$store.state.targetTodo;
    },
    targetTodoText: {
      get() {
        return this.$store.state.targetTodo.title;
      },
      set(value) {
        return this.$store.dispatch("updateTextValue", {
          name: "title",
          value: value,
        });
      },
    },
    targetTodoDetail: {
      get() {
        return this.$store.state.targetTodo.detail;
      },
      set(value) {
        return this.$store.dispatch("updateTextValue", {
          name: "detail",
          value: value,
        });
      },
    },
  },
  methods: {
    resisterTodo() {
      this.$store.dispatch('resisterTodo');
    },
    editTodo(todo) {
      this.$store.dispatch("editTodo", todo);
    }
  }
};
</script>


<style scoped>
.todo__box {
  margin-bottom: 10px;
}
.todo__box > label {
  font-size: 16px;
}
.input__area {
  display: block;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 10px;
  border-color: #dcdcdc;
  padding: 2px 5px;
}
.input__area:last-child {
  margin-bottom: 0;
}
.submit {
  text-align: right;
  margin-top: 10px;
}
.btn {
  border-radius: 10px;
  border: none;
  background-color: #f4a460;
  padding: 5px 10px;
}
</style>