## 转换

转换（transform）是CSS3中最具颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果

转换分为：
- 移动translate
- 旋转 rotate
- 缩放 scale


## 2D 转换

1. 移动translate

2D移动是2D转换里面的功能，可以改变元素在页面中的位置，类似定位

**语法**
transform: translate(x,y); 或者分开写
transform: translateX(n);
transform；translateY(n);

例： 
```css
/* 平移元素 */
.translate-box {
    transform: translate(50px, 20px); /* 向右平移50px，向下平移20px */    
    /* 方向(水平向右为x轴正方向,垂直向下为y轴正方向) */
}
```
**重点**

1) 定义2D转换中的移动，沿着X和Y轴移动元素
2) translate最大的优点：不会影响到其他元素的位置
3) translate中的百分比单位是相对于**自身元素**的translate:(50%,50%);
4) 对行内标签没有效果


translate法实现元素水平垂直居中
```css
    .father{
      width: 500px;
      height: 500px;
      background-color: pink;
      position: relative;
      
    }

    .son{
      width: 200px;
      height: 200px;
      background-color: lightblue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      box-sizing: border-box;
    }
```

2. 旋转 rotate

2D旋转指的是让元素在二维平面内顺时针旋转或者逆时针旋转

**语法**

transform: rotate(度数)

**重点**

1) rotate里面跟度数，单位是deg 比如 rotate(45deg)
2) 角度为正时，顺时针，负时，为逆时针
3) 默认旋转的中心点是元素的中心点



3. 2D转换中心点  transform-origin
  
transform-origin 属性用于指定元素的变换基点，即在应用 CSS 变换时元素围绕的点。它控制了元素变换的中心点。

**语法**

transform-origin: x y;

**重点**

1) 注意后面的参数x和y用空格隔开
2) x y 默认转换的中心点是元素的中心点(50% 50%)(或者是(center,center))
3) 还可以给x y 设置像素或者方位名词 (top bottom left right center)


```css
    .test{
      width: 500px;
      height: 500px;
      background-color: #008c8c;
      margin: 100px auto;
      transition: all 1s;
      /* 设置转换中心为元素左上角 */
      transform-origin: left top;
    }

```

4. 2D转换scale

transform 属性中的 scale 函数用于对元素进行缩放变换。它允许您按比例放大或缩小元素的大小。

**语法**

transform: scale(x,y)

**重点**

1) 注意x和y用逗号隔开
2) scale缩放最大的优势:可以设置转换中心点缩放,默认以中心点缩放的,而且不影响其他盒子

ChatGPT解释:

`transform` 属性中的 `scale` 函数用于对元素进行缩放变换。它允许您按比例放大或缩小元素的大小，同时保持元素的宽高比。

`scale` 函数接受两个参数：`scaleX` 和 `scaleY`，分别控制元素在水平和垂直方向的缩放比例。这两个参数是可选的，如果不指定，则默认为 1，表示元素在该方向上保持原始大小。

以下是一些示例，演示了如何使用 `scale` 变换：

1. 将元素放大两倍：

```css
.scale-up {
  transform: scale(2); /* 元素在水平和垂直方向都放大两倍 */
}
```

2. 将元素水平方向缩小一半：

```css
.scale-horizontal {
  transform: scale(0.5, 1); /* 元素在水平方向缩小一半，垂直方向保持不变 */
}
```

3. 将元素垂直方向放大三倍：

```css
.scale-vertical {
  transform: scale(1, 3); /* 元素在垂直方向放大三倍，水平方向保持不变 */
}
```

4. 同时在水平和垂直方向分别缩小和放大元素：

```css
.scale-complex {
  transform: scale(0.5, 1.5); /* 元素在水平方向缩小一半，在垂直方向放大一倍和一半 */
}
```

需要注意的是，`scale` 变换是相对于元素的原始大小进行的。如果您希望基于当前的尺寸进行缩放，而不是基于原始尺寸，可以使用 `transform` 属性的 `scaleX` 和 `scaleY` 参数来计算缩放比例。例如：

```css
.scale-current {
  transform: scaleX(1.5) scaleY(0.8); /* 元素在水平方向放大 1.5 倍，在垂直方向缩小 0.8 倍 */
}
```

这将以当前尺寸为基础，分别对水平和垂直方向进行不同的缩放。


5. 2D转换综合写法

注意：

1) 同时使用多个转换，其格式为:transform: translate() rotate() scale()...等
2) 其顺序会影响转换的效果。（先旋转会改变坐标轴方向）
3) 当我们同时有位移和其他属性的时候，记得要将位移放到最前面