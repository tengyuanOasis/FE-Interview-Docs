##### 1、伪元素和伪类的区别

> - 伪元素
>
>   在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
>
>   `p::before {content:"第一章：";} `
>
>   `p::after {content:"Hot!";} `
>
>   `p::first-line {background:red;} `
>
>   `p::first-letter {font-size:30px;}`
>
> - 伪类
>
>   将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
>
>   `a:hover {color: #FF00FF} `
>
>   `p:first-child {color: red}`
>
> - **总结：** 
>
>   伪类是通过在已有的元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。

##### 2、 对盒模型的理解

> CSS3中的盒模型有以下两种：**标准盒子模型、IE盒子模型**
>
> 盒模型都是由四个部分组成的，分别是margin、border、padding和content。
>
> 标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同：
>
> - 标准盒模型的width和height属性的范围只包含了content，
> - IE盒模型的width和height属性的范围包含了border、padding和content。
>
> 可以通过修改元素的box-sizing属性来改变元素的盒模型：
>
> - `box-sizeing: content-box`表示标准盒模型（默认值）
> - `box-sizeing: border-box`表示IE盒模型（怪异盒模型）

##### 3、单行、多行文本溢出隐藏

> - 单行文本溢出
>
>   ```css
>   overflow: hidden;            // 溢出隐藏
>   text-overflow: ellipsis;      // 溢出用省略号显示
>   white-space: nowrap;         // 规定段落中的文本不进行换行
>   ```
>
> - 多行文本溢出
>
>   ```css
>   overflow: hidden;            // 溢出隐藏
>   text-overflow: ellipsis;     // 溢出用省略号显示
>   display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
>   -webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
>   -webkit-line-clamp:3;        // 显示的行数
>   ```

##### 5、BFC

> - 什么是BFC
>
>   块级格式化上下文
>
> - 用处
>
>   形成一个独立的空间，空间内的元素不影响外部布局，多用于清除浮动，防止margin重叠
>
> - 触发规则
>
>   - float不设为none
>   - position不为 static 或 relative 
>   - dispaly:tabel-cell | inline-block
>   - overflow:auto | scroll | hidden
>
> - 使用场景
>
>   - 解决因浮动元素让父元素高度坍塌问题（父元素添加 `overflow: hidden`）
>
>   - 两栏自适应布局
>
>   - 外边距垂直方向重合
>
>     <img src="https://gitee.com/JuntengMa/imgae/raw/master/image-20220211163322400.png" alt="image-20220211163322400" style="zoom:25%;float:left" />

##### 6、三栏布局

三栏布局就是两边宽度固定,中间自适应的布局

改变浏览器的宽度,两边的宽度不会变,只会中间区域的宽度变长变短.

实现三栏布局的方法有圣杯布局、双飞翼布局和flex布局
