<template>
  <div class="site-aside-container">
    <div class="avatar-container">
        <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    </div>
    <Menu />
    <Contact />
    <p class="footer">浙ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
.site-aside-container{
    background-color: @dark;
    padding: 20px 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container{
        margin: 0 auto;
    }
    .footer{
        text-align: center;
        font-size: 12px;
    }
}
</style>