---
title: React-antd-ImportExcel
date: 2020-09-04 11:29:18
tags: React
categories: React
description: <center>“基于 XLSX 封装的  Excel 并解析为 JSON格式数据的组件”</center>
coverWidth: 1200
coverHeight: 750
cover: https://source.unsplash.com/random?count=10/1600x900
---

<center>“基于 XLSX 封装的  Excel 并解析为 JSON格式数据的组件”</center>

<!--more-->


# React-antd-ImportExcel

工作需求，需要

```js
import * as React from 'react';

import * as XLSX from 'xlsx';

import { Button, Icon, message } from 'antd';

export interface ImportExcelProps {
    getFileInfo: Function;
    notice?: string;
}

//css文件为以下注释样式
import './uploadStyle.css';
<!--
.uploadBtn {
	position: absolute;
	font-size: 5px;
	width: '100%';
	height: '100%';
	right: 0;
	top: 0;
	opacity: 0;
	filter: alpha(opacity = 0);
	cursor: pointer;
}
-->

export class ImportExcel extends React.Component<ImportExcelProps, any> {

    importExcel = file => {
        // 获取上传的文件对象
        const { files } = file.target;
        // 通过FileReader对象读取文件
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                // 以二进制流方式读取得到整份excel表格对象
                const workbook = XLSX.read(result, { type: 'binary' });
                let data = []; // 存储获取到的数据
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        break; // 如果只取第一张表，就取消注释这行
                    }
                }
                //这里获取解析好的excel内容
                this.props.getFileInfo(data)
            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                message.warning('error')
            }
        };
        // 以二进制方式打开文件
        files.length > 0 && fileReader.readAsBinaryString(files[0]);
    }

    render() {
        const { notice } = this.props
        return (
            <Button type="primary" style={{ position: 'relative' }}>
                <input type='file' accept='.xlsx, .xls' onChange={e => this.importExcel(e)} className="uploadBtn" />{notice || '导入Excel'}
                < Icon type="upload" />
            </Button>
        );
    }
}

```

使用

```js
//getFileInfo 用于获取解析出来的数据，按需写接收函数
<ImportExcel getFileInfo={getFileInfo} notice="导入EXcel" />
```
