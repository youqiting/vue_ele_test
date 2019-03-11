// publishMessage页面
<template>
  <div id="publishMessage">
    <div>
        <el-form :model="form" label-width="50px;" :rules="rules" ref='form'>
            <el-form-item label="message_title:" prop="message_title">
                <el-input v-model="form.message_title"></el-input>
            </el-form-item>
            <el-form-item label="message_content:" prop="message_content">
                <el-input v-model="form.message_content"></el-input>
            </el-form-item>
            <el-form-item label="lock:">
                <el-switch v-model="form.message_lock"></el-switch>
            </el-form-item>
            <el-form-item >
                <el-button type='primary' @click="pulishMes()">发布文章</el-button>
                <a href="/message" style="margin-left:20px;">退出</a>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import {addUser} from '../config/api.js'

export default {
  name:'publishMessage',
  data(){
      return{
        form:{
            message_title:"",
            message_content:"",
            message_lock:false
        },
        rules:{
            message_title:[{required:true, message:'请输入标题'}],
            message_content:[{required:true, message:'请输入内容'}]
        }
      }
  },
  methods:{
      pulishMes:function(){
          var params ={
              title: this.form.message_title,
              content: this.form.message_content,
              lock: this.form.message_lock,
          }
          this.$http.post(addMessage, params).then((res)=>{
              console.log(params);
              if(res.data.code ==1){
                  this.$message("提交成功");
              }
          })
      }
      
  }
  
}
</script>

<style>

</style>