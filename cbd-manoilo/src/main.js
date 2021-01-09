import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/styles/style.scss'


import vuetify from '@/plugins/vuetify' // path to vuetify export

import VueSplide from '@splidejs/vue-splide';

Vue.config.productionTip = false

Vue.use( VueSplide );

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')





