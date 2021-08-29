import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import User from "@/views/userHome/user"
import FamilyHome from "@/views/familyHome/family"

export default new VueRouter({
	routes: [
		{
			path: "/",
			name: "Home",
			component: User
		},{
			path: "/familyHome",
			name: "FamilyHome",
			component: FamilyHome
		}
	]
})