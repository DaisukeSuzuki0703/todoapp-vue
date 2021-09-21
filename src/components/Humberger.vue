<template>
  <div class="humberger">
    <div class="humberger__menu" @click="modalOpen">
      <div class="humberger__icon"></div>
      <div class="humberger__icon"></div>
      <div class="humberger__icon"></div>
    </div>
    <div class="humberger__body" v-if="showContent">
      <ul class="icon__list">
        <li class="icon" @click="initTargetTodo">
          <router-link
            to="/"
            class="icon__link"
            exact
            active-class="icon__link__active"
            ><font-awesome-icon icon="th-list" class="fa-2x"
          /><span class="icon__title">Top</span></router-link>
        </li>
        <li class="icon" @click="initTargetTodo">
          <router-link
            to="/completed"
            class="icon__link"
            exact
            active-class="icon__link__active"
            ><font-awesome-icon icon="check-circle" class="fa-2x"
          /><span class="icon__title">completed</span></router-link>
        </li>
        <li class="icon" @click="initTargetTodo">
          <router-link
            to="/incomplete"
            class="icon__link"
            exact
            active-class="icon__link__active"
            ><font-awesome-icon icon="bomb" class="fa-2x"
          /><span class="icon__title">incomplete</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    showContent() {
      return this.$store.state.showContent;
    }
  },
  methods: {
    modalOpen() {
      this.$store.dispatch("modalOpen");
    },
    initTargetTodo() {
      this.$store.dispatch("initTargetTodo");
    }
  }
}
</script>


<style scoped>
.humberger__menu {
  width: 50px;
  height: 50px;
  background-color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  margin-left: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index:10;
}
.humberger__body {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
.humberger__icon {
  width: 30px;
  height: 2px;
  background-color: #a9a9a9;
  margin-bottom: 10px;
}
.humberger__icon:last-child {
  margin-bottom: 0;
}
.humberger__body {
  position: absolute;
  top: 0;
  right: 0;
}
ul {
  padding: 0;
  margin: 0;
}
.icon__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 30px 15px;
}
.icon {
  margin-bottom: 30px;
}
.icon__link {
  text-decoration: none;
  color: #696969;
  display: flex;
  align-items: center;
}
.icon__link.icon__link__active {
  color: #00bfff;
}
.icon__title {
  margin-left: 15px;
}
.sidevar {
  width: 20%;
  height: 100%;
  background-color: #f5f5f5;
}
.icon:last-child {
  margin-bottom: 0;
}
.sidevar {
  display: block;
}
</style>