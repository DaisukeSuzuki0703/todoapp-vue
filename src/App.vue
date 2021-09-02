<template>
  <div id="app">
    <h1>TodoApp</h1>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  }
}
</script>

<style>

</style>
