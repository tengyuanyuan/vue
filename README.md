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
 1.在制作购物车图标的时候 
 2.先把扩展图标的样式 css 拷贝到项目中
 3.拷贝字体库 ttf文件到项目中
 4.为购物车小图标添加如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3.在中间区域放置一个router-view 来展示路由匹配的组件
 1.配置路由 先查看packjson是否配置好 vue-router 在main.js里面导入路由包 并注册
 2.import VueRouter from 'vue-router'
 3.Vue.use(VueRouter)
 ##改造tabbar 为router-link
 +main.js里面导入自己的router.js 并挂载到VM实例上 接下来把nav 底部的tabbar +里的a 改为router-link;href 改为to
 ##设置路由高亮
 1.在router.js linkActiveClass:'mui-active'//覆盖默认的理由高亮的类，默认的类叫做router-link-active
 ##点击tabbar 中的路由链接 展示对应的路由组件
 1.首先创建tabbar下面的四个组件页面
 2.router.js里面导入对应的路由组件 
 3.接着创建路由对象 
 4.最后要在App.vue 中间放入 <router-view></router-view>这个坑去存放每个不同    tabbar切换的内容
 ##制作首页轮播图布局
 ##加载首页轮播数据
 1.获取数据 如何获取 使用vue-resource 没有就npm i vue-resource
 1.1 main.js里面 导入vue-resource 在安装vue-resource
 ##改造新闻资讯的路由跳转
 1.将home页面的新闻资讯板块的a改为router-link href改为to='/home/newslist'实现路由跳转 
 2.编写newslist组件
 3.在router.js里面导入这个newslist组件 并且配置路由
 ##新闻资讯 页面 制作
 1.绘制页面 使用mui的图文列表
 2.使用 vue-resource 获取数据
 3.渲染真实数据
 ##main.js里面写全局时间过滤器
 1.npm i moment -S 借助插件写一个时间格式化的过滤器
 2.在newslist.vue 通过管道 | 引用过滤器 {{item.time | dateFormat}} 里面可以传参 dateFormat('YYYY-MM-DD')
 ##实现 新闻资讯列表 点击跳转到新闻详情
 1.把列表中的每一项改造为 router-link 同时在跳转的时候应该提供唯一的id标识符
 2.创建新闻详情组件页面 NewsInfo.vue
 3.在路由模块中 将新闻详情的路由地址和组件页面对应起来
 ##实现新闻详情页面的布局 和 渲染

 ##单独封装一个 comment.vue 评论子组件
 1.先单独创建一个子组件 comment.vue组件模板
 2.在需要使用comment组件的页面中 导入comment组件
    +'import comment from './comment.vue'' 注意路径
 3.在父组件中 使用 'component '属性将刚才导入的 comment 组件 注册为自己的子   组件
 4.将注册子组件时候的名字 以标签的形式 在页面中引用即可

 ##绘制图片列表 组件页面结构并美化样式
 1.制作顶部的滑动条
 2.制作底部图片列表


