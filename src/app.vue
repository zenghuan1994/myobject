<template>
<div class="container">
   <!-- 固定在顶部header -->
  <mt-header fixed title="我的仿写Vue项目"></mt-header>
	<transition>
	<router-view></router-view>
	</transition>
  <!-- 底部区域 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-zh" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-zh" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-zh" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-zh" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
</div>
</template>
<script>

</script>


<style lang="less" scoped>
  .container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}
	.v-enter {
		transform: translateX(100%);
		opacity: 0;
	}
	.v-leave-to {
		transform: translateX(-100%);
		opacity: 0;
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all .3s ease;
	}
	.mui-bar-tab .mui-tab-item-zh.mui-active {
    color: #007aff;
	}
	  .mui-bar-tab .mui-tab-item-zh {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-zh .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zh .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



