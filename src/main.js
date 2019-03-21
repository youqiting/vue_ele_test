import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import api from './config/api.js'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.prototype.$api = api;


new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
