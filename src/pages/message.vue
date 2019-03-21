
<template>
  <div class="message">
    <div class="addMessage"> 
      <router-link to="/publishMessage"  class="unline">发布文章</router-link> 
    </div>
    <div v-for="(item, index) in messageList" :key="index">
      <messageLi v-bind:item="item" />
    </div>
    <div class="visit_over">
      —————————————<span></span>已看完<span></span>—————————————
    </div>    
  </div>
</template>

<script>
import messageLi from "../pages/messageLi.vue"
import {getMessageList} from "../config/api.js" 

export default {
  name: 'message',
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
        key :false
      }
      this.$http.post(getMessageList,params).then((res)=>{
        this.messageList = res.data.result;

      })
    }
  }
}
</script>

<style>
.addMessage{
  text-align: right;
  margin-right: 100px;
  padding-bottom: 10px;
  font-size: 14px;
}
.addMessage a{
  color: rgb(245, 84, 9);
}

.message .visit_over{
  margin-top: 25px;
  text-align: center;
  color: #a9a1a1;
}
.message .visit_over span{
  display: block;
  padding:30px;
}
</style>
