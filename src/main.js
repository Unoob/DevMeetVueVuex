import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/Base/BaseButton'
Vue.config.productionTip = false
Vue.component('Button', BaseButton)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
