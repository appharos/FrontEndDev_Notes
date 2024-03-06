<!-- <template>
  <nav class="menu-container">
    <a :href="item.link"  v-for="item in items" :key="item.link" :class="{selected: isSelected(item)}">
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </a>
  </nav>
</template> -->

<template>
  <nav class="menu-container">
    <router-link 
    :exact="item.exact"
    v-for="item in items" 
    :key="item.link" 
    :to="item.link" 
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </router-link>
  </nav>
</template>


<script>
import Icon from '@/components/Icon';
export default {
  components: {
    Icon,
  },

  data() {
    return {
      items: [
      {
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,   // 开启路由精确匹配
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "/message",
          title: "留言板",
          icon: "message",
          exact: true,
        },
      ]
        
      }
  },

 
  
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');  

.menu-container{
    color: @gray;
    margin:  24px 0;
    a{
      &.router-link-active{
        background-color: #2d2d2d;
      }
      padding: 0 50px;
      display: block;
      display: flex;
      align-items: center;
      height: 45px;

      .icon{
        width: 24px;
      }

      &:hover{
        color: #fff;
      }
    }
}
</style> 