import Vue from 'vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import app from './app.vue'
import '../dist/css/mui.min.css'
Vue.component(Header.name, Header);
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

    });