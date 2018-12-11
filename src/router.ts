import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from "./views/Projects.vue"
import Team from "./views/Team.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/projects',name: 'projects',component: Projects},
    {path: '/team',name: 'team',component: Team},
    {path: '/',name: 'home',component: Home},
    {path: '/about',name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue')}
  ]
})
