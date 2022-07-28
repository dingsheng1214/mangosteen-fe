import { createRouter, createWebHashHistory } from 'vue-router'
import Bar from '../views/Bar'
import Foo from '../views/Foo'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Foo},
    { path: '/bar', component: Bar},
  ]
})

export default router
