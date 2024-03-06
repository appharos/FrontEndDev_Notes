<template>
  <img 
    class="avatar-container"
    :src="url"
    :style="{
        width: width + 'px',
        height: height + 'px',
    }"
  />

      <!-- 
在 Vue.js 中，当你向子组件传递 props 时，如果你想传递的是一个静态字符串，可以直接写属性名和值，
不需要使用 : 前缀。但是，如果你想传递的是 JavaScript 表达式（例如变量、数字、对象等），
那么你需要在属性名前加 : 来告诉 Vue 这是一个 JavaScript 表达式，而不是一个静态的字符串。
在您的代码中，您想将数字（500）传递给 <Avatar> 组件的 width 和 height 属性。
因为这些是数字而不是字符串，所以前面确实需要加上 :，
使其成为动态绑定（也就是说，告诉 Vue 这些是 JavaScript 表达式而非静态值）。 -->
    
</template>

<script>
export default {
    props: {
        url: {
            type: String,   // 设置url必须是一个字符串
            required: true,  // 属性必传
        },
        size: {
            type: Number,
        },
        height:{
            type: Number,
            default: 150,
        },
        width: {
            type: Number,
        }

    },
};
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>

<!-- 
在 Vue 组件中，<style> 标签上的 scoped 属性用来指定该样式是局部作用域的，
也就是说，它只会应用到当前组件的元素上，而不会影响到其他组件的元素。这是 Vue 特有的功能，
旨在帮助你维护大型项目中的样式封装，避免不同组件间的样式冲突。
当你在一个组件的 <style> 标签中添加 scoped 属性时， 
Vue 会在编译过程中为该组件的所有元素和相应的 CSS 规则添加一个独特的属性（例如，数据属性如 data-v-f3f3eg9）。
这意味着这些样式只会匹配带有相同属性的元素，从而确保样式只应用于当前组件内的元素。 -->