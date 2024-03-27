<!-- @format -->

[TOC]

#### 1、浏览器存储方案

> Cookies，SessionStorage 、 localStorage、indexDb 等
>
> **Cookies：**
>
> - Cookies 是一种由服务器发送到浏览器并存储在用户计算机上的小文本文件。
> - 一旦 Cookie 存储在用户计算机上，浏览器每次向服务器发送请求时都会自动发送该 Cookie。
> - Cookies 可以设置过期时间，可以在过期时间之前一直存在于用户计算机上。
> - Cookies 的大小受到浏览器的限制，一般不超过 4KB。
>
> **SessionStorage**：
>
> - SessionStorage 是 HTML5 中新增的一种客户端存储机制，它允许在浏览器关闭前将数据存储在浏览器中。
> - 存储在 SessionStorage 中的数据仅在同一浏览器窗口或标签页中可用，当用户关闭窗口或标签页时，数据会被删除。
> - 与 Cookies 不同，SessionStorage 的大小一般为 5-10 MB，不同的浏览器会有所不同。
>
> **localStorage：**
>
> - localStorage 与 SessionStorage 非常相似，但数据可以长期存储。
> - 存储在 localStorage 中的数据可以在浏览器关闭后仍然存在，并且在同一域名下的所有页面中都可以访问。
> - 与 SessionStorage 一样，localStorage 的大小也受到浏览器的限制，一般在 5-10 MB 之间，不同的浏览器会有所不同。
>
> Cookies，SessionStorage 和 localStorage 都可以用来在浏览器中存储数据，但它们的使用场景和限制略有不同。Cookies 适用于需要跨多个页面和会话的数据存储，SessionStorage 适用于会话级别的数据存储，而 localStorage 适用于持久性数据存储。

#### 2、知道的网页制作会用到的图片格式有哪些

> - jpg 、 png 、webp
> - **JPG（JPEG）：**
>   - 优点：
>     - 压缩比高，适合存储照片等有丰富色彩和细节的图片。
>     - 文件大小相对较小，适合在网络上传输和存储。
>     - 广泛支持，几乎所有的操作系统和设备都能够解码和显示 JPG 图片。
>   - 缺点：
>     - 采用有损压缩，可能会损失一定的图像质量。
>     - 不支持透明度，无法保存带有透明背景的图片。
> - **PNG：**
>   - 优点：
>     - 采用无损压缩，不会损失图像质量。
>     - 支持透明度，可以保存带有透明背景的图片。
>     - 支持索引色和全彩色，适合不同类型的图像。
>   - 缺点：
>     - 文件大小通常比 JPG 大，特别是对于照片等复杂图像。
>     - 并非所有的设备和浏览器都能完全支持 PNG 的所有特性。
> - **WebP：**
>   - 优点：
>     - 具有较高的压缩比和更小的文件大小，相比 JPG 和 PNG 更加节省带宽和存储空间。
>     - 支持有损和无损压缩，可以根据需求选择合适的压缩方式。
>     - 支持透明度和动画，可用于保存带有透明背景的图片和简单的动态图片。
>     - Google 提出并推广使用，已经在 Chrome 和一些其他浏览器中得到了支持。
>   - 缺点：
>     - 兼容性相对较差，不是所有的浏览器和设备都能够完全支持 WebP 格式。
>     - 编解码的计算开销较大，可能会影响性能。

#### 3、你如何理解 HTML 结构的语义化

