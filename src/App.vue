<template>
  <div>
    <div v-for="user in listUsers" :key="user.id">
      <div>
        <p>{{ user.first_name }} {{ user.last_name }}</p>
        <p>{{ user.email }}</p>
      </div>
      <img src={{user.avatar}} alt="user-image" />
    </div>
  </div>
</template>


<script setup>

import { ref } from "vue";

const listUsers = ref([]);

const getData = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const finalRes = await res.json();
  console.log(finalRes.data);
  listUsers.value = finalRes.data;
}


getData()

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
