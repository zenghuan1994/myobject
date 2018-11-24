<template>
<div>
  <!-- <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunboList" :key="item.img">
      <img :src="item.img" alt="">
    </mt-swipe-item>

  </mt-swipe> -->
  <swipe :lunboList="lunboList" :isfull='isfull'></swipe>
  <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/home/newsList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodList">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
</div>
 
</template>
<script>
// import { Toast } from 'mint-ui';
import swipe from '../subcomponent/swipe.vue'

export default {
  data:()=>({
    lunboList:[],
    isfull:true
  }),
  created(){
    this.getLunbo()
  },
  methods:{
    getLunbo(){
      this.$http.get('api/getlunbo').then(res=>{
        // console.log(res);
        if (res.body.status == 0) {
          this.lunboList =  res.body.message 
        }else {
          Toast('图片加载失败')
        }
        // console.log( this.lunboList);
      })
    }
  },
  components:{
    swipe
  }
}
</script>
<style lang="less" scoped>
  // .mint-swipe {

  //   height: 200px;
  //   .mint-swipe-item {
  //     img{
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }

  // }
  .mui-content {
    .mui-table-view {
    background: #fff;;
    border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-table-view-cell.mui-media {
        border:none;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
</style>

