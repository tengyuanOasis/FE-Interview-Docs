https://juejin.cn/post/6844903607913938951

Vue diff算法借鉴了开源库snabbdom的diff算法，这里以此为例

### 1、patch函数

对比 vnode 和 oldVnode 区别，逐层对比同级dom区别，找到最小修改点，替换修改

demo：

- 如下template

  ![image-20220224113202282](https://gitee.com/JuntengMa/imgae/raw/master/202202241132336.png)

  

- 转化为AST：

  ![image-20220224113256032](https://gitee.com/JuntengMa/imgae/raw/master/202202241132098.png)

- 转化为Vnode：

  ![image-20220224113134505](https://gitee.com/JuntengMa/imgae/raw/master/202202241131598.png)

- 每当页面进行一些DOM操作，就会触发patch函数

```js
// 这里直接输出vnode中的ul的children数
console.log("vnode: urlList ", vnode.children[2].children);
if (oldVnode.children[2] && oldVnode.children[2].children) {
      console.log("oldVnode: urlList", oldVnode.children[2].children);
 }
```

​		![image-20220224113916637](https://gitee.com/JuntengMa/imgae/raw/master/202202241139713.png)

### 2、patch函数

1. 接收vnode、oldvnode
2. 做一些判读、是不是空标签、有没有ele等
3. 调用patchVnode(oldVnode, vnode, insertedVnodeQueue);

```js
    /**
     * @oldVnode VNode | Element | DocumentFragment(空标签)
     * @vnode VNode
     * @description  用于对比新老vnode并更新dom元素
     */
    return function patch(oldVnode, vnode) {
        let i, elm, parent;
        // 声明周期相关
        const insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();

        // 判断是不是ele
        if (isElement(api, oldVnode)) {
          // 创建一个无属性，无子节点，无key的vnode,并关联dom元素
          oldVnode = emptyNodeAt(oldVnode);
        }
        // 是否空标签
        else if (isDocumentFragment(api, oldVnode)) {
            oldVnode = emptyDocumentFragmentAt(oldVnode);
        }
        // 判断新旧Vnode 的 key、属性、elm是否相等
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
          // 如果vnode是vnode类型且新旧vnode不同
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            // 创建新dom元素，并替换旧的dom元素
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
```
### 3、PacthVnode

1. 获取新老vnode的children
2.  oldVnode无children新的vnode有children，直接新增children ，反之删除
3.  如果children不同，调用 updateChildren(elm, oldCh, ch, insertedVnodeQueue);

```js
/**
     * @description path核心，用于对比新老vnode
     * @param {*} oldVnode 
     * @param {*} vnode 
     * @param {*} insertedVnodeQueue 
     * @returns 
     */
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var _a, _b, _c, _d, _e;
        // 执行钩子相关内容
        const hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
        (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
        
        //给Vnode绑定elm将要替换的旧vnode的元素
        const elm = (vnode.elm = oldVnode.elm);
        // oldVnode 的children
        const oldCh = oldVnode.children;
        // 新~
        const ch = vnode.children;
        // 判断两个vnode是否相等
        if (oldVnode === vnode)
            return;
        // 判断新的vnode 的属性是否为空
        if (vnode.data !== undefined) {
            for (let i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode);
        }
        // !新的vnode内容
        if (isUndef(vnode.text)) {
          // 判断vnode和oldVnode是有children
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                //!children不同，更新children
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            // !新的vnode有children，直接新增child
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, "");
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            // !oldVnode有children直接删掉修改的元素（因为新的vnode无children）
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            // !oldVnode有文案
            else if (isDef(oldVnode.text)) {
                // 给新的el设置一下文案
                api.setTextContent(elm, "");
            }
        }
        // !文案更新
        else if (oldVnode.text !== vnode.text) {
            if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            api.setTextContent(elm, vnode.text);
        }
        (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode);
    }
```

### 4、updateChildren

1. 设置四个变量（oldStartIdx、newStartIdx、oldEndIdx、newEndIdx），新老vnode两边开始往中间对比
2. 逐层 patchVnode，patchVnode再调用updateChildren ，互相调用对不同层级的vnode进行增删改

```js
/**
     * 
     * @param {*} parentElm 父级element
     * @param {*} oldCh oldVnode
     * @param {*} newCh vnode
     * @param {*} insertedVnodeQueue 
     * @description 用于更新vnode子级vnode数据
     */
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx;
        let idxInOld;
        let elmToMove;
        let before;
        /******
         * 对比方案，从两边往中间对比
         */
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            // 比较新老strtVnode是否相同
            else if (sameVnode(oldStartVnode, newStartVnode)) {
              // 比较新旧vode第一项是否相同
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                // 新旧start各自进一，准备比较下一项
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            // 比较新老endVnode是否相同
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            // 比较老开始，新结束vnode是否相同
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            // 比较老end，新start的vnode是否相同
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    // New element
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (newStartIdx <= newEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        if (oldStartIdx <= oldEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
```

