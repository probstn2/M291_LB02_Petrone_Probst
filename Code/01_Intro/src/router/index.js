import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Shop from '../components/Shop'
Vue.use(VueRouter);

export const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop
    }
]






//Setting up the Router Instance
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router