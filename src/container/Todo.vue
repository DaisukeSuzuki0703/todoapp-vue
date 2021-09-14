<template>
  <div class="todos">
    <app-wrapper>
      <app-resister v-if="todoFilter === 'all'"></app-resister>
      <template v-slot:todos>
        <app-list :todos="todos" v-if="todos.length"></app-list>
      </template>
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
    todoFilter() {
      return this.$store.state.todoFilter;
    },
    todos() {
      if(this.todoFilter === "all") {
        return this.$store.state.todos;
      }
      return this.$store.getters[this.todoFilter];
    },
  },
  watch: {
    // todos: function(todos) {
    //   if (!todos.length) this.$store.dispatch('setEmptyMessage', this.todoFilter);
    // },
    $route: function(to) {
      this.$store.dispatch("setTodoFilter", to.name)
    }
  },
  created: function() {
    // this.$store.dispatch('getTodos');
    this.$store.dispatch('setTodoFilter', this.$route.name);
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
