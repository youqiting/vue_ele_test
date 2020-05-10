import Vue from 'vue'
import Router from 'vue-router'

import main from '../pages/main.vue'


Vue.use(Router);

export const userRoutes = [
    {path:'/',component: () => import('../pages/myTest/user_login.vue') },
    {path:'/user_login',component:  () => import('../pages/myTest/user_login.vue')},
    {
        path:'/main',
        component: main,
        children: [
            {path:'', name: 'message' , component:  () => import('../pages/myTest/message.vue')},
            //user
            {path:'/user_register', component: () => import('../pages/userPages/user_register.vue')},

            // message
            {path:'/message', component: () => import('../pages/myTest/message.vue')},
            {path:'/message_open', component: () => import('../pages/myTest/message_open.vue')},
            {path:'/message_detail', component: () => import('../pages/myTest/message_detail.vue')},
            {path:'/publishMessage', component: () => import('../pages/myTest/publishMessage.vue')},

            {path:'/js_test', component: () => import('../pages/myTest/js_test.vue')},
            {path:'/css3_test', component: () => import('../pages/myTest/css3_test.vue')},
            {path:'/svg_test', component: () => import('../pages/myTest/svg_test.vue')},
            {path:'/about', component: () => import('../pages/myTest/about.vue')}
         ]
    },

]

const ctreatRouter = ()=> new Router({
    // mode:'history',
    //scrollBehavior可解决：使用keep-alive标签后部分安卓机返回缓存页位置不精确问题（使用scrollBehavior中的异步滚动操作http://www.luyixian.cn/javascript_show_163634.aspx）
    scrollBehavior: ()=>({ y:0 }),
    routes: userRoutes
})

const router = ctreatRouter();

//借鉴github:vue-element-admin写法，项目里用于用户退出时、changeRoles时使用
export function  resetRouter() {
    const newRouer = ctreatRouter();
    router.matcher = newRouer.matcher;
}

export  default router;


// 旧的
// export default new Router({
//     // mode:'history',
//     routes:[
//         {path:'/',component: () => import('../pages/myTest/user_login.vue') },
//         {path:'/user_login',component:  () => import('../pages/myTest/user_login.vue')},
//         {
//             path:'/main',
//             component: main,
//             children: [
//                 {path:'', name: 'message' , component:  () => import('../pages/myTest/message.vue')},
//                 //user
//                 {path:'/user_register', component: () => import('../pages/userPages/user_register.vue')},
//
//                 // message
//                 {path:'/message', component: () => import('../pages/myTest/message.vue')},
//                 {path:'/message_open', component: () => import('../pages/myTest/message_open.vue')},
//                 {path:'/message_detail', component: () => import('../pages/myTest/message_detail.vue')},
//                 {path:'/publishMessage', component: () => import('../pages/myTest/publishMessage.vue')},
//
//                 {path:'/js_test', component: () => import('../pages/myTest/js_test.vue')},
//                 {path:'/css3_test', component: () => import('../pages/myTest/css3_test.vue')},
//                 {path:'/svg_test', component: () => import('../pages/myTest/svg_test.vue')},
//                 {path:'/about', component: () => import('../pages/myTest/about.vue')}
//              ]
//         },
//
//     ]
// })
