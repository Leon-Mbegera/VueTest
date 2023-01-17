<template>
    <div class="users-wrapper">
        <div v-for="user in listUsers" :key="user.id" class="user-wrapper">
            <div class="details-box">
                <div class="user-names">
                    <p>{{ user.first_name }} {{ user.last_name }}</p>
                    <p>{{ user.email }}</p>
                </div>
                <div>
                    <img :src="user.avatar" alt="user-image" />
                </div>
            </div>
            <button class="details-btn">
                <router-link :to="{ name: 'UserDetails', params: { id: user.id } }" class="router-link">Update
                    User</router-link>
            </button>
        </div>
    </div>
    <div>
        <button v-if="paginate" @click="toggler" class="update-btn">Previous</button>
        <button v-else @click="toggler" class="update-btn">Next</button>
    </div>
</template>


<script setup>
import { ref, watchEffect } from "vue";

const listUsers = ref([]);
const paginate = ref(false)


const stateProperties = {
    pageNumber: ref(1),
}


// const getData = async () => {
//     const res = await fetch(`https://reqres.in/api/users?page=${stateProperties.pageNumber.value}`);
//     const finalRes = await res.json();
//     console.log(finalRes.data);
//     listUsers.value = finalRes.data;
// }

const toggler = () => {

    if (!paginate.value) {
        stateProperties.pageNumber.value++;
        paginate.value = !paginate.value;

    } else {
        paginate.value = !paginate.value;
        stateProperties.pageNumber.value--

    }
}

// watch(paginate, () => {
//     getData();
// }, { immediate: true })

watchEffect(async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${stateProperties.pageNumber.value}`);
    const finalRes = await res.json();
    console.log(finalRes.data);
    listUsers.value = finalRes.data;
}, { immediate: true })



</script>

<style scoped>
.users-wrapper {
    padding: 5px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    row-gap: 30px;
    column-gap: 10px;
}

.user-wrapper {
    width: 420px;
    height: 240px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;

}

.details-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.details-btn {
    padding: 10px;
    background-color: #41B883;
    border: none;
    margin-bottom: 0;
}

.router-link {
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif
}

.update-btn {
    padding: 10px;
    width: 165px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background: crimson;
}

.user-name {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 500;
}
</style>