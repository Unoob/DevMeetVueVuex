import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/Base/BaseButton'
import BaseInput from './components/Base/BaseInput'
Vue.config.productionTip = false
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
