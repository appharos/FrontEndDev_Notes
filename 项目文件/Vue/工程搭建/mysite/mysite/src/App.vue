<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
        
      </template>

      <template #default>
        <router-view></router-view>
        <!-- <RouterView /> -->
      </template>

    </Layout>
  </div> 
</template>

<script>
import SiteAside from '@/components/SiteAside';
import Layout from '@/components/Layout';


export default {
  components: {
    SiteAside,
    Layout,
  }
}
</script>


<style lang="less" scoped>
@import url('~@/styles/mixin.less');
.app-container{
  .self-fill(fixed);

}
.aside{
  height: 100%;
  width: 250px;
}

</style>



