## 数组filter数组

数组的 `filter` 方法是 JavaScript 中的一个非常有用的数组方法，它允许您根据特定的条件筛选数组，并返回一个新数组，这个新数组只包含满足条件的元素。

### 基本用法

`filter` 方法接受一个回调函数作为参数。这个回调函数会对原数组的每个元素执行一次，如果回调函数对某个元素返回 `true`，那么这个元素就会被包含在新数组中。如果返回 `false`，则不包含。

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // 输出: [2, 4, 6]
```

在这个例子中，`filter` 方法用于从 `numbers` 数组中选出偶数。

### 箭头函数简化

结合 ES6 箭头函数，可以进一步简化 `filter` 方法的用法：

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // 输出: [2, 4, 6]
```

### 应用场景

`filter` 方法在处理数组时非常有用，尤其是当你需要根据某些条件从数组中提取子集时。例如，从一组对象中筛选出满足特定属性条件的对象，或者从数字数组中去除不符合条件的数字等。

### 注意事项

- `filter` 不会改变原数组，它返回一个新数组。
- `filter` 不会对空数组进行检测。
- `filter` 不会改变原数组的长度，但返回的新数组可能会更短。
