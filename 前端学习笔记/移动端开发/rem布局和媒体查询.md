## rem适配布局

 

## rem基础

rem 单位

- rem(root em)是一个相对单位，类似于em,em是父元素字体大小
- 不同的是rem的基准是相对于**html**元素的字体大小
- 比如，根元素（html）设置font-size = 12px;非根元素设置为width:2rem，则换成px表示就是24px 

rem跟em的区别在于：
- em是相对于父元素的字体大小来说的
- rem是相对于html元素字体大小来说的


## 媒体查询

媒体查询（Media Query）是CSS3新语法

- 使用@media查询，可以针对不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
  
媒体查询（Media Queries）是 CSS3 引入的一个强大的功能，它允许你根据不同的设备特性（如屏幕尺寸、分辨率、方向等）来应用不同的样式规则。这对于响应式网页设计（Responsive Web Design）至关重要。


### 基本语法 （设备宽度或高度范围，按照从小到大或者从大到小的顺序书写）

媒体查询的基础语法如下：

```css
@media media-type and (media-feature-rule) {
  /* CSS 规则 */
}
```

- **media-type**：定义了媒体类型，如 `screen`（屏幕）、`print`（打印）等。
- **media-feature-rule**：定义了媒体特性的条件，如 `min-width`、`max-width` 等。

### 常用媒体类型

- `all`：用于所有媒体类型设备。（省略时默认值）
- `print`：用于打印机和打印预览。
- `screen`：用于电脑屏幕、平板、智能手机等。(重点  )

### 常用媒体特性（注意加小括号包含）

- `width` / `height`：视口（viewport）的宽度和高度。
- `min-width` / `max-width`：视口最小/最大宽度。
- `min-height` / `max-height`：视口最小/最大高度。
- `orientation`：设备方向，`landscape`（横屏）或 `portrait`（竖屏）。
- `resolution`：屏幕分辨率。

### 示例

#### 根据屏幕宽度改变样式

```css
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

当屏幕宽度小于或等于 768px 时，页面背景色会变为浅蓝色。

#### 组合多个查询

你也可以组合多个媒体查询：

```css
@media screen and (min-width: 600px) and (max-width: 1200px) {
  p {
    font-size: 18px;
  }
}
```

这样当屏幕宽度在 600px 和 1200px 之间时，段落文本的字体大小会被设置为 18px。

#### 使用逗号分隔的多个条件

你可以使用逗号分隔多个媒体查询，作为 OR 条件：

```css
@media (max-width: 600px), (max-height: 400px) {
  body {
    background-color: gray;
  }
}
```

以上规则表示，如果屏幕宽度小于或等于 600px，或者高度小于或等于 400px，背景色将设置为灰色。



## 引入资源(理解)


在CSS中，媒体查询可以用于不仅仅是内联样式，也可以用于引入外部的CSS资源。你可以根据特定的媒体特性或者媒体类型来决定是否加载一个CSS文件。这通常通过HTML标签中的`<link>`元素或者CSS中的`@import`规则来完成。

### 使用 `<link>` 元素

当使用HTML的`<link>`标签来链接CSS文件时，你可以使用`media`属性来定义媒体查询：

```html
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
```

在这个例子中，`example.css` 只会在屏幕宽度小于或等于800px时被加载。

### 使用 `@import` 规则

在一个CSS文件内，你也可以使用`@import`规则和媒体查询来引入其他的CSS文件：

```css
@import url('example.css') (max-width: 800px);
```

同样，这里的 `example.css` 只会在屏幕宽度小于或等于800px时被加载。

### 注意事项

- 使用媒体查询来条件性地加载CSS可能会影响网站的性能，因为浏览器需要先解析媒体查询才能决定是否下载资源。
- 一些老旧的浏览器可能不支持这种方法。

通过媒体查询的这种用法，你可以创建更加响应式的设计，适应不同设备和环境，但要谨慎使用，以避免性能问题。