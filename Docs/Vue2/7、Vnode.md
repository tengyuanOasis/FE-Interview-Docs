## Vnode

> Vue.js将DOM抽象成一个以JavaScript对象为节点的虚拟DOM树，以VNode节点模拟真实DOM，可以对这棵抽象树进行增删改节点等操作，在这个过程中，不需要对真实的DOM进行操作，只需要操作js对象后进行差异修改，再通过diff算法得出需要修改的最小单位，进行视图更新，只需要操作一次DOM ， 大大减少了DOM操作，提高性能

打个比方，比如说我现在有这么一个VNode树

```js
{
    tag: 'div'
    data: {
        class: 'test'
    },
    children: [
        {
            tag: 'span',
            data: {
                class: 'demo'
            }
            text: 'hello,VNode'
        }
    ]
}
```

渲染之后的结果就是这样的

```
<div class="test">
   <span class="demo">hello,VNode</span>
</div>
```