> HTML 结构的语义化指的是在编写 HTML 代码时，使用恰当的 HTML 元素来描述其包含的内容，<font color="blue">使得页面的结构对于开发者、搜索引擎和其他程序更具有可读性和可理解性</font>。
>
> 以下是对 HTML 结构语义化的理解：
>
> 1. **更好的可读性：** 使用语义化的 HTML 结构能够让开发者更容易理解页面的内容结构，从而更轻松地进行维护和修改。
> 2. **对搜索引擎友好：** 搜索引擎可以通过分析页面的语义化结构来更好地理解页面内容的重要性和相关性，从而提高网站在搜索结果中的排名。
> 3. **无障碍性支持：** 语义化的 HTML 结构有助于屏幕阅读器等辅助技术更好地理解页面内容，并提供更好的无障碍体验。
> 4. **便于开发维护：** 通过使用语义化的 HTML 结构，可以减少不必要的样式和脚本，使得代码更加简洁清晰，易于维护和扩展。
> 5. **增强代码的可靠性：** 使用语义化的 HTML 结构可以降低文档结构的混乱程度，减少代码错误和歧义，提高代码的可靠性和稳定性。

#### 4、谈谈以前端角度出发做好 SEO 需要考虑什么?

> 1. **html 语义化**，有助于搜索引擎更好地理解页面内容，提高页面在搜索结果中的排名
> 2. **优化页面加载速度：** 优化前端性能，包括减少 HTTP 请求、压缩资源、合并和缓存文件、使用适当的图片格式等，以提高页面加载速度。搜索引擎对页面加载速度敏感，加载速度快的页面更有可能获得更好的排名。
> 3. **响应式设计：** 使用响应式设计技术，使得网站能够适应不同设备和屏幕尺寸的访问，包括桌面电脑、平板电脑和移动设备等。响应式设计有助于提高用户体验，也有助于提高网站在移动搜索结果中的排名
> 4. **有效的 URL 结构：** 使用简洁、清晰、具有描述性的 URL 结构，包括关键词、目录结构等，有助于搜索引擎理解页面内容和页面之间的关系。
> 5. **优化页面标题和描述：** 使用有吸引力和描述性的页面标题（`<title>`）和描述（`<meta name="description">`）标签，吸引用户点击，并向搜索引擎提供页面内容的概要信息。
> 6. **关键词优化：** 在页面中合理地使用关键词，包括在标题、段落、链接等位置，但避免过度堆砌关键词，以免被搜索引擎认为是垃圾信息。
> 7. **友好的 URL 结构：** 使用简洁、清晰、具有描述性的 URL 结构，包括关键词、目录结构等，有助于搜索引擎理解页面内容和页面之间的关系。
> 8. **适当的站内链接：** 在网站内部合理地设置链接，将不同页面相互关联起来，有助于搜索引擎发现和索引网站中的所有内容。
> 9. **适当的图像优化：** 对页面中的图像进行优化，包括使用合适的图片格式、合理的大小和质量、添加描述性的文件名和 alt 属性等，以提高图片在搜索引擎中的可搜索性。
> 10. **监控和优化：** 使用工具如 Google Analytics 等来监控网站的流量和用户行为，并根据数据进行优化，包括页面内容、关键词选择、链接策略等。

#### 5、BFC 是什么

