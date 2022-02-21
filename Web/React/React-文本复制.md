---
title: '在react中实现文本复制'
date: 2020-09-22
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://source.unsplash.com/random?count=8/1600x900
---

'在react中实现文本复制'
<!--more-->

## 方案一：



```js
copyTranslateResult = () => {
        const copyDOM = document.querySelector('.translateResult');

        if (copyDOM.innerHTML !== '') {

            var range = document.createRange(); //创建一个range

            window.getSelection().removeAllRanges(); //清楚页面中已有的selection

            range.selectNode(copyDOM); // 选中需要复制的节点

            window.getSelection().addRange(range); // 执行选中元素

            var successful = document.execCommand('copy'); // 执行 copy 操作

            if (successful) {
								//这里使用了antd的message组件
                message.success('复制成功！');

            } else {
								//这里使用了antd的message组件
                message.warning('复制失败，请手动复制！');
            }
            // 移除选中的元素
            window.getSelection().removeAllRanges();
        } else {
            message.warning('没有内容');
        }

    };
```
## 方案二(推荐该方案，方案一自测ios不兼容)：
[antd社区精选组件推荐](https://ant.design/docs/react/recommendation-cn): **[react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard)：**

#### Install
```
npm install --save react-copy-to-clipboard
or
yarn add react-copy-to-clipboard
```
#### Demo
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends React.Component {
  state = {
    value: '',
    copied: false,
  };

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);

```

 