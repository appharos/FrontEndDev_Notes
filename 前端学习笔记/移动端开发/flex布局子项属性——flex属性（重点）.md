 ## flex布局子项常见属性


1. flex属性


`flex` 属性是一个用于 Flex 子项（Flex items）的简写属性，它用于设置 Flex 子项如何分配和排列空间。这个简写属性组合了三个其他的 Flex 子项属性：`flex-grow`，`flex-shrink`，和 `flex-basis`。

### 语法

```css
.flex-item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```
 
- `<flex-grow>`: 这个值定义了该项目在父容器中剩余空间被分配时的放大比例。默认值是 `0`。
  
- `<flex-shrink>`: 定义了当父容器空间不足时，该项目缩小的比例。默认值是 `1`。
  
- `<flex-basis>`: 定义了在分配多余空间之前，项目占据的主轴空间（main size）。它可以是一个绝对值（如 `px`, `em` 等）或相对值（如 `%`）。默认值是 `auto`。

### 常用简写值

- `flex: auto`: 等同于 `flex: 1 1 auto;`。
- `flex: initial`: 等同于 `flex: 0 1 auto;`。
- `flex: none`: 等同于 `flex: 0 0 auto;`。
- `flex: <positive-number>`: 如果你只提供一个正数，它将被用作 `flex-grow`，而 `flex-shrink` 和 `flex-basis` 将分别被设置为 `1` 和 `0%`。

### 示例

下面是一些示例代码：

```css
/* 子项等分剩余空间 */
.flex-item {
  flex: 1;
}

/* 子项不占用剩余空间，也不缩小 */
.flex-item {
  flex: none;
}

/* 子项占用剩余空间，但在空间不足时可以缩小 */
.flex-item {
  flex: auto;
}

/* 自定义设置 */
.flex-item {
  flex: 2 2 150px;
}
```

在这最后一个例子中，`flex-grow` 被设置为 `2`，这意味着该子项会占用两份剩余空间；`flex-shrink` 也被设置为 `2`，表示该项目在空间不足时会缩小的比例也是 `2`；`flex-basis` 被设置为 `150px`，这是该项目的初始大小。

使用 `flex` 属性可以让你以更简洁的方式设置 Flex 子项的这些属性，而不是分别单独设置它们。



**代码示例注解flex属性**

```html
<style>
    section {
      width: 600px;
      height: 150px;
      background-color: lightgray;
      margin: 0 auto;
      display: flex;
    }

    section div:nth-child(1) {
      flex: 1;
      flex-basis: 100px;
      height: 150px;
      background-color: red;
    }

    section div:nth-child(2) {
      flex: 2;
      background-color: green;
    }

    section div:nth-child(3) {
      flex: 1;
      flex-basis: 100px;
      /* width: 100px; */
      height: 150px;
      background-color: blue;
    }
  </style>
</head>

<body>
  <section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </section>

</body>

```
ChatGPT分析以上代码过程：

当然，我们可以逐步分析这个示例中 Flex 子项在父元素中的宽度分配情况。

### 初始设置

- 父元素（`section`）的宽度设置为 `600px`。
- 子项 1 和子项 3 的 `flex-basis` 都设置为 `100px`，子项 2 没有设置 `flex-basis`，所以默认为 `auto`。
- 子项 1 的 `flex-grow` 值为 `1`，子项 2 的 `flex-grow` 值为 `2`，子项 3 的 `flex-grow` 值为 `1`。

### 计算初始宽度

1. 子项 1 和子项 3 的初始宽度（`flex-basis`）都是 `100px`。
2. 子项 2 的初始宽度（`flex-basis`）没有设置，且没有内容，所以默认为 `0px`。

### 计算剩余空间

- 总剩余空间 = 父元素宽度 - 所有子项的初始宽度
- 总剩余空间 = `600px - (100px + 0px + 100px) = 400px`

### 计算每个子项的额外空间

- 子项 1 的 `flex-grow` 是 `1`，子项 2 的 `flex-grow` 是 `2`，子项 3 的 `flex-grow` 是 `1`，所以总共是 `1 + 2 + 1 = 4` "份"。
  
- 子项 1 将获得 `400px * (1 / 4) = 100px` 的额外空间。
  
- 子项 2 将获得 `400px * (2 / 4) = 200px` 的额外空间。
  
- 子项 3 将获得 `400px * (1 / 4) = 100px` 的额外空间。

### 计算最终宽度

- 子项 1 的最终宽度 = `100px（flex-basis） + 100px（额外空间） = 200px`
  
- 子项 2 的最终宽度 = `0px（flex-basis） + 200px（额外空间） = 200px`
  
- 子项 3 的最终宽度 = `100px（flex-basis） + 100px（额外空间） = 200px`

最终，每个子项的宽度都是 `200px`，完全符合 Flex 布局的规则。



2. align-self 控制子项自己的侧轴上的排列方式

`align-self` 属性允许你调整 Flex 容器中单个子项（而不是所有子项）在交叉轴（cross-axis）上的对齐方式。这样，你可以覆盖容器上设置的 `align-items` 属性。`align-self` 接受以下几个值：

1. **`auto`**: 子项继承其父容器的 `align-items` 属性。如果没有父容器，则等同于 `stretch`。
  
2. **`flex-start`**: 子项向交叉轴的起点对齐。
  
3. **`flex-end`**: 子项向交叉轴的终点对齐。
  
4. **`center`**: 子项在交叉轴上居中。
  
5. **`baseline`**: 子项沿其基线对齐。
  
6. **`stretch`**: 子项拉伸以填充交叉轴（需要满足某些条件，如未设置明确的高度）。

### 示例

假设你有一个垂直排列（主轴为纵向）的 Flex 容器，其中包含三个子项。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Align-Self Example</title>
  <style>
    .flex-container {
      display: flex;
      flex-direction: column;
      height: 300px;
      align-items: flex-start;
    }
    
    .flex-item {
      width: 100px;
      height: 100px;
    }
    
    .flex-item:nth-child(1) {
      background-color: red;
    }
    
    .flex-item:nth-child(2) {
      background-color: green;
      align-self: center;
    }
    
    .flex-item:nth-child(3) {
      background-color: blue;
      align-self: flex-end;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item"></div>
    <div class="flex-item"></div>
    <div class="flex-item"></div>
  </div>
</body>
</html>
```

在这个例子中：

- 第一个子项（红色）继承了 Flex 容器的 `align-items: flex-start` 属性，所以它会向交叉轴的起点（顶部）对齐。
  
- 第二个子项（绿色）的 `align-self` 设置为 `center`，所以它在交叉轴上居中。
  
- 第三个子项（蓝色）的 `align-self` 设置为 `flex-end`，所以它向交叉轴的终点（底部）对齐。

通过这个示例，你可以看到 `align-self` 是如何允许单个子项覆盖容器的 `align-items` 属性的。



3. order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0
注意：和z-index不一样




