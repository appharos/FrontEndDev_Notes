<template>
    <div class="empty-container">
        <Icon type="empty" />
        <div class="text">{{text}}</div>
    </div>
  
</template>

<script>
import Icon from '../Icon';

export default {
    props: {
        text: {
            type: String,
            default:"无数据",  
        }
    },
    components: {
        Icon,
    }
}
</script>

<style lang="less" scoped>

@import url('../../styles/mixin.less');
@import url('../../styles/var.less');

.empty-container{
    
    .self-center();   //less混合语法
    color: @gray;
    text-align: center;
    .iconfont{
        font-size: 72px;
        
    }
    .text{
        margin-top: 10px;
    }
     
}
</style>