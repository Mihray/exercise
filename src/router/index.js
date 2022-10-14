import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login',
            component:()=>import('@/component/LoginVue.vue')//路由的配置
        },
        {
            path:'/login',
            name:'LoginVue',
            component:()=>import('@/component/LoginVue.vue')//路由的配置
        },
        {
            path:'/Home',
            name:'Home',
            // component:Home
            component:()=>import('@/component/Home.vue')//路由的配置
        }
    ],
    mode:'history'
})