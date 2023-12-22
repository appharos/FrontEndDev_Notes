`background` 是一个用于设置元素背景样式的 CSS 属性。它可以接受多个子属性，用于定义背景颜色、图片、平铺方式、定位等。以下是 `background` 属性及其常见子属性及参数值的总结：

- `background-color`：用于设置背景颜色。可以接受颜色值，如十六进制、RGB、颜色名称等。

  ```css
  background-color: #ff0000; /* 红色背景 */
  ```

- `background-image`：用于设置背景图片。可以接受图片的 URL。

  ```css
  background-image: url('background.jpg');
  ```

- `background-repeat`：用于设置背景图片的平铺方式。常见参数值包括 `repeat`（默认，平铺）、`no-repeat`（不平铺）、`repeat-x`（水平平铺）、`repeat-y`（垂直平铺）。

  ```css
  background-repeat: repeat-x; /* 水平平铺 */
  ```

- `background-attachment`：用于设置背景图片的滚动方式。常见参数值包括 `scroll`（默认，随着页面滚动）和 `fixed`（固定在视口）。

  ```css
  background-attachment: fixed; /* 固定背景 */
  ```

- `background-position`：用于设置背景图片的位置。可以使用关键词（如 `top`、`center`、`bottom`）或者像素值、百分比值来定义。

  ```css
  background-position: center top; /* 图片在元素中上方居中 */
  ```

- `background-size`：用于设置背景图片的尺寸。可以是像素值、百分比、关键词（如 `cover` 和 `contain`）等。

  ```css
  background-size: 100px 200px; /* 宽度 100px，高度 200px */
  ```

- `background-origin`：用于设置背景图片的起始位置是相对于内容框（`content-box`）、内边距框（`padding-box`）还是边框框（`border-box`）。

  ```css
  background-origin: padding-box; /* 起始位置相对于内边距框 */
  ```

- `background-clip`：用于设置背景图片的裁剪方式，可以是相对于内容框（`content-box`）、内边距框（`padding-box`）还是边框框（`border-box`）来裁剪。

  ```css
  background-clip: content-box; /* 裁剪相对于内容框 */
  ```

- `background` 合并所有以上属性，通常的语法如下：

  ```css
  background: color image repeat attachment position / size origin clip;
  ```

  例如：

  ```css
  background: red url('background.jpg') no-repeat fixed top center / 100px 200px content-box;
  ```

这些属性和参数可以组合使用，以实现各种复杂的背景效果，用于网页和应用的视觉设计中非常有用。