> Block Formate Context（块级格式化上下文），BFC 的目的是**形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素。**
>
> 为什么需要 BFC ？
>
> - 清除浮动
>   - [常用清除浮动方法](https://juejin.cn/post/7100833924808441864)
> - **防止外边距重叠**
> - **实现多栏布局**
> - **避免垂直外边距穿透**
>
> 怎么创建 BFC？
>
> - float 不为 none
>
> - position 为 absolute 或 fixed
>
> - overflow 不为 visible
>
> - display 为 inline-block 或 table-cell
>
> - display 为 flex/inline-flex 的直接子元素
>
> - display 为 grid/inline-grid 的直接子元素

#### 6、css 优先级算法如何计算

> 内联样式 > id 选择器 > 类选择器 > 元素选择器和伪元素选择器

#### 7、哪些 css 属性可以继承

> CSS 中有一些属性是可以被子元素继承的，这意味着父元素上设置的样式会被子元素继承并应用到子元素上。常见可以继承的 CSS 属性包括：
>
> 1. **文本相关属性：**
>    - `color`：文字颜色
>    - `font-family`：字体系列
>    - `font-size`：字体大小
>    - `font-style`：字体样式
>    - `font-weight`：字体粗细
>    - `line-height`：行高
>    - `text-align`：文本对齐方式
>    - `text-decoration`：文本装饰（如下划线、删除线）
>    - `text-transform`：文本转换（如大写、小写）
>    - `white-space`：空白符处理方式
> 2. **盒子模型相关属性：**
>    - `visibility`：元素可见性
>    - `cursor`：鼠标指针样式
> 3. **列表相关属性：**
>    - `list-style-type`：列表项标记类型
>    - `list-style-position`：列表项标记位置
>    - `list-style-image`：列表项标记图像
> 4. **表格相关属性：**
>    - `caption-side`：表格标题位置
>    - `border-collapse`：表格边框合并方式
>    - `empty-cells`：空单元格显示方式
> 5. **其他属性：**
>    - `inherit`：指定继承父元素的所有属性

#### 8、事件委托，代理，冒泡，捕获

> 事件委托：
>
> 事件委托实际上就是利用 js 事件冒泡机制处理事件，将事件绑定给父元素，使其通过冒泡代理子元素事件。
>
> 1. **事件冒泡和捕获：** 在 DOM 树中，当一个元素上触发了一个事件，例如点击事件，它会首先从最深的嵌套元素开始向上冒泡到根节点，然后再从根节点往下捕获到触发事件的元素。
> 2. **绑定事件处理程序：** 事件委托的关键是将事件处理程序绑定到父元素上，而不是直接绑定到子元素。这样做的目的是为了让父元素能够捕获到子元素触发的事件。
> 3. **事件代理：** 当父元素捕获到事件后，可以通过检查事件目标（`event.target`）来确定触发事件的具体子元素。然后根据子元素的信息来执行相应的操作，以达到代理子元素事件的目的。
>
> 实现方案：
>
> element.addEventListener('click', handler, true);
>
> 事件监听函数第三个参数
> 默认为false，即冒泡
>
> 实现事件捕获的过程是通过在 `addEventListener` 方法中设置第三个参数为 `true` 来实现的



#### 9、iframe 的优缺点

> 优点：
>
> 1. **分割页面内容：** 可以将页面内容划分为多个部分，并将每个部分加载到单独的 iframe 中，方便管理和维护。
> 2. **跨域通信：** iframe 可以实现跨域通信，通过 postMessage 方法可以在不同域之间进行安全的通信。
> 3. **独立性：** iframe 中的内容与父页面相互独立，不会互相影响，因此可以实现一些独立的功能模块。
> 4. **代码隔离：** iframe 中的内容和样式是相互隔离的，可以避免页面间的样式冲突和 JavaScript 变量污染。
> 5. **页面无刷新加载：** 可以通过 iframe 实现局部无刷新加载内容，提升用户体验。
>
> 缺点：
>
> 1. **性能问题：** 每个 iframe 都需要独立的 HTTP 请求和渲染过程，会增加页面加载时间和资源消耗，可能影响性能。
> 2. **SEO 难度：** 搜索引擎可能无法正确解析 iframe 中的内容，影响页面的搜索引擎优化。
> 3. **可访问性问题：** 对于一些辅助技术（如屏幕阅读器）可能无法正确解析 iframe 中的内容，降低了页面的可访问性。
> 4. **页面安全性：** 如果嵌入的内容不可信，存在被恶意注入的风险，可能导致安全漏洞。
> 5. **页面布局问题：** iframe 的高度和宽度需要手动设置，可能会导致页面布局出现问题，特别是在响应式布局中。

#### 10、cookie 的缺点

> 1. **隐私问题：** Cookie 存储在用户的计算机上，可能会泄露用户的隐私信息。如果未经用户同意就在其计算机上存储敏感信息，可能会引发隐私问题。
> 2. **安全风险：** 由于 Cookie 是存储在用户计算机上的普通文本文件，因此可能会成为黑客攻击的目标。例如，恶意软件可能会盗取存储在 Cookie 中的用户信息。
> 3. **跨站点请求伪造（CSRF）攻击：** 攻击者可能会利用 Cookie 在用户不知情的情况下执行恶意操作。例如，通过在用户的计算机上存储受信任网站的身份验证 Cookie，攻击者可以模拟用户的身份进行 CSRF 攻击。
> 4. **限制：** 每个域名下的浏览器对 Cookie 的数量和大小都有限制。如果网站在同一个域名下设置了太多或太大的 Cookie，可能会导致其他 Cookie 被覆盖或无法正常工作。
> 5. **性能问题：** 每次 HTTP 请求都会携带相应的 Cookie，这可能会增加网络流量和服务器负载，从而影响网站性能。
> 6. **不利于移动设备：** 在移动设备上，用户经常清理浏览器的 Cookie，因此 Cookie 不太适合存储长期登录信息或其他持久性数据。
> 7. **跨域限制：** 浏览器通常限制来自不同域名的 Cookie 访问。这意味着一个域名下设置的 Cookie 在其他域名下不可用，这可能会影响一些跨域应用程序的功能。
> 8. **不可跨浏览器共享：** 每个浏览器都有自己的 Cookie 存储，不同浏览器之间的 Cookie 不共享，这可能会导致用户在不同设备上登录状态不一致的问题。

#### 11、如何延迟加载 js

> 1. **defer 属性：** 使用 `<script>` 标签的 `defer` 属性可以实现延迟加载 JavaScript。设置了 `defer` 属性的脚本文件会在 HTML 解析完成后（DOMContentLoaded 事件之前）按照它们在页面中出现的顺序依次执行。例如：
>
>    ```
>    htmlCopy code
>    <script src="example.js" defer></script>
>    ```
>
> 2. **async 属性：** 使用 `<script>` 标签的 `async` 属性也可以实现 JavaScript 的异步加载。设置了 `async` 属性的脚本文件会在下载完成后立即执行，不会阻塞页面的解析和渲染。但是，多个带有 `async` 属性的脚本文件的执行顺序不确定，因此适合用于独立的脚本文件。例如：
>
>    ```
>    htmlCopy code
>    <script src="example.js" async></script>
>    ```
>
> 3. **动态创建 `<script>` 标签：** 使用 JavaScript 动态创建 `<script>` 标签并将其插入到页面中，可以实现按需加载 JavaScript 文件。例如：
>
>    ```
>    javascriptCopy code
>    var script = document.createElement('script');
>    script.src = 'example.js';
>    document.body.appendChild(script);
>    ```
>
> 4. **使用延迟加载库：** 使用一些专门的延迟加载库，如 LazyLoad.js、RequireJS 等，这些库提供了更多的功能和选项，可以更灵活地管理和控制 JavaScript 文件的加载和执行。
>
> 延迟加载 JavaScript 可以提高页面的加载速度和性能，特别是对于包含大量 JavaScript 文件的页面或需要优先加载重要内容的页面来说，延迟加载是一种有效的优化手段。但需要注意的是，在延迟加载 JavaScript 时，需要考虑到页面的兼容性、交互效果和功能依赖等因素，确保延迟加载不会影响页面的正常运行和用户体验。

#### 12、哪些操作会造成内存泄露

> 闭包、定时器未清除、全局变量、**循环引用**

#### 13、jsonp 的原理

> jsonp 利用`<script>`标签不受浏览器同源策略的特性实现的；
>
> 1. **客户端发起请求：** 客户端通过创建一个 `<script>` 标签，将请求发送到包含 JSON 数据的远程服务器。
> 2. **服务器返回数据：** 服务器接收到请求后，将 JSON 数据包装在一个函数调用中，并作为 JavaScript 代码返回给客户端。这个函数称为回调函数，它在客户端接收到数据后被调用。
> 3. **客户端处理数据：** 客户端在接收到返回的 JavaScript 代码后，会立即执行该代码，从而调用回调函数，并将 JSON 数据作为参数传递给回调函数。这样客户端就可以在回调函数中处理获取到的数据了。
>
> <font color="red">优缺点：</font>
>
> 优点：
>
> 1. 可以实现跨域
> 2. 兼容性好，大部分浏览器都支持
>
> 缺点：
>
> 1. 只能实现 get 请求；
> 2. 前后端必须配合，前端发送请求并提供回调函数，后端调用回调函数返回数据
> 3. 没有状态码，不好进行错误处理
> 4. 安全性，

例子 🌰：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>JSONP Demo</title>
	</head>
	<body>
		<script>
			// 定义 JSONP 回调函数
			function handleResponse(data) {
				console.log('Received data from server:', data);
			}

			// 动态创建 <script> 标签来发送 JSONP 请求
			function fetchJSONP(url, callbackName) {
				// 创建一个 <script> 元素
				var script = document.createElement('script');
				// 拼接 URL，并指定回调函数名
				script.src = url + '?callback=' + callbackName;
				// 将 <script> 元素添加到页面中，触发请求
				document.body.appendChild(script);
			}

			// 发送 JSONP 请求
			fetchJSONP('http://example.com/api/data', 'handleResponse');
		</script>
	</body>
</html>
```

```javascript
const http = require('http');
const url = require('url');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
	// 解析 URL，获取查询参数
	const queryObject = url.parse(req.url, true).query;

	// 获取回调函数名
	const callbackName = queryObject.callback;

	// 准备要返回的数据
	const data = {
		message: 'Hello, JSONP!'
	};

	// 设置响应头
	res.writeHead(200, {
		'Content-Type': 'application/javascript',
		'Access-Control-Allow-Origin': '*' // 允许所有域的跨域请求
	});

	// 构造 JSONP 响应
	const jsonResponse = callbackName + '(' + JSON.stringify(data) + ');';

	// 发送 JSONP 响应
	res.end(jsonResponse);
});

