<template>
  <ul class="todo__list">
    <app-list-item></app-list-item>
  </ul>
</template>

<script>
import ListItem from '../components/ListItem'

export default ({
  components: {
    AppListItem: ListItem
  }
})
</script>
