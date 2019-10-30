import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Table from './views/Table.vue'
import Homee from './views/Homee.vue'
import Difficult from './views/Difficult.vue'
import Subject from './views/Subject.vue'
import Game from './views/Game.vue'
import Prueba2 from './views/Prueba2.vue'
import Just from './views/Just.vue'
import gameMathDif from './views/gameMathDif.vue'
import FacilComputer from './views/FacilComputer.vue'
import DifComputer from './views/DifComputer.vue'
import FacilGeography from './views/FacilGeography.vue'
import DifGeography from './views/DifGeography.vue'
import FacilHist from './views/FacilHist.vue'
import DifHist from './views/DifHist.vue'


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
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/prueba2',
      name: 'prueba2',
      component: Prueba2
    },
    {
      path: '/just',
      name: 'just',
      component: Just
    },
    {
      path: '/gameMathDif',
      name: 'gameMathDif',
      component: gameMathDif
    },
    {
      path: '/facilComputer',
      name: 'facilCompiter',
      component: FacilComputer
    },
    {
      path: '/difComputer',
      name: 'difCompiter',
      component: DifComputer
    },
    {
      path: '/facilGeo',
      name: 'facilGeo',
      component: FacilGeography
    },
    {
      path: '/difGeo',
      name: 'difGeo',
      component: DifGeography
    },
    {
      path: '/facilHist',
      name: 'facilHist',
      component: FacilHist
    },
    {
      path: '/difHist',
      name: 'difHist',
      component: DifHist
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
