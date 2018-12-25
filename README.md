# 这是一个牛逼的项目
##用心感受
##汤圆傻逼
##用传统方式把修改后的代码上传到github???
1.git add .
2.git commit -m "提交信息"
3.git push
##z制作首页App组件
1.完成 Header 区域 使用的是Mint-ui 中的Header组件
2.制作底部 tabbar 区域 使用的是Mui 的 tabbar.html
 +在制作购物车图标的时候 
 +先把扩展图标的样式 css 拷贝到项目中
 +拷贝字体库 ttf文件到项目中
 +为购物车小图标添加如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3.在中间区域放置一个router-view 来展示路由匹配的组件
 +配置路由 先查看packjson是否配置好 vue-router 在main.js里面导入路由包 并注册
 +import VueRouter from 'vue-router'
 +Vue.use(VueRouter)
 ##改造tabbar 为router-link
 +main.js里面导入自己的router.js 并挂载到VM实例上 接下来把nav 底部的tabbar +里的a 改为router-link;href 改为to
 ##设置路由高亮
 +在router.js linkActiveClass:'mui-active'//覆盖默认的理由高亮的类，默认的类叫做router-link-active
 ##点击tabbar 中的路由链接 展示对应的路由组件
 +首先创建tabbar下面的四个组件页面
 +router.js里面导入对应的路由组件 
 +接着创建路由对象 
 +最后要在App.vue 中间放入 <router-view></router-view>这个坑去存放每个不同    tabbar切换的内容
 ##制作首页轮播图布局
 ##加载首页轮播数据
 1.获取数据 如何获取 使用vue-resource 没有就npm i vue-resource
 1.1 main.js里面 导入vue-resource 在安装vue-resource

