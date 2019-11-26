<template>
    <div>
        <div v-if="kk==1">
            1
        </div>
        <div v-if="kk==2">
            22
        </div>
    </div>
</template>
<script>
    import Msg from './msg.vue'
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
        }
    }
</script>