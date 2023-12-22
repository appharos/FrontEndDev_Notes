## AJAX

AJAX（Asynchronous JavaScript and XML，异步的 JavaScript 和 XML）是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

### 核心概念

1. **异步性（Asynchronous）**：AJAX 允许在后台与服务器进行数据交换，这意味着可以在不干扰页面当前状态的情况下更新页面的部分内容。这与传统的同步请求（例如，通过表单提交）形成对比，在传统方法中，每次请求都需要重新加载整个页面。

2. **JavaScript**：AJAX 的实现依赖于 JavaScript 语言，特别是 `XMLHttpRequest` 对象，它提供了在浏览器与服务器之间发送和接收数据的功能。

3. **XML**：最初，AJAX 使用 XML 格式来交换数据，但现在 JSON 格式更为流行，因为它更轻量，更易于处理。

### 工作原理

1. **发起请求**：使用 JavaScript 创建一个 `XMLHttpRequest` 对象。

2. **配置请求**：设置请求的类型（GET 或 POST），URL，以及其他参数。

3. **发送请求**：通过 `XMLHttpRequest` 对象发送请求。

4. **处理响应**：服务器处理请求并返回数据。在客户端，`XMLHttpRequest` 对象接收响应数据，并触发一个事件（通常是 `onload` 或 `onreadystatechange` 事件）。

5. **更新页面**：使用 JavaScript 处理服务器返回的数据，并动态更新页面的内容，而无需重新加载整个页面。

### 示例代码

```javascript
// 创建 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 配置请求类型、URL 以及异步性
xhr.open('GET', 'your-api-url', true);

// 设置响应类型
xhr.responseType = 'json';

// 设置状态改变回调处理函数
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 请求成功，处理返回的数据
        console.log(xhr.response);
    }
};

// 发送请求
xhr.send();
```

### AJAX 的优点

1. **提高用户体验**：无需重新加载整个页面，就可以更新页面的部分内容。

2. **节省带宽**：只请求必要的数据，而不是整个页面的数据。

3. **异步通信**：在后台进行数据交换，用户可以继续浏览和操作页面。

### AJAX 的缺点

1. **安全性问题**：由于 AJAX 在客户端进行数据处理，可能面临跨站脚本攻击（XSS）等安全威胁。

2. **SEO 不友好**：由于内容是动态加载的，搜索引擎可能无法正确抓取和索引这些内容。

3. **对 JavaScript 的依赖**：如果用户禁用了浏览器的 JavaScript，AJAX 功能将无法正常工作。

随着技术的发展，现代前端开发中常使用更高级的 AJAX 库（如 jQuery 的 `$.ajax`、`fetch API`、`axios` 等），它们提供了更简洁、更强大的 API，使得与服务器进行数据交换变得更加容易和高效。

## axios介绍

Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js 环境中发送 HTTP 请求。它是一个非常流行的库，因为它提供了丰富的功能和简洁的 API。Axios 允许您轻松地发送异步 HTTP 请求到 REST 端点，并对响应进行处理。

### 主要特点

1. **从浏览器中创建 XMLHttpRequests**
2. **从 node.js 创建 http 请求**
3. **支持 Promise API**
4. **拦截请求和响应**
5. **转换请求和响应数据**
6. **取消请求**
7. **自动转换 JSON 数据**
8. **客户端支持防止 CSRF/XSRF**

### 安装

可以通过 npm 或者在浏览器中通过 `<script>` 标签直接引入 Axios。

使用 npm 安装：

```bash
npm install axios
```

或者在 HTML 文件中直接引入：

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 使用示例

1. **GET 请求**:

    ```javascript
    axios.get('/user?ID=12345')
      .then(function (response) {
        // 处理成功情况
        console.log(response);
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
    ```

2. **POST 请求**:

    ```javascript
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    ```

3. **同时执行多个请求**:

    ```javascript
    function getUserAccount() {
      return axios.get('/user/12345');
    }

    function getUserPermissions() {
      return axios.get('/user/12345/permissions');
    }

    axios.all([getUserAccount(), getUserPermissions()])
      .then(axios.spread(function (acct, perms) {
        // 两个请求都完成时执行这里的代码
      }));
    ```

### 响应结构

Axios 的响应包含以下信息：

- `data`: 服务器提供的响应
- `status`: HTTP 状态码
- `statusText`: 状态信息
- `headers`: 响应头
- `config`: 请求的配置信息
- `request`: 请求的 XMLHttpRequest 对象实例

Axios 是一个强大、灵活的工具，适用于需要进行 HTTP 请求的各种应用程序。

## 如何使用？

1. 先使用axios库,与服务器进行数据通信

- 基于XMLHttpRequest 封装、代码简单
- Vue,React项目中都会用到axios

axios使用

```js
axios({
    url:'目标资源网址'
}).then((result) =>{
    // 对服务器返回的数据做后续处理
})

```
