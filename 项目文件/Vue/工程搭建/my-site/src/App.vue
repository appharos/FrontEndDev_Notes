<template>
  <div>
    <h1>App组件</h1>
    <UserAvatar
      url="https://t15.baidu.com/it/u=1372841570,3864405121&fm=58&s=DE913BC3663335941B0484C80300E0D1"
      :size = "50"
    />

    <UserAvatar
      url="https://t15.baidu.com/it/u=1372841570,3864405121&fm=58&s=DE913BC3663335941B0484C80300E0D1"
      :size = "150"
    />
  </div>
</template>

<script>
import UserAvatar from "./components/UserAvatar.vue";
export default {
  components: {
    UserAvatar,
  },
};
</script>
