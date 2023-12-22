## split方法

`split()` 是 JavaScript 中的一个字符串方法，用于将字符串分割成子字符串数组。这个方法根据提供的分隔符来切分字符串，并将结果作为数组返回。

### 基本语法

```javascript
string.split(separator, limit)
```

- `separator`（可选）: 指定用于分割字符串的字符（串）。如果省略该参数，则整个字符串会作为一个元素的数组返回。
- `limit`（可选）: 一个整数，限定返回的数组的最大长度。如果提供了这个参数，返回的数组中的元素不会多于这个数字。如果原始数组的长度超过这个值，多余的元素会被省略。

### 使用示例

1. **基本分割**：

   将字符串按照指定字符分割成数组。

   ```javascript
   const str = 'apple,banana,orange';
   const fruits = str.split(',');
   console.log(fruits); // ['apple', 'banana', 'orange']
   ```

2. **限制返回数组的长度**：

   使用 `limit` 参数来限定返回数组的大小。

   ```javascript
   const data = 'one,two,three,four';
   const limitedData = data.split(',', 2);
   console.log(limitedData); // ['one', 'two']
   ```

3. **空字符串分隔符**：

   如果分隔符是空字符串，则每个字符都会被分割成数组的一个元素。

   ```javascript
   const word = 'hello';
   const letters = word.split('');
   console.log(letters); // ['h', 'e', 'l', 'l', 'o']
   ```

4. **省略分隔符**：

   如果没有指定分隔符，整个字符串会作为单个元素的数组返回。

   ```javascript
   const greeting = 'Hello World';
   const array = greeting.split();
   console.log(array); // ['Hello World']
   ```

### 注意事项

- 分隔符可以是一个字符串或正则表达式。
- 如果字符串为空，`split()` 会返回一个包含一个空字符串的数组，而不是一个空数组。
- `split()` 方法不会改变原始字符串。
