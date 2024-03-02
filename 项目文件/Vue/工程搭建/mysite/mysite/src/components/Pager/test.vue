<template>
    <div id="app">

      <Pager :total="example1.total" :current="example1.current"  @pageChange="handlePageChange" />
     
      <!-- 
  在 Vue.js 中，当你向子组件传递 props 时，如果你想传递的是一个静态字符串，可以直接写属性名和值，
  不需要使用 : 前缀。但是，如果你想传递的是 JavaScript 表达式（例如变量、数字、对象等），
  那么你需要在属性名前加 : 来告诉 Vue 这是一个 JavaScript 表达式，而不是一个静态的字符串。
  在您的代码中，您想将数字（500）传递给 <Avatar> 组件的 width 和 height 属性。
  因为这些是数字而不是字符串，所以前面确实需要加上 :，
  使其成为动态绑定（也就是说，告诉 Vue 这些是 JavaScript 表达式而非静态值）。 -->
      
  
    <!-- 如果分数>= 80, <h1>优</h1> -->
    <!-- 如果分数>= 60, <h2>良</h1> -->
    <!-- 其他分数, <h3>差</h3> -->
  
    <h1 v-if="score >= 80">优</h1>
    <h2 v-else-if="score >= 60">良</h2>
    <h3 v-else>差</h3>
  
  
    <p v-if="visible"> something</p> 
    <!-- 使用v-show可以达到同样效果，但是两者有所区别，v-if控制是否生成虚拟DOM节点，而v-show控制display属性 -->    
    <!-- <p v-show="visible">anything</p> -->
    <button @click="visible = !visible">切换显示</button>
    </div>
  
  
  
  
  </template>
  
  <script>
 
  import Pager from './';        // webpack会自动寻找Pager文件夹中的index.vue文件
  
  
  export default {
    components: {
      Pager,
    },
    
  
    data() {
      return {
        firstName: '无',
        lastName: '敌',
        score: 70,
        visible: true,
        
        example1: {
          current: 1,
          total: 202,
        },
        example2: {
          current: 2,
          total: 202,
        }
      };
    },
  
    methods: {
      getFullName() {
        console.log("method called");
        return this.firstName + '' + this.lastName;
      },
      handlePageChange(newPage) {
        
        this.example1.current = newPage
        console.log('加载当前页数据');
      }
    },
  
    computed: {
      fullName() {
        console.log('fullname called');
        return this.firstName + '' + this.lastName;
  
      }
    }
  
    
  };
  
  </script>
  
  
  <style>
  .iconfont{
    font-size:26px;
    color:red;
  }
  </style>
  
  