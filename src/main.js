import Vue from 'vue'
import App from './App.vue'
import routers from './routers'
import VueRouter from 'vue-router'
import echarts from './echarts'
import chartTheme from '@/assets/chart.theme'

Vue.config.productionTip = false

Vue.use(echarts, { autoResize: true, theme: chartTheme })

Vue.use(VueRouter)
// Vue.component('e-charts', ECharts)
const router = new VueRouter({
  mode: 'hash',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
