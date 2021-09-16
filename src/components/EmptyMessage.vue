<template>
  <div class="emptyMessage">
    <p class="emptyMessage__text">{{emptyMessage}}</p>
  </div>
</template>

<script>

export default ({
  computed: {
    emptyMessage() {
      return this.$store.state.emptyMessage;
    }
  }
})
</script>

<style scoped>
.emptyMessage {
  text-align: center;
}
</style>
