> vue-router 官网：<https://router.vuejs.org/zh/>

<img src="http://mdrs.yuanjin.tech/img/20201202170037.png" alt="image-20201202170037391" style="zoom:50%;" />

1. **如何根据地址中的路径选择不同的组件？**
2. **把选择的组件放到哪个位置？**
3. **如何无刷新的切换组件？**

# 路由插件

```shell
# 为了保证和课程一致，请安装3.4.9版本
npm i vue-router@3.4.9
```

路由插件的使用

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); // Vue.use(插件)  在Vue中安装插件

const router = new VueRouter({
  // 路由配置
})
new Vue({
  ...,
  router
})
```

# 基本使用

```js
// 路由配置
const router = new VueRouter({
  routes: [
    // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
    { path: '/bar', component: Bar },
  ],
});
```

```html
<!-- App.vue -->
<div class="container">
  <div>
    <!-- 公共区域 -->
  </div>
  <div>
    <!-- 页面区域 -->
    <!-- vue-router 匹配到的组件会渲染到这里 -->
    <RouterView />
  </div>
</div>
```

# 路由模式

路由模式决定了：

1. 路由从哪里获取访问路径
2. 路由如何改变访问路径

`vue-router`提供了三种路由模式：

1. hash：默认值。路由从浏览器地址栏中的 hash 部分获取路径，改变路径也是改变的 hash 部分。该模式兼容性最好。

   ```
   http://localhost:8081/#/blog  -->  /blog
   http://localhost:8081/about#/blog  --> /blog
   ```

2. history：路由从浏览器地址栏的`location.pathname`中获取路径，改变路径使用的 H5 的`history api`。该模式可以让地址栏最友好，但是需要浏览器支持`history api`

   ```
   http://localhost:8081/#/blog  -->  /
   http://localhost:8081/about#/blog  --> /about
   http://localhost:8081/blog  --> /blog
   ```

3. abstract：路由从内存中获取路径，改变路径也只是改动内存中的值。这种模式通常应用到非浏览器环境中。

   ```shell
   内存： /   -->   /
   内存： /about --> /about
   内存： /blog   --> /blog
   ```

**GPT对路由模式的解释**

在 Vue Router 中，路由模式主要指定了如何与浏览器的历史记录(stack)进行交互。Vue Router 提供了三种路由模式：`hash`、`history` 和 `abstract`。

### 1. Hash 模式

Hash 模式是默认的路由模式。在这种模式下，URL 的 hash（即 URL 的 `#` 符号之后的部分，如 `http://example.com/#/about`）被用来模拟一个完整的 URL。当 URL 改变时，页面不会重新加载，但是这种改变会被记录到浏览器的历史记录中。

Hash 模式利用了浏览器的 hashchange 事件，因此可以在不重新加载页面的情况下更改 URL。这种模式的优点是它不需要任何服务器端的配置，可以在所有支持 JavaScript 的浏览器上运行。

### 2. History 模式

History 模式利用了 HTML5 的 History API 来实现页面的跳转而无需重新加载。在这种模式下，URL 看起来更像传统的路径，例如 `http://example.com/about`。这种模式提供了更好的用户体验和更佳的 SEO 优化，但是它需要服务器端的支持。

如果使用 History 模式，服务器需要配置为对所有路由都返回相同的页面（通常是应用程序的入口点 `index.html`），以便让 Vue Router 在客户端处理实际的路径。如果服务器未正确配置，用户直接访问或刷新非首页路由时将收到 404 错误。

### 3. Abstract 模式

Abstract 模式主要用在所有 JavaScript 运行环境，例如 Node.js 服务器端。这种模式下，Vue Router 会将路由状态保存在内存中，不依赖于浏览器的 History API 或 URL 的变化。由于没有 URL 的变化，这种模式不适用于 HTML5 历史模式或哈希模式所适用的环境，但在如 Electron 这类非浏览器环境中非常有用。

### 总结

- **Hash 模式**：使用 URL 的 hash 来模拟一个完整的 URL。优点是兼容性好，不需要服务器配置。缺点是 URL 不够美观。
- **History 模式**：利用 HTML5 的 History API，需要服务器配置支持。优点是 URL 美观，符合常规网址的形式，更利于 SEO。缺点是需要服务器端配置。
- **Abstract 模式**：在非浏览器环境中使用，如 Node.js 或 Electron，不依赖于 URL。

在实际应用中，你可以根据项目的需求和部署环境选择最适合的路由模式。

# 导航

`vue-router`提供了全局的组件`RouterLink`，它的渲染结果是一个`a`元素

```html
<RouterLink to="/blog">文章</RouterLink>
<!-- mode:hash 生成 -->
<a href="#/blog">文章</a>
<!-- mode:history 生成 -->
<!-- 为了避免刷新页面，vue-router实际上为它添加了点击事件，并阻止了默认行为，在事件内部使用hitory api更改路径 -->
<a href="/blog">文章</a>
```

<img src="http://mdrs.yuanjin.tech/img/20201203150453.png" alt="image-20201203150453332" />

<img src="http://mdrs.yuanjin.tech/img/20201203150918.png" alt="image-20201203150918219" style="zoom:50%;" />

## 激活状态

默认情况下，`vue-router`会用 **当前路径** 匹配 **导航路径** ：

- 如果当前路径是以导航路径开头，则算作匹配，会为导航的 a 元素添加类名`router-link-active`
- 如果当前路径完全等于导航路径，则算作精确匹配，会为导航的 a 元素添加类名`router-link-exact-active`

例如，当前访问的路径是`/blog`，则：

| 导航路径 | 类名                                        |
| -------- | ------------------------------------------- |
| /        | router-link-active                          |
| /blog    | router-link-active router-link-exact-active |
| /about   | 无                                          |
| /message | 无                                          |

可以为组件`RouterLink`添加 bool 属性`exact`，将匹配规则改为：必须要精确匹配才能添加匹配类名`router-link-active`

例如，当前访问的路径是`/blog`，则：

| 导航路径 | exact | 类名                                        |
| -------- | ----- | ------------------------------------------- |
| /        | true  | 无                                          |
| /blog    | false | router-link-active router-link-exact-active |
| /about   | true  | 无                                          |
| /message | true  | 无                                          |

例如，当前访问的路径是`/blog/detail/123`，则：

| 导航路径 | exact | 类名               |
| -------- | ----- | ------------------ |
| /        | true  | 无                 |
| /blog    | false | router-link-active |
| /about   | true  | 无                 |
| /message | true  | 无                 |

另外，可以通过`active-class`属性更改匹配的类名，通过`exact-active-class`更改精确匹配的类名

# 命名路由

使用命名路由可以解除系统与路径之间的耦合

```js
// 路由配置
const router = new VueRouter({
  routes: [
    // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { name: 'foo', path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
    { name: 'bar', path: '/bar', component: Bar },
  ],
});
```

```html
<!-- 向to属性传递路由信息对象 RouterLink会根据你传递的信息以及路由配置生成对应的路径 -->
<RouterLink :to="{ name:'foo' }">go to foo</RouterLink>
```
