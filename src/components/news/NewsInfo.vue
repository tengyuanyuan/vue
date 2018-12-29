<template>
    <div class="newsinfo_container">
        <!-- <h3>新闻详情页面 {{id}}</h3> -->
        <!--大标题-->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!--子标题-->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!--内容区域-->
        <div class="content" v-html="newsinfo.content">

        </div>
        <!--评论区域-->
        <comment-box></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
//导入评论组件
import comment from '../subcomponents/comment.vue' 
export default {
    data() {
        return {
            id:this.$route.params.id,//将url中传送过来的id值 挂载到data上 方便以后吊调用
            newsinfo:{}//新闻对象
        }
    },  
    created() {
        this.getNewsInfo();
    },  
    methods: {
        getNewsInfo(){
            this.$http.post('/web/goods/getnew',
            {
                newid:this.id
            },
            {
               'headers':{
                   'Content-Type':"application/json;charset=utf-8"
               }
            }).then(result=>{
                if(result.body.code==0){
                    this.newsinfo=result.body.data[0];//新闻在数组的第0项
                }else{
                    Toast("获取新闻详情失败");
                }
            });
        }
    },
    components:{//注册子组件
        'comment-box':comment

    }
}
</script>
<style lang="scss">
    .newsinfo_container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>

