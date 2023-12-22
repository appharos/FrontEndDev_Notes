# 数据类型

JS 数据类型分为两大类

## 基本数据类型

- number 数字型
- string 字符串型
- boolean 布尔型
- undefined 未定义型
- null 空类型



## 引用数据类型

- object 对象
- Array 数组
- Function 函数

问: JS数组是存储在栈里还是堆里？

在JavaScript中，数据可以大致分为两类：**基本类型**（或称为原始类型）和**引用类型**。

1. **基本类型**：
   - 包括：`undefined`、`null`、`boolean`、`number`、`string` 和 `symbol`。
   - 这些类型的值都是直接存储在栈（stack）中的。
   - 当你将一个基本类型的值赋给另一个变量时，实际上是在栈中创建了这个值的一个副本。

2. **引用类型**：
   - 主要包括：对象（Object）、数组（Array）和函数（Function）。
   - 引用类型的值是存储在堆（heap）中的。
   - 变量实际上存储的是一个指向堆内存中该对象的地址或指针，所以当你将一个对象赋值给另一个变量时，你实际上是复制了这个指针，这意味着两个变量引用的是堆内存中的同一个对象。

总结：**数组是引用类型**，所以其值是存储在堆中的，而变量（在栈中）保存的是指向这个数组在堆中地址的指针。


## JS运算符优先级

JS优先级越高越先被执行，优先级相同时以从左向右执行

- 乘、除、取余优先级相同
- 加、减优先级相同
- 乘、除、取余优先级大于加、减
- 使用（）可以提升优先级


## 模板字符串

使用场景: 拼接字符串 

语法:
- 使用反引号``
- 内容拼接变量时，用${}包住变量

例：
```js
  let age = 10
  document.write(`我今年${age}岁了`)
```


JavaScript 的模板字符串是 ES6（也就是 ECMAScript 2015）引入的一种新的字符串表示方法，使用反引号（` `）来定义，而不是单引号（' '）或双引号（" "）。模板字符串可以包含占位符，它们由 ${expression} 形式表示，用于嵌入表达式的值。

下面是一些模板字符串的例子：

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`; // "Hello, Alice!"

let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // "The sum of 5 and 10 is 15."
```

模板字符串还支持多行字符串：

```javascript
let multiLine = `This is
a string
on multiple lines!`;
console.log(multiLine);
```

模板字符串非常灵活，可以在 ${} 中插入任何 JavaScript 表达式，包括函数调用、数学运算、逻辑运算等等。这使得字符串拼接变得更加简洁和易于阅读。


## 未定义类型

未定义类型是比较特殊的类型，只有一个值undefined

使用场景：
开发中经常声明一个变量，等待传送过来的数据
如果不知道这个数据是否传来，此时可以通过检测这个变量是不是undefined，判断用户是否有数据传递过来

## null

null 为空类型 


null 和 undefined的区别:
undefined表示没有赋值
null表示赋值了，但是内容为空


## typeof 检测数据类型

通过typeof运算符可以返回被检测的数据类型，支持两种语法格式
1. 作为运算符： typeof x (常用写法)
2. 函数形式： typeof(x)

一些例子：
console.log(typeof undefined); // 输出： "undefined"
console.log(typeof true); // 输出： "boolean"
console.log(typeof 42); // 输出： "number"
console.log(typeof "foo"); // 输出： "string"
console.log(typeof {}); // 输出： "object"
console.log(typeof null); // 输出： "object"
console.log(typeof function () {}); // 输出： "function"
console.log(typeof Symbol()); // 输出："symbol"
console.log(typeof 123n); // 输出："bigint"


Tips：

注意的一点是 null 的类型会被 typeof 错误地识别为 "object"，这是 JavaScript 的一个历史遗留问题。虽然 null 是一个特殊的值，表示无值或无对象，但 typeof null 返回 "object"。

另外需要注意的是，typeof 对于数组会返回 "object"，因为在 JavaScript 中，数组其实是一种特殊的对象。