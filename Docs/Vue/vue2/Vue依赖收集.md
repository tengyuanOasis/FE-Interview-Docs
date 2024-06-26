### 为什么要依赖收集

> 当data中声明了没有被使用到的变量时，假如没有做依赖收集，当这个变量修改的时候，也会触发页面重新渲染，造成性能损耗。
>
> 依赖收集是在页面首次渲染(render)的时候 , 对使用到的变量收集起来，当收集的数据修改了，再触发页面重新渲染 。
>
> 根据响应式原理我们可知： 
>
> 页面渲染的时候，获取变量会触发getter，这个时候进行依赖收集，将所有依赖该数据的watcher收集到Dep的subs中；
>
> 当变量修改的时候，会触发setter，这个时候，通知所有依赖这个变量的watcher进行页面更新。

### 详细原理

先看下面这段代码

```javascript
new Vue({
    template: 
        `<div>
            <span>text1:</span> {{text1}}
            <span>text2:</span> {{text2}}
        <div>`,
    data(){
       return {
          text1: 'text1',
          text2: 'text2',
          text3: 'text3'
       }
    }
});
```

按照之前[《响应式原理》](https://raw.githubusercontent.com/answershuto/learnVue/blob/master/docs/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.MarkDown)中的方法进行绑定则会出现一个问题——text3在实际模板中并没有被用到，然而当text3的数据被修改（this.text3 = 'test'）的时候，同样会触发text3的setter导致重新执行渲染，这显然不正确。

#### 先说说Dep

当对data上的对象进行修改值的时候会触发它的setter，那么取值的时候自然就会触发getter事件，所以我们只要在最开始进行一次render，那么所有被渲染所依赖的data中的数据就会被getter收集到Dep的subs中去。在对data中的数据进行修改的时候setter只会触发Dep的subs的函数。

定义一个依赖收集类Dep。

```js
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }
	/*Github:https://raw.githubusercontent.com/answershuto*/
	notify() {
		// stabilize the subscriber list first
		const subs = this.subs.slice();
		for (let i = 0, l = subs.length; i < l; i++) {
			subs[i].update();
		}
	}
}
function remove(arr, item) {
	if (arr.length) {
		const index = arr.indexOf(item);
		if (index > -1) {
			return arr.splice(index, 1);
		}
	}
}

```

#### Watcher

订阅者，当依赖收集的时候会addSub到sub中，在修改data中数据的时候会触发dep对象的notify，通知所有Watcher对象去修改对应视图。

```javascript
class Watcher {
   //	 这里的cb一般为compile函数的update
    constructor (vm, expOrFn, cb, options) {
        this.cb = cb;
        this.vm = vm;

        /*在这里将观察者本身赋值给全局的target，只有被target标记过的才会进行依赖收集*/
        Dep.target = this;
        /*Github:https://raw.githubusercontent.com/answershuto*/
        /*触发渲染操作进行依赖收集*/
        this.cb.call(this.vm);
    }

    update () {
        this.cb.call(this.vm);
    }
}
```

#### 开始依赖收集

```javascript
class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data, options.render);
        let watcher = new Watcher(this, );
    }
}

function defineReactive (obj, key, val, cb) {
    /*在闭包内存储一个Dep对象*/
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
            if (Dep.target) {
                /*Watcher对象存在全局的Dep.target中*/
                dep.addSub(Dep.target);
            }
        },
        set:newVal=> {
            /*只有之前addSub中的函数才会触发*/
            dep.notify();
        }
    })
}

Dep.target = null;
```

将观察者Watcher实例赋值给全局的Dep.target，然后触发render操作只有被Dep.target标记过的才会进行依赖收集。有Dep.target的对象会将Watcher的实例push到subs中，在对象被修改触发setter操作的时候dep会调用subs中的Watcher实例的update方法进行渲染。



https://raw.githubusercontent.com/answershuto/learnVue/blob/master/docs/%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86.MarkDown