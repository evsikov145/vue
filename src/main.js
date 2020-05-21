import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import './assets/scss/variable.scss'
import './assets/scss/typografy.scss'
import 'material-design-icons-iconfont'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
