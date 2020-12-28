import Vue from 'vue'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'

Vue.config.productionTip = false
Vue.component('Divider', Divider)
Vue.component('Button', Button)
new Vue({
  render: h => h(App),
}).$mount('#app')
