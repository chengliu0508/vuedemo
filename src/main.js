import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'
import axios from 'axios'
import echarts from 'echarts'
import store from './store'

Vue.prototype.$api = axios
Vue.prototype.$echarts = echarts

Vue.use(router)
Vue.use(ElementUI)

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
