<template>
    <div>
        <div v-if="kk==1">
            <GoodList :goodId="1"></GoodList>
        </div>
        <div v-else-if="kk==2">
            <GoodList :goodId="2"></GoodList>
            22
        </div>
        <div v-else>
            <Good-list :goodId="1"></Good-list>
        </div>
    </div>
</template>
<script>
    import Msg from './msg.vue'
    import GoodList from './goodsList.vue'
    export default{
        data(){
            return{
                kk:0
            }
        },
        mounted:function(){
            var _this=this
            Msg.$on('val',function(m){
                _this.kk=m;
            })
        },
        components:{
            GoodList
        }
    }
</script>