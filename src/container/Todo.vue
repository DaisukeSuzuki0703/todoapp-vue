<template>
  <div class="todos">
    <app-wrapper>
      <app-resister></app-resister>
      <app-list :todos="todos"></app-list>
    </app-wrapper>
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper";
import Resister from "../components/Resister";
import List from "../components/List";

export default {
  components: {
    AppWrapper: Wrapper,
    AppResister: Resister,
    AppList: List,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>
<style scoped>
.todos {
  width: 80%;
  height: 100%;
  background-color: #fff;
  /* padding: 20px; */
}
</style>
