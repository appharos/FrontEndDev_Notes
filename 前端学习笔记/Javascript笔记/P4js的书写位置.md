## js书写位置

1. 内部JavaScript

直接写在html文件里，用script标签包住

如：
```html
  <script>
    alert("hello world!")
  </script>
```

规范：script标签写在</body>上面

原因：需要注意的是，HTML文档会按照从上到下的顺序逐行解析。当浏览器在解析文档时遇到了`<script>`标签，它会暂停HTML的解析，转而去下载（如果是外部脚本）并执行JavaScript代码，然后再继续解析HTML。因此，通常建议将`<script>`标签放在`</body>`标签之前，避免由于脚本的加载和执行而阻塞页面的渲染。

2. 外部JavaScript

代码写在以.js结尾的文件里
 
语法: 通过script标签，引入到html页面中

```html
<script src="script.js"></script>
```
请注意，当使用 `<script src="..."></script> `引用外部 JavaScript 文件时，`<script> `标签内部不应包含任何 JavaScript 代码，因为这些代码将被忽略。

3. 内联javascript

代码写在标签内部

作为了解即可，后面vue框架会使用这种模式


