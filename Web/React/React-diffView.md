---
title: React - diffView
description: <center>“类似git diff差异实现方案”</center>
date: 2020-09-18 15:05:55
categories: React
tags: React
top: false
coverWidth: 1200
coverHeight: 750
cover: https://source.unsplash.com/random?count=11/1600x900
---
文档对比组件封装...
<!--more-->


# react-diff-view
https://github.com/praneshr/react-diff-viewer.git

# Install
```
yarn add react-diff-viewer

# or

npm i react-diff-viewer
```

# 封装组件 DiffView.tsx
```
import * as React from 'react';

import ReactDiffViewer from 'react-diff-viewer';

export interface DiffViewProps {
	oldValue: string;
	newValue: string;
	splitView?: boolean; //true 分两栏 | false  分一栏
	leftTitle?: string;
	rightTitle?: string;
	style?: object
}

export class DiffView extends React.Component<DiffViewProps> {
	public render() {
		const { oldValue, newValue, splitView = true, leftTitle, rightTitle, style } = this.props;
		return (
			<div style={{
				...style,
				overflowY: 'scroll',
				wordWrap: 'break-word',
				wordBreak: 'break-all'
			}}>
				<ReactDiffViewer
					oldValue={oldValue}
					newValue={newValue}
					splitView={splitView}
					leftTitle={leftTitle}
					rightTitle={rightTitle}
				/>
			</div>

		);
	}
}


```

# 参数
https://github.com/praneshr/react-diff-viewer#props

| Prop                      | Type            | Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oldValue                  | `string`        | `''`                           | Old value as string.                                                                                                                                                                                                                                                                                                                                                                                             |
| newValue                  | `string`        | `''`                           | New value as string.                                                                                                                                                                                                                                                                                                                                                                                             |
| splitView                 | `boolean`       | `true`                         | Switch between `unified` and `split` view.                                                                                                                                                                                                                                                                                                                                                                       |
| disableWordDiff           | `boolean`       | `false`                        | Show and hide word diff in a diff line.                                                                                                                                                                                                                                                                                                                                                                          |
| compareMethod             | `DiffMethod`    | `DiffMethod.CHARS`             | JsDiff text diff method used for diffing strings. Check out the [guide](https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#text-block-diff-comparison) to use different methods.                                                                                                                                                                                                                          |
| hideLineNumbers           | `boolean`       | `false`                        | Show and hide line numbers.                                                                                                                                                                                                                                                                                                                                                                                      |
| renderContent             | `function`      | `undefined`                    | Render Prop API to render code in the diff viewer. Helpful for [syntax highlighting](https://github.com/praneshr/react-diff-viewer#syntax-highlighting)                                                                                                                                                                                                                                                          |
| onLineNumberClick         | `function`      | `undefined`                    | Event handler for line number click. `(lineId: string) => void`                                                                                                                                                                                                                                                                                                                                                  |
| highlightLines            | `array[string]` | `[]`                           | List of lines to be highlighted. Works together with `onLineNumberClick`. Line number are prefixed with `L` and `R` for the left and right section of the diff viewer, respectively. For example, `L-20` means 20th line in the left pane. To highlight a range of line numbers, pass the prefixed line number as an array. For example, `[L-2, L-3, L-4, L-5]` will highlight the lines `2-5` in the left pane. |
| showDiffOnly              | `boolean`       | `true`                         | Shows only the diffed lines and folds the unchanged lines                                                                                                                                                                                                                                                                                                                                                        |
| extraLinesSurroundingDiff | `number`        | `3`                            | Number of extra unchanged lines surrounding the diff. Works along with `showDiffOnly`.                                                                                                                                                                                                                                                                                                                           |
| codeFoldMessageRenderer   | `function`      | `Expand {number} of lines ...` | Render Prop API to render code fold message.                                                                                                                                                                                                                                                                                                                                                                     |
| styles                    | `object`        | `{}`                           | To override style variables and styles. Learn more about [overriding styles](https://github.com/praneshr/react-diff-viewer#overriding-styles)                                                                                                                                                                                                                                                                    |
| useDarkTheme              | `boolean`       | `true`                         | To enable/disable dark theme.                                                                                                                                                                                                                                                                                                                                                                                    |
| leftTitle                 | `string`        | `undefined`                    | Column title for left section of the diff in split view. This will be used as the only title in inline view.                                                                                                                                                                                                                                                                                                     |
| rightTitle                | `string`        | `undefined`                    | Column title for right section of the diff in split view. This will be ignored in inline view.                                                                                                                                                                                                                                                                                                                   |
| linesOffset               | `number`        | `0`                            | Number to start count code lines from.                                                                                                                                                                                                                                                                                                                                                                           |