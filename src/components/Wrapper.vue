<template>
  <div class="wrapper">
    <app-header></app-header>
    <main class="main">
      <!-- ここにTODOのメインが入る -->
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  }
})
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
</style>
