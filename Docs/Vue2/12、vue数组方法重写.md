#### 为什么要重写

> - 因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案
> - 修改数组数据` arr[index] = xxx`无法更新视图解决方案：
>   - 使用数组的 splice 方法，`arr.splice(index, 1, item)`
>   - 使用`Vue.$set(arr, index, value)`

vue通过原型拦截的方式重写了数组的7个方法，首先获取到这个数组的Observer。如果有新的值，就调用observeArray对新的值进行监听，然后调用notify，通知render watcher，执行update

核心：arrayMethods 首先继承了 Array，然后对数组中所有能改变数组自身的方法，如 push、pop 等这些方法进行重写。重写后的方法会先执行它们本身原有的逻辑，并对能增加数组长度的 3 个方法 push、unshift、splice 方法做了判断，获取到插入的值，然后把新添加的值变成一个响应式对象，并且再调用 ob.dep.notify() 手动触发依赖通知，这就很好地解释了之前的示例中调用 vm.items.splice(newLength) 方法可以检测到变化。

#### 流程

> 1. 依赖收集期间，如果数据类型是数组，则调用dependArray方法
> 2. 函数会遍历数组中的每个元素，如果元素存在且具有__ob__属性，就会调用其__ob__.dep.depend()方法。然后检查当前元素是否为数组，如果是数组，则会递归调用dependArray函数来处理该子数组
> 3. __ob__.dep.depend()是Vue源码中用于依赖收集的一个关键方法。在Vue的响应式系统中，每个被观察的对象都会有一个__ob__属性，该属性包含了对象的依赖信息。__ob__.dep.depend()的作用是告诉系统当前代码对该对象的依赖发生了变化，需要重新收集依赖或者触发相应的更新操作。这样可以确保在对象发生变化时，相关的依赖能够得到及时更新。
> 4. 可以将__ob__.dep.depend()理解为在Vue的响应式系统中创建了一个watcher来监视属性的变化。当属性发生变化时，watcher会通知相关的依赖进行更新，确保视图能够及时反映数据的变化。这种机制是Vue响应式系统中非常重要的一部分，确保了数据驱动视图的实现

#### 源码

```javascript
function dependArray(value: Array<any>) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

```



```javascript
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

import { def } from '../util/index'

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

```

从上面可以看出array.js中重写了数组的push、pop、shift、unshift、splice、sort、reverse七种方法，重写方法在实现时除了将数组方法名对应的原始方法调用一遍并将执行结果返回外，还通过执行ob.dep.notify()将当前数组的变更通知给其订阅者，这样当使用重写后方法改变数组后，数组订阅者会将这边变化更新到页面中。

重写完数组的上述7种方法外，我们还需要将这些重写的方法应用到数组上，因此在Observer构造函数中，可以看到在监听数据时会判断数据类型是否为数组。当为数组时，如果浏览器支持__proto__，则直接将当前数据的原型__proto__指向重写后的数组方法对象arrayMethods，如果浏览器不支持__proto__，则直接将arrayMethods上重写的方法直接定义到当前数据对象上；当数据类型为非数组时，继续递归执行数据的监听。