import { createRouter, createWebHistory } from "vue-router";
import ListUsers from "../components/ListUsers.vue";

const CreateUser = () => import("../components/CreateUser");
// const UserDetails = defineAsyncComponent(() => import("../components/UserDetails"));
const UpdateUser = () => import("../components/UpdateUser");
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
        name: "UpdateUser",
        component: UpdateUser
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;