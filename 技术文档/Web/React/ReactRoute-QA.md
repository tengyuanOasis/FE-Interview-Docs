## <center>QA</center>
* Link是否需要放置到 Router下边？
  必须要放在Router下，由于需要Context, 但是你也可以自己搞一个context。
````
If you try to unit test one of your components that renders a <Link> or a <Route>, etc. 
you’ll get some errors and warnings about context. 
While you may be tempted to stub out the router context yourself, we recommend you wrap your unit test in one of the Router components: the base Router with a history prop, or a <StaticRouter>, <MemoryRouter>, or <BrowserRouter> (if window.history is available as a global in the test enviroment)
````
* Redirect放置的位置？
 只要存在 Router下边就可以。
 在 switch下 需要写from， 来去定redirect的来源
* SSR中Router如何使用
  StaticRouter使用
* Route放到Switch 和 非Switch的区别
  Switch下每次按顺序只会触发一个路由，而非Switch下有可能触发多个。
* Route下children 与render, component 属性区别?
  children不管是否命中路由，都会调用，自己判断是否需要渲染。（待验证）
````
Sometimes you need to render whether the path matches the location or not. 
In these cases, you can use the function children prop. 
It works exactly like render except that it gets called whether there is a match or not.
````
* Switch 如何实现只匹配一个子元素
 React.Children.forEach可以遍历children，并且根据children的props中from 和path来判断是否匹配，如果一旦匹配就不在校验后续元素
````
      React.Children.forEach(this.props.children, child => {
            if (match == null && React.isValidElement(child)) {
              element = child;

              const path = child.props.path || child.props.from;

              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match;
            }
          });
````

[React Router Api Doc](https://reactrouter.com/web/guides/server-rendering)