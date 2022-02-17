1、两者相同点

> 都用于React性能优化，减少组件重新渲染

2、区别

- PureComponent  ， 针对类组件，核心是内部实现了 `componentsShodUpdate`前后`state`浅比较
- Memo ，针对函数式组件

https://segmentfault.com/a/1190000018444604

