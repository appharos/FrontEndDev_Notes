## Bootstrap

Bootstrap 是最受欢迎的 HTML、CSS 和 JavaScript 框架之一，用于开发响应式布局、移动设备优先的 Web 项目。它由 Twitter 的 Mark Otto 和 Jacob Thornton 创建，目的是提供一个一致的框架，用于内部工具的开发，但后来成为一个开源项目。

### 特点

1. **响应式设计**：Bootstrap 包含了响应式设计的网格系统和预定义的样式类，允许网站自动适应不同大小的屏幕，特别适合构建响应式移动设备优先的网站。

2. **丰富的组件**：提供广泛的 HTML 和 CSS 的布局组件，以及一些基于 jQuery 的 JavaScript 插件。这些组件包括按钮、导航栏、下拉菜单、模态框、标签页等。

3. **易于使用**：即使是没有深入了解前端的开发者，也可以轻松使用 Bootstrap。通过使用类，开发者可以快速设计出视觉吸引人的网页。

4. **定制化**：Bootstrap 允许开发者根据项目需求定制特定的样式。

5. **良好的文档和社区支持**：Bootstrap 有一个详细的文档，包含了所有组件和插件的使用方法。同时，它有一个活跃的社区，可以提供支持和资源。

### 版本

从最初的版本 1 到最新的 Bootstrap 5，每个版本都带来了新的特性和改进。Bootstrap 4 引入了 Flexbox，提高了布局选项和性能，Bootstrap 5 则移除了对 jQuery 的依赖，增强了 CSS 自定义属性的使用，并改进了网格系统。

### 如何使用

Bootstrap 可以通过多种方式使用：

- **通过 CDN 引入**：直接在 HTML 文件中通过链接引入 Bootstrap 的 CSS 和 JavaScript 文件。
- **下载到本地**：下载 Bootstrap 的源文件到本地项目中。
- **使用 npm 或其他包管理器**：如果你使用 Node.js 环境，可以通过 npm 安装 Bootstrap。

### 示例代码

```html
<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap 101 Template</title>
  <!-- 引入 Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container">
  <h1>Hello, world!</h1>
  <button class="btn btn-primary">Click Me!</button>
</div>

<!-- 引入 Bootstrap JS 和依赖的 Popper.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
```

### 使用场景

Bootstrap 广泛用于开发快速原型、小到中型项目、以及作为学习前端框架的入门工具。由于其易用性和广泛的组件库，它是前端开发中非常受欢迎的选择。
