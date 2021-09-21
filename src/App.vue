<template lang="html">
  <div id="app">
    <div class="app__header" v-if="showContent === false">
      <h1 class="app__title">TodoApp</h1>
    </div>
    <app-pages></app-pages>
  </div>
</template>

<script>
import Page from './Pages/Page'

export default {
  name: "App",
  components: {
    AppPages: Page,
  },
  computed: {
    showContent() {
      return this.$store.state.showContent;
    }
  }
};
</script>

<style scoped>
#app {
  width: 800px;
  margin: 0 auto;
  height: 600px;
  padding-top: 100px;
}
.app__title {
  margin: 0;
}
@media screen and (max-width: 400px) {
  #app {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .app__header {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 52px;
    background-color: #add8e6;
    display: flex;
    align-items: center;
  }
  .app__title {
    padding-left: 10px;
  }
}
</style>
