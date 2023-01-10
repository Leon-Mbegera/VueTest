<script setup>

import { ref } from "vue";

const listUsers = ref([]);

const getData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const finalRes = await res.json();
    console.log(finalRes.data);
    listUsers.value = finalRes.data;
}

}

getData()

</script>

<template>

</template>
