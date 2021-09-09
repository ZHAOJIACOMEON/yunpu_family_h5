import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import User from "@/views/userHome/user"
import FamilyHome from "@/views/familyHome/family"
import SearchHome from "@/views/searchHome/search"
import SearchResult from "@/views/searchHome/searchResult"

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
		},{
			path: "/searchHome",
			name: "SearchHome",
			component: SearchHome
		},{
			path: "/searchResult",
			name: "SearchResult",
			component: SearchResult
		}
	]
})