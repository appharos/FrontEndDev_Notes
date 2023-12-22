 ## local Storage   (只能存储字符串类型数据)


JavaScript提供了几种本地存储的方法，可以让开发者在用户的浏览器中存储数据。最常见的两种方法是：localStorage 和 sessionStorage。

### 1. localStorage
- **持久性存储**：localStorage 中的数据不会因为浏览器的关闭而被清除，它会持久地保存在用户的设备上，直到被明确地删除。
- **同源策略**：只有来自同一个源（协议、域名和端口都相同）的页面才能读取或修改对应源的 localStorage 数据。
- **容量限制**：大多数浏览器为 localStorage 设置了约 5MB 的存储限制。
- **简单的键值对存储**：localStorage 只能存储**字符串**。如果你想存储复杂的数据结构，需要将对象转换为JSON字符串。

#### 使用示例
```javascript
// 设置键值对
localStorage.setItem('key', 'value');

// 获取键值对
const value = localStorage.getItem('key');
console.log(value);  // 输出: value

// 删除键值对
localStorage.removeItem('key');

// 清空localStorage
localStorage.clear();
```

### 2. sessionStorage
- **会话级别的存储**：sessionStorage 中的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原页面会话。
- **同源策略**：同 localStorage。
- **容量限制**：同 localStorage。
- **简单的键值对存储**：同 localStorage。

#### 使用示例
```javascript
// 设置键值对
sessionStorage.setItem('key', 'value');

// 获取键值对
const value = sessionStorage.getItem('key');
console.log(value);  // 输出: value

// 删除键值对
sessionStorage.removeItem('key');

// 清空sessionStorage
sessionStorage.clear();
```

### 3. IndexedDB
除了 localStorage 和 sessionStorage，IndexedDB 也是一种常见的本地存储解决方案。它提供了更复杂的数据存储能力，可以用来存储大量数据和复杂的数据结构。IndexedDB 工作在异步模式，不会阻塞页面的其他操作。

### 总结
localStorage 和 sessionStorage 非常适合存储少量的数据，例如用户的设置或简单的状态信息。如果需要存储大量数据或者需要在客户端进行复杂的数据查询和操作，那么 IndexedDB 将是更好的选择。