<template>
  <div class="pages">
    <div class="pages__pc">
      <app-sidevar-navi></app-sidevar-navi>
      <app-todo></app-todo>
    </div>
    <div class="pages__sp">
      <app-humberger></app-humberger>
      <app-todo></app-todo>
    </div>
  </div>
</template>

<script>
import Todo from "../container/Todo";
import SidevarNavi from "../components/SidevarNavi";
import Humberger from "../components/Humberger";

export default {
  components: {
    AppTodo: Todo,
    AppSidevarNavi: SidevarNavi,
    AppHumberger: Humberger,
  },
};
</script>

<style scoped>
.pages__pc {
  display: flex;
  align-items: flex-start;
  height: 100%;
  margin-top: 50px;
  width: 100%;
}
.pages__sp {
  display: none;
}
@media screen and (max-width: 400px) {
  .pages {
    margin-top: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .pages__pc {
    display: none;
  }
  .pages__sp {
    display: block;
    position: relative;
    top: 52px;
  }
}
</style>
