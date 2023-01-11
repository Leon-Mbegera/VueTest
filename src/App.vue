<template>
  <div id="nav-header">
    <router-link to="/">Our Users</router-link>
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
  margin: 0 30px 30px 30px;
}

#nav-header {
  padding: 15px 0;
  display: flex;
  justify-content: center;
}

#nav-header a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
}

#nav-header a.router-link-exact-active {
  background: crimson;
  color: white;
}
</style>
