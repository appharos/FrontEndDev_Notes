## Webpack

1. webpack 是用来搭建前端工程的

- 它运行在node环境中，所做的事情，简答来说就是打包
- 具体来说，就是以某个模块作为入口，根据入口分析出所有模块的依赖关系，然后对各种模块进行合并、压缩，形成最终的打包结果
- 在webpack中，一切皆是模块

2. webpack 非常适合开发单页应用

- 单页应用是前端用户体验最好的web应用
- 所谓单页应用，是指只有一个html页面，页面中没有任何内容，所有的内容均靠js生成
- 要实现单页应用，最好依托前端框架，比如vue,recat

3. public目录
webpack会非常暴力的将public 目录中的所有文件（除页面模板外），复制打包到结果中

4. 开发服务器

- 开发阶段，可以通过运行 npm run webpack serve 命令获得更好的打包体验
该命令会让webpack启动一个开发服务器

- 在这个阶段，webpack并不会形成打包结果文件，而是把打包的内容放到内存中，当我们请求服务器时，服务器内存中给予我们打包结果。
与此同时，当源代码发生变动时，webpack会自动重新打包，同时刷新页面以访问到最新的打包结果

5. 缺省的文件和后缀名

- 导入模块时，所有JS模块均可省略.js,若导入的模块文件名为index.js ,可省略文件名

6. 路径别名

- webpack提供了别名供我们快速定位到./src目录，通常，该别名为@

7. 打包压缩

- webpack在打包时，会对所有js和css代码进行压缩
对于js ，除了压缩之外，还会对其中的各种名称进行混淆——混淆的作用一方面是为了进一步压缩包体积，另一方面是为了让我们的代码更难被其他人理解利用

## webpack对开发的影响

1. 学会访问开发服务器查看效果
2. 学会动态获取资源文件路径

```js
import url from './asset/1.png'
img.src = url
```

3. 学会省略文件和后缀名

```js
import './home'; // 若存在home.js, 可省略js
import './movie';  // 若movie是一个目录，此次导入的是 ./movie/index.js

```

4. 学会使用别名简化导入代码

```js
import '@b/bl' //实际导入： src/b/bl/index.js (若bl是目录)
```

5. 学会使用css module

```js
import style from './index.module.less';
dom.classList.add(styles.container);
```
