<template>
    <h1>User Details Page</h1>
    <form @submit.prevent="putUserDetails">
        <h2 class="form-heading">
            Please edit only the first name, last name and job fields !
        </h2>
        <div>
            <div>
                <label for="first-name-input">First Name:</label>
                <input type="text" id="first-name-input" name="first-name" autocomplete="off" v-model="firstName"
                    class="input__lg" required />
            </div>
            <div>
                <label for="last-name-input">Last Name:</label>
                <input type="text" id="last-name-input" name="last-name" autocomplete="off" v-model="lastName"
                    class="input__lg" required />
            </div>
            <div>
                <label for="new-job-input">Job:</label>
                <input type="text" id="new-job-input" name="new-job" autocomplete="off" v-model="jobInput"
                    class="input__lg" required />
            </div>
            <div>
                <label for="email-input">Email:</label>
                <input type="email" id="email-input" name="email-input" autocomplete="off" v-model="emailInput"
                    class="input__lg" disabled />
            </div>
        </div>
        <button type="submit">Edit User</button>
    </form>
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
                    alert(`${data.name} has been created successfully!`)
                    console.log("put request data", data);
                })

        }
    },
    mounted() {
        this.getUserDetails()
    }
}

</script>

<style>

</style>