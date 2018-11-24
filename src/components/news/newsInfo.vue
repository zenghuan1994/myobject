<template>
<div class="newInfoContainer">
  <h3 class="title">{{newInfo.title}}</h3>
  <p class="subtitle">
    <span>发表时间：{{newInfo.add_time|dateFormat}}</span>
    <span>点击：{{newInfo.click}}</span>
  </p>
  <hr>
  <div class="content" v-html="newInfo.content"></div>
  <comment :id="this.id"></comment>

</div>
  <!-- <h1>info---{{id}}</h1> -->
</template>
<script>
import { Toast } from 'mint-ui';
import comment from '../subcomponent/comment.vue'

export default {
  data(){
    return{
      id: this.$route.params.id,
      newInfo:{}
    }
  },
  created(){
    this.getnewInfo()
  },
  methods:{
    getnewInfo(){
      this.$http.get('api/getnew/'+this.id).then(res=>{
        // console.log(res);
        if (res.body.status == 0) {
          this.newInfo =  res.body.message[0] 
        }else {
          Toast('图片加载失败')
        }
      })
    }
  },
  components:{
    comment
  } 
}
</script>

<style lang="less" scoped>
  .newInfoContainer {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    color: blue;
  }
  .content img {
    width: 100%;
    height: 100%;
  }
}
</style>
