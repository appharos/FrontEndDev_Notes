<template>
  <div class="message-container">
    
    <div class="content">
      <!-- slot是vue的内置组件 -->
      <header>
      <slot name="header"></slot>
    </header>
        <slot name="default"></slot> 
    </div>
    
    <button>确定</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
    props: ['msg'],
}
</script>

<style lang="less" scoped>
.message-container{
    width: 200px;
    height: 200px;
    border: 2px solid;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;

}
</style>