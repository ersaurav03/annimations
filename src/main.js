import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueResource);
Vue.http.options.root='https://jsmpj-firebase.firebaseio.com/data.json';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
