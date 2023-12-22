## 动画 animation

CSS3 中的动画（Animation）是一种强大的样式属性，它允许您创建元素的复杂动画效果，而无需使用 JavaScript 或 Flash。动画是通过定义关键帧（Keyframes）来实现的，其中包含了动画在不同时间点上的状态。

1. 基本使用

制作动画分为两步：
1) 先定义动画
2) 在使用（调用）动画

@keyframes 规则：

@keyframes 规则是定义动画的关键。它允许您指定动画效果的关键帧，其中包含了动画在不同时间点上的样式。
您可以在 @keyframes 规则内部定义一个或多个关键帧。每个关键帧都指定了动画在某个百分比时间点上的样式。


```css
  @keyframes myAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

```

- 动画序列

1) 0%是动画的开始, 100%是动画的完成，这样的规则就是动画序列
2) 在@keyframes中规定某项css样式，就能创建由当前样式逐渐改为新样式的动画效果
3) 动画可以改变任意多的样式任意多的次数
4) 使用百分比规定变化发生的时间


2. 元素调用动画

```css
.rotate{
      width: 200px;
      background-color: lightblue;
      height: 200px;
      margin: 50% auto;
      /* 调用动画（(速写属性) */
      animation: rotateAnimation 4s linear 2s 1 alternate;
      border-radius: 10px;
    }
```


3. animation属性值（可以速写）



1. **animation-name**：
   - `animation-name` 属性用于指定要应用的关键帧规则的名称。它将动画绑定到指定的 `@keyframes` 规则。

   示例：
   ```css
   animation-name: myAnimation;
   ```
  
2. **animation-duration**：
   - `animation-duration` 属性用于定义动画的持续时间，以秒（s）或毫秒（ms）为单位。

   示例：
   ```css
   animation-duration: 2s;
   ```

3. **animation-timing-function**：
   - `animation-timing-function` 属性用于指定动画的时间函数，控制动画的速度曲线。常见的值包括 `linear`、`ease`、`ease-in`、`ease-out` 和 `ease-in-out`。

   示例：
   ```css
   animation-timing-function: ease-in-out;
   ```

4. **animation-delay**：
   - `animation-delay` 属性定义动画开始之前的延迟时间，以秒（s）或毫秒（ms）为单位。

   示例：
   ```css
   animation-delay: 1s;
   ```

5. **animation-iteration-count**：
   - `animation-iteration-count` 属性用于指定动画的重复次数。您可以将其设置为一个数字（整数）或 `infinite` 表示无限次重复。

   示例：
   ```css
   animation-iteration-count: 3;
   ```

6. **animation-direction**：
   - `animation-direction` 属性定义动画播放的方向。它可以设置为 `normal`（正向播放）、`reverse`（反向播放）或 `alternate`（交替播放）。

   示例：
   ```css
   animation-direction: alternate;
   ```

7. **animation-fill-mode**：
   - `animation-fill-mode` 属性定义了动画在播放前和播放后如何应用其样式。它可以设置为 `none`、`forwards`、`backwards` 或 `both`。

1) `none`: 这是默认值。在动画播放之前和之后，不会应用任何样式。元素将保持其初始状态。

2) `forwards`: 在动画播放结束后，元素将应用动画的最后一帧的样式。换句话说，元素将保持动画的最终状态。

3)  `backwards`: 在动画播放之前，元素将应用动画的第一帧的样式。这意味着元素将在动画开始之前就处于动画的初始状态。

4) `both`: 在动画播放之前和之后都应用样式。元素将在动画开始前处于初始状态，并在动画结束后保持最终状态。


   示例：
   ```css
   animation-fill-mode: forwards;
   ```

5. **animation-play-state**：
   - `animation-play-state` 属性用于控制动画的播放状态。它可以设置为 `running`（播放）或 `paused`（暂停）。

   示例：
   ```css
   animation-play-state: paused;
   ```


4. 速写顺序

您可以使用速写属性 `animation` 来简化动画属性的设置。`animation` 属性允许您将多个动画属性合并到一个声明中。速写属性的顺序是固定的，应按照以下顺序设置：

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

下面是这些速写属性的解释：

- `name`: 动画的名称，通常是一个已经定义的 `@keyframes` 动画的名称，也可以是 `none`。
- `duration`: 动画的持续时间，以秒（s）或毫秒（ms）为单位。
- `timing-function`: 动画的时间函数，控制动画的速度曲线。
- `delay`: 动画开始前的延迟时间，以秒（s）或毫秒（ms）为单位。
- `iteration-count`: 动画的重复次数，可以是一个整数（如 `2`）或 `infinite`（无限次）。**（注意iteration-count的次数包括正向和反向播放的次数，即如果动画设置为alternate交替播放，那么反向播放的次数也会被iteration-count计算在内）**
- `direction`: 动画的播放方向，可以是 `normal`（正常播放，默认值）或 `reverse`（反向播放）或`alternate`（交替播放）。
- `fill-mode`: 动画完成后的样式，可以是 `forwards`（保留动画最后一帧的样式）、`backwards`（使用动画第一帧的样式）或 `both`（同时应用 `forwards` 和 `backwards`）。
- `play-state`: 动画的播放状态，可以是 `running`（运行中）或 `paused`（暂停）。

以下是一个示例：

```css
animation: myAnimation 2s ease-in-out 0.5s infinite alternate forwards;
```

此示例设置了一个动画，名称为 `myAnimation`，持续时间为 `2s`，时间函数为 `ease-in-out`，延迟 `0.5s` 启动，无限次重复，交替播放（`alternate`），并在动画结束后保留最后一帧的样式。


**速写属性要点**

1) 速写属性里面不包含animation-play-state
2) 暂停动画：animation-play-state: paused；经常和鼠标经过配合使用
3) 想要动画走回去，而不是直接跳回来：animation-direction：alternate
4) 盒子动画结束后，停在结束位置：animation-fill-mode: forwards


5. 动画速度曲线细节

animation-timing-function: 规定动画的速度曲线，默认是ease

1) linear 动画从头到尾的速度是相同的，匀速
2) ease 默认，动画以低速开始，然后加快，在结束前变慢
3) ease-in 动画以低速开始
4) ease-out 动画以低速结束
5) ease-in-out 动画以低速开始和结束

6) steps(n) 离散时间函数
steps(n) 表示动画将分为 n 步，每一步都会在关键帧之间离散切换，没有过渡。这对于模拟帧动画或分段动画非常有用，例如，您可以将一个元素的位置分成几个明确定义的步骤，然后使用 steps(n) 来控制动画。