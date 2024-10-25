# Echarts 使用DEMO

```vue
<template>
  <div class="echarts-demo"
       :style="{width, height}">
    <div class="header">
      <div class="title">
        {{ config.title }}
      </div>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="container"
         v-loading="loading">
      <div v-show="!noTableData"
           class="crmwas-support-chart"
           ref="chartBox"></div>
      <div v-show="noTableData"
           class="nodata d-flex justify-center items-center flex-col">
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts5'
  import mixins from 'public/mixins'
  import { debounce } from 'lodash'
  export default {
    mixins: [mixins],
    props: {
      disabledClick: {
        type: Boolean,
        default: false
      },
      width: {
        type: [String, Number],
        default: '100%'
      },
      height: {
        type: [String, Number],
        default: '100%'
      },
      config: {
        required: true,
        type: Object,
        default: () => { }
      }
    },
    data () {
      return {
        noTableData: false,
        currentIndex: -1,
        loading: false,
        dataFlag: '10',
        chart: null,
        option: this.config.option
      }
    },
    activated () {
      /**
       * 解决在切换页签后，修改视窗大小后，因为keep-live切换失去宽高造成chart宽高丢失，并触发resize()事件，造成无法显示图表
       * 解决办法：页签激活后触发echart resize()
       * **/
      if (this.chart) {
        this.__resizeHanlder()
      }
    },
    mounted () {
      this.initChart()
    },
    beforeDestroy () {
      this.chart.off('legendselectchanged', this.__resizeHanlder)
      this.chart.off('click', this.click)
      window.removeEventListener('resize', this.__resizeHanlder)
      if (this.chart) {
        this.chart.dispose() // 销毁chart
      }
    },
    methods: {
      initChart () {
        this.chart = echarts.init(this.$refs.chartBox)
        this.chart.on('click', this.click)
        this.__resizeHanlder = debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 10)
        window.addEventListener('resize', this.__resizeHanlder)
      },
      setNodata () {
        this.noTableData = true
      },
      setData ({ idx = 0, data = [], yAxisIndex = 0 }) {
        if (!data || !data.length) {
          this.noTableData = true
          return
        }
        this.noTableData = false
        if (!this.chart) {
          this.option.series[idx].data = data
          this.initChart()
        } else {
          this.option.series[idx].data = data
        }
      },
      // 设置鼠标手势
      setCursor ({ idx = 0, cursor = 'defualt' }) {
        this.option.series[idx].cursor = cursor
        this.option.xAxis[idx].triggerEvent = cursor === 'pointer'
      },
      // 设置x轴数据 例如： ['Mon', 'Tue'],
      setXAxis ({ idx = 0, data = [] }) {
        this.option.xAxis[idx].data = data
      },
      // 名字
      setName ({ idx = 0, name = '' }) {
        this.option.xAxis[idx].name = name
      },
      setSeriesName ({ idx = 0, name = '' }) {
        this.option.series[idx]['name'] = name
      },
      setSeries ({ idx = 0, key = '', value = '' }) {
        this.option.series[idx][key] = value
      },
      setyAxisName ({ idx = 0, name = '' }) {
        this.option.yAxis[idx]['name'] = name
      },
      setGraphicStyleText ({ idx = 0, text = '' }) {
        this.option.graphic[idx]['style']['text'] = text // graphic
      },
      setyAxis ({ idx = 0, key = '', value = '' }) {
        this.option.yAxis[idx][key] = value
      },
      setLegend ({ key = '', value = '' }) {
        this.option.legend[key] = value
      },
      getyAxis ({ idx = 0, key = '' }) {
        return this.option.yAxis[idx][key]
      },
      // 设置选中状态
      setCurrent (index, color) {
        this.option.series[0].data = this.option.series[0].data.map((item, i) => {
          if (index === i) {
            item.itemStyle = {
              color
            }
          } else {
            item.itemStyle = {}
          }
          return item
        })
        this.chart.setOption(this.option)
      },
      // 设置选项
      setOptions () {
        this.chart.off('click', this.click)
        this.chart.setOption(this.option, true)
        if (!this.disabledClick) {
          this.chart.getZr().on('click', this.handleClick)
        }
      },
      // 设置悬浮框
      setTooltip (formatter) {
        this.option.tooltip.formatter = formatter
      },
      // 设置柱状图顶部过滤
      setLabel (formatter) {
        this.option.series[0].label.formatter = formatter
      },
      click (e) {
        this.$emit('click', e)
      },
      getOption () {
        return this.option
      },
      resize () {
        // 改变chart尺寸
        this.chart.resize()
      },
      handleClick (params) {
        let pointInPixel = [params.offsetX, params.offsetY]
        const isPontInPixel = this.chart.containPixel('grid', pointInPixel) // 判断鼠标是否在柱子上
        if (isPontInPixel) {
          let xIndex = this.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0]
          this.currentIndex = xIndex
          this.setOptions()
          this.$emit('click', this.currentIndex)
        }
      },
      drawData (data) {
        if (!this.chart) {
          this.chart = echarts.init(this.$refs.chartBox)
        }
        this.chart.getZr().off('click')
        let categoryData = []
        let countData = []
        this.option.xAxis.data = categoryData
        this.option.series[0].name = this.dataFlag === '10' ? '额收取率区间客个' : '票收取率区间客个'
        this.option.series[0].data = countData
        this.chart.setOption(this.option, true)
        if (!this.disabledClick) {
          this.chart.getZr().on('click', this.handleClick)
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .crmwas-support-trend-container {
    border-radius: 4px;
    background: #fff;

    .header {
      width: 100%;
      height: 36px;
      box-shadow: inset 0px -1px 0px 0px #e9e8ed;
      padding: 0 12px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
      }
    }

    .container {
      height: 225px;
      position: relative;
      box-sizing: border-box;
      padding: 16px;
      .nodata {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -60%);
        p {
          text-align: center;
          font-size: 12px;
          font-weight: 400;
          color: #999;
        }
      }
      .crmwas-support-chart {
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
</style>

```

