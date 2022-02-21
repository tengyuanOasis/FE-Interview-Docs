---
title: React-antd-exportExcel
date: 2020-09-04 09:58:01
tags: React
categories: React
description: <center> “基于 XLSX 封装的 excel 导出组件”</center>
coverWidth: 1200
coverHeight: 750
cover: https://source.unsplash.com/random?count=9/1600x900
---

<center> “基于 XLSX 封装的 excel 导出组件”</center>

<!--more-->

```js
import * as React from "react"

import * as XLSX from "xlsx"

import { Button, Icon } from "antd"

export interface ExportExcelProps {
  notice: string;
  fileName: string;
  headers: string[] | Function; //表头
  getExportData: Function;
}

export class ExportExcel extends React.Component<ExportExcelProps, any> {
  handleExport = async () => {
    const { headers, fileName } = this.props
    //这里是获取导出数据的函数
    const exportData = await this.props.getExportData()

    this.exportExcel(headers, exportData, fileName)
  }

  exportExcel(headers, data, fileName) {
    const _headers = headers
      .map((item, i) =>
        Object.assign(
          {},
          {
            key: item.key,
            title: item.title,
            position: String.fromCharCode(65 + i) + 1,
          }
        )
      )
      .reduce(
        (prev, next) =>
          Object.assign({}, prev, {
            [next.position]: { key: next.key, v: next.title },
          }),
        {}
      )

    const _data = data
      .map((item, i) =>
        headers.map((key, j) =>
          Object.assign(
            {},
            {
              content: item[key.key],
              position: String.fromCharCode(65 + j) + (i + 2),
            }
          )
        )
      )
      // 对刚才的结果进行降维处理（二维数组变成一维数组）
      .reduce((prev, next) => prev.concat(next))
      // 转换成 worksheet 需要的结构
      .reduce(
        (prev, next) =>
          Object.assign({}, prev, { [next.position]: { v: next.content } }),
        {}
      )

    // 合并 headers 和 data
    const output = Object.assign({}, _headers, _data)
    // 获取所有单元格的位置
    const outputPos = Object.keys(output)
    // 计算出范围 ,["A1",..., "H2"]
    const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`

    // 构建 workbook 对象
    const wb = {
      SheetNames: ["mySheet"],
      Sheets: {
        mySheet: Object.assign(
          {},
          output, //列宽
          {
            "!ref": ref,
            "!cols": [
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
              { wpx: 150 },
            ],
          }
        ),
      },
    }
    // 导出 Excel
    XLSX.writeFile(wb, `${fileName}.xlsx`)
  }
  render() {
    const { notice } = this.props
    return (
      <Button type="primary" onClick={() => this.handleExport()}>
        {notice}
        <Icon type="download" />
      </Button>
    )
  }
}
```

使用

```js
<ExportExcel
  notice="Excel导出"
  fileName="test"
  headers={initColumn}
  getExportData={exportData}
/>
```

示例表头&数据：

```js
header=[
    {
        title: 姓名,
		dataIndex: name,
		key: name,
    },
    {
        title: 性别,
		dataIndex: sex,
		key: sex,
    },
    {
        title: 年龄,
		dataIndex: age,
		key: age,
    },
]

exportData=[
	{
	name:'小明'，
	sex:'男'，
	age:18
	},
	{
	name:'小张'，
	sex:'女'，
	age:20
	}
]
```
