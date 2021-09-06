import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import routes from './router'

// start font-awsome関連
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faCheckCircle, faBomb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThList, faCheckCircle, faBomb);

Vue.component('font-awesome-icon', FontAwesomeIcon)
// end font-awsome関連

// Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
