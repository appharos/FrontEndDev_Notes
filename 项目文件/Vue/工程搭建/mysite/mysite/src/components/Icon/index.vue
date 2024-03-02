<template>
  <i class="iconfont icon-container" :class="project"></i>
</template>

<script>

const classMap = {
    empty: 'icon-wushuju',
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
@import '//at.alicdn.com/t/c/font_4450711_tmi0kek5geb.css';
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>