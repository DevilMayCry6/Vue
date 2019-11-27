<template>
    <div>
        <div v-if="kk==1">
            <GoodList kk="1"></GoodList>
        </div>
        <div v-else-if="kk==2">
            <GoodList kk="2"></GoodList>
        </div>
        <div v-else-if="kk==3">
            3333
        </div>
        <div v-else-if="kk==4">
            444
        </div>
        <div v-else>
            <GoodList kk="0"></GoodList>
        </div>
    </div>
</template>
<script>
    import Msg from './msg.vue'
    import GoodList from './goodsList.vue'

    export default {
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