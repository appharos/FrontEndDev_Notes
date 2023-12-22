## 环境对象

目标：能够分析判断函数运行在不同环境this 所指代的对象
环境对象： 指的是函数内部特殊的变量this, 他代表着当前函数运行时所处的环境
作用： 弄清楚this的指向，可以让我们代码更加简洁

- 函数的调用方式不同，this指代的对象也不同
- **谁调用，this就是谁** 是判断this指向的粗略规则
- 直接调用函数，其实是相当于window.函数，所以this指代window


在 JavaScript 中，`this` 关键字是一个特殊的对象，称为"环境对象"或"上下文对象"。它的值取决于代码运行的上下文环境。以下是 `this` 在不同场景中的表现：

### 1. 全局上下文或函数外部

在全局上下文（即不在任何函数内部）中，`this` 指向全局对象。在浏览器中，这通常是 `window` 对象。

```javascript
console.log(this === window);  // true
```

### 2. 普通函数内部

在普通函数内部，`this` 通常指向全局对象（在非严格模式下）。但如果使用了 `'use strict'`（严格模式），`this` 将会是 `undefined`。

```javascript
function myFunction() {
    console.log(this);
}

myFunction();  // 输出: window (非严格模式) 或 undefined (严格模式)
```

### 3. 对象方法内部

当函数作为对象的方法被调用时，`this` 指向调用该方法的对象。

```javascript
const myObj = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

myObj.greet();  // 输出: "Hello, Alice"
```

### 4. 构造函数中

使用 `new` 关键字调用的函数（构造函数）内部，`this` 指向新创建的对象实例。

```javascript
function Person(name) {
    this.name = name;
}

const alice = new Person("Alice");
console.log(alice.name);  // 输出: "Alice"
```

### 5. 箭头函数

箭头函数没有自己的 `this` 值。箭头函数内的 `this` 值继承自外围普通函数或其他上下文。

```javascript
const myObj = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};

myObj.greet();  // 输出: "Hello, Alice"（1秒后）
```

### 6. 使用 `call()`, `apply()`, 和 `bind()`

这些函数方法可以用来明确设置函数中 `this` 的值。

```javascript
function greet() {
    console.log("Hello, " + this.name);
}

const alice = { name: "Alice" };
const bob = { name: "Bob" };

greet.call(alice);  // 输出: "Hello, Alice"
greet.call(bob);    // 输出: "Hello, Bob"
```

### 总结

`this` 的值是基于它被调用的上下文环境来确定的，而不是基于它被定义的位置。理解和掌握这一点是 JavaScript 中的一个重要概念。
