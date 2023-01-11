<template>
    <div class="users-wrapper">
        <div v-for="user in listUsers" :key="user.id" class="user-wrapper">
            <div>
                <p>{{ user.first_name }} {{ user.last_name }}</p>
                <p>{{ user.email }}</p>
            </div>
            <img src="../assets/logo.png" alt="user-image" />
            <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">Update User</router-link>
        </div>
    </div>
    <div>
        <button v-if="paginate" @click="toggler" class="btn">Previous</button>
        <button v-else @click="toggler" class="btn">Next</button>
    </div>
</template>


<script setup>
import { ref, watch } from "vue";

const listUsers = ref([]);
const pageNumber = ref(1)
const paginate = ref(false);

const getData = async () => {
    console.log(pageNumber.value)
    const res = await fetch(`https://reqres.in/api/users?page=${pageNumber.value}`);
    const finalRes = await res.json();
    console.log(finalRes.data);
    listUsers.value = finalRes.data;
}

const toggler = () => {

    if (!paginate.value) {
        pageNumber.value++;
        paginate.value = !paginate.value;

    } else {
        paginate.value = !paginate.value;
        pageNumber.value--

    }
}

getData()

watch(paginate, () => {
    getData();
})



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

.btn {
    color: blue;
}
</style>