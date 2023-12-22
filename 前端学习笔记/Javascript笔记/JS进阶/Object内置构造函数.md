## 内置构造函数

在JavaScript中最主要的数据类型有6种：

基本数据类型：

- 字符串、数值、布尔、undefined、null

引用类型

- 对象

其实字符串、数值、布尔、等基本数据类型也都有专门的构造函数，这些我们称为包装类型
JS中几乎所有的数据都可以基于构成函数创建

1. Object静态方法 （静态方法就是只有构造函数Object可以调用）

- Object.keys静态方法获取对象中所有属性 （键）
- Object.values静态方法获取对象中所有属性 （值）
- Object.assign静态方法常用于对象拷贝，使用：经常使用的场景给对象添加属性

```js
// 给o添加属性
        Object.assign(o, { gender: '女' })
        console.log(o);
```

当然，这些 `Object` 类型的方法是在处理 JavaScript 对象时非常实用的。以下是详细介绍：

### Object.keys(obj)

`Object.keys` 方法接受一个对象作为参数，并返回一个包含所有该对象**自身**（不包括通过原型继承的）可枚举属性名称的数组。

```javascript
const object = { a: 1, b: 2, c: 3 };
console.log(Object.keys(object)); // ["a", "b", "c"]
```

在这个例子中，`Object.keys` 返回了 `object` 对象的所有属性名组成的数组。

### Object.values(obj)

`Object.values` 方法也接受一个对象作为参数，返回一个包含该对象所有**自身**可枚举属性值的数组。

```javascript
const object = { a: 1, b: 2, c: 3 };
console.log(Object.values(object)); // [1, 2, 3]
```

这里，`Object.values` 返回了一个包含 `object` 对象所有属性值的数组。

### Object.assign(target, ...sources)

`Object.assign` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，并返回该目标对象。它至少需要两个对象作为参数：第一个参数是目标对象，其余参数是源对象。

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

在这个例子中，`source` 对象中的属性被复制到 `target` 对象中。对于重复的属性名（如 `b`），`target` 对象中的值被 `source` 对象中的值覆盖。`Object.assign` 修改目标对象，并且也返回它，所以 `returnedTarget` 和 `target` 是同一个对象。

这些方法在数据处理和对象操作中非常有用，尤其是在不需要更改原始数据，或者需要组合来自多个对象的数据时。
