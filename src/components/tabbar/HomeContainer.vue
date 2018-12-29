<template>
    <div>
        <!--lunbotu-->
        <div></div>
        <mt-swipe :auto="2000">
        <!--在组件中要用key-->
         <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
            <img :src="item.imgUrl" alt="">
        </mt-swipe-item> 
         <!-- <mt-swipe-item>
             <img src="../../assets/banner.jpg" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
             <img src="../../assets/banner.png" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
             <img src="../../assets/banner2.jpg" alt="">
         </mt-swipe-item> -->
       
        </mt-swipe>
    <!--九宫格-->
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../assets/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                     <img src="../../assets/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../assets/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		         
		        </ul> 
		
    </div>
    
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            lunbotuList:[]//保存轮播图的数组
        }
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){//获取轮播图数据的方法
            this.$http.post('/web/goods/getlunbo').then(result=>{
                console.log(result.body);
                //console.log(result.body.data);
                //console.log(result.body.code);//0
                //console.log(typeof(result.body.code));
                if(result.body.code==0){
                    //成功
                    //console.log(222);没有打印出
                    this.lunbotuList=result.body.data;

                }else{
                    //失败
                    Toast('加载轮播图失败');
                }
                
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
</style>


