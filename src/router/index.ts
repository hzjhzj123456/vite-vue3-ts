import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Home from "@/view/Home.vue";
import Vuex from "@/view/Vuex.vue";
import component from "@/view/Home.vue";
import PageList from "@/view/PageList.vue";
import HomePage from "@/view/HomePage/HomePage.vue"
const routes : Array<RouteRecordRaw> = [
		{
			path: '/',
			redirect: '/pageList'
		},
    {
      path:"/vuex",
      name:"Vuex",
      component:Vuex,
    },
		{
			path:"/pageList",
			name:"pageList",
			component:PageList,
		},
		{
			path:"/Home",
			name:"Home",
			component:Home,
		},
		{
			path:"/HomePage",
			name:"HomePage",
			component:HomePage
		}
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;
