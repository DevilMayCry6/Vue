<template>
    <div>
        <div class="title">标题</div>
        <ul class="menu">
            <li @click="menu1">vue-cli3</li>
            <li @click="menu2">vue</li>
            <li>vue-cli3</li>
            <li>vue</li>
            <li>vue-cli3</li>
            <li>vue</li>
            <li>vue-cli3</li>
            <li>vue</li>
            <li>vue-cli3</li>
            <li>vue</li>
            <li>vue-cli3</li>
            <li>vue</li>
        </ul>
    </div>
</template>
<style>
    .title{
        width: 100px;
        color: red;
    }
    .menu li{
        list-style: none;
        height: 50px;
        margin-bottom:2px;
        background: white;
        line-height: 50px;
        cursor:pointer;
    }
</style>
<script>
    import Msg from './msg.vue'
    export default{
        methods:{
            menu1:function(){
                Msg.$emit("val",'1')
            },
            menu2:function(){
                Msg.$emit('val','2')
            }
        }
    }
</script>