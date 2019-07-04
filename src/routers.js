import HelloWorld from '@/components/HelloWorld.vue'
import VueEchartsTest from '@/components/VueEchartsTest.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/vue-echarts-test',
    name: 'echarts',
    component: VueEchartsTest
  }
]
export default routers
