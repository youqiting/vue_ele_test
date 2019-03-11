
<template>
  <div>
    <div class="show_detail" v-bind:class="{hide:display}">
      <div v-for="(item,index) in messageList" :key="index">
        <!-- id: {{detailId}} -->
        <h4>{{item.message_title}}</h4>
        <h5 v-html="item.message_content"></h5>
        <div class="message_edits">
          <el-button type="text" @click="display=!display">编辑</el-button>
          <el-button type="text" @click="delete_()">删除</el-button>
        </div>
      </div>
    </div>
    <div class="edit_detail" v-bind:class="{hide:!display}" >
      <el-form ref="item" :model="detailForm" label-width="50px"
        v-for="(item,index) in messageList" :key="index"
        label-position="top">
        <el-form-item label="标题：">
          <el-input v-model="item.message_title" clearable></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <el-input v-model="item.message_content" clearable></el-input>
        </el-form-item>
        <el-form-item label="是否上锁：">
          <el-switch v-model="item.message_lock"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postEdit(item)" icon="el-icon-edit">完成</el-button>
          <el-button type="primary" @click="display=!display" icon="el-icon-close">取消</el-button>
          <el-button type="primary" @click="delete_()">删除</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getMessageListById} from '../config/api.js'
import {updateMessage} from '../config/api.js' 
import {deleteMessage} from '../config/api.js'

export default {
  name:'detail',
  data(){
    return{
      messageList:[],
      detailId: this.$route.query.pushId,
      detailForm:{
        title:'',
        content:'',
        lock:false
      },
      display:false
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.getMessageById();
      
    })
  },
  methods:{
    deletewarning:function(){
      
    },
    //从id取得文章
    getMessageById:function(){
      var parmas = {
        id: this.detailId
      }
      this.$http.post(getMessageListById,parmas).then((res)=>{
        this.messageList = res.data.result;
        this.messageList.forEach((item, index)=>{
           item.message_content = item.message_content.replace( /,/g,",<br/>").replace(/，/g,"<br/>");
           if(item.message_lock==1) item.message_lock=true;
           else if(item.message_lock==0) item.message_lock=false;
           return item;
        })     
      })
    },

    //提交修改，弹窗‘修改成功’
    postEdit:function(i){
      var item_ = i;
      var lock_ ='';
      if(item_.message_lock){
       lock_ = 1;
       }
      else {
        lock_ = 0;
        }
      var params = {
        id: this.detailId,
        title:item_.message_title,
        content:item_.message_content,
        lock:lock_
      }
      console.log(params);
      this.$http.post(updateMessage, params).then(res=>{
        if(res.data.code ==1){
            this.$message("修改成功");
        }
      })
    },

    //删除文章
    delete_:function(){
      var params = {
        id : this.detailId
      }
      //弹窗
      this.$confirm('您确定继续删除这条文章吗？', '操作提醒！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post(deleteMessage, params).then(res=>{
          console.log(params);
          if(res.data.code ==1){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    
  }
  
}
</script>

<style>
.show_detail h4{
    color: rgb(0, 81, 255);
}
.show_detail h5{
    color: rgba(0, 81, 255, 0.555);
}
.message_edits{
  margin:20px 100px 0 0;
  text-align: right;
  border-bottom: 1px solid #ddd;
}
.edit_detail {
  margin-top: 10px;
}
.hide{
  display: none;
}
</style>
