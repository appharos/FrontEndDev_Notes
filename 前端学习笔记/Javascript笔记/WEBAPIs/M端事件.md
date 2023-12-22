## M端事件


M端通常是指移动端，也就是在手机或平板等移动设备上运行的网页或应用。移动端的事件与桌面端略有不同，因为它需要处理触摸操作，而不仅仅是鼠标点击和键盘输入。以下是一些移动端常见的事件：

### 1. Touch Events

- **touchstart**: 当手指触摸屏幕时触发。
- **touchmove**: 当手指在屏幕上移动时触发。
- **touchend**: 当手指离开屏幕时触发。
- **touchcancel**: 当系统停止跟踪触摸时触发。

每个触摸事件都包括一系列描述所有当前触摸的触摸对象的列表。这些列表分别包含在`touches`，`targetTouches`，和`changedTouches`属性中。

### 2. Gesture Events

这些事件通常用来处理多点触控手势：

- **gesturestart**: 当两个手指触摸屏幕时触发。
- **gesturechange**: 当两个手指在屏幕上移动时触发。
- **gestureend**: 当两个手指离开屏幕时触发。

### 3. Orientation and Motion Events

这些事件用来处理设备的物理移动和方向改变：

- **orientationchange**: 当设备的方向改变时触发。
- **devicemotion**: 提供设备的加速度和旋转率信息。
- **deviceorientation**: 提供设备的物理方向信息。

### 4. Pointer Events

Pointer events是一个新的标准，试图统一鼠标，触摸，和笔的输入。它包括以下事件：

- **pointerdown**: 指针（触摸、鼠标或笔）进入元素边界时触发。
- **pointerup**: 指针离开元素边界时触发。
- **pointermove**: 指针在元素内部移动时触发。
- **pointerover**: 指针进入元素或其子元素的边界时触发。
- **pointerout**: 指针离开元素或其子元素的边界时触发。
- **pointercancel**: 浏览器决定指针不再会生成事件时触发。

注意：不是所有的浏览器都支持所有这些事件，特别是老版本的浏览器，以及一些移动浏览器。在开发移动端应用或网页时，需要注意这些兼容性问题。



## M(移动端)端开发插件


Swiper插件：https://www.swiper.com.cn/

