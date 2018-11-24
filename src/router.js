import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodList from './components/goods/goodList.vue'
import goodInfo from './components/goods/goodInfo.vue'
var router = new VueRouter({
  routes:[
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member},
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/newsList', component: newsList },
    { path: '/home/newsInfo/:id', component: newsInfo},
    { path: '/home/photoList', component: photoList },
    { path: '/home/photoInfo/:id', component: photoInfo },
    { path: '/home/goodList', component: goodList },
    { path: '/home/goodInfo/:id', component: goodInfo, name: 'goodInfo'},
  ],
  linkActiveClass:'mui-active'
})
export default router
