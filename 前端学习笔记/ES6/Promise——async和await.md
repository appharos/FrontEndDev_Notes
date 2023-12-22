## Promise 之 async 和 await

`async` 和 `await` 是 JavaScript 中用于简化异步编程的关键字。它们是在 ES2017（也称为 ES8）标准中引入的，旨在让异步代码更容易编写和理解。在介绍这两个关键字之前，了解一下 JavaScript 中的异步编程背景是有帮助的。

### 异步编程背景

在 JavaScript 中，异步编程是一种处理长时间运行的任务（例如从服务器获取数据、文件读写等）而不阻塞主线程的方法。在引入 `async/await` 之前，JavaScript 主要通过回调函数和 `Promise` 对象来处理异步操作。

### async

- `async` 关键字用于声明一个异步函数，这意味着函数内部有一些以异步方式执行的操作。
- 将 `async` 关键字放在函数声明之前，会使该函数返回一个 `Promise`。如果函数正常结束，则返回的 `Promise` 会以函数返回的值为结果；如果函数抛出异常，则返回的 `Promise` 被拒绝，异常值作为拒绝的理由。
- `async` 函数可以包含零个或多个 `await` 表达式。

### await

- `await` 关键字仅在 `async` 函数内部有效。它使 JavaScript 运行时暂停执行 `async` 函数的剩余部分，直到等待的 `Promise` 被解决（fulfilled）或被拒绝（rejected）。
- 当 `await` 等待的 `Promise` 被解决时，`async` 函数会恢复执行，并返回解决的值。
- 如果 `await` 等待的 `Promise` 被拒绝，`async` 函数会抛出异常，可以用 `try...catch` 结构来捕获这个异常。

### 使用示例

不使用 `async/await`：

```javascript
function fetchData() {
    return fetch('https://example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
```

使用 `async/await`：

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```
 
### 优点

- 代码更简洁、更直观，类似于同步代码的方式处理异步操作。
- 错误处理更简单，可以使用传统的 `try...catch` 语法。
- 避免了回调地狱（Callback Hell）的情况，提高代码的可读性和维护性。

### 注意点

- `await` 只能在 `async` 函数内部使用。
- `async/await` 并不是替代 `Promise`，而是基于 `Promise` 的更高层次的抽象。
- 过度使用 `await` 可能会导致性能问题，因为它会按顺序等待每个 `Promise`，而不是并行执行它们。在需要并行处理多个异步操作时，应该使用 `Promise.all`。
