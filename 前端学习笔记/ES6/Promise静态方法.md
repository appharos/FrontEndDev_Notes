## Promise静态方法

`Promise` 对象是 JavaScript 中用于异步编程的一部分。`Promise` 有几个静态方法，它们提供了不同的方式来处理异步操作。以下是 `Promise` 的一些常用静态方法：

1. **`Promise.resolve(value)`**:
   - 这个方法返回一个以给定值解析的 `Promise` 对象。如果这个值是一个 `Promise`，那么返回的 `Promise` 将采用其状态；如果这个值是一个 `thenable`（即具有 `then` 方法的对象），返回的 `Promise` 会跟随这个 `thenable` 的对象；其他情况下，返回的 `Promise` 会以这个值完成。

2. **`Promise.reject(reason)`**:
   - 返回一个以给定原因被拒绝的 `Promise`。

3. **`Promise.all(iterable)`**:
   - 这个方法用于将多个 `Promise` 实例包装成一个新的 `Promise` 实例。它接受一个 `Promise` 对象的集合（例如数组）作为输入。只有当这个集合中的所有 `Promise` 都成功完成时，包装的 `Promise` 才会成功完成，返回值是一个包含所有 `Promise` 返回值的数组。如果其中任何一个 `Promise` 失败，则包装的 `Promise` 会立即失败，并返回那个失败的 `Promise` 的错误。

4. **`Promise.allSettled(iterable)`**:
   - 此方法返回一个 `Promise`，该 `Promise` 在所有给定的 `Promise` 已被解决或拒绝后解决。每个结果都有一个 `status` 字符串（`'fulfilled'` 或 `'rejected'`）和一个 `value`（解决的值）或 `reason`（拒绝的原因）属性。

5. **`Promise.race(iterable)`**:
   - `Promise.race` 方法返回一个 `Promise`，它将以第一个传递的 `Promise` 的状态来解决，无论是成功还是失败。这意味着它只等待第一个完成（或失败）的 `Promise`。

6. **`Promise.any(iterable)`**:
   - 这个方法接受一个 `Promise` 对象的集合作为输入，并返回一个单一的 `Promise`。这个返回的 `Promise` 将会解决为原 `Promise` 对象集合中第一个成功解决的 `Promise` 的值。如果所有的 `Promise` 都失败，则返回一个聚合错误。

这些方法使得处理多个异步操作变得更加容易和可管理，特别是在需要协调多个异步请求的情况下。
