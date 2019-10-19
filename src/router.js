import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Sign in.vue'
import Login from './views/Login.vue'
import Table from './views/Table.vue'
import Homee from './views/Homee.vue'
import Difficult from './views/Difficult.vue'
import Subject from './views/Subject.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home/table',
      name: 'table',
      component: Table
    },
    {
      path: '/signin',
      name: 'sign in',
      component: Signin
    },
    {
      path: '/homee',
      name: 'homee',
      component: Homee
    },
    {
      path: '/difficult',
      name: 'difficult',
      component: Difficult
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
