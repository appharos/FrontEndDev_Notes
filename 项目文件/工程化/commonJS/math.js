// 提供一些数学函数

function isOdd(n) {
    return n % 2 !== 0;
}

function sum(a, b) {
    return a + b
}

module.exports = {
    isOdd,
    sum,
};