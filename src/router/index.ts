import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Home from "@/view/Home.vue";
import Vuex from "@/view/Vuex.vue";
import component from "@/view/Home.vue";

const routes : Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"Home",
        component:Home,
    },
    {
        path:"/vuex",
        name:"Vuex",
        component:Vuex,
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;