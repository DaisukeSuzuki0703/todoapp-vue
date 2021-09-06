<template>
  <div class="todos">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default ({
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  }
})
</script>
<style scoped>
.todos {
  width: 80%;
  height: 100%;
  background-color: #fff;
}
</style>
