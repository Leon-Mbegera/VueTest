<template>
    <div class="users-wrapper">
        <div v-for="user in listUsers" :key="user.id" class="user-wrapper">
            <div>
                <p>{{ user.first_name }} {{ user.last_name }}</p>
                <p>{{ user.email }}</p>
            </div>
            <img src="../assets/logo.png" alt="user-image" />
            <img src={{user.avatar}} alt="user-image" />

        </div>
    </div>
</template>


<script setup>

import { ref } from "vue";

const listUsers = ref([]);
const pageNumber = ref(1)

const getData = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${pageNumber.value}`);
    const finalRes = await res.json();
    console.log(finalRes.data);
    listUsers.value = finalRes.data;
}


getData()

</script>

<style scoped>
.users-wrapper {
    border: 2px solid red;
    padding: 5px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    row-gap: 30px;
}

.user-wrapper {
    width: 420px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    display: flex;
    justify-content: center;
}
</style>