<template>
  <!-- <UsersList /> -->
  <CreateUser />
</template>

<script>
// import UsersList from './components/UsersList.vue'
import CreateUser from './components/CreateUser.vue';

export default {
  name: 'App',
  components: {
    // UsersList,
    CreateUser
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
