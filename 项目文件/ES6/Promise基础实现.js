
// 创建Promise 对象
const pro = new Promise((resolve, reject) => {
    console.log('开始百米短跑');

    const duration = Math.floor(Math.random() * 5000)

    setTimeout(() => {
        if (Math.random() < 0.5) {
            // 成功
            resolve(duration)    // 将任务从挂起 -> 完成
        } else {
            reject('脚扭伤了！')
        }
    }, duration)
}) 

pro.then(
    (data) => {
        console.log(`oh yeah! 我跑了${data}秒！`);
    },
    (reason) => {
        console.log('不好意思', reason);
    }

)



// GPT解释：
// 这段代码是一个关于使用JavaScript中的`Promise`对象来处理异步操作的很好的例子。让我们一步一步来理解这段代码和`Promise`的工作原理。

// ### 什么是Promise？
// 在JavaScript中，`Promise`是一种用于处理异步操作的对象。它代表了一个尚未完成但预期将来会完成的操作。`Promise`对象可以处于以下三种状态之一：
// 1. **Pending（挂起）**：初始状态，既不是成功，也不是失败。
// 2. **Fulfilled（已解决/成功）**：意味着操作成功完成。
// 3. **Rejected（已拒绝/失败）**：意味着操作失败。

// ### 解析代码

// 1. **创建Promise对象**：
//    ```javascript
//    const pro = new Promise((resolve, reject) => {
//        //...
//    });
//    ```
//    这里创建了一个新的`Promise`对象`pro`。构造函数接收一个执行器（executor）函数，这个函数有两个参数：`resolve`和`reject`。这两个参数也是函数，用于改变`Promise`的状态。

// 2. **执行器函数逻辑**：
//    ```javascript
//    console.log('开始百米短跑');
//    const duration = Math.floor(Math.random() * 5000);
//    //...
//    ```
//    执行器函数立即执行。这里模拟了一个百米短跑比赛，跑步的时间是随机的（最多5秒）。使用`setTimeout`来模拟这个异步操作。

// 3. **异步操作完成后的处理**：
//    ```javascript
//    setTimeout(() => {
//        if (Math.random() < 0.5) {
//            resolve(duration);    // 成功
//        } else {
//            reject('脚扭伤了！'); // 失败
//        }
//    }, duration);
//    ```
//    在`setTimeout`完成后，有50%的概率调用`resolve`（表示成功），并传递跑步所用的时间。另有50%的概率调用`reject`（表示失败），并传递失败的原因。

// 4. **处理Promise的结果**：
//    ```javascript
//    pro.then(
//        (data) => {
//            console.log(`oh yeah! 我跑了${data}秒！`);
//        },
//        (reason) => {  
//            console.log('不好意思', reason);
//        }
//    );
//    ```
//    `then`方法用于设置`Promise`成功（fulfilled）和失败（rejected）状态的回调函数。第一个回调处理成功的情况，第二个回调处理失败的情况。如果`Promise`状态变为`fulfilled`，它会调用第一个回调，并传递`resolve`函数中的值；如果状态变为`rejected`，它会调用第二个回调，并传递`reject`函数中的值。

// ### 总结
// 这段代码通过模拟一个可能成功或失败的百米短跑比赛来展示了如何使用`Promise`来处理异步操作。通过`Promise`，您可以更优雅地处理异步操作的成功和失败情况，而不必依赖深层次的嵌套回调函数。这样的代码结构使得异步代码更易于阅读和维护。