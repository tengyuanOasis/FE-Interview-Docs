# vue.$nextTick

> Vue 中的 `nextTick`函数用于延迟回调的执行，直到下次 DOM 更新循环结束之后。在 Vue 2 中，`nextTick`会将回调放入 JavaScript 的任务队列中，作为一个宏任务（Macro Task）执行。这意味着 `nextTick`的回调会在所有微任务（Micro Tasks）完成后，下一个事件循环开始时执行。
>
> 在 Vue 3 中，`nextTick`的行为有所改变。Vue 3 使用了新的异步机制，它不再依赖于 `setTimeout`或 `setImmediate`，而是利用了原生的 Promise 和 `requestIdleCallback`（如果可用的话）。这意味着在 Vue 3 中，`nextTick`的回调通常会作为微任务（Micro Task）执行，但这取决于具体的实现细节和浏览器环境。
>
> 总的来说，Vue 2 中的 `nextTick`是宏任务，而 Vue 3 中的 `nextTick`更倾向于作为微任务执行，但这也受到实现细节和环境的影响。需要注意的是，Vue 3 的异步机制是为了提高性能和响应性，因此在大多数情况下，`nextTick`在 Vue 3 中的行为应该是符合开发者预期的

直接看《深入浅出 Vuejs》P175 即可，下面内容为笔记

#### 1、NextTick 作用：

> 当数据更新，视图还未更新时做的一些操作（DOM 实时更新，UI 异步更新）

#### 2、vue 使用异步更新队列

> 在 Vue 中，当状态发生变化，watcher 会收到通知，然后触发虚拟 DOM 重新渲染 ， 但是 watcher 触发渲染为异步任务，每当有需要重渲染时，watcher 会被推送到任务队列并去重，然后在下一次事件循环中，Vuejs 会让队列中的 watcher 触发渲染流程并清空队列

#### 3、什么是事件循环？

> 我们都知道 JavaScript 是一门==单线程且非阻塞的脚本语言==
>
> - 这意味着 JavaScript 代码在执行的任何时候都只有一个主线程来处理所有任务。
> - 而非阻塞是指当代码需要处理异步任务时，主线程会挂起（pending）这个任务，当异步任务处理完毕后，主线程再根据一定规则去执行相应回调。
>
> 事实上，当任务处理完毕后，JavaScript 会将这个事件加入一个队列中，我们称这个队列为事件队列。被放入事件队列中的事件不会立刻执行其回调，而是等待当前执行栈中的所有任务执行完毕后，主线程会去查找事件队列中是否有任务。
>
> 异步任务有两种类型：微任务（microtask）和宏任务（macrotask）。不同类型的任务会被分配到不同的任务队列中。
>
> 当执行栈中的所有任务都执行完毕后，会去检查微任务队列中是否有事件存在，如果存在， 则会依次执行微任务队列中事件对应的回调，直到为空。然后去宏任务队列中取出一个事件，把对应的回调加入当前执行栈，当执行栈中的所有任务都执行完毕后，检查微任务队列中是否有事件存在。无限重复此过程，就形成了一个无限循环，这个循环就叫作事件循环。
>
> 属于 微任务的事件包括 但不限于 以几下 种:
>
> - Promise.then
> - Mutationobserver
> - 0bject.observe
> - process.nextTick
>
> 属于宏任务的事件包括但限不于以几下 种:
>
> - setTimeout
> - setInterval
> - setImmediate
> - MessageChannel
> - requestAnimationFrame
> - IO
> - UI 交互 事件

#### 4、什么是执行栈？

> 当我们执行一个方法时，JavaScript 会生成一个与这个方法对应的执行环境（context），又叫执行上下文。这个执行环境中有这个方法的私有作用域、上层作用域的指向、方法的参数、私有作用域中定义的变量以及 this 对象。这个执行环境会被添加到一个栈中，这个栈就是执行栈。
>
> 如果在这个方法的代码中执行到了一行函数调用语句，那么 JavaScript 会生成这个函数的执行环境并将其添加到执行栈中，然后进入这个执行环境继续执行其中的代码。执行完毕并返回结果后，JavaScript 会退出执行环境并把这个执行环境从栈中销毁，回到上一个方法的执行环境。
>
> 这个过程反复进行，直到执行栈中的代码全部执行完毕。这个执行环境的栈就是执行栈。

#### 5、nextTick 怎么做到 `下次DOM更新周期`执行

> nextTick 将更新 DOM 回调添加到微任务中执行
>
> ##### 使用：
>
> 在 `vm.$nextTick` 中获取 更新后 的 DOM，则一要定在更数改据函数的后面使用 `vm.$nextTick` 注册 回调 ， 如：
>
> <img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403151757420.png" alt="image-20240315175746376" style="zoom:50%;" />

#### 6、实现原理

> 由于 `vm.$nextTick` 会将回调添加到任务队列中延迟执行，所以在回调执行前，如果反复调用 `vm.$nextTick` ，Vuejs 并`<font color="red"></font>`，只会向任务队列中添加一个任务。此外，Vue。js 内部有一个列表用来存储 `vm.$nextTick`参数中提供的回调。在一轮事件循环中，`vm.$nextTick` 只会向任务队列添加一个任务，多次使用 `vm.$nextTick`只会将回调添加到回调列表中缓存起来。当任务触发时，依次执行列表中的所有回调并清空列表。

```javascript
/* @flow */
/* globals MutationObserver */

import { noop } from 'shared/util';
import { handleError } from './error';
import { isIE, isIOS, isNative } from './env';

export let isUsingMicroTask = false;

const callbacks = [];
let pending = false;

function flushCallbacks() {
	pending = false;
	const copies = callbacks.slice(0);
	callbacks.length = 0;
	for (let i = 0; i < copies.length; i++) {
		copies[i]();
	}
}

let timerFunc;

if (typeof Promise !== 'undefined' && isNative(Promise)) {
	const p = Promise.resolve();
	timerFunc = () => {
		p.then(flushCallbacks);

		if (isIOS) setTimeout(noop);
	};
	isUsingMicroTask = true;
} else if (
	!isIE &&
	typeof MutationObserver !== 'undefined' &&
	(isNative(MutationObserver) ||
		MutationObserver.toString() === '[object MutationObserverConstructor]')
) {
	let counter = 1;
	const observer = new MutationObserver(flushCallbacks);
	const textNode = document.createTextNode(String(counter));
	observer.observe(textNode, {
		characterData: true
	});
	timerFunc = () => {
		counter = (counter + 1) % 2;
		textNode.data = String(counter);
	};
	isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	timerFunc = () => {
		setImmediate(flushCallbacks);
	};
} else {
	timerFunc = () => {
		setTimeout(flushCallbacks, 0);
	};
}

export function nextTick(cb?: Function, ctx?: Object) {
	let _resolve;
	callbacks.push(() => {
		if (cb) {
			try {
				cb.call(ctx);
			} catch (e) {
				handleError(e, ctx, 'nextTick');
			}
		} else if (_resolve) {
			_resolve(ctx);
		}
	});
	if (!pending) {
		pending = true;
		timerFunc();
	}
	// $flow-disable-line
	if (!cb && typeof Promise !== 'undefined') {
		return new Promise((resolve) => {
			_resolve = resolve;
		});
	}
}
```

#### 7、流程图

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403151805860.png" alt="image-20240315180552546" style="zoom:50%;" />
