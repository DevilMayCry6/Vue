<template>
    <div name="show">
        <ul>
            <li v-for="goods in list">
                <img v-bind:src="goods.img">
                <p>{{goods:goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"show",
        data(){
            var _this=this;
            this.$http.get("json/bjb.json").then(function(a){
                _this.list=res.data;
            })
            return{
                list:[]
            }
        }
    }
</script>