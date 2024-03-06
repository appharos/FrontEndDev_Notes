<template>
  <i class="iconfont icon-container" :class="project"></i>
</template>

<script>

const classMap = {
    empty: 'icon-wushuju',
    qq: 'icon-QQ-circle-fill',
    mail: 'icon-youxiang',
    wechat: 'icon-logo-wechat',
    github: 'icon-github',
    blog: "icon-wenzhang",
    about: "icon-cuowutishi-copy",
    message: 'icon-liuyanban',
    home:'icon-xiazai45',
}

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        
    },
    computed: {
        project() {
            return classMap[this.type]
        },
    },

}
</script>

<style scoped lang="less">
@import '//at.alicdn.com/t/c/font_4450711_makyjwk07ea.css';
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>