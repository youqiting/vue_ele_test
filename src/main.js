import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import api from './config/api.js'
import mock from './mock/mock'
import commonservices from './services/commonservices.js'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

mock.mockData();
Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.commonservices = commonservices;

console.log(router);
new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
