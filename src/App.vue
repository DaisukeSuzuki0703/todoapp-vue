<template>
  <div id="app">
    <h1>TodoApp</h1>
    <div class="container">
      <app-sidevar-navi></app-sidevar-navi>
      <app-todo></app-todo>
    </div>
  </div>
</template>

<script>
import Todo from './container/Todo'
import SidevarNavi from './components/SidevarNavi.vue'

export default {
  name: 'App',
  components: {
    AppTodo: Todo,
    AppSidevarNavi: SidevarNavi,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
}
</style>
