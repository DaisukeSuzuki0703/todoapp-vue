<template>
  <div class="pages">
    <app-sidevar-navi></app-sidevar-navi>
    <app-todo></app-todo>
  </div>
</template>

<script>
import Todo from '../container/Todo'
import SidevarNavi from '../components/SidevarNavi'

export default ({
  components: {
    AppTodo: Todo,
    AppSidevarNavi: SidevarNavi,
  },
})
</script>

<style scoped>
.pages {
  display: flex;
  align-items: flex-start;
  height: 100%;
  margin-top: 50px;
}
</style>
