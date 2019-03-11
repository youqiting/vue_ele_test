import Vue from 'vue'
import Router from 'vue-router'

import main from './pages/main.vue'

import home from './pages/home.vue'
import user_register from './pages/user_register.vue'
import user_login from './pages/user_login.vue'

import message from './pages/message.vue'
import message_lock from './pages/message_lock.vue'
import message_detail from './pages/message_detail.vue'
import publishMessage from './pages/publishMessage.vue'

import news from './pages/news.vue'
import help from './pages/help.vue'
import about from './pages/about.vue'
import test from './pages/test.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:'/',component: user_login},
        {path:'/user_login',component: user_login},
        {
            path:'/main',
            component: main,
            children: [
                {path:'', component: home},
                {path:'/home', component: home},
                //user
                {path:'/user_register', component: user_register},
        
                // message
                {path:'/message', component: message},
                {path:'/message_lock', component: message_lock},
                {path:'/message_detail', component: message_detail},
                {path:'/publishMessage', component: publishMessage},
        
                {path:'/news', component: news},
                {path:'/help', component: help},
                {path:'/about', component: about},
                {path:'/test', component: test}
             ]
        },
        
    ]
})