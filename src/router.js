import Vue from 'vue'
import Router from 'vue-router'

import main from './pages/main.vue'

import user_register from './pages/user_register.vue'
import user_login from './pages/user_login.vue'

import message from './pages/message.vue'
import message_open from './pages/message_open.vue'
import message_detail from './pages/message_detail.vue'
import publishMessage from './pages/publishMessage.vue'

import search from './pages/search.vue'
import about from './pages/about.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:'/',component: user_login},
        {path:'/user_login',component: user_login},
        {
            path:'/main',
            component: main,
            name: 'main',
            children: [
                {path:'', name: 'message' , component: message},
                //user
                {path:'/user_register', component: user_register},
        
                // message
                {path:'/message', component: message},
                {path:'/message_open', component: message_open},
                {path:'/message_detail', component: message_detail},
                {path:'/publishMessage', component: publishMessage},
        
                {path:'/search', component: search},
                {path:'/about', component: about}
             ]
        },
        
    ]
})