import Vue from 'vue'
import Router from 'vue-router'
import MessagesIndex from './views/MessagesIndex.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: MessagesIndex },
    { path: '/messages', name: 'messages-index', component: MessagesIndex },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
