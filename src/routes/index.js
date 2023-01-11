import { createRouter, createWebHistory } from "vue-router";

import ListUsers from "../components/ListUsers";
import CreateUser from "../components/CreateUser";
import UserDetails from "../components/UserDetails";


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