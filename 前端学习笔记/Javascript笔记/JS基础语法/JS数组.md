# 数组

## 数组的基本使用

在JavaScript中，数组（Array）是一种特殊的对象，用于存储多个值在一个单一的变量中。这些值（也称为元素）按照顺序排列，并且每个值都有其对应的索引（位置），索引从0开始。

数组可以包含任何数据类型的元素，包括数值、字符串、布尔值，甚至其他数组（这样就形成了多维数组）或对象。

你可以通过以下方式声明一个数组：

```javascript
let myArray = []; // 创建一个空数组
let fruits = ['apple', 'banana', 'kiwi']; // 创建一个含有三个字符串的数组
``` 

数组有许多内置的方法来操作数组的内容，比如：

- `push()`：在数组的末尾添加一个或多个元素，并返回新的长度。
    ```javascript
    fruits.push('orange'); // ['apple', 'banana', 'kiwi', 'orange']
    ```
- `pop()`：移除数组的最后一个元素，并返回该元素。
    ```javascript
    let lastFruit = fruits.pop(); // lastFruit = 'orange', fruits = ['apple', 'banana', 'kiwi']
    ```
- `shift()`：移除数组的第一个元素，并返回该元素。
    ```javascript
    let firstFruit = fruits.shift(); // firstFruit = 'apple', fruits = ['banana', 'kiwi']
    ```
- `unshift()`：在数组的开头添加一个或多个元素，并返回新的长度。
    ```javascript
    fruits.unshift('strawberry'); // ['strawberry', 'banana', 'kiwi']
    ```
- `slice(startIndex, endIndex)`：返回一个新数组，包含从startIndex到endIndex（不包含）的所有元素。
    ```javascript
    let someFruits = fruits.slice(1, 3); // someFruits = ['banana', 'kiwi'], fruits remains unchanged
    ```
以上就是JavaScript中数组的基本概念和操作。实际上，数组还有很多其他的方法和特性，如`splice()`, `concat()`, `join()`, `sort()`, `reverse()`等，能够帮助你在开发过程中实现更多的功能。


## 数组长度

使用length方法

```js
console.log(arr.length)
```


额外补充：

## splice方法

`splice()` 是 JavaScript 的 Array 类型的一个方法，主要用于从数组中添加、替换或删除元素。

其语法为：

```javascript
array.splice(start, deleteCount, item1, ..., itemX)
```

参数解释如下： 

- `start`：开始修改的数组索引。如果是负数，则从数组的末尾开始计算。

- `deleteCount`：要删除的元素数量。如果 deleteCount 大于 `start` 之后的元素的数量，或者没有设置 deleteCount，那么从 `start` 之后的所有元素都将被删除。

- `item1, ..., itemX`：要添加到数组的新元素，从 `start` 位置开始。如果没有设置，则 `splice()` 只删除数组元素。

`splice()` 方法返回一个由被删除的元素组成的新数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

看以下的例子：

```javascript
let arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let removed = arr.splice(2, 2, 'citrus', 'dragonfruit');

console.log(arr);
// ["apple", "banana", "citrus", "dragonfruit", "elderberry"]

console.log(removed);
// ["cherry", "date"]
```

在这个例子中，我们使用 `splice()` 从索引 2 的位置开始删除了 2 个元素（'cherry' 和 'date'），然后在相同的位置添加了新的元素 'citrus' 和 'dragonfruit'。被删除的元素 'cherry' 和 'date' 被放在一个新的数组中并赋给了 `removed` 变量。