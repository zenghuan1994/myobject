<template>
  <div class="mui-numbox" data-numbox-step='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input class="mui-input-numbox" type="number" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from '../../../dist/js/mui.min.js'
export default {
  mounted(){
    mui('.mui-numbox').numbox()
  }
}
</script>
<style lang="less" scoped>

</style>

