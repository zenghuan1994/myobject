import Vue from 'vue'
// import { Header, Swipe, SwipeItem, button, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import app from './app.vue'
import '../dist/css/mui.min.css'
import '../dist/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import mintUI from "mint-ui";
import "mint-ui/lib/style.min.css";
Vue.use(mintUI);
// 导入vue-resource
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
Vue.http.options.emulateJSON =true;

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(button.name, button);

import moment from 'moment'
Vue.filter('dateFormat',function (datestr,pa="YYYY-MM-DD HH:mm:ss") {
  return moment(datestr).format(pa);
})

// 导入路由模块
import router from './router.js'

  // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: "#app",
      data: {
      },
      methods: {    
      },
      // 注册私有组件
      render:c=>c(app), 
      components: {
      },
      router,

    });