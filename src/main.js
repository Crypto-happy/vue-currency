import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import './registerServiceWorker'
import store from './store'
import Axios from 'axios'
Vue.prototype.$http = Axios;
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
