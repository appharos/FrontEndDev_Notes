## 数组every方法

`Array.every` 是 JavaScript 中的一个数组方法，它用于检查数组中的所有元素是否都满足指定的测试条件。如果数组中的每个元素都满足测试条件，则该方法返回 `true`，否则返回 `false`。

### 基本语法

```javascript
const allPass = array.every(function(element, index, array) {
  // 测试条件
});
```

- `element`：当前遍历的元素。
- `index`（可选）：当前遍历的元素的索引。
- `array`（可选）：正在遍历的数组。

### 示例

假设我们有一个数字数组，我们想检查数组中的所有数字是否都大于 10。

```javascript
const numbers = [15, 30, 45, 55];

const allAboveTen = numbers.every(number => number > 10);

console.log(allAboveTen); // true
```

在这个例子中，`every` 方法用于检查数组 `numbers` 中的每个元素是否都大于 10。

### 注意事项

1. `every` 方法不会改变原数组。
2. `every` 方法在找到第一个不符合条件的元素时就会停止搜索。
3. `every` 方法对空数组进行操作时，返回值始终是 `true`。
4. `every` 方法中的回调函数会被数组中的每个元素调用，直到它找到一个使回调函数返回 `false` 的元素。如果所有元素都使回调函数返回 `true`，则 `every` 返回 `true`。

`Array.every` 是一个非常实用的方法，尤其是在需要验证数组中所有元素是否都符合某个条件时。
