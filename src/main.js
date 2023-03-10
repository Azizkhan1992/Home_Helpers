import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.scss'
import router from './router'
import store from './store'
import './mixins/scrollPosition'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
