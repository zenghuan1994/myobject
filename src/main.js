import Vue from 'vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import app from './app.vue'
import '../dist/css/mui.min.css'
import '../dist/css/icons-extra.css'
import VueRouter from 'vue-router'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

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