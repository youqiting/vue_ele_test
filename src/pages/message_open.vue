
<template>
  <div>
    <div v-for="(item, index) in messageList" :key="index">
      <messageLi v-bind:item="item" />
    </div>
    <div class="visit_over">已看完</div>    
  </div>
</template>

<script>
import messageLi from "../pages/messageLi.vue"
import {getMessageList} from "../config/api.js" 

export default {
  name: 'message_lock',
  components: {
    messageLi
  },
  data(){
    return{
      messageList:[]
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.getMessages();
    })
  },
  methods:{
    //获取（未锁的）文章
    getMessages:function(){
      var params = {
        key: true
      }
      this.$http.post(getMessageList,params).then((res)=>{
        this.messageList = res.data.result;

      })
    }
  }
}
</script>

<style>
.visit_over{
  margin-top: 25px;
  text-align: center;
  color: #ddd;
}
</style>
