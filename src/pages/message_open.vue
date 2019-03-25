
<template>
  <div>
    <!-- 上部分：展示方式 -->
    <div class="message_header"> 
      <el-button-group>
        <el-button type="text"  @click="getMessages()">
          默认展示
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <el-select v-model="value" placeholder="按时间展示" @change="sortByTime()" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-button-group>
      <div class="addMessage">
        <router-link to="/publishMessage"  class="unline">发布文章</router-link> 
      </div>
    </div>
    <!-- 中部：遍历文章 -->
    <div v-for="(item, index) in messageList" :key="index">
      <messageLi v-bind:item="item" />
    </div>
    <!-- 尾部 -->
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
      messageList:[],
      options:[{
        value:'asc',
        label:'时间升序'
      },{
        value:'desc',
        label:'时间降序'
      }],
      value: ''
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.getMessages();
    })
  },
  methods:{
    //获取（不公开）文章
    getMessages:function(){
      this.value ='';
      var params = {
        open: false
      }
      this.$http.post(getMessageList,params).then((res)=>{
        this.messageList = res.data.result;

      })
    },
    //时间排序
    sortByTime:function(){
      console.log('sortByTime,value:' + this.value);
      var params = {
        open : true,
        sort : this.value
      }
      this.$http.post(this.$api.MessageSort,params).then(res=>{
        console.log(res.data);
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
