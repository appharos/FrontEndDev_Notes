## location对象

- location 的数据类型是对象，他拆分并保存了URL地址的各个组成部分
- 常用属性和方法：

reload: 该方法用来刷新当前页面，传入参数true表示强制刷新

```html
<button>点击刷新</button>
<script>
    let btn = document.querySelector('button')
    btn.addEventListener('click', function(){
        location.reload(true)
        // 强制刷新，类似Ctrl+F5
    })
</script>
```



`location` 对象是 JavaScript 中的一个内置对象，用于获取或设置当前文档的 URL 信息，并且可以用来解析 URL。`location` 对象是 `window` 对象的一个属性，因此可以直接访问它，也可以通过 `window.location` 访问。

以下是 `location` 对象的一些常用属性和方法：

### 属性

- **href**: 表示当前页面的完整 URL。修改这个属性会导致浏览器加载新的页面。
- **protocol**: URL 的协议部分，例如：`'http:'`, `'https:'`。
- **host**: URL 的主机部分，包括域名和端口（如果有）。
- **hostname**: URL 的域名部分。
- **port**: URL 的端口部分。
- **pathname**: URL 的路径部分，开头有一个斜杠。
- **search**: URL 的查询字符串部分，包括开头的问号。
- **hash**: URL 的锚部分，包括开头的井号。

### 方法

- **assign(url)**: 加载一个新的文档。
- **replace(url)**: 用新的文档替换当前文档，但不在浏览器历史记录中创建新的记录。
- **reload([forcedReload])**: 重新加载当前文档。如果参数 `forcedReload` 为 `true`，将会导致页面强制从服务器重新加载，而不是从浏览器缓存中加载。

### 使用示例

```javascript
console.log(location.href); // 获取当前页面的完整 URL
console.log(location.protocol); // 获取协议，如 'http:'
console.log(location.host); // 获取主机名和端口号（如果有），如 'www.example.com:80'
console.log(location.pathname); // 获取路径名，如 '/path'
console.log(location.search); // 获取查询字符串，如 '?name=value'
console.log(location.hash); // 获取锚点，如 '#anchor'

location.href = 'http://www.example.com'; // 跳转到新的 URL
location.reload(); // 重新加载当前页面
location.replace('http://www.example.com'); // 替换当前页面，并跳转到新的 URL，不留下历史记录
```

修改 `location` 对象的属性（除了 `hash` 外）将导致页面重新加载，可能会导致数据丢失，特别是如果用户在一个表单页面上。因此，在修改 `location` 对象之前，最好确认这是你想要的行为。