<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunboList" :key="item.img">
      <img :src="item.img" alt="">
    </mt-swipe-item>

  </mt-swipe>
</div>
 
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data:()=>({
    lunboList:[]
  }),
  created(){
    this.getLunbo()
  },
  methods:{
    getLunbo(){
      this.$http.get('http://www.lovegf.cn:8899/api/getlunbo').then(res=>{
        console.log(res);
        if (res.body.status == 0) {
          this.lunboList =  res.body.message 
        }else {
          Toast('图片加载失败')
        }
        // console.log( this.lunboList);
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .mint-swipe {
    
    height: 200px;
    .mint-swipe-item {
      img{
        width: 100%;
        height: 100%;
      }
    }

  }
</style>

