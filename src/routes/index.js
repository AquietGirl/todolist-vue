import Vue from 'vue'
import VueRouter from 'vue-router'
import All from "@/pages/All";
import Finished from "@/pages/Finished";

Vue.use(VueRouter);

const routes = [
    {
        path: '/all',
        name: 'all',
        component: All,
    },
    {
        path: '/finished',
        name: 'finished',
        component: Finished
    }
];

const router = new VueRouter({
    routes
});

export default router


