* setState多次调用是否会多次渲染？
如果在React自己的状态管理事件中， setState会合并后渲染， 如果在setTimeout，异步请求等事件中，setState会渲染多次。

* setState每次改变的时候， 会调用两次的问题？
最近的react版本,dev模式下render使用的是strict mode,strict mode的通过两次调用constructor和render函数来更好的检测不符合预期的side effects。

[React 16.13.1使用useState时会执行两次render的问题](https://blog.csdn.net/qq_20567691/article/details/106035547)
[Strict Mode](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
[https://react.docschina.org/blog/2020/08/22/react-hooks-state-granularity.html](https://react.docschina.org/blog/2020/08/22/react-hooks-state-granularity.html);