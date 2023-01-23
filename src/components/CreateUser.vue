<template>
    <div id=form-wrapper>
        <h2 class="form-heading">
            Please add details for the new user
        </h2>
        <form @submit.prevent="onSubmit">

            <label for="new-name-input">Name:</label>
            {{ console.log(computedName) }}
            <input type="text" id="new-name-input" name="new-name" autocomplete="off" v-model="computedName"
                class="input__lg p" required placeholder="Your name..." />
            <label for="new-job-input">Job:</label>
            <input type="text" id="new-job-input" name="new-job" autocomplete="off" v-model="computedJob"
                class="input__lg" required placeholder="job title..." />
            <input type="submit" value="Create User" />
        </form>
    </div>
</template>

<script setup>

import { ref, computed } from "vue";

const nameInput = ref("");
const jobInput = ref("");

const computedName = computed(() => {

    return nameInput.value.trim();
});

const computedJob = computed(() => jobInput.value.trim());

const onSubmit = () => {

    if (!nameInput.value || !jobInput.value) return;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInput.value,
            job: jobInput.value
        })
    })
        .then((response) => response.json())
        .then((data) => {
            alert(`${data.name} has been created successfully!`)
            console.log("post request data", data);
        })
}
</script>

<style scoped>
#form-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.form-heading {
    margin: 20px auto;
}

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
}

input[type=text] {
    width: 600px;
    padding: 12px 20px;
    margin: 12px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 600px;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 18px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>