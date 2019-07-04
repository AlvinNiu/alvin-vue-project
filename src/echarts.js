import ECharts from 'vue-echarts/components/ECharts'
import _graphic from 'echarts/lib/util/graphic'

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/gridSimple'
import 'echarts/lib/component/visualMap'

// register component to use
export default {
  install(Vue, options) {
    // 使用注册的主题
    if (options.theme && typeof options.theme === 'object') {
      ECharts.registerTheme('custom', options.theme)

      ECharts.props.theme = {
        type: ECharts.props.theme,
        default: 'custom'
      }
    }

    // 强制auto-resize
    if (options.autoResize) {
      ECharts.props.autoResize = {
        type: ECharts.props.autoResize,
        default: true
      }
    }

    Vue.component('e-charts', ECharts)
  }
}

export const graphic = _graphic
