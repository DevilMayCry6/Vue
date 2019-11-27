<template>
    <div name="show">
        <ul class="goodList">
            <li v-for="goods in list">
                <img v-bind:src="goods.img">
                <!-- 不能用src -->
                <p>{{goods.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<style>
    .goodList li{
        width: 200px;
        height: 200px;
        list-style: none;
        float: left;
        font-size: 10px;
        color: red;
        margin-bottom: 20px;
    }
    .goodList img{
        width: 180px;
        height: 180px;
    }
</style>
<script>
    export default {
        name:"show",
        data(){
            var obj=this;
            var url="";
             if(obj.kk==1){
                url="json/you.json";
            }else if(obj.kk==2){
                url="json/zuo.json"
            }else{
                url="json/you.json"
            }
            this.$http.get(url).then(function(res){
                obj.list=res.data;
            })
            return{
                list:[]
            }
        },
        props:{
            kk:Number
        },
        watch:{
            kk(){
                var obj=this;
                var url="";
                if(obj.kk==1){
                    url="json/you.json";
                }else if(obj.kk==2){
                    url="json/zuo.json"
                }
                this.$http.get(url).then(function(res){
                    obj.list=res.data;
                })
                return{
                    list:[]
                }
            }
        }//监听
    }
</script>