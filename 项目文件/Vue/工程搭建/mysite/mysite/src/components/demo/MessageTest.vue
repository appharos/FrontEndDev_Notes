<template>
  <div class="test-container">
    <Message>
      <template v-slot:header>
        <h1>页头</h1>
      </template>
      <!-- <template v-slot:default>   -->
      <template #default>
        <!-- v-solt也可以简写为# -->
        中间主区域
      </template>
     
    </Message>
  </div>
</template>

<script>
import Message from './Message';
export default {
  components: {
      Message,
    }
}
</script>

<style>

</style>