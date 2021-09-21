<template>
  <div class="todos" v-if="showContent === false" :class="[todoFilter === 'completed' ? 'is-large' : '']">
    <app-wrapper>
      <app-resister v-if="todoFilter !== 'completed'"></app-resister>
      <template v-slot:todos>
        <app-list :todos="todos" v-if="todos.length"></app-list>
        <app-enpty-message v-else></app-enpty-message>
      </template>
    </app-wrapper>
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper";
import Resister from "../components/Resister";
import List from "../components/List";
import EmptyMessage from "../components/EmptyMessage";

export default {
  components: {
    AppWrapper: Wrapper,
    AppResister: Resister,
    AppList: List,
    AppEnptyMessage: EmptyMessage,
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
    showContent() {
      return this.$store.state.showContent;
    }
  },
  watch: {
    todos: function(todos) {
      if (!todos.length) this.$store.dispatch('setEmptyMessage', this.todoFilter);
    },
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
  min-height: 618px;
  background-color: #fff;
  /* padding: 20px; */
}
/* .todos.is-large {
  min-height: 618px;
} */
@media screen and (max-width: 400px) {
  .todos {
    width: 100%;
  }
}
</style>
