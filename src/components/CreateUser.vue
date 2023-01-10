<template>
    <form @submit.prevent="onSubmit">
        <h2 class="form-heading">
            Please add details for the new user
        </h2>
        <div>
            <div>
                <label for="new-name-input">Name:</label>
                <input type="text" id="new-name-input" name="new-name" autocomplete="off" v-model="nameInput"
                    class="input__lg" required />
            </div>
            <div>
                <label for="new-job-input">Job:</label>
                <input type="text" id="new-job-input" name="new-job" autocomplete="off" v-model="jobInput"
                    class="input__lg" required />
            </div>
        </div>
        <button type="submit">Create User</button>
    </form>

</template>

<script setup>

import { ref } from "vue";

const nameInput = ref("")
const jobInput = ref("")

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