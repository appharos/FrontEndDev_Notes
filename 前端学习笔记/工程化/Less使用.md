## less使用
`Less` 是一种动态样式语言，它扩展了 CSS 的功能，使得编写 CSS 更加高效和易于维护。Less 是一个预处理器，这意味着它扩展了标准的 CSS 语法，引入了如变量、嵌套、混合（Mixins）、函数和更多其他功能，然后将这些扩展编译成标准的 CSS 文件，以便浏览器可以解析。

以下是 Less 的一些核心特性：

1. **变量**：允许你定义一个值（比如颜色、边距大小等），然后在整个样式表中重复使用它。
   
   ```less
   @primary-color: #4CAF50;

   button {
     color: @primary-color;
   }
   ```

2. **嵌套**：使得 CSS 规则的嵌套成为可能，使得结构更清晰，更容易维护。

   ```less
   nav {
     ul {
       margin: 0;
       padding: 0;
       list-style: none;
     }
     li { display: inline-block; }
     a {
       display: block;
       padding: 6px 12px;
       text-decoration: none;
     }
   }
   ```

3. **混合（Mixins）**：允许将一组属性从一个规则集包含（或混合）到另一个规则集中。

   ```less
   .bordered {
     border-top: dotted 1px black;
     border-bottom: solid 2px black;
   }

   #menu a {
     color: #111;
     .bordered();
   }
   ```

4. **函数和运算**：可以在属性值和颜色中使用数学运算。

   ```l  ess
   @base: 5%;
   @filler: 10%;

   .class {
     width: calc(@base * 2 + @filler);
   }
   ```

5. **作用域和条件语句**：Less 支持局部作用域和条件语句，让编写 CSS 更加灵活。

   ```less
   @media screen and (min-width: 600px) {
     @width: 600px;
     .class {
       width: @width;
     }
   }
   ```

6. **导入**：允许将一个文件导入到另一个文件中，这样就可以将 CSS 规则分散到多个文件中，以便更好地组织代码。

   ```less
   @import "library"; // 导入 library.less 文件
   ```

Less 最终被编译成普通的 CSS 文件，以便浏览器可以解析。这个编译过程可以通过多种方式完成，比如使用 Less.js 在客户端完成，或在构建流程中通过诸如 Webpack、Gulp 等工具完成。Less 的这些特性极大地提高了 CSS 的可维护性和扩展性，使得编写大型、复杂的样式表更加容易和高效。