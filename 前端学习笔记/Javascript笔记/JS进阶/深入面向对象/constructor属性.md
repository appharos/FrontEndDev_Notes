## constructor属性

每个原型对象里面都有个constructor属性 （constructor构造函数）
作用： 该属性指向该原型对象的构造函数，简单理解，就是指向我的爸爸，我是有爸爸的孩子

使用场景：

如果有多个对象的方法，我们可以给原型对象采取对象形式赋值。
但是这样就会覆盖构造函数原型对象的内容， 这样修改后的原型对象constructor 就不再指向当前的构造函数了
此时，我们可以在修改后的原型对象中，添加一个constructor指向原来的构造函数。

```js
 function Star() {

        }

        console.log(Star.prototype);
        Star.prototype = {
            // 重新指回创造这个原型对象的 构造函数
            constructor: Star,
            
            sing: function () {
                console.log('唱歌');
            },
            dance: function () {
                console.log('跳舞');
            }
        }
        console.log(Star.prototype);
```
