
// 设置delay函数 ，参数为Number类型的duration表示等待的时间   函数返回值为Promise对象 ，返回一个任务，该任务在指定的时间后完成

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },duration)
    })
}

delay(1000).then(() => {
    console.log(123);
})