// 监听端口
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
```

#### 14、load 和 ready 的区别

#### 15、script defer, async, script 标签的位置有啥影响

> 都对页面加载和渲染有影响；
>
> 首先：js 解析会阻塞 dom 加载
>
> #### 1. `<script src="script.js">`
>
> 没有 defer 或 async,浏览器会<font color="red">立即加载并执行指定</font>的脚本,“立即”指的是在渲染该 script 标签之下的文档元素之前,也就是说不等待后续载入的文档元素,读到就加载并执行。
>
> #### 2. `<script async src="script.js">`
>
> 有 async, 加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
>
> #### 3.` <script defer src="myscript.js">`
>
> 有 defer,加载后续文档元素的过程将和 script.js 的<font color="red">加载并行进行</font>（异步）,但是 script.js 的执行要在所有元素解析完成之后,DOMContentLoaded 事件触发之前完成。
>
> 从实用角度来说,首先把所有脚本都丢到 </body> 之前是最佳实践,因为对于旧浏览器来说这是唯一的优化选择,此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。
>
> 接着,我们来看一张图:
>
> ![defer_async](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202402291629610.png)defer_async
>
> 蓝色线代表网络读取,红色线代表执行时间,这俩都是针对脚本的。绿色线代表 HTML 解析。
>
> 因此,我们可以得出结论:
>
> 1. defer 和 async 在网络读取（下载）这块儿是一样的,都是异步的（相较于 HTML 解析）
> 2. 它俩的差别在于脚本下载完之后何时执行,显然 defer 是最接近我们对于应用脚本加载和执行的要求的
> 3. 关于 defer,此图未尽之处在于它是按照加载顺序执行脚本的,这一点要善加利用
> 4. async 则是一个乱序执行的主,反正对它来说脚本的加载和执行是紧紧挨着的,所以不管你声明的顺序如何,只要它加载完了就会立刻执行
> 5. 仔细想想,async 对于应用脚本的用处不大,因为它完全不考虑依赖（哪怕是最低级的顺序执行）,不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的

#### 16、Bom 对象

> Bom是浏览区对象模型，是浏览器提供的一些js接口用于操作浏览器窗口，用户交互等。
>
> 如：
>
> - window对象
> - document对象
> - history对象
> - location对象
> - navigator对象
> - screen对象

#### 17、Dom 节点操作函数

> document.getElementById(xxxx)
>
> document.querySelector(xxxx)
>
> …

#### 18、css link 和 @import 的区别

> `<link>` 标签和 `@import` 规则都可以用于引入外部样式表
>
> 1. **加载顺序：**
>    - `<link>` 标签是 HTML 元素，用于在文档中引入外部样式表，它会在页面加载时同时加载样式表。
>    - `@import` 规则是 CSS 中的一种规则，用于在 CSS 文件中引入外部样式表，它会在 CSS 文件被解析时才加载样式表。
> 2. **兼容性：**
>    - `<link>` 标签具有更好的兼容性，几乎所有的浏览器都支持。
>    - `@import` 规则在一些古老的浏览器中可能不被支持，如 IE5 及更早版本。
> 3. **加载方式：**
>    - `<link>` 标签允许在页面中的任何位置使用，并且可以同时引入多个外部样式表。
>    - `@import` 规则只能在 CSS 文件的顶部使用，并且每个 `@import` 规则只能引入一个外部样式表。
> 4. **权重和优先级：**
>    - `<link>` 标签引入的样式表会与页面其他样式表并行加载，不会阻塞页面渲染，并且具有较高的优先级，可以通过 CSS 的特殊性和顺序进行覆盖。
>    - `@import` 规则引入的样式表会在 CSS 文件解析完成后再加载，会阻塞页面的渲染，并且具有较低的优先级，容易被其他样式表覆盖。

#### 19、多 tab 通信

> - cookie 
> - session/local storage
> - 接口
> - Websockets

#### 20、flex 布局，垂直居中，水平居中

```css
# 水平垂直居中
.box{
  display:flex;
  justifiy-content:center;
  align-items:center
}
```



#### 21、css 的解析会影响 js 的执行吗？css 加载会影响吗？

> 不会直接影响；
>
> 但是css解析和加载会影响html页面渲染，进而影响js解析和加载

#### 22、requestAnimationFrame 和 requestIdleCallback

#### 23、svg vs canvas

#### 24、层叠上下文 ， margin collapse，外边距合并

> 1. **层叠上下文（Stacking Context）：** 层叠上下文是一种三维的概念，它定义了 HTML 元素在垂直方向上的堆叠顺序。具有层叠上下文的元素可以影响其后代元素的层叠顺序和表现形式。常见触发层叠上下文的条件包括：
>    - 根元素 `<html>`
>    - `position` 属性值不为 `static`（例如 `relative`、`absolute`、`fixed`）
>    - `z-index` 值不为 `auto`
>    - `opacity` 属性值不为 `1`
>    - `transform` 属性值不为 `none`
>    - `mix-blend-mode` 属性值不为 `normal`
>    - `filter` 属性值不为 `none`
>    - `will-change` 属性值设置了属于以下列表中的任何一个属性
> 2. **外边距合并（Margin Collapse）：** 外边距合并是指相邻的两个（或更多）块级元素的垂直外边距会合并为一个外边距的现象。外边距合并遵循一定的规则：
>    - 相邻元素的外边距会合并为其中的最大外边距值。
>    - 子元素的外边距不会和父元素的外边距合并。
>    - 内联元素的外边距不会和其他元素的外边距合并。
>    - 绝对定位元素的外边距不会和其他元素的外边距合并。
> 3. **处理外边距合并的方法：** 在实际布局中，通常采用以下方法来控制外边距合并：
>    - 使用内边距、边框或者空的块级元素来打断合并。
>    - 使用浮动或绝对定位来打断合并。
>    - 使用 CSS 属性（例如 `overflow: auto`、`display: inline-block`）来创建新的块级格式上下文（block formatting context），从而阻止合并。

#### 25、margin collapse，外边距合并

#### 26、行内元素，块元素，盒模型
