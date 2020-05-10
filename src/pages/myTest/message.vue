
<template>
  <div class="message">
    <!-- 上部：展示方式 -->
    <div class="message_header">
      <el-button-group>
        <el-button type="text" @click="getMessages()">
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
    <div class="visit_over">
      —————————————<span></span>已看完<span></span>—————————————
    </div>
  </div>
</template>

<script>
import messageLi from "./messageLi.vue"
import {getMessageList} from "../../config/api.js"

export default {
  name: 'message',
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
    //获取（公开的）文章
    getMessages:function(){
      var params = {
        open : true
      }
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$http.post(this.$api.getMessageList,params).then(res=>{
        loading.close();
        console.log(res.data)
        if(res.data.sta == "00"){
          this.messageList = res.data.result;
        }else{
          this.$message.error('获取文章内容失败');
        }
      }).catch(err=>{
          console.log(err);
          this.$message.error('请求异常');
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
