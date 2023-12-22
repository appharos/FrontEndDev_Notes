## JS对象

对象(object)：JS里的一种数据类型

可以理解为是一种无序的数据集合，注意数组是有序的数据集合


1. 对象声明语法

对象字面量
```js
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};

```

new Object()方法
```js
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.isEmployed = true;

```

2. 对象由属性和方法组成



3. 属性
- 数据描述性信息称为属性，如人的姓名、身高、年龄、性别等，一般都是名词性的
- 属性都是成对出现，包括属性名和值，他们之间使用英文：分隔
- 多个属性之间使用英文，分隔
- 属性就是依附在对象上的变量（外面是变量，对象内是属性）

## 对象使用

对象本质是无序的数据集合，操作数据分为增删改查语法

JavaScript 中的对象是键-值对的集合。以下是对对象进行增、删、改、查操作的基本语法：

### 1. **创建对象**:
使用字面量方式或 `new Object()` 方式都可以创建对象。

```javascript
let obj = {};
// 或者
let obj = new Object();
```

### 2. **增加属性**:
只需为对象分配一个新属性名并给它赋值。

```javascript
obj.name = "John";
// 或者
obj["name"] = "John";
```

### 3. **查询属性**:
可以通过点表示法或方括号表示法来访问对象的属性。

```javascript
let personName = obj.name;
// 或者
let personName = obj["name"];
```

如果尝试访问一个不存在的属性，将返回 `undefined`。

### 4. **修改属性**:
修改属性的值与添加属性的方式相同。如果属性名已存在，它的值将被更新；否则，将添加新属性。

```javascript
obj.name = "Doe";
// 或者 
obj["name"] = "Doe";
```

### 5. **删除属性**:
使用 `delete` 关键字来删除对象的属性。

```javascript
delete obj.name;
// 或者
delete obj["name"]; 
```

### 6. **检查属性是否存在**:
可以使用 `in` 关键字或对象的 `hasOwnProperty` 方法来检查对象是否具有某个属性。

```javascript
// 使用 in 检查对象及其原型链中的属性
if ("name" in obj) {
    console.log("obj has a 'name' property");
}

// 使用 hasOwnProperty 检查对象自身的属性，不包括原型链中的属性
if (obj.hasOwnProperty("name")) {
    console.log("obj has its own 'name' property");
}
```

这就是对象的基本增删改查操作。在实际开发中，对象是非常强大和灵活的，可以包含其他对象、数组、函数等各种类型的值。





## 对象方法

```js
let person = {
    name: 'andy',
    sayHi: function() {
        document.write('h1~~')
    },
    shop: function() {
        console.log('Hi five')
    }
}

person.sayHi()
```


- 方法是由方法名和函数两部分构成，他们之间使用:分隔
- 多个属性之间使用英文，分隔
- 方法是依附在对象中的函数
- 方法名可以使用""或者"，一般情况下省略，除非名称遇到特殊符号如空格、中横线等
- 声明对象，并添加了若干方法后，可以使用.调用对象中函数，称之为方法调用
- 也可以添加形参和实参



## 遍历对象

```js
let obj = {
    uname: 'andy',
    age: 18,
    sex: '男',
}

for (let k in obj){
    console.log(k)   // 打印属性名
    console.log(obj[k])   //打印属性值
}

```

- 一般不用这种方法遍历数组、主要是用来遍历对象
- for in语法中的k是一个变量， 在循环的过程中依次代表对象的属性名
- 注意上述例子的中的k，获取的是对象的属性名，为**字符串**类型，所以要获取对象的属性值就需要用方括号法
- k是获得对象的属性名，对象名[k]是获得属性值




