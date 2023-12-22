## new 和`Object.create()` 方法的区别

`Object.create()` 方法和使用 `new` 关键字有一些关键的区别，这些区别使得 `Object.create()` 在实现继承时更为灵活和强大。

### `Object.create()`

`Object.create(proto[, propertiesObject])` 方法创建一个新对象，其中第一个参数是这个对象的原型。

#### 特点

1. **原型设置**：它允许你指定新创建对象的原型对象 `proto`。
2. **属性定义**：你可以额外传递一个属性描述对象作为第二个参数，用于定义新对象的额外属性。
3. **创建纯净的对象**：如果传递 `null` 作为 `proto`，它将创建一个没有原型的对象，这在某些特殊场景很有用。

#### 例子

```javascript
let animal = {
    type: 'animal',
    speak: function() {
        console.log('Some sound');
    }
};

let dog = Object.create(animal);
dog.type = 'dog';
```

这里，`dog` 对象直接继承自 `animal` 对象。

### 使用 `new` 关键字

当使用 `new` 关键字时，JavaScript 会进行以下操作：

1. **创建新对象**：创建一个空的简单 JavaScript 对象（即 `{}`）。
2. **设置原型**：将这个空对象的原型设置为构造函数的 `prototype` 属性所指向的对象。
3. **构造函数上下文**：将构造函数的 `this` 指向新对象，以便可以在构造函数中为新对象添加属性。
4. **返回新对象**：如果构造函数返回一个对象，那么这个对象会被返回；如果没有返回对象，那么创建的新对象会被返回。

#### 例子

```javascript
function Human() {
    this.ears = 2;
    this.head = 1;
}

function Woman() {
    // Human 构造函数中的代码会在这里执行
}

Woman.prototype = new Human();
```

在这种情况下，`Woman` 的每个实例都会继承自 `Human`，但也会执行 `Human` 构造函数的代码。

### 比较

- **构造函数执行**：使用 `new` 关键字时，父构造函数会被执行，而 `Object.create()` 不会执行父构造函数。
- **灵活性**：`Object.create()` 允许你直接设置新对象的原型到一个现有对象，而无需通过构造函数。
- **纯净对象**：`Object.create(null)` 能创建一个纯净的对象，而 `new` 无法做到这一点。

总的来说，`Object.create()` 提供了一种更为强大和灵活的方式来创建对象和实现继承，特别是在需要细粒度控制对象原型时。而 `new` 关键字则依赖于构造函数来创建对象，适用于当需要在对象创建时执行一些初始化代码的情况。
