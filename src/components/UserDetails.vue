<template>
    <div id="form-wrapper">
        <h2 class="form-heading">
            Please edit only the first name, last name and job fields !
        </h2>
        <form @submit.prevent="putUserDetails">
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" name="first-name" autocomplete="off" v-model="firstName"
                class="input__lg" required />
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" name="last-name" autocomplete="off" v-model="lastName"
                class="input__lg" required />
            <label for="new-job-input">Job:</label>
            <input type="text" id="new-job-input" name="new-job" autocomplete="off" v-model="jobInput" class="input__lg"
                required />
            <label for="email-input">Email:</label>
            <input type="email" id="email-input" name="email-input" autocomplete="off" v-model="emailInput"
                class="input__lg" disabled />
            <input type="submit" value="Edit User" />
        </form>
    </div>
</template>

<script>


export default {
    data() {
        return {
            userId: this.$route.params.id,
            nameInput: "",
            firstName: "",
            lastName: "",
            jobInput: "",
            emailInput: ""
        }
    },
    methods: {
        async getUserDetails() {
            console.log("user id", this.userId);
            const res = await fetch(`https://reqres.in/api/users/${this.userId}`);
            const finalRes = await res.json();
            console.log(finalRes.data);
            this.firstName = finalRes.data.first_name;
            this.lastName = finalRes.data.last_name;
            this.emailInput = finalRes.data.email
        },

        async putUserDetails() {

            if (!this.firstName || !this.lastName || !this.jobInput) return;

            fetch(`https://reqres.in/api/users/${this.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.firstName.trim() + " " + this.lastName.trim(),
                    job: this.jobInput
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(`${data.name} has been updated successfully!`)
                    console.log("put request data", data);
                })

        }
    },
    mounted() {
        this.getUserDetails()
    }
}

</script>

<style scoped>
#form-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
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

input[type=text],
input[type=email] {
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