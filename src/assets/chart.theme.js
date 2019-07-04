/***
 * iPreon使用的主题配置文件
 * @file chart.theme.js
 * @see(@url http://echarts.baidu.com/theme-builder/)
 * @author Mizuka<trionfo1993@hotmail.com>
 */

// 各种线之类的基本颜色
export const lineColor = '#E9E9E9'

// 基本的颜色指定
export const color = [
  '#336699',
  '#ff8e47',
  '#009966',
  '#FFCC00',
  '#0099CC',
  '#CC6600',
  '#CC6699',
  '#999966',
  '#336666',
  '#9933FF',
  '#999999',
  '#660000',
  '#CC9966',
  '#99CC33',
  '#FFCC99',
  '#FF0033',
  '#333333'
]

// 节点的半径
export const pointRadius = 0
// 节点的样式
export const pointType = 'line'

// 提示组件的外框
let tip = {
  backgroundColor: 'rgba(0,0,0,.75)',
  extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // 额外样式，阴影
}
// 提示组件
export const tooltip = Object.assign(
  {},
  {
    trigger: 'axis', // 触发方式
    axisPointer: {
      //        type: 'cross',
      label: Object.assign({}, tip)
    }
  },
  tip
)

// 线图
export const line = {
  symbol: pointType,
  symbolSize: pointRadius
}

// 线图
export const bar = {
  barMaxWidth: '40px'
}

// 轴线
export const axis = {
  boundaryGap: true,
  axisLine: {
    lineStyle: {
      color: lineColor
    }
  },
  axisLabel: {
    color: 'rgba(0,0,0,.65)'
  },
  axisTick: {},
  splitLine: {
    show: true,
    lineStyle: {
      color: lineColor,
      type: 'dotted'
    }
  }
}

/**
 * value轴带有一点特殊定义
 * @type {{} & {boundaryGap: boolean, axisLine: {lineStyle: {color: string}}, axisLabel: {color: string}, axisTick: {}, splitLine: {show: boolean, lineStyle: {color: string, type: string}}}}
 */
export const valueAxis = Object.assign(
  {
    position: 'auto' // 轴默认靠右
  },
  axis
)

/**
 * 最终输出的主题文件
 */
export default {
  color,
  tooltip,
  // 三种轴线
  timeAxis: axis,
  categoryAxis: axis,
  valueAxis,
  line,
  bar
}
