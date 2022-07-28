import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { First, Fourth, Second, Third } from '../components/welcome'
import Welcome from '../views/Welcome'

const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {path: '', redirect: '/welcome/1'},
      {path: '1', component: First},
      {path: '2', component: Second},
      {path: '3', component: Third},
      {path: '4', component: Fourth},
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
