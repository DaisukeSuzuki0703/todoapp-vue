<template>
  <aside class="sidevar">
    <ul class="icon__list">
      <li class="icon"><font-awesome-icon icon="th-list" class="fa-2x"/></li>
      <li class="icon"><font-awesome-icon icon="check-circle" class="fa-2x"/></li>
      <li class="icon"><font-awesome-icon icon="bomb" class="fa-2x"/></li>
    </ul>
  </aside>
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.icon__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 30px 15px;
}
.icon {
  margin-bottom: 30px;
}
.sidevar {
  width: 20%;
  height: 100%;
  background-color: #f5f5f5;
}
.icon:last-child {
  margin-bottom: 0;
}
</style>