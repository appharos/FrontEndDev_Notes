## URL查询参数

定义: 浏览器提供给服务器的额外信息,让服务器返回浏览器想要的数据
语法: <http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2>

## axios查询参数

语法: 使用axios提供的params选项

```js
axios({
    url:'目标资源地址'
    params:{
        参数名:值
    }
}).then(result=>{
    // 对服务器返回的数据做后续处理
})
```
