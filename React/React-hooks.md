---
cover: 'https://images.unsplash.com/photo-1604580493681-464df06de70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
coverWidth: 1200
coverHeight: 750
title: React-Hook学习
categories: React
tags: Hook
top:
permalink:
---
> 一直都知道Hook这个新技术,但是工作过程中几乎没有用到,最近刚好有时间来学习一下~~~~



<!--more-->

### 01/什么是Hook?

Hook是react16.8新增特性,可以在不编写class的情况下使用state以及其他React特性

### 02/什么是Hook?

- Hook顾名思义是钩子的意思,它可以使函数组件中可以勾入React-State以及生命周期特性等等.
- Hook不能在class组件中使用

### 03/Hook内置组件

- **useState**	(用于操控state)

  - **使用:**

    ```
    const [stateName , stateChangeFun] = useState(初始值)
    ```

    ```
    const [count , setCount] = useState(0)
    <Button onClick={()=>setCount(count++)}>Click</Button>	
    ```
  
-  **useEffect**

  Effect Hook 可以让我们在react中执行副作用操作

  `useEffect` 的第二个参数，有三种情况

  1. 什么都不传，组件每次 `render` 之后 `useEffect` 都会调用，相当于 `componentDidMount` 和 `componentDidUpdate`
2. 传入一个空数组 [], 只会调用一次，相当于 `componentDidMount` 和 `componentWillUnmount`
  3. 传入一个数组，其中包括变量，只有这些变量变动时，`useEffect` 才会执行

  

  
  
  
  
  





