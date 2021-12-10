---
title: React父组件调用子组件
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://source.unsplash.com/random?count=7/1600x900
---
React父组件调用子组件方案
<!--more-->

## 方案一： ref控制

#### Parent Component ( Parent.tsx )
```
import * as React from 'react';

import { ChildA } from './ChildA';

//多个子组件时可以先定义如下组件：
class Childrens extends React.Component<any, any> {
  _childA: any;
  _childB: any;
  _childC: any;
}

export class Parent extends Childrens {

  //调用子组件方式：
  get_childA_sum = () => {
    this._childA.sum(1, 2)
  }

  render() {
    const children = {
      on_childA_ref: ref => {
        this._childA = ref;
      },
      on_childB_ref: ref => {
        this._childB = ref;
      },
      on_childC_ref: ref => {
        this._childC = ref;
      },
    }

    return (
      <div>
        <button onClick={() => this.get_childA_sum()}> SumA </button>
        <ChildA _childA={children.on_childA_ref} />
      </div>
    )
  }
}



```
#### Children Component  (ChildA.tsx)
```
import * as React from 'react';

interface ChildAProps {
  _childA:Function;
}

export class ChildA extends React.Component<ChildAProps, any> {

  componentDidMount() {
		this.props._childA(this)
	}

  sum = (a , b) => {
    alert(a+b)
  }
  
  render(){
    return(
      <div>
        组件A
      </div>
    )
  }

}
```