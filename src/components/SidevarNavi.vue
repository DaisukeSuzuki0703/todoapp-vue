<template>
  <aside class="sidevar">
    <ul class="icon__list">
      <li class="icon" @click="initTargetTodo">
        <router-link
          to="/"
          class="icon__link"
          exact
          active-class="icon__link__active"
          ><font-awesome-icon icon="th-list" class="fa-2x"
        /></router-link>
      </li>
      <li class="icon" @click="initTargetTodo">
        <router-link
          to="/completed"
          class="icon__link"
          exact
          active-class="icon__link__active"
          ><font-awesome-icon icon="check-circle" class="fa-2x"
        /></router-link>
      </li>
      <li class="icon" @click="initTargetTodo">
        <router-link
          to="/incomplete"
          class="icon__link"
          exact
          active-class="icon__link__active"
          ><font-awesome-icon icon="bomb" class="fa-2x"
        /></router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    initTargetTodo() {
      this.$store.dispatch("initTargetTodo");
    },
  },
};
</script>


<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.icon__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 30px 15px;
}
.icon {
  margin-bottom: 30px;
}
.icon__link {
  text-decoration: none;
  color: #696969;
}
.icon__link.icon__link__active {
  color: #00bfff;
}
.sidevar {
  width: 20%;
  height: 618px;
  background-color: #f5f5f5;
}
.icon:last-child {
  margin-bottom: 0;
}
@media screen and (max-width: 400px) {
  .sidevar {
    display: none;
  }
}
</style>