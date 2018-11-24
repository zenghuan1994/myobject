<template>
   <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'
export default {
  data(){
    return {
      id:this.$route.params.id,
      photoinfo:{},
      slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          },
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
        ]
    }
  },
   created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods:{
     getPhotoInfo() {
       this.$http.get('api/getimageInfo/'+this.id).then(res=>{
         console.log(res);
         if (res.body.status === 0) {
          this.photoinfo = res.body.message[0];
        }
       })
     },
      getThumbs() {
        this.$http.get('api/getthumimages/'+this.id).then(res=>{
          console.log(res);
        })
      }
  },
  components:{
    comment
  } 
}
</script>
<style lang="less">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs{ 
   .my-gallery{
     display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    figure {
      margin: 0 8px;
      padding: 0;
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }
   }
    a img{  
      width: 100%;
      height: 100px;
      display: block;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
