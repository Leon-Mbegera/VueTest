<template>
    <h1>User Details Page</h1>
</template>

<script>


export default {
    data() {
        return {
            userId: this.$route.params.id,
            userObject: {}
        }
    },
    methods: {
        async getSingleUser() {
            console.log("user id", this.userId);
            const res = await fetch(`https://reqres.in/api/users/${this.userId}`);
            const finalRes = await res.json();
            console.log(finalRes.data);
            this.userObject = finalRes.data;

        }
    },
    mounted() {
        this.getSingleUser()
    }
}

</script>

<style>

</style>