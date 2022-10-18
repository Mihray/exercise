import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'/login',
            component:()=>import('../components/LoginVue.vue')//路由的配置
        },
        {
            path:'/login',
            name:'LoginVue',
            component:()=>import('../components/LoginVue.vue')//路由的配置
        },
        {
            path:'/Home',
            name:'Home',
            // component:Home
            component:()=>import('../components/Home.vue')//路由的配置
        }
    ],
    mode:'history'
})
export default router