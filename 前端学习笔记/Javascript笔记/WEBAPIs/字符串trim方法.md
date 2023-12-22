JavaScript 中的 `String.prototype.trim()` 方法用于移除字符串两端的空白字符。这里的“空白字符”包括所有空格、制表符（`\t`）、换行符（`\n`）等其他可以认为是空白的字符。

### 基本用法：

```javascript
const originalString = "   Hello, World!   ";
const trimmedString = originalString.trim();

console.log(trimmedString);  // 输出："Hello, World!"
```

### 注意事项：

1. `trim()` 方法不会修改原始字符串，而是返回一个新的字符串。
2. 如果字符串两端没有空白字符，`trim()` 返回的将是原始字符串本身（或者更准确地说，一个原始字符串的副本）。

### 其他相关方法：

1. `trimStart()` 或 `trimLeft()`：只去除字符串开始（左侧）的空白字符。
2. `trimEnd()` 或 `trimRight()`：只去除字符串末尾（右侧）的空白字符。

### 示例：

```javascript
const str = "   Hello, World!   ";
console.log(str.trimStart());  // 输出："Hello, World!   "
console.log(str.trimEnd());    // 输出："   Hello, World!"
```

这些方法都是非常实用的，尤其是在处理用户输入或从其他来源获取的不可预知的字符串时。