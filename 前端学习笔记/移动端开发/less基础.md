## less使用

首先新建一个后缀名为less的文件，在less文件里书写less语句

- less变量
- less编译
- less嵌套
- less运算


## less变量

语法：

@变量名：值;

变量命名规范;
- 必须以@为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感


## less编译

通过easy less插件完成less文件的自动编译

每次保存完less文件，自动生成编译好的css文件


## less嵌套

我们经常用到选择器的嵌套：

```css
  #header .logo{
    width:300px;
  }
```

less嵌套写法：

```less
 #header {
  .logo{
    width:300px;
  }
 }
```

- less嵌套子元素的样式直接写到父元素里面就好了
- 如果有伪类、交集选择器、伪元素选择器，我们内层选择器的前面需要加&
  
例：
```less
a{
  color:red;
  &:hover{
    color:blue;
  }
}

```

## less运算



在 Less 中，你可以执行多种类型的运算，包括加法、减法、乘法和除法。这些运算不仅限于数字，还可用于颜色、变量和属性。

**注意点**

- 乘号(*)和除号(/)的写法
- 运算符中间左右有个空格隔开1px + 5
- 对于两个不同单位的值之间的运算，运算结果的值取第一个值的单位
- 如果两个值之间只有一个值有单位，则运算结果就取该单位
- 由于 `/` 字符在 CSS 中经常用作分隔  符（例如，在 `font` 属性中：`16px/18px`），所以 Less 对于 `/` 的处理有些特殊。如果你要进行除法运算，最好使用括号。


### 数字运算：

```less
@width: 300px; 
@height: 200px;

.box {
  width: @width + 100;  // 结果为 400px
  height: @height - 50; // 结果为 150px
}
```

### 颜色运算：

```less
@baseColor: #111;

.button {
  background-color: @baseColor + #222;  // 结果为 #333
}
```

### 混合运算：

在 Less 中，你甚至可以混合不同类型的单位进行计算，但要确保它们能够转换。

```less
@baseMargin: 10px;

.element {
  margin: @baseMargin * 2 + 5%;  // 结果为 20px + 5%
}
```

### 用于属性的运算：

你还可以在属性名称和属性值中进行运算。

```less
@attr: 'margin';
@value: 20;

.box {
  @{attr}-left: @value * 2px;  // 结果为 margin-left: 40px;
}
```

### 除法运算特别注意：

由于 `/` 字符在 CSS 中经常用作分隔符（例如，在 `font` 属性中：`16px/18px`），所以 Less 对于 `/` 的处理有些特殊。如果你要进行除法运算，最好使用括号。

```less
@width: 600px;

.box {
  width: (@width / 3);  // 结果为 200px
}
```


