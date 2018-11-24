<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="pl"></textarea>

    <mt-button type="primary" size="large" @click="getfb">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined'||item.content === '' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data(){
    return{
      pageindex:1,
      comments:[],
      pl:''
    }
  },
  created(){
    this.getcomment();
  },
  methods:{
    getcomment(){
      this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res=>{
        // console.log(res);
        if (res.body.status == 0) {
          this.comments = this.comments.concat(res.body.message) 
        }else {
          Toast('图片加载失败')
        }
      })
    },
    getmore(){
      this.pageindex++;
      this.getcomment();
    },
    getfb(){
      if (this.pl=='')return Toast('评论内容不能为空');
      this.$http.post('api/postcomment/'+this.id,{content:this.pl.trim()}).then(res=>{
        console.log(res);
        if (res.body.status == 0) {
          Toast(res.body.message);
          var cmt = {
            user_name:'武汉小姐姐',
            add_time:Date.now(),
            content:this.pl.trim()
          }
          this.comments.unshift(cmt);
          this.getcomment();
          this.pl='';
        }else {
          Toast('评论失败')
        }
      })
    }
  },
   props:['id']
}
</script>
<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>


