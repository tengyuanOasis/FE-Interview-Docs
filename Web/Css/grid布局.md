https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html



**### 栅格布局**

- 核心

```css
.container {

 display: grid; //栅格布局

 grid-template-columns: 100px 100px 100px; // 每一列的列宽

 grid-template-rows: 100px 100px 100px; //每一行的行高

}
```

- repeat()

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用 repeat()函数，简化重复的值。

repeat(重复次数,宽度 or 高度)

```css

.container {

 display: grid; //栅格布局

 grid-template-columns: repeat(3, 33.3%); // 每一列的列宽

 grid-template-rows: repeat(3, 33.3%); //每一行的行高

}

```



- auto-fill 关键字

 有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 auto-fill 关键字表示自动填充。



```css

.container {

 display: grid;

 grid-template-columns: repeat(*auto-fill*, 100px);

}

```



- grid-row-gap && grid-column-gap



grid-row-gap 属性设置行与行的间隔（行间距），grid-column-gap 属性设置列与列的间隔（列间距）。



```css

.container {

 grid-row-gap: 20px;

 grid-column-gap: 20px;

}

```



- grid-gap

 grid-gap 属性是 grid-column-gap 和 grid-row-gap 的合并简写形式，语法如下。



```css

grid-gap: <grid-row-gap> <grid-column-gap>;

```



如果 grid-gap 省略了第二个值，浏览器认为第二个值等于第一个值。



- justify-items 属性，align-items 属性，place-items 属性