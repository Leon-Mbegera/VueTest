<template>
  <UsersList />
</template>

<script>
import UsersList from './components/UsersList.vue'

export default {
  name: 'App',
  components: {
    UsersList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 40px 30px;
}
</style>
