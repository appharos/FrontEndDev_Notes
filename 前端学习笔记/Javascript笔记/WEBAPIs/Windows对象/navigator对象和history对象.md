## navigator 对象

`navigator` 对象包含了有关浏览器的信息。它是 JavaScript 中一个全局的对象，你可以在任何地方使用它来获取浏览器相关的信息。

### 属性
- **appCodeName**: 返回浏览器的代码名。
- **appName**: 返回浏览器的名称。
- **appVersion**: 返回浏览器的平台和版本信息。
- **userAgent**: 返回由客户机发送服务器的 user-agent 头部的值。
- **platform**: 返回运行浏览器的操作系统平台。
- **language**: 返回浏览器的首选语言。
- **languages**: 返回用户的首选语言列表，通常与语言相关的首选项设置有关。
- **cookieEnabled**: 返回用户浏览器中是否启用 cookie 的布尔值。
- **onLine**: 返回浏览器是否在线的布尔值。

### 方法
- **javaEnabled()**: 返回布尔值，表示浏览器中是否启用 Java。
- **taintEnabled()**: 该方法已经废弃。它曾经用于检测浏览器是否启用了数据污点检测。

### 示例代码
```javascript
console.log(navigator.appCodeName); // 输出浏览器代码名
console.log(navigator.appName); // 输出浏览器的名称
console.log(navigator.appVersion); // 输出浏览器的平台和版本信息
console.log(navigator.userAgent); // 输出 user-agent 信息
console.log(navigator.platform); // 输出运行浏览器的操作系统平台
console.log(navigator.language); // 输出浏览器的首选语言
console.log(navigator.languages); // 输出用户的首选语言列表
console.log(navigator.cookieEnabled); // 输出用户浏览器中是否启用 cookie 的布尔值
console.log(navigator.onLine); // 输出浏览器是否在线的布尔值
console.log(navigator.javaEnabled()); // 输出浏览器中是否启用 Java 的布尔值
```

使用 `navigator` 对象可以帮助你收集关于用户浏览器的信息，这可以用于调试，或者提供更好的用户体验。例如，你可以用它来判断用户是否在线，或者他们的浏览器是否支持某些功能。但是，由于用户代理字符串（userAgent）可以被修改或伪造，所以依赖于 `navigator` 对象提供的信息来做重要判断可能并不安全。



## history对象

`history` 对象是 JavaScript 中的一个全局对象，它提供了对浏览器历史记录的访问能力。利用这个对象，你可以在用户的浏览历史中前进或后退，而不需要知道实际的 URL。`history` 对象是 `window` 对象的一部分，因此可以通过 `window.history` 来访问。

### 属性
- **length**: 返回历史堆栈中的 URL 数量。

### 方法
- **back()**: 与点击浏览器后退按钮相同，加载历史堆栈中的前一个 URL。
- **forward()**: 与点击浏览器前进按钮相同，加载历史堆栈中的下一个 URL。
- **go(n)**: 加载历史堆栈中的某个具体页面，通过参数 n 来指定。n 可以是正数，负数或者 0，例如 `go(1)` 相当于 `forward()`，`go(-1)` 相当于 `back()`，`go(0)` 会重新加载当前页面。
- **pushState(state, title, url)**: 添加一条新的历史记录，通常用于单页面应用中，以保证用户的前进和后退导航。
- **replaceState(state, title, url)**: 修改当前的历史记录，参数同 `pushState`。

### 示例代码
```javascript
history.back(); // 后退到上一个页面
history.forward(); // 前进到下一个页面
history.go(-2); // 后退两个页面
history.go(2); // 前进两个页面
history.go(0); // 重新加载当前页面

// 在单页面应用中常见的用法
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");

window.addEventListener("popstate", function(event) {
  console.log("location: " + document.location);
  console.log("state: " + JSON.stringify(event.state));
});
```

`pushState` 和 `replaceState` 允许你在浏览历史中添加和修改记录，但是它们不会触发页面加载。你可以结合 `popstate` 事件监听器来响应用户的前进和后退操作。

需要注意的是，由于安全原因，`history` 对象只能操作当前页面所属的历史记录，无法访问其他页面的历史记录。