<template lang="html">
  <div id="app">
    <h1 class="app__title">TodoApp</h1>
    <div class="container">
      <app-sidevar-navi></app-sidevar-navi>
      <app-todo></app-todo>
    </div>
  </div>
</template>

<script>
import Todo from "./container/Todo";
import SidevarNavi from "./components/SidevarNavi.vue";

export default {
  name: "App",
  components: {
    AppTodo: Todo,
    AppSidevarNavi: SidevarNavi,
  },
};
</script>

<style scoped>
#app {
  width: 800px;
  margin: 0 auto;
  height: 500px;
  padding-top: 100px;
}
.container {
  display: flex;
  align-items: flex-start;
  height: 100%;
  margin-top: 50px;
}
.app__title {
  margin: 0;
}
</style>
