import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
// import LoginVue from '../components/LoginVue.vue'

Vue.use(Router)
Home.use(Router)

// const routes= [
//     { path:'/',
//     component:Home}
// ]
// const router=VueRouter.createRouter({
//     history:Router.createWebHashHistory(),
//     routes:routes
// })
export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login',
            component:()=>import('../components/LoginVue.vue')//路由的配置
        },
        {
            path:'/login',
            name:'Login',
            component:()=>import('../components/LoginVue.vue')//路由的配置
        },
        {
            path:'/home',
            component:Home
            // component:()=>import('../component/Home.vue')//路由的配置
        }
    ],
    mode:'history'
})
// export default router