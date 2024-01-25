<!-- @format -->

# Css 单位 px,rem,em,vw,vh 的区别

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209174443138.png" alt="image-20220209174443138" style="zoom:80%;" />

#### **一、`px`**

px 就是 pixel 像素的缩写，相对长度单位，网页设计常用的基本单位。像素 px 是相对于显示器屏幕分辨率而言的。

#### **二、`em`**

em 是相对长度单位。相对于**<font color="red">当前对象内文本的字体尺寸 </font>**（参考物是父元素的 font-size）

如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸

**特点：**

1. em 的值并不是固定的

2. em 会继承父级元素的字体大小

#### **三、`rem`**

rem 是 CSS3 新增的一个相对单位，rem 是<font color="red">**相对于 HTML 根元素的字体大小**</font>（font-size）来计算的长度单位

![image-20220209173943319](https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209173943319.png)

- **优点**：只需要设置根目录的大小就可以把整个页面的成比例的调好

- **rem 兼容性**：除了 IE8 及更早版本外，所有浏览器均已支持 rem

  如果你没有设置 html 的字体大小，就会以浏览器默认字体大小，一般是 16px

- **em 与 rem 的区别：**

  rem 是相对于根元素（html）的字体大小，而 em 是相对于其父元素的字体大小

**两者使用规则：**

如果这个属性根据它的 font-size 进行测量，则使用 em 其他的一切事物属性均使用 rem

**具体区别**：https://www.runoob.com/w3cnote/px-em-rem-different.html

#### **四、`vw、vh`**

vw、vh、vmax、vmin 这四个单位都是基于视口

- vw 是相对视口（viewport）的宽度而定的，长度等于视口宽度的 1/100

  假如浏览器的宽度为 200px，那么 1vw 就等于 2px（200px/100）

- vh 是相对视口（viewport）的高度而定的，长度等于视口高度的 1/100

  假如浏览器的高度为 500px，那么 1vh 就等于 5px（500px/100）

- vmin 和 vmax 是相对于视口的高度和宽度两者之间的最小值或最大值

![image-20220209174301593](https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209174301593.png)

#### **五、`其他单位`：**

%（百分比）

一般来说就是相对于父元素

1、对于普通定位元素就是我们理解的父元素

2、对于 position: absolute;的元素是相对于已定位的父元素

3、对于 position: fixed;的元素是相对于 ViewPort（可视窗口）

#### **六、`vm`**

css3 新单位，相对于视口的宽度或高度中较小的那个

其中最小的那个被均分为 100 单位的 vm

比如：浏览器高度 900px，宽度 1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px

缺点：兼容性差

#### **七、`常见问题`：**

**1、假如使用 em 来设置文字大小要注意什么？**

注意父元素的字体大小，因为 em 是根据父元素的大小来设置的。

比如同样是 1.5em，要是父元素是 20px，那 1.5em 就是 30px.要是父元素是 30px,1.5em 就是 45px（特别是在多重 div 嵌套里面更要注意）

**2、pc pt ch 一般用在什么场景？**

这些我们网页设计基本上用不到，在排版上会有用处

**3、如何使 1rem=10px？**

在设置 HTML{font-size：62.5%；}即可

**4、如果父元素没有指定高度，那么子元素的百分比的高度是多少？**

会按照子元素的实际高度，设置百分比则没有效果

5、**实际中使用:**

- 像素比转换插件 [postcss-loader](https://www.webpackjs.com/loaders/postcss-loader/)

  - 下载

  ```
  npm i postcss-loader px2rem-loader -D
  ```

  - 使用

  ```

  module.exports = {
    mode: "production",
    //入口文件
    entry: { ...entry },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader",
            "postcss-loader",
            {
              loader: "px2rem-loader",
              options: {
                remUnit: 75,
                remPrecision: 8,
              },
            },
          ],
        },
      ],
    },

  ```
