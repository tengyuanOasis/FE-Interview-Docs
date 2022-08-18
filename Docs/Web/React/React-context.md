---
title: '在react传值问题--context传值'
date: 2020-09-22
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://images.unsplash.com/photo-1605020419798-46652aa15452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80
---

> 最近React回炉重造,看到context传值问题,顺便研究了一下.....

<!--more-->

### Context

01/什么是context?

> Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

02/为什么要用context?

> 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

03/怎么使用?

- createContext

  通过createContent创建一个MyContext对象

  ```
  const MyContext = React.createContext(defaultValue);
  ```

- Context.Provider

  作为数据来源,为需要用到数据的组件提供数据

  ```
  <MyContext.Provider value={/* 某个值 */}>
  ```

- Context.Consumer

  作为使用数据方

  ```
  <MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
  </MyContext.Consumer>
  ```

- Class.contextType(暂时没搞懂)

04/个人理解

​	可以把context当做一个简化版的redux(store) , A把数据存在仓库里面,当A的儿子或者孙子想要仓库里的东西的时候,可以去仓库里面取出来用就好

05/demo

- 我现在有一个组件ContextDemo需要把state里面的数据共享出去,Consumers组件需要使用和修改共享出去的数据

  ```jsx
  <ContextDemo state={...this.state}>
     <Toolbar>
     		<Consumers/>
      </Toolbar>
  </ContextDemo>
  ```
  
-	ContextDemo组件

  ```jsx
  import React, { Component } from 'react';
  import { Toolbar } from './Toolbar';
  
  export class ContextDemo extends React.Component {
  
    state = {
      toggle: true,
      handleToggle: () => this.handleToggle()
    }
  
    handleToggle = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }
  
    render() {
      return (
        <Toolbar />
      )
    }
  }
  ```

- 实例化React.createContext

  ```jsx
  import React, { Component } from 'react';
  import { Toolbar } from './Toolbar';
  
  //React.createContext({})里面有两个对象,Provider和Consumer,可以自定义一个contextName,在这里直接解构并export出去
  export const { Provider, Consumer} = React.createContext({})
  
  export class ContextDemo extends React.Component {
  
    state = {
      toggle: true,
      handleToggle: () => this.handleToggle()
    }
  
    handleToggle = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }
  
    render() {
      return (
       //Provider value存放需要共享出去的数据
        <Provider value={this.state}>
          <Toolbar />
        </Provider>
      )
    }
  }
  ```

- Toolbar组件

  ```jsx
  import React, { Component } from 'react';
  import { Consumers } from './Consumers';
  
  export function Toolbar(props) {
    return (
      <div>
        <Consumers />
      </div>
    );
  }
  ```

- Consumers组件

  ```jsx
  import React from 'react';
  
  //这里引入从ContextDemo中export的Consumer
  import { Consumer} from './index.vue' 
  
  export class Consumers extends React.Component {
    render() {
      return <Consumer>
        {
        //注意这里是一个箭头函数,可以解构出来他们的参数
          ({ toggle, handleToggle}) =>
            <button onClick={() => handleToggle()}>
              {toggle ? '✔' : '❌'}
            </button>
        }
      </Consumer>
    }
  }
  ```

- 效果

  - 浏览器查看结果

    ![](https://s1.ax1x.com/2020/11/11/Bjs5X4.png)

  - ![](https://s1.ax1x.com/2020/11/11/BjsLh6.gif)

[demo代码](https://raw.githubusercontent.com/JuntengMa/react_demo_js)

06/ 注意事项

react官网写的很明白,context是一个实验性的api,在未来的版本中可能会被移除,还是尽量谨慎使用吧....



