### Vue模板编译

01、`new Vue()`

```js
const app = new Vue({
    el: '#app',
    data() {
      return {
        name: 'Mike',
        hobby: ['swimming', 'travel']
      }
    },
    methods: {
      changeHobby() {
        this.hobby.push('coding')
      }
    },
  })
```

01、`$mount `

用于编译temple并渲染到页面

```js
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  // 通过el标签获取到真实的dom
  el = el && query(el);
 
   // 这里的options指new Vue(options) , Object
  const options = this.$options;

  // resolve template/el and convert to render function
  // 解析模板/el并转换为渲染函数
  if (!options.render) {
      /*处理模板template，编译成render函数，render不存在的时候才会编译template，否则优先使用render*/
    let template = options.template;
    /*template存在的时候取template，不存在的时候取el的outerHTML*/
    if (template) {
      /*当template是字符串的时候, 如:#app */
      if (typeof template === "string") {
        if (template.charAt(0) === "#") {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== "production" && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            );
          }
        }
      } else if (template.nodeType) {
        /*当template为DOM节点的时候*/
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== "production") {
          warn("invalid template option:" + template, this);
        }
        return this;
      }
    } else if (el) {
      /*获取element的outerHTML*/
      template = getOuterHTML(el);
    }
    
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile");
      }
      /*将template编译成render函数，这里会有render以及staticRenderFns两个返回，这是vue的编译时优化，static静态不需要在VNode更新时		进行patch，优化性能   
      🤣🤣😀😁🍔👇👇🍔🍔👇👇👇👇,模板编译核心
      */
      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: process.env.NODE_ENV !== "production",
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments,
        },
        this
      );
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile end");
        measure(`vue ${this._name} compile`, "compile", "compile end");
      }
    }
  }
  /*调用const mount = Vue.prototype.$mount保存下来的不带编译的mount*/
  return mount.call(this, el, hydrating);
};
```

03、`compileToFunctions`用于将`template`转化为`ast`语法树，并return出 render函数和带有缓存的renderFunc



