<template>
  <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==18?'mui-active':'']" data-wid="tab-top-subpage-1.html" v-for="item in topList" :key="item.id" @click="photoList(item.id)">
							{{item.title}}
						</a>

					</div>
				</div>
			</div>
      <ul class="photoList">
        <router-link :to="'/home/photoInfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
          <img v-lazy="item.img_url">
            <div class="info">
              <h1 class="info-title">{{ item.title }}</h1>
              <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
        </router-link>
    </ul>
		</div>
</template>
<script>
import mui from "../../../dist/js/mui.js";

export default {
  data() {
    return {
      pageindex: 1,
      topList: [],
      list: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getCategory();
    this.photoList(18);
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(res => {
        // console.log(res);
        if (res.body.status == 0) {
          res.body.message.unshift({ title: "全部", id: 18 });
          this.topList = res.body.message;
        } else {
          Toast("图片加载失败");
        }
      });
    },
    photoList(cateid) {
      this.$http.get("api/getimages/" + cateid).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.list = res.body.message;
        } else {
          Toast("图片加载失败");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.mui-content {
  background: #fff;
}
.photoList {
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    list-style: none;
    background: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
