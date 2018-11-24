<template>
<div>
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<a :href="'#/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time|dateFormat}}</span>
                <span>点击：{{item.click}}</span>
              </p>
						</div>
					</a>
				</li>
			</ul>
</div>

</template>
<script>
export default {
  data(){
    return{
      newList:[]
    }
  },
  created(){
    this.getNews()
  },
  methods:{
    getNews(){
      this.$http.get('api/getnewslist').then(res=>{
        console.log(res);
        if (res.body.status == 0) {
          this.newList =  res.body.message 
        }else {
          Toast('图片加载失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .mui-ellipsis {
    color: #226aaf;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
</style>
