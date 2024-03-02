<template>
    <div id="app">

      <!-- <h1>App组件</h1> -->
      <Avatar url="https://img2.baidu.com/it/u=3094274256,2875638487&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1708707600&t=a7b8ee4df57c3ef097a579e72073098e" 
              :width="500" 
              :height="500" 
      />

    </div>

  </template>
  
  <script>
// webpack会自动寻找本文件夹中的index.vue文件
  import Avatar from './';

  
  
  export default {
    components: {
      Avatar,
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
  
  
  <style>
  .iconfont{
    font-size:26px;
    color:red;
  }
  </style>
  
  