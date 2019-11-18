<template>
    <div>
        <div v-if="kk==1">
            <GoodList></GoodList>
        </div>
        <div v-if="kk==2">
2
        </div>
    </div>
</template>
<script>
    import Msg from './msg.vue'
    import GoodList from './goodList.vue'
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