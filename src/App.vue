<template>
  <div id="nav-header">
    <router-link to="/">Our Users</router-link> |
    <router-link :to="{ name: 'CreateUser' }">Create New User</router-link>
  </div>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 40px 30px;
}
</style>
