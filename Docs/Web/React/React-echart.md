---
title: React中使用Echats
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://cdn.jsdelivr.net/gh/JuntengMa/Images@1.3/blog/cover/2.jpg
---

React中使用Echats记录
<!--more-->



#### 1.安装echats
```
npm install echarts --save
npm install --save echarts-for-react
```

#### 2.引入所需模块
```javascript
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
```
#### 3.实例
```javascript
showTrend() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('trend'));
		//柱状图点击事件
		myChart.on('click', params => {
			
		});
              // 绘制图表
		myChart.setOption({
			title: { text: '近十五日趋势' },
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow',
				},
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			xAxis: {
				type: 'category',
				data: this.state.trendDate,
				axisTick: {
					alignWithLabel: true,
				},
			},
			yAxis: [{ type: 'value' }],
			series: [
				{
					name: '告警总数',
					type: 'bar',
					barWidth: '60%',
					data: this.state.trendData,
				},
			],
		});
	}
```
#### 4.DOM部分
```html
<div id="trend" style={{ height: 300 }}></div>
```
#### 5.效果图
![](https://cdn.jsdelivr.net/gh/JuntengMa/Images@1.1/blog/echats.jpg)
