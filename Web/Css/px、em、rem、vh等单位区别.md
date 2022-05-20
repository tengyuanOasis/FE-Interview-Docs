# Css单位px,rem,em,vw,vh的区别

<img src="https://raw.githubusercontent.com/JuntengMa/image/master/image-20220209174443138.png" alt="image-20220209174443138" style="zoom:80%;" />

#### **一、`px`**

px就是pixel像素的缩写，相对长度单位，网页设计常用的基本单位。像素px是相对于显示器屏幕分辨率而言的。

#### **二、`em`**

em是相对长度单位。相对于**<font color="red">当前对象内文本的字体尺寸 </font>**（参考物是父元素的font-size）

如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸

**特点：**

  1. em的值并不是固定的

  2. em会继承父级元素的字体大小

#### **三、`rem`**

rem是CSS3新增的一个相对单位，rem是<font color="red">**相对于HTML根元素的字体大小**</font>（font-size）来计算的长度单位

![image-20220209173943319](https://raw.githubusercontent.com/JuntengMa/image/master/image-20220209173943319.png)

- **优点**：只需要设置根目录的大小就可以把整个页面的成比例的调好

- **rem兼容性**：除了IE8及更早版本外，所有浏览器均已支持rem

  如果你没有设置html的字体大小，就会以浏览器默认字体大小，一般是16px

- **em与rem的区别：**

  rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小

**两者使用规则：**

如果这个属性根据它的font-size进行测量，则使用em 其他的一切事物属性均使用rem

**具体区别**：https://www.runoob.com/w3cnote/px-em-rem-different.html

#### **四、`vw、vh`**

vw、vh、vmax、vmin这四个单位都是基于视口

- vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的1/100

  假如浏览器的宽度为200px，那么1vw就等于2px（200px/100）

- vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100

  假如浏览器的高度为500px，那么1vh就等于5px（500px/100）

- vmin和vmax是相对于视口的高度和宽度两者之间的最小值或最大值

![image-20220209174301593](https://raw.githubusercontent.com/JuntengMa/image/master/image-20220209174301593.png)



#### **五、`其他单位`：**

%（百分比）

一般来说就是相对于父元素

1、对于普通定位元素就是我们理解的父元素

2、对于position: absolute;的元素是相对于已定位的父元素

3、对于position: fixed;的元素是相对于ViewPort（可视窗口）

#### **六、`vm`**

css3新单位，相对于视口的宽度或高度中较小的那个

其中最小的那个被均分为100单位的vm

比如：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px

缺点：兼容性差



#### **七、`常见问题`：**

**1、假如使用em来设置文字大小要注意什么？**

注意父元素的字体大小，因为em是根据父元素的大小来设置的。

比如同样是1.5em，要是父元素是20px，那1.5em就是30px.要是父元素是30px,1.5em就是45px（特别是在多重div嵌套里面更要注意）

**2、pc pt ch一般用在什么场景？**

这些我们网页设计基本上用不到，在排版上会有用处

**3、如何使 1rem=10px？**

在设置HTML{font-size：62.5%；}即可

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