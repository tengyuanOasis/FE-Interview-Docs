---
title: React-富文本框(braft-editor)
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://source.unsplash.com/random?count=12/1600x900
---
## 富文本编辑器
<!--more-->

https://www.yuque.com/braft-editor/be/gz44tn#wx1vkv

```
import React, { Component } from 'react';
// 引入编辑器组件

import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

import { UploadFn } from './UploadFn';

export class RichText extends Component {
	constructor() {
		super();
		this.state = {
			editorState: BraftEditor.createEditorState(null),
		};
		RichText.submitContent = this.submitContent.bind(this);
	}

	async componentDidMount() {
		// 假设此处从服务端获取html格式的编辑器内容
		let htmlContent = this.props.htmlContent || null;
		// 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
		this.setState({
			editorState: BraftEditor.createEditorState(htmlContent),
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.htmlContent !== this.state.htmlContent) {
			this.setState({
				editorState: BraftEditor.createEditorState(nextProps.htmlContent),
			});
		}
	}

	submitContent = async () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
		// 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
		const htmlContent = this.state.editorState.toHTML();
		return htmlContent;
	};

	handleEditorChange = editorState => {
		this.setState({ editorState });
	};

	render() {
		return (
			<BraftEditor
				value={this.state.editorState}
				onChange={this.handleEditorChange}
				onSave={this.submitContent}
				onBlur={() => {
					const htmlContent = this.state.editorState.toHTML();
				}}
				// excludeControls={['options']}
				media={{ uploadFn: UploadFn }}
			/>
		);
	}
}

```