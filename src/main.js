//入口文件
//console.log('ok');
import Vue from 'vue'
//导入mui样式
import './lib/mui/css/mui.min.css'  
//按需导入mint-ui组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
//导入APP 根组件
import app from './App.vue'
var vm=new Vue({
  el:'#app',
  render:e=>e(app)
})