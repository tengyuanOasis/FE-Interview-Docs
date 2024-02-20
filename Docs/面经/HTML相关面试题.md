1. 请描述一下 Cookies，SessionStorage 和 localStorage 的区别

   **Cookies：**

   - Cookies 是一种由服务器发送到浏览器并存储在用户计算机上的小文本文件。
   - 一旦Cookie存储在用户计算机上，浏览器每次向服务器发送请求时都会自动发送该Cookie。
   - Cookies可以设置过期时间，可以在过期时间之前一直存在于用户计算机上。
   - Cookies的大小受到浏览器的限制，一般不超过 4KB。

   **SessionStorage**：

   - SessionStorage是 HTML5 中新增的一种客户端存储机制，它允许在浏览器关闭前将数据存储在浏览器中。
   - 存储在SessionStorage中的数据仅在同一浏览器窗口或标签页中可用，当用户关闭窗口或标签页时，数据会被删除。
   - 与Cookies不同，SessionStorage的大小一般为5-10 MB，不同的浏览器会有所不同。

   **localStorage：**

   - localStorage与SessionStorage非常相似，但数据可以长期存储。
   - 存储在localStorage中的数据可以在浏览器关闭后仍然存在，并且在同一域名下的所有页面中都可以访问。
   - 与SessionStorage一样，localStorage的大小也受到浏览器的限制，一般在5-10 MB之间，不同的浏览器会有所不同。

   > Cookies，SessionStorage和localStorage都可以用来在浏览器中存储数据，但它们的使用场景和限制略有不同。Cookies适用于需要跨多个页面和会话的数据存储，SessionStorage适用于会话级别的数据存储，而localStorage适用于持久性数据存储。

2. 知道的网页制作会用到的图片格式有哪些

3. 你如何理解 HTML 结构的语义化

4. 谈谈以前端角度出发做好 SEO 需要考虑什么?

5. BFC 是什么

6. css 优先级算法如何计算

7. 哪些 css 属性可以继承

8. 事件委托，代理，冒泡，捕获

9. iframe 的优缺点

10. cookie 的缺点

11. 如何延迟加载 js

12. 哪些操作会造成内存泄露

13. jsonp 的原理

14. load 和 ready 的区别

15. script defer, async, script 标签的位置有啥影响

16. Bom 对象

17. Dom 节点操作函数

18. css link 和 @import 的区别

19. 多 tab 通信

20. flex布局，垂直居中，水平居中

21. css 的解析会影响js的执行吗？css加载会影响吗？

22. requestAnimationFrame 和 requestIdleCallback

23. svg vs canvas

24. 层叠上下文

25. margin collapse，外边距合并

26.行内元素，块元素，盒模型

