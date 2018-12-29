<template>
    <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id" class="">
						<img class="mui-media-object mui-pull-left" :src='item.img_url'>
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:{{item.add_time | dateFormat}}</span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo" class="">
						<img class="mui-media-object mui-pull-left" src="../../assets/menu1.png">
						<div class="mui-media-body">
                            <h1>木屋</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:2012-12-12 12:12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../assets/menu1.png">
						<div class="mui-media-body">
                            <h1>CBD</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:2012-12-12 12:12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../assets/menu1.png">
						<div class="mui-media-body">
                            <h1>CBD</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:2012-12-12 12:12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</router-link>
				</li> -->
			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newslist:[]//新闻列表
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            this.$http.post('/web/goods/getnewslist').then(result=>{
                console.log(result.body);
                console.log(result.body.code);
                if(result.body.code==0){
                    this.newslist=result.body.data;
                }else{
                    Toast('新闻列表获取失败');
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
            font-size: 14px;
         }
         .mui-ellipsis{
             font-size: 12px;
             color: #226aff;
             display: flex;
             justify-content: space-between;
         }
    }
}
</style>


