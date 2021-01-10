import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import firebase from 'firebase/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VScrollLock)
Vue.component('Divider', Divider)
Vue.component('Button', Button)

var firebaseConfig = {
  apiKey: 'AIzaSyD5dUIaOqpEGQhI4Bb1GtAEYK8ESZ6snas',
  authDomain: 'carepass-test.firebaseapp.com',
  databaseURL: 'https://carepass-test.firebaseio.com',
  projectId: 'carepass-test',
  storageBucket: 'carepass-test.appspot.com',
  messagingSenderId: '933753496890',
  appId: '1:933753496890:web:be98a01593e6483b7e9c03',
}
firebase.initializeApp(firebaseConfig)
new AOS.init()

new Vue({
  render: (h) => h(App),
}).$mount('#app')
