## px 、em、 rem 区别

1、**CSS中有两种类型的长度——相对长度和绝对长度。**

2、**绝对长度:  它们与其他任何东西都没有关系，通常被认为总是相同的大小** 

| 单位 | 名称         | 等价换算            |
| :--- | ------------ | ------------------- |
| `cm` | 厘米         | 1cm = 96px/2.54     |
| `mm` | 毫米         | 1mm = 1/10th of 1cm |
| `Q`  | 四分之一毫米 | 1Q = 1/40th of 1cm  |
| `in` | 英寸         | 1in = 2.54cm = 96px |
| `pc` | 十二点活字   | 1pc = 1/16th of 1in |
| `pt` | 点           | 1pt = 1/72th of 1in |
| `px` | 像素         | 1px = 1/96th of 1in |

3、**相对长度： 相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。**

| **单位** | **相对于**                                                   |
| -------- | ------------------------------------------------------------ |
| `px`     | 像素px是相对于显示器屏幕分辨率而言的。                       |
| `em`     | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
| `rem`    | 根元素的字体大小                                             |

[其他相对长度单位 , 点击查看](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)

4、**具体区别**：https://www.runoob.com/w3cnote/px-em-rem-different.html

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