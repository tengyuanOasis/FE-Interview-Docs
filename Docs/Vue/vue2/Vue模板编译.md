<!-- @format -->

### Vue 模板编译

> Vue 使用 template 语法，但是 template 代码最终转换为可执行代码需要一系列的编译和转换；
>
> # Vue 模板编译的基本流程如下
>
> 1. **解析模板：** Vue 模板编译的第一步是将模板字符串解析成 AST（抽象语法树）。AST 是一种树形结构，用于表示源代码的抽象语法结构。在解析模板的过程中，Vue 将模板字符串解析成一棵树形结构，每个节点代表模板中的一个元素、指令、属性或文本内容。
> 2. **优化 AST：** 解析完成后，Vue 会对 AST 进行优化操作。这些优化操作旨在提高渲染性能和减少运行时的开销。其中包括静态节点提升、静态事件处理函数提升等优化操作。静态节点提升是指将静态节点转换为渲染函数中的常量，以避免重复创建和更新；静态事件处理函数提升是指将静态事件处理函数提取到渲染函数之外，以减少渲染函数的体积和复杂度。
> 3. **生成渲染函数：** 经过优化后，Vue 将优化后的 AST 转换为渲染函数。渲染函数是一种 JavaScript 函数，它接收一个参数 `h`（或者 `createElement`），用于创建 VNode 对象。渲染函数根据 AST 生成的结构和内容，动态地创建 VNode 对象，从而构建虚拟 DOM 树。
> 4. **渲染页面：** 最后，Vue 使用渲染函数生成的 VNode 对象创建虚拟 DOM 树，并将其渲染到页面上。Vue 通过比较新旧虚拟 DOM 树的差异，找出需要更新的部分，然后将更新应用到实际的 DOM 上，从而实现页面的渲染。
>
> 总的来说，Vue 模板编译的流程包括解析模板、优化 AST、生成渲染函数和渲染页面四个步骤。这个过程是 Vue 实现数据驱动视图更新的基础。

#### 模板编译大致分为以下几个步骤：

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/202202241014889.png" alt="image-20220224101456765" style="zoom: 50%;float:left" />

####  1、通过`parse`函数将 template 转化为 AST 语法树

```javascript
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // parse --->   template ---> ast                                                
  const ast = parse(template.trim(), options);
  
  if (options.optimize !== false) {
    // optimize 函数会对 AST 进行优化处理，以提高 Vue 应用的运行性能。
    // 例如，它会移除一些不必要的节点，优化指令的执行顺序等。
    // 静态节点提升： 将静态节点提升为静态根节点，以减少虚拟 DOM 的重复渲染和对比操作，从而提高渲染性能。
    // 静态节点标记： 将静态节点标记为静态，以减少虚拟 DOM 的渲染和对比操作。
    // 静态事件提升： 将静态事件处理函数提升到父元素上，以减少事件绑定的数量，提高事件处理的效率。
    // 条件表达式优化： 对条件表达式进行简化和优化，以减少运行时的计算量。
    // 纯文本节点提升： 将纯文本节点提升为静态文本节点，以减少虚拟 DOM 的重复渲染和对比操作。
    // 优化后的 AST 将被传递给 generate 函数，用于生成最终的渲染函数代码。
    optimize(ast, options);
  }
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
});
```



#### 2、根据 AST 生成可执行代码 render 和 staticRenderFns

如下代码，编译后如图

```vue
<div>
      <p>
        {{name}}
      </p>
      <ul>
        <li v-for="(item,index) in hobby" :key="index">{{item}}</li>
      </ul>
      <button v-on:click="changeHobby">修改hobby</button>
 </div>
```

![image-20220224103903186](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202241039334.png)

在 AST 中

- 每个元素都有一个 `type` 字段表示它的类型，例如 `div`、`p`、`ul`、`li`、`button` 等。
- `attrs` 字段表示元素的属性列表
- `children` 字段表示元素的子节点列表。
- 在表达式中，使用了 `expression` 类型表示表达式节点，其中的 `text` 字段表示表达式的文本内容。

3、**generate**

```javascript
export function generate (
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  const state = new CodegenState(options)
  const code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")'
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns
  }
}
```

