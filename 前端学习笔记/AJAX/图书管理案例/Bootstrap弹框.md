## Bootstrap弹框

功能： 不离开当前页面，显示单独内容，供用户操作步骤

步骤：

1. 引入bootstrap.css和bootstrap.js
2. 准备弹框标签，确认解构
3. 通过自定义属性，控制弹框的显示和隐藏  (data-bs-toggle绑定modal弹框类型和data-bs-target通过css选择器控制哪个弹框)

```js
<button data-bs-toggle="modal"   data-bs-target="css选择器">
显示弹框
</button>


<button data-bs-dismiss="modal">Close</button>
```

## 控制Bootstrap弹框显示的方法

1. 通过属性控制，弹框显示或者隐藏
2. 通过JS控制，弹框显示或隐藏

- 通过JS控制语法：

```js
// 创建弹框对象

const modalDom = document.querySelector('css选择器')
const modal = new bootstrap.Modal(modelDom)


// 显示弹框
modal.show()
// 隐藏弹框
modal.hide()

```
