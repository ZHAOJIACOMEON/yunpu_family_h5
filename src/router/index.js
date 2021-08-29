import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import User from '@/views/userHome/user'

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: User
		}
	]
})