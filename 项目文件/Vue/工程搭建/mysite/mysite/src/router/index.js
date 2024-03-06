import VueRouter from "vue-router";
import Vue from "vue";
import routes from './routes.js'

Vue.use(VueRouter);   // 使用一个vue插件



const router = new VueRouter({
  // 配置
    routes,   // 路由匹配规则
    mode:'history',
})


export default router;

// router.beforeEach((to, from, next) => {
//   console.log('Navigating to:', to.path);
//   next();
// });
