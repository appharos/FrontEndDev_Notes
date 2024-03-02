<template>
    <div id="app">

      <Icon type="mark" />

    </div>
  
  
  
  
  </template>
  
  <script>
  import Icon from './';

  export default {
    components: {

      Icon,
   
    },
    name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  
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
  

  
    
  };
  
  </script>
  
  
  <style >
  .iconfont{
    font-size:26px;
    color:red;
  }
  </style>

  