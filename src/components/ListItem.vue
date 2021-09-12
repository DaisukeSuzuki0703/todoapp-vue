<template>
  <li class="todo__item">
    <div>
      <p>Title: {{todo.title}}</p>
      <p>Detail: {{todo.detail}}</p>
    </div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
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
}
</style>
