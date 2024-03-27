### Vue3



问题：

1、v-memo作用

- 官方： https://cn.vuejs.org/api/built-in-directives.html#v-memo

- 博客： https://juejin.cn/post/7145478822333251598

- 主要用于性能优化（例如海量数据中单条数据修改 ， 指修改当前数据并重新渲染， 跳过其他数据）

2、v-memo和react.memo的区别

- 用法类似类

3、watch 、watchEffect 详细区别

- watch：
  
   > 侦听一个或多个响应式数据源， 并在数据源变化时调用所给的回调函数。


- watchEffect：

   > 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行

4、按需加载和懒加载的区别

- 按需加载

  > 开发时期即可配置的内容，例如项目中仅仅使用element中部分组件，可以选择从element包中导出部分组件引入而不是element全局引入，用于代码体积优化等需求

- 懒加载：

  https://blog.csdn.net/weixin_44090040/article/details/105879124

  > 1. 懒加载又叫延迟加载，项目很大的时候可以进行项目拆分，调用的时候再加载（随用随加载），同时又分同步加载和异步加载（例如vue路由拆分）
  >
  >    - **同步加载**
  >
  >    ```vue
  >    import Vue from 'vue'
  >    import Router from 'vue-router'
  >    Vue.use(Router);
  >    export default new Router({
  >        routes: [
  >            {
  >                path: '/index',
  >                name: 'index',
  >                component: require('@/components/index').default,
  >                meta: {
  >                    title: 'index'
  >                }
  >            }
  >        ]
  >    })
  >       
  >    ```
  >
  >    - 异步加载
  >
  >    ```vue
  >    import Vue from 'vue'
  >    import Router from 'vue-router'
  >    Vue.use(Router);
  >    export default new Router({
  >        routes: [
  >            {
  >                path: '/index',
  >                name: 'index',
  >                component: ()=>import('@/components/index'),
  >                meta: {
  >                    title: 'index'
  >                }
  >            }
  >        ]
  >    })
  >    ```
  >

ts类型相关：
https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
