## 数组map方法

### Array.prototype.map()

`map()` 方法创建一个新数组，其结果是该数组中的每个元素调用一次提供的函数后返回的结果。

#### 语法

```javascript
let new_array = arr.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array
}[, thisArg])
```

- `callback`: 生成新数组元素的函数，使用三个参数：
  - `currentValue`: 数组中正在处理的当前元素。
  - `index` (可选): 数组中正在处理的当前元素的索引。
  - `array` (可选): 调用 `map()` 的数组。
- `thisArg` (可选): 执行 `callback` 函数时使用的 `this` 值。

#### 示例

```javascript

    const arr = ['red', 'blue', 'pink']

    // const newArr = arr.map(function (ele, index) {
    //     console.log(ele);
    //     console.log(index);
    //     return ele + '颜色'
    // })

    // 参数名可以自己定义，参数含义是其本身作为map方法的回调函数参数已经定义好的
    const newArr_1 = arr.map((item, index,temp_arr) => {   
        console.log(item);
        console.log(index);
        console.log(temp_arr);
        return item + '_color'
     })

    // console.log(newArr);
    console.log(newArr_1);

```

在这个例子中，`map()` 方法取得 `numbers` 数组中的每个元素，计算它们的平方根，并将结果放入新数组 `roots` 中。

---

## 数组join方法

### Array.prototype.join()

`join()` 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。

#### 语法

```javascript
arr.join([separator])
```

- `separator`: 指定一个字符串来分隔数组的每个元素。如果省略，数组元素用逗号分隔。默认为 `","`。如果 `separator` 是空字符串，所有元素之间都没有任何字符。

#### 返回值

一个所有数组元素连接的字符串。如果 `arr.length` 为 0，则返回空字符串。

#### 示例

```javascript
let a = ['Wind', 'Rain', 'Fire'];
let myVar1 = a.join();      // 赋值为"Wind,Rain,Fire"
let myVar2 = a.join(', ');  // 赋值为"Wind, Rain, Fire"
let myVar3 = a.join(' + '); // 赋值为"Wind + Rain + Fire"
let myVar4 = a.join('');    // 赋值为"WindRainFire"
```

这个例子创建一个函数，它将数组中的所有元素转换为一个字符串，元素之间用不同的分隔符分隔。

---

总的来说，`map()` 和 `join()` 都是处理数组和基于数组的数据结构的有用方法。`map()` 提供了一种快速创建基于现有数组的新数组的方式，而 `join()` 则提供了将数组转换为字符串的方法。
