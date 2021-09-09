<template>
  <div class="todos">
    <app-wrapper>
      <app-resister></app-resister>
    </app-wrapper>
  </div>
</template>

<script>
import Wrapper from '../components/Wrapper'
import Resister from '../components/Resister'

export default ({
  components: {
    AppWrapper: Wrapper,
    AppResister: Resister,
  }
})
</script>
<style scoped>
.todos {
  width: 80%;
  height: 100%;
  background-color: #fff;
  /* padding: 20px; */
}
</style>
