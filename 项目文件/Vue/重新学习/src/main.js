// 入口模块文件
// 创建vue实例

import Vue from "./vue.browser.js"
import App from './App.js'

new Vue({
    render(h) {
        return h(App)
    }
}).$mount('#app')