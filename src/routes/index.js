import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ListUsers from "../components/ListUsers.vue";

const CreateUser = defineAsyncComponent(() => import("../components/CreateUser"));
const UserDetails = defineAsyncComponent(() => import("../components/UserDetails"));

const routes = [
    {
        path: "/",
        name: "Users",
        component: ListUsers
    },
    {
        path: "/users/new",
        name: "CreateUser",
        component: CreateUser
    },
    {
        path: "/users/:id",
        name: "UserDetails",
        component: UserDetails
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;