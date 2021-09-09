<template>
  <div class="todos">
    <app-wrapper>
    </app-wrapper>
  </div>
</template>

<script>
import Wrapper from '../components/Wrapper'

export default ({
  components: {
    AppWrapper: Wrapper,
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
