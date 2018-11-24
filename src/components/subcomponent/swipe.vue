<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunboList" :key="item.img">
      <img :src="item.img" alt="" :class="{full:isfull}">
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  props:['lunboList','isfull']
}
</script>
<style lang="less" scoped>
.mint-swipe {

    height: 200px;
    .mint-swipe-item {
      img{
        height: 100%;
      }
      .full {
        width: 100%;
      }
    }

  }
</style>
