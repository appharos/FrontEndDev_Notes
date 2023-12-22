## 获取DOM对象


## 根据CSS选择器来获取DOM元素（重点）

1. 选择匹配的第一个元素

`document.querySelector()` 是一个非常有用的 DOM 方法，它允许你通过 CSS 选择器来选取页面上的一个元素。它返回与给定选择器匹配的第一个元素。如果没有找到任何匹配的元素，则返回 `null`。

### 使用方法： 

```javascript
let element = document.querySelector(selector);
```

- 参数： `selector` 是一个字符串（所以必须加**引号**），表示要匹配的 CSS 选择器。(参数直接按CSS的选择器格式写)

- 返回值： CSS选择器匹配的第一个元素，一个HTML Element对象

### 示例：

1. 选取页面上的第一个 `<p>` 元素：
   
   ```javascript
   let p = document.querySelector('p');
   ```

2. 选取页面上的第一个 class 为 "myClass" 的元素：

   ```javascript
   let elem = document.querySelector('.myClass');
   ```

3. 选取页面上的第一个 id 为 "myID" 的元素：

   ```javascript
   let elem = document.querySelector('#myID');
   ```

4. 选取页面上的第一个在 `.myClass` 类中的 `<p>` 元素：

   ```javascript
   let pInMyClass = document.querySelector('.myClass p');
   ```

### 注意：

- `document.querySelector()` 只返回匹配到的第一个元素。如果你想选取与指定选择器匹配的所有元素，你应该使用 `document.querySelectorAll()`，它返回一个 NodeList。

- 当使用 `document.querySelector()` 时，你必须确保 CSS 选择器的语法是正确的，否则它会抛出一个 `SyntaxError` 异常。

- 如果你的选择器匹配多个元素，只有第一个会被返回。所以，尽管选择器可能匹配多个元素，但只有第一个元素会被取得。



2.  选择匹配多个对象

`document.querySelectorAll()` 方法是一个强大的 DOM 查询功能，它允许你通过 CSS 选择器来选取页面上的多个元素。与 `document.querySelector()` 方法不同，这个方法返回一个 `NodeList`，其中包含与给定选择器匹配的所有元素。

### 使用方法：

```javascript
let elements = document.querySelectorAll(selector);
```

- 参数： `selector` 是一个字符串（所以必须加**引号**），表示要匹配的 CSS 选择器。

- 返回值： CSS选择器匹配的NodeList 对象集合

### 示例：

1. 选取页面上的所有 `<p>` 元素：

   ```javascript
   let paragraphs = document.querySelectorAll('p');
   ```

2. 选取页面上所有 class 为 "myClass" 的元素：

   ```javascript
   let elements = document.querySelectorAll('.myClass');
   ```

3. 选取页面上的所有 id 为 "myID" 的元素（虽然 ID 应该是唯一的，但这个方法可以选取它们，如果存在多个相同的 ID）：

   ```javascript
   let elements = document.querySelectorAll('#myID');
   ```

4. 选取页面上所有在 `.myClass` 类中的 `<p>` 元素：

   ```javascript
   let pInMyClass = document.querySelectorAll('.myClass p');
   ```

### 注意事项：

- 返回的 `NodeList` 不是一个真正的数组，但它是一个可迭代的对象，因此你可以使用 `forEach` 遍历它（在现代浏览器中）：

  ```javascript
  document.querySelectorAll('p').forEach(p => {
    console.log(p.textContent);
  });
  ```

- 如果没有元素与选择器匹配，`document.querySelectorAll()` 返回一个空的 `NodeList`。

- 由于 `NodeList` 不是真正的数组，它没有所有数组方法，比如 `map`、`filter` 和 `reduce`。但如果需要，你可以通过以下方式将其转换为真正的数组：

  ```javascript
  let elementsArray = Array.from(document.querySelectorAll('p'));
  ```



## querySelectorALL返回值

返回值得到的是一个伪数组：
- 有长度有索引号的数组
- 但是没有pop()/ push()等数组方法

想要得到里面对象，需要使用for遍历方法


```js
    // 使用for方法获取nodelist的每个对象
    const lis = document.querySelectorAll('.temp li')

    for (let i =0; i < lis.length; i++){
      console.log(lis[i])
    }

```

注意事项：
哪怕只有一个元素，通过querySelectAll()获取过来的也是一个伪数组，里面只有一个元素而已


