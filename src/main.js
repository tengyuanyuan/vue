//入口文件
//console.log('ok');
import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//2.1导入Vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
//导入mui样式
import './lib/mui/css/mui.min.css'  
//按需导入mint-ui组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//1.3导入自己的router.js路由模块
import router from './router.js';

//导入APP 根组件
import app from './App.vue'
var vm=new Vue({
  el:'#app',
  render:e=>e(app),
  router //1.4挂载路由对象到VM实例上
})