```js
import echarts from 'echarts'

const renderPopover = (params) => {
  let str = `<div>
    <div style="padding: 0 10px;line-height: 24px;border-bottom: 1px solid #eee; font-size: 12px;color: #000;">${params[0].name}</div>
    <div style="padding: 5px 10px;">`
  // 循环params
  params.forEach((item) => {
    str += `<div style="padding: 0 10px;line-height: 24px; font-size: 12px;display: flex;align-items: center;">
      <span>${item.marker.replace(/10/g, 7)}</span>
      <span style="color:#666;margin:0 12px 0 8px">${item.seriesName}</span>
      <span style="color:#000">${item.value}</span>
    </div>`
  })
  str += '</div></div>'
  return str
}

const config = (self) => {
  return {
    title: '图表标题', // 图表标题
    option: {
      color: ['#7396ff'], // 图表的颜色配置
      legend: {
        data: [
          { icon: 'circle', name: '柱状图' }, // 图例项：扶持金额，使用圆形图标
          '趋势图' // 图例项：扶持票数
        ],
        top: '0', // 图例的位置，距离顶部的距离
        right: '74px', // 图例的位置，距离右侧的距离
        orient: 'horizontal', // 图例的排列方式，水平或垂直
        itemHeight: 8, // 图例项的高度
        itemWidth: 16, // 图例项的宽度
        itemGap: 24 // 图例项之间的间距
      },
      /* 鼠标悬浮提示 */
      tooltip: {
        trigger: 'axis', // 提示框触发方式，'axis' 表示坐标轴触发
        confine: true, // 是否将提示框限制在图表区域内
        axisPointer: {
          type: 'shadow', // 坐标轴指示器的类型，使用阴影效果
          z: 0, // 指示器的 z-index
          shadowStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              // 阴影的渐变颜色
              { offset: 0, color: 'rgba(231,238,254,.85)' },
              { offset: 0.2, color: 'rgba(231,238,254,0.6)' },
              { offset: 1, color: 'rgba(231,238,254,0)' }
            ])
          }
        },
        backgroundColor: '#fff', // 提示框的背景颜色
        textStyle: {
          color: '#333' // 提示框文本颜色
        },
        extraCssText: 'box-shadow: 0 0 4px rgba(0, 0, 0, 0.3); z-index: 2;padding: 0;', // 提示框的额外样式
        formatter: (list) => renderPopover(list) // 提示框内容的格式化函数
      },
      /* x轴 */
      xAxis: [
        {
          type: 'category', // x轴的类型为类目型
          axisLabel: {
            interval: 0, // 标签的显示间隔
            fontSize: 12, // 标签字体大小
            color: '#666' // 标签颜色
          },
          axisPointer: {
            type: 'shadow' // x轴指示器的类型为阴影
          },
          axisLine: {
            lineStyle: {
              color: ['#D6D6D6'] // x轴线条颜色
            }
          },
          axisTick: {
            show: false // 是否显示刻度
          },
          splitLine: {
            lineStyle: {
              color: ['#D6D6D6'] // 分割线颜色
            }
          },
          data: [] // x轴的类目数据
        }
      ],
      /* y轴 */
      yAxis: [
        {
          alignTicks: true, // 是否对齐多个 y 轴
          nameTextStyle: {
            color: '#7C7F8D', // y轴名称颜色
            fontSize: 12, // y轴名称字体大小
            padding: [15, 0, 8, -40] // y轴名称的内边距
          },
          type: 'value', // y轴类型，数值型
          position: 'left', // y轴位置，左侧
          min: 0, // y轴最小值
          axisLine: {
            show: false // 是否显示y轴
          },
          axisTick: {
            show: false // 是否显示刻度
          },
          splitLine: {
            show: true, // 是否显示分割线
            lineStyle: {
              color: ['#D6D6D6'], // 分割线颜色
              type: 'dashed' // 分割线类型：虚线
            }
          },
          axisLabel: {
            fontSize: 12, // y轴标签字体大小
            color: '#666', // y轴标签颜色
            formatter: (value, index) => {
              return +value === 0 ? 0 : numberSplitIntFunc(value) // 格式化y轴标签
            }
          }
        },
        {
          alignTicks: true, // 是否对齐多个 y 轴
          nameTextStyle: {
            color: '#7C7F8D', // y轴名称颜色
            fontSize: 12, // y轴名称字体大小
            padding: [15, 0, 8, 60] // y轴名称的内边距
          },
          type: 'value', // y轴类型，数值型
          position: 'right', // y轴位置，右侧
          min: 0, // y轴最小值
          axisLine: {
            show: false // 是否显示y轴
          },
          axisTick: {
            show: false // 是否显示刻度
          },
          splitLine: {
            show: true, // 是否显示分割线
            lineStyle: {
              color: ['#D6D6D6'], // 分割线颜色
              type: 'dashed' // 分割线类型：虚线
            }
          },
          axisLabel: {
            fontSize: 12, // y轴标签字体大小
            color: '#666' // y轴标签颜色
          }
        }
      ],
      /* 图表区域 */
      grid: {
        left: 0, // 图表左边距
        right: 0, // 图表右边距
        bottom: 0, // 图表下边距
        top: 40, // 图表上边距
        containLabel: true // 是否包含坐标轴的标签
      },
      graphic: [
        {
          type: 'text', // 图形类型为文本
          left: 10, // 文本距离左侧的距离
          top: 6, // 文本距离顶部的距离
          style: {
            text: '单位(元)', // 文本内容
            fontSize: 12, // 文本字体大小
            fill: '#7C7F8D' // 文本颜色
          }
        },
        {
          type: 'text', // 图形类型为文本
          right: 10, // 文本距离右侧的距离
          top: 6, // 文本距离顶部的距离
          style: {
            text: '单位(票)', // 文本内容
            fontSize: 12, // 文本字体大小
            fill: '#7C7F8D' // 文本颜色
          }
        }
      ],
      /* 图表系列 */
      series: [
        {
          name: '扶持金额', // 系列名称
          type: 'bar', // 系列类型为柱状图
          barWidth: 24, // 柱子的宽度
          data: [], // 柱状图的数据
          yAxisIndex: 0, // 数据对应的y轴索引
          emphasis: {
            disabled: true // 鼠标悬停时是否高亮
          },
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0], // 柱子的圆角设置
            normal: {
              color: function (params) {
                if (self.currentIndex === params.dataIndex) {
                  return '#FF9300' // 高亮柱子的颜色
                } else {
                  return '#8881F2' // 默认柱子的颜色
                }
              }
            }
          }
        },
        {
          name: '扶持票数', // 系列名称
          data: [], // 线图的数据
          type: 'line', // 系列类型为折线图
          smooth: true, // 是否平滑曲线
          yAxisIndex: 1, // 数据对应的y轴索引
          itemStyle: {
            color: '#FDBB64' // 折线的颜色
            // normal: {
            //   color: function(params) {
            //     if (self.currentIndex === params.dataIndex) {
            //       return '#FF9300' // 高亮线条的颜色
            //     } else {
            //       return '#FDBB64' // 默认线条的颜色
            //     }
            //   }
            // }
          }
        }
      ]
    }
  }
}
export { config, KEY_MAPPER }
```