> 通过调用 `generate` 函数，将优化后的抽象语法树（AST）转换为渲染函数的字符串形式，从而得到最终的渲染代码。
>
> 具体来说，`generate` 函数会遍历优化后的 AST，并根据 AST 中的节点类型生成相应的 JavaScript 代码片段。在遍历过程中，`generate` 函数会根据节点的类型和属性生成对应的 JavaScript 代码，包括创建元素、设置属性、处理事件等。最终，`generate` 函数会将生成的代码拼接成一个字符串，并返回给调用者。
>
> 这个过程可以理解为将模板编译为渲染函 数的过程。通过这个渲染函数，Vue 可以根据组件的状态生成虚拟 DOM，并将其渲染到页面上。

> ## staticRenderFns：
>
> 在 Vue 的编译过程中，如果一个节点是静态的（即节点内容在编译时就已经确定，不会发生变化），Vue 会将其编译为静态渲染函数，并将其缓存起来。这样，在组件重新渲染时，Vue 可以直接使用缓存的静态渲染函数来渲染静态节点，而不需要重新计算和生成渲染结果，从而提高了渲染性能。
>
> 静态渲染函数会被触发的情况通常包括以下几种：
>
> 1. **模板中的静态节点**
>
>    ```javascript
>    <template>
>      <div>
>        <p>静态文本</p> <!-- 这个 p 标签是一个静态节点 -->
>      </div>
>    </template>
>    ```
>
> 2. **v-once 指令**
>
> 3. **不包含动态数据的插值表达式**
>
>    ```javascript
>    <template>
>      <div>
>        <p>{{ '静态文本' }}</p> <!-- 这个插值表达式中不包含任何动态数据，是一个静态节点 -->
>      </div>
>    </template>
>    ```
>
>    <img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403151932197.png" alt="image-20240315193224702" style="zoom: 33%;" />

#### 2、Parse

用于将 html 转化为 AST ， 核心是使用了开源库**parseHTML**

#### 3、`new Vue()`

```js
const app = new Vue({
	el: '#app',
	data() {
		return {
			name: 'Mike',
			hobby: ['swimming', 'travel']
		};
	},
	methods: {
		changeHobby() {
			this.hobby.push('coding');
		}
	}
});
```

#### 4、`$mount `

用于编译 temple 并渲染到页面

```js
Vue.prototype.$mount = function (el?: string | Element, hydrating?: boolean): Component {
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
			if (typeof template === 'string') {
				if (template.charAt(0) === '#') {
					template = idToTemplate(template);
					/* istanbul ignore if */
					if (process.env.NODE_ENV !== 'production' && !template) {
						warn(`Template element not found or is empty: ${options.template}`, this);
					}
				}
			} else if (template.nodeType) {
				/*当template为DOM节点的时候*/
				template = template.innerHTML;
			} else {
				if (process.env.NODE_ENV !== 'production') {
					warn('invalid template option:' + template, this);
				}
				return this;
			}
		} else if (el) {
			/*获取element的outerHTML*/
			template = getOuterHTML(el);
		}

		if (template) {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
				mark('compile');
			}
			/*
      将template编译成render函数，这里会有render以及staticRenderFns两个返回，
      这是vue的编译时优化，static静态不需要在VNode更新时		进行patch，优化性能   
      🤣🤣😀😁🍔👇👇🍔🍔👇👇👇👇,模板编译核心
      */
			const { render, staticRenderFns } = compileToFunctions(
				template,
				{
					outputSourceRange: process.env.NODE_ENV !== 'production',
					shouldDecodeNewlines,
					shouldDecodeNewlinesForHref,
					delimiters: options.delimiters,
					comments: options.comments
				},
				this
			);
			options.render = render;
			options.staticRenderFns = staticRenderFns;

			/* istanbul ignore if */
			if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
				mark('compile end');
				measure(`vue ${this._name} compile`, 'compile', 'compile end');
			}
		}
	}
	/*调用const mount = Vue.prototype.$mount保存下来的不带编译的mount*/
	return mount.call(this, el, hydrating);
};
```

#### 5、`compileToFunctions`用于将`template`转化为`ast`语法树，并 return 出 render 函数和带有缓存的 renderFunc
