# 分支语句

## if分支语句

在 JavaScript 中，`if` 语句用于执行某段代码，但仅当指定的条件为真（`true`）时。如果条件为假（`false`），则跳过该代码段。

下面是一个简单的 `if` 语句的例子：

```javascript
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} 
```

在这个例子中，`if` 语句检查 `age` 是否大于等于18。如果 `age` 大于或等于18，那么就会打印 "You are an adult."。但是，因为 `age` 是15，小于18，所以代码中的 `console.log` 语句不会执行。

此外，你还可以使用 `else` 语句与 `if` 一起使用，以指定当条件为假时要执行的代码，例如：

```javascript
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} 
else {
  console.log("You are a minor.");
}
```

在这个例子中，当 `age` 小于18时，将打印 "You are a minor."。

此外，还有 `else if` 语句，它允许你添加更多的条件进行检查。例如：

```javascript
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} 
else if (age >= 16) {
  console.log("You are almost an adult.");
} 
else {
  console.log("You are a minor.");
}
```

在这个例子中，当 `age` 大于或等于16但小于18时，将打印 "You are almost an adult."。其他情况，即 `age` 小于16时，将打印 "You are a minor."。





## 三元运算符


在JavaScript中，三元运算符（或称为条件运算符）是唯一接受三个操作数的运算符。它的工作方式是首先计算第一个操作数（也就是它的条件），然后根据这个条件的真假来决定计算和返回哪个后续的操作数。它的一般形式是：

```js
condition ? exprIfTrue : exprIfFalse
```

在这个表达式中，`condition` 是一个表达式，它的值将被转换为一个布尔值。如果 `condition` 的值为真，那么就会计算并返回 `exprIfTrue` 的值，否则计算并返回 `exprIfFalse` 的值。

例如：

```js
let age = 15;
let type = age >= 18 ? "adult" : "minor";
console.log(type); // "minor"
```

关于在常规开发中是否建议使用三元运算符，这主要取决于具体的情况和团队的编码规范。三元运算符可以使代码更简洁，但是如果条件复杂或者操作数的表达式很长，那么使用三元运算符可能会降低代码的可读性。在这种情况下，使用 if-else 语句可能是更好的选择。



## switch语句

在JavaScript中，`switch`语句是一种控制流语句，用于在多个可能的选项中进行选择。这种结构在需要检查一个变量或表达式与多个值之间的等价性时特别有用。`switch`语句的基本语法如下：

```javascript
switch(expression) {
    case value1:
        // statements executed when the result of expression matches value1
        break;
    case value2:
        // statements executed when the result of expression matches value2
        break;
    default:
        // statements executed when none of the values match the value of expression
        break;
}
```

`switch`语句的工作原理如下：

1. 首先，它评估表达式的值。
2. 然后，它查找一个`case`子句，其值与表达式的值匹配。
3. 如果找到匹配的`case`子句，它就执行与该`case`关联的语句，直到遇到`break`语句或者`switch`语句的末尾。
4. 如果没有找到匹配的`case`，那么如果有`default`子句，就会执行`default`子句中的语句。

注意，如果忽略`break`语句，控制流会“穿透”到下一个`case`，并继续执行其语句，直到遇到`break`语句或者`switch`语句的末尾。这称为fall-through行为。

下面是一个使用`switch`语句的简单示例：

```javascript 
let fruit = 'apple';

switch(fruit) {
    case 'banana':
        console.log('I am a banana.');
        break;
    case 'apple':
        console.log('I am an apple.');
        break;
    default:
        console.log('I am not a banana or an apple.');
        break;
}
// Output: I am an apple.
```

在这个示例中，`switch`语句检查变量`fruit`的值，并与各个`case`进行匹配。由于`fruit`的值是`'apple'`，所以执行`'apple'`对应的`case`子句，并输出`'I am an apple.'`。然后，遇到`break`语句，因此`switch`语句结束。

## JS循环

JavaScript 提供了多种循环结构，用于重复执行代码块。下面是常见的循环结构：

1. **for 循环**: 这是最常见的循环形式。它包括初始化表达式、条件测试和增量表达式。

   ```javascript
   for (let i = 0; i < 10; i++) {
       console.log(i);
   }
   ```

2. **while 循环**: 在 `while` 循环中，首先评估条件，然后执行循环体。如果条件为 `true`，则会重复循环。

   ```javascript
   let i = 0;
   while (i < 10) {
       console.log(i);
       i++;
   }
   ```

3. **do-while 循环**: 这与 `while` 循环类似，但无论条件是否为 `true`，循环体至少执行一次，因为条件测试是在执行循环体后进行的。

   ```javascript
   let i = 0;
   do {
       console.log(i);
       i++;
   } while (i < 10);
   ```

4. **for-in 循环**: 用于遍历对象的属性。在每次迭代中，一个不同的属性名从对象中被分配给变量。

   ```javascript
   const obj = {
       a: 1,
       b: 2,
       c: 3
   };
   
   for (let key in obj) {
       console.log(key, obj[key]);
   }
   ```

5. **for-of 循环**: 在 ES6 中引入，用于遍历可迭代对象（如数组、字符串、Map、Set 等）的值。

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   
   for (let value of arr) {
       console.log(value);
   }
   ```

6. **Array.forEach()**: 尽管这不是传统意义上的循环结构，但 `.forEach()` 方法允许您为数组中的每个元素执行函数。

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   
   arr.forEach(function(value, index, array) {
       console.log(value);
   });
   ```

每种循环都有其特定的用途。选择哪种循环通常取决于您的特定需求和要遍历的数据类型。