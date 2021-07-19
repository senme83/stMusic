import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import VueTouch from 'vue-touch'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});