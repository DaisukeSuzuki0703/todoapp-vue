<template>
  <div class="todo__box">
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
</template>

<script>
export default ({
  computed: {
    targetTodoText: {
      get() {
        return this.$store.state.targetTodo.title
      },
      set(value) {
        return this.$store.dispatch('updateTextValue', {
          name: 'title',
          value: value
        })
      }
    },
    targetTodoDetail: {
      get() {
        return this.$store.state.targetTodo.detail
      },
      set(value) {
        return this.$store.dispatch('updateTextValue', {
          name: 'detail',
          value: value
        })
      }
    }
  }
})
</script>


<style scoped>
.todo__box > label {
  font-size: 16px;
}
.input__area {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.input__area:last-child {
  margin-bottom: 0;
}
</style>