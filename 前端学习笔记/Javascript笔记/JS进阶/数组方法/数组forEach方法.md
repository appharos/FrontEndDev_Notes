## 数组forEach方法

- forEach()方法用于调用数组的每个元素，并将元素传递给回调函数

注意：

1. forEach主要是遍历数组，适用于遍历数组对象更方便
2. 参数当前数组元素是必须要写的，索引号可选

`Array.prototype.forEach()` 是 JavaScript 中的一种数组迭代方法，用于遍历数组的每个元素并对每个元素执行提供的函数。这是 ES5 中引入的一个数组迭代方法，被广泛用于替代传统的 for 循环。

### 基本用法

`forEach` 方法接受一个回调函数作为参数。这个回调函数可以接收三个参数：

1. `currentValue` - 数组中正在处理的当前元素。
2. `index` (可选) - 数组中正在处理的当前元素的索引。
3. `array` (可选) - 调用 `forEach` 的数组。

语法结构如下：

```javascript
arr.forEach(function(currentValue, index, array) {
  // ...执行的操作
});
```

### 示例

```javascript
const array = [1, 2, 3, 4, 5];

array.forEach(function(value, index) {
  console.log(`Index ${index}: ${value}`);
});
```

此代码会打印数组中每个元素及其索引。

### 特点

- `forEach` 无法使用 `break` 或 `continue` 语句跳出或跳过迭代循环。
- 对于空数组，`forEach` 不会执行回调函数。
- `forEach` 不会改变原始数组，但是可以在回调函数中修改原始数组的元素。
- `forEach` 总是返回 `undefined`。

### 使用场景

`forEach` 适用于需要迭代数组并对每个元素执行操作的情况，尤其是在不需要中断循环的场合。它提供了一种更简洁、更现代的方法来处理数组元素，而不必使用传统的 for 循环。

### 与Map方法的比较

`forEach` 和 `map` 都是 JavaScript 中的数组迭代方法，但它们在用法和目的上有重要的区别：

### forEach

- **目的**：`forEach` 主要用于迭代数组中的每个元素并对其执行某种操作。它通常用于执行一些副作用（如打印到控制台、修改数组元素）。
- **返回值**：`forEach` 总是返回 `undefined`。
- **改变原数组**：`forEach` 可以改变原数组，但这通常不是推荐的做法。
- **使用场景**：当你只需要遍历数组而不需要结果数组时，使用 `forEach`。

### map

- **目的**：`map` 用于转换数组，即通过对每个元素执行函数来创建一个新数组。
- **返回值**：`map` 返回一个新数组，该数组包含应用回调函数后的结果。
- **改变原数组**：`map` 不会改变原数组。
- **使用场景**：当你需要基于原数组创建一个新数组时，使用 `map`。

### 示例

```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 forEach
numbers.forEach(number => {
  console.log(number * 2); // 输出操作，不返回新数组
});

// 使用 map
const doubled = numbers.map(number => {
  return number * 2; // 返回新数组，原数组不变
});

console.log(doubled); // [2, 4, 6, 8, 10]
```

### 总结

- 使用 `forEach` 当你想对数组的每个元素执行操作并且不需要输出数组。
- 使用 `map` 当你想从一个数组创建另一个新数组，通常是经过一些转换或计算。
