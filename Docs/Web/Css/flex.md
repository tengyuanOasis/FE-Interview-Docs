## Flex布局



### Flexbox 父级元素属性

- **`flex-direction`**（控制子元素排列方向）
  - `row`: 从左到右
  - `row-reverse`: 从右到左
  - `column`: 从上到下
  - `column-reverse`: 从下到上
- **`justify-content`**（控制子元素主轴对齐方式）
  - `flex-start`: 从主轴开始对齐
  - `flex-end`: 从主轴末尾对齐
  - `center`: 主轴中间对齐
  - `space-around`: 两侧对齐，元素之间间距相同
  - `space-between`: 两侧对齐，元素之间间距相同，贴着边对齐
  - `space-evenly`: 子元素与盒子边框、子元素之间间距都相同
- **`align-items`**（控制子元素纵轴对齐方式）
  - `flex-start`: 从上到下对齐
  - `flex-end`: 从下到上对齐
  - `center`: 居中对齐
  - `baseline`: 与基准线对齐
  - `stretch`（默认）：自动拉伸以填充容器
- **`flex-wrap`**（控制是否换行）
  - `nowrap`: 单行
  - `wrap`: 多行
  - `wrap-reverse`: 多行，反向排列
- **`flex-flow`**（`flex-direction` 和 `flex-wrap` 的简写）
  - `flex-row`: 从左到右，单行排列
  - `flex-row-reverse`: 从右到左，单行排列
  - `flex-column`: 从上到下，单列排列
  - `flex-column-reverse`: 从下到上，单列排列
- **`align-content`**（多行 Flex 子元素在交叉轴方向的对齐方式，类似于 `justify-content`）
  - `stretch`（默认）：与子元素对齐
  - `flex-start`: 与交叉轴起始位置对齐
  - `flex-end`: 与交叉轴末尾位置对齐
  - `center`: 居中对齐
  - `space-around`: 每个项目间距相等，项目与容器边界距离的一半
  - `space-evenly`: 每个项目间距相等，与容器边界距离相等
  - `space-between`: 项目间距相等，两侧贴着容器边界

### Flexbox 子元素属性

1. **`flex-grow`**
   - **作用**：定义项目在容器内的增长比例。
   - **默认值**：0。
   - **用法**：非负数字。决定了项目在容器有多余空间时如何分配这些空间。
2. **`flex-shrink`**
   - **作用**：定义项目在容器内的收缩比例。
   - **默认值**：1。
   - **用法**：非负数字。决定了项目在容器空间不足时如何缩小自身尺寸。
3. **`flex-basis`**
   - **作用**：定义项目的初始尺寸。
   - **默认值**：`auto`。
   - **用法**：可以是固定值，百分比，或者 `auto`。决定了项目在分配剩余空间之前的初始大小。
4. **`flex`**
   - **作用**：是 `flex-grow`, `flex-shrink`, 和 `flex-basis` 的缩写。
   - **默认值**：`0 1 auto`。
   - **用法**：`[flex-grow] [flex-shrink] [flex-basis]`。
5. **`align-self`**
   - **作用**：用于单个项目，覆盖容器的 `align-items` 属性。
   - **默认值**：`auto`。
   - **用法**：与 `align-items` 相同的值。决定了单个项目在交叉轴上的对齐方式。

