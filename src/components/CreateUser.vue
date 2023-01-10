<template>
    <form>
        <h2 class="form-heading">
            Please add details for the new user
        </h2>
        <div>
            <div>
                <label for="new-email-input">Email:</label>
                <input type="email" id="new-email-input" name="new-email" autocomplete="off" v-model="emailInput"
                    class="input__lg" />
            </div>
            <div>
                <label for="new-password-input">Password:</label>
                <input type="text" id="new-password-input" name="new-password" autocomplete="off"
                    v-model="passwordInput" class="input__lg" />
            </div>
        </div>
        <button type="submit" @click="onSubmit">Add User</button>
    </form>

</template>

<script setup>

import { ref } from "vue";

const emailInput = ref("")
const passwordInput = ref("")






</script>