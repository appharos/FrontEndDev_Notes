## css3 过渡

CSS3 过渡（Transition）是一种在元素从一种状态转换到另一种状态时，为属性值的变化提供平滑动画效果的方法。它允许你在属性值发生变化时，使用动画来过渡到新的属性值，从而实现更流畅的用户界面变化效果。

现在经常和:hover一起搭配使用

- 运用语法

transition: 要过渡的属性 花费时间 运动曲线 何时开始；

1. 想要变化的css属性，宽度高度 背景颜色 内外边距都可以。如果想要所有的属性都变化过渡，可以写一个all
2. 花费时间：单位是秒（必须写单位）比如0.5s
3. 运动曲线：默认是ease(可以省略)
4. 何时开始： 单位是秒（必须写单位）可以设置延迟触发时间 默认是0s （可以省略）

过渡的使用口诀：谁做过渡给谁加


chatgpt解释：
CSS3 过渡（Transition）是一种在元素从一种状态转换到另一种状态时，为属性值的变化提供平滑动画效果的方法。它允许你在属性值发生变化时，使用动画来过渡到新的属性值，从而实现更流畅的用户界面变化效果。

过渡通过在元素的 CSS 属性上添加延时、持续时间、缓动函数等参数来实现。以下是过渡的基本语法：

```css
transition: property duration timing-function delay;
```

- `property`：需要过渡的 CSS 属性，可以是一个或多个属性，用逗号分隔。
- `duration`：过渡持续的时间，以秒（s）或毫秒（ms）为单位。
- `timing-function`：过渡的缓动函数，控制动画速度的变化。
- `delay`：过渡开始前的延迟时间，以秒（s）或毫秒（ms）为单位。

以下是一些示例，说明如何在 CSS 中使用过渡效果：

1. **基本过渡效果**：

```css
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 0.3s ease-in-out;
}

.box:hover {
    width: 200px;
}
```

2. **多属性过渡**：

```css
.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    color: white;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.element:hover {
    width: 200px;
    background-color: red;
}
```

3. **自定义缓动函数**：

```css
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

.box:hover {
    width: 200px;
}
```

4. **延迟过渡效果**：

```css
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 0.3s ease-in-out 0.5s;
}

.box:hover {
    width: 200px;
}
```

过渡是一种简单而强大的动画效果，能够增强用户体验并使界面更加吸引人。然而，要注意过渡的持续时间、缓动函数和延迟等参数的选择，以获得想要的动画效果。同时，过渡不适合制作复杂的动画，对于更复杂的动画场景，可能需要使用 CSS 动画或 JavaScript 动画库。


