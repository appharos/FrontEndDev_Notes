## less基础


Less（Leaner Style Sheets 的缩写）是一种动态样式表预处理语言，它可以被编译成普通的 CSS 语言。Less 提供了一种更简洁、更有组织的方式来编写 CSS，增加了诸如变量、嵌套、混合（Mixins）、操作符和函数等功能。

### 主要特点：

#### 变量
在 Less 中，你可以声明变量并重复使用它们。
```less
@primary-color: blue;

button {
  background-color: @primary-color;
}
```

#### 嵌套
Less 允许你使用嵌套代替冗长的选择器。
```less
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
}
```

#### 混合（Mixins）
这是一种让一个规则集继承另一个规则集所有属性的方式。
```less
.rounded-corners (@radius: 5px) {
  border-radius: @radius;
}

button {
  .rounded-corners;
}
```

#### 函数和操作符
Less 提供了大量的内建函数和操作符来处理字符串、数字和颜色。
```less
@the-border: 1px;
@base-color: #111;

#header {
  color: @base-color * 3;
  border-left: @the-border;
  border-right: @the-border * 2;
}
```

#### 其他功能
- 条件语句和循环
- Namespaces 和访问规则集
- 映射（Maps）
- 插件支持
- 等等

### 安装和编译
你可以使用 npm 来安装 Less 的命令行编译器。
```
npm install -g less
```
然后，你可以在命令行里用以下命令编译 Less 文件。
```
lessc styles.less styles.css
```

也可以在项目中使用 Less，例如通过 Webpack 的 Less loader，或直接在浏览器中使用。

### 缺点
- 需要编译：Less 不是原生的 CSS，需要一个编译过程。
- 学习曲线：相对于纯 CSS，需要额外学习 Less 的语法和特性。


