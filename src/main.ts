import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App'
import './style.css'
import Bar from './views/Bar'
import Foo from './views/Foo'


const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Foo},
    { path: '/bar', component: Bar},
  ]
})

app.use(router)
app.mount('#app')
