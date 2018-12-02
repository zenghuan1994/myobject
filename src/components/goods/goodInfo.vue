<template>
   
  <div class="goodInfo">
    <!-- 轮播图 -->  
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
           <swipe :lunboList="lunboList" :isfull='isfull'></swipe>            
					</div>
				</div>
			</div>
      <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p class="price">
              市场价：
              <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
              <span class="now_price">￥{{goodsinfo.sell_price}}</span>
            </p>
            <p>购买数量：
              <numberBox ></numberBox>
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
              <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
              <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
              <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
              <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
              <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
             </p>
					</div>
				</div>
			</div>
      <!-- 商品参数区域 -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号：{{goodsinfo.goods_no}}</p>
            <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
			</div>
      
  </div>
</template>
<script>
import swipe from '../subcomponent/swipe.vue'
import numberBox from '../subcomponent/goodInfo-numberBox.vue'
export default {
  data(){
    return {
      id:this.$route.params.id,
      lunboList:[],
      isfull:false,
      goodsinfo:{}
    }
  },
  created(){
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods:{
    getLunbotu() {
      this.$http.get('api/getthumimages/'+this.id).then(res=>{
        console.log(res);
        if (res.body.status == 0) {
          this.lunboList =  res.body.message 
        }else {
          Toast('图片加载失败')
        }
      })
    },
    getGoodsInfo(){
      this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
        console.log(res);
        if (res.body.status === 0) {
          this.goodsinfo = res.body.message[0];
          console.log(this.goodsinfo);
        }
      })
    }

  },
  components:{
    swipe,
    numberBox
  }
}
</script>
<style lang="less" scoped>
  .goodInfo {
    background: #eee;
  }
</style>
