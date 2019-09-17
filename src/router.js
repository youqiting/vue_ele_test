import Vue from 'vue'
import Router from 'vue-router'

import main from './pages/main.vue'


Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:'/',component: () => import('./pages/user_login.vue') },
        {path:'/user_login',component:  () => import('./pages/user_login.vue')},
        {
            path:'/main',
            component: main,
            children: [
                {path:'', name: 'message' , component:  () => import('./pages/message.vue')},
                //user
                {path:'/user_register', component: () => import('./pages/user_register.vue')},
        
                // message
                {path:'/message', component: () => import('./pages/message.vue')},
                {path:'/message_open', component: () => import('./pages/message_open.vue')},
                {path:'/message_detail', component: () => import('./pages/message_detail.vue')},
                {path:'/publishMessage', component: () => import('./pages/publishMessage.vue')},
        
                {path:'/js_test', component: () => import('./pages/js_test.vue')},
                {path:'/css3_test', component: () => import('./pages/css3_test.vue')},
                {path:'/about', component: () => import('./pages/about.vue')}
             ]
        },
        
    ]
})