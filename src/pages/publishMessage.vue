// publishMessage页面
<template>
  <div id="publishMessage">
    <div>
        <el-form :model="form" label-width="50px;" :rules="rules" ref='form'>
            <el-form-item label="message_title:" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="message_content:" prop="content">
                <el-input type="textarea"  :autosize="{ minRows: 2, maxRows: 4}" v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-radio v-model="form.open" label="open">open</el-radio>
                <el-radio v-model="form.open" label="private">private</el-radio>
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

export default {
  name:'publishMessage',
  data(){
      return{
        form:{
            title:"",
            content:"",
            open:"open"
        },
        rules:{
            title:[{required:true, message:'请输入标题'}],
            content:[{required:true, message:'请输入内容'}],
            open:[{required:false, message:'private'}]
        }
      }
  },
  methods:{
      pulishMes:function(){
            var message_open = '';
            if(this.form.open == 'open') {
                message_open= '1';
            }
            else if(this.form.open == 'private') {
                message_open='0';
            }
            var params ={
                title: this.form.title,
                content: this.form.content,
                open: message_open,
            }
            this.$http.post(this.$api.addMessage, params).then((res)=>{
                console.log(params);
                if(res.data.code ==1){
                    this.$message("提交成功");
                    this.$router.go(-1);
                }
            })
      }
      
  }
  
}
</script>

<style>

</style>