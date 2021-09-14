<template lang="html">
  <div id="app">
    <h1 class="app__title">TodoApp</h1>
    <app-pages></app-pages>
  </div>
</template>

<script>
import Page from './Pages/Page'

export default {
  name: "App",
  components: {
    AppPages: Page,
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
</style>
