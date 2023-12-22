```js
const temp_slider_indicator = document.querySelectorAll('.slider-indicator li')
temp_slider_indicator[temp_random].classList.toggle('active')

```

ChatGPT 解惑：

1. 问： 使用classlist.toggle时，其参数为类名，但是这里的类名前面不需要加“.”，那如果我想添加的类名在css里是.slider-indicator li.active，我该怎么写toggle的参数


答：当使用 `classList.toggle()` 或其他与 `classList` 相关的方法时，您只需要提供类名本身，而不需要任何选择器前缀（如 `.` 或 `#`）。

对于您提到的 `.slider-indicator li.active`，这是一个复合选择器，表示具有类名 `active` 的 `<li>` 元素，它是 `.slider-indicator` 的直接子元素。但在使用 `classList.toggle()` 时，您只是想为某个元素添加或移除 `active` 这个类名。

所以，当您有一个引用到这个 `<li>` 元素的变量时（例如 `liElement`），您可以这样使用 `toggle()` 方法：

```javascript
liElement.classList.toggle('active');
```

您只需提供 `'active'` 作为参数，而不需要添加 `.` 或其他选择器前缀。


2. 问：可是如果同时存在多个.active类，之前我可以通过前缀（包含父元素的选择器）定位到我想要的.active类， 那这样在classList.toggle的参数里省去active类前缀，能准确定位使用到我想用的active类吗?

答：在JavaScript中，当你使用`classList.toggle('active')`时，你是在直接操作一个特定元素的类列表，而不是在全局范围内查找类名。所以，前提是你已经准确地选取了你想要操作的元素。

例如，如果你已经使用`querySelector`或其他方式选中了一个特定的`<li>`元素，那么使用`classList.toggle('active')`会直接在该`<li>`元素上添加或移除`active`类。

假设你的HTML结构如下：

```html
<div class="slider-indicator">
    <li></li>
    <li class="active"></li>
    <li></li>
</div>
<div class="another-class">
    <span class="active"></span>
</div>
```

如果你想要切换`.slider-indicator`中的第二个`<li>`元素的`active`类，你可以这样做：

```javascript
let liElement = document.querySelector('.slider-indicator li:nth-child(2)');
liElement.classList.toggle('active');
```

此时，你已经明确地选择了你想操作的元素。因此，即使页面上有其他元素也使用了`active`类，`classList.toggle`操作也只会影响你选择的那个特定元素。

简而言之，确定使用哪个`.active`类是基于你选择的元素，而不是`classList.toggle`方法的参数。
