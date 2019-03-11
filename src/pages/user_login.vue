// 登录页面
<template>
  <div id="publishMessage">
    <el-card class="box-card">
        <div slot="header">
            登录
        </div>
        <div class="text">
            <el-form :model="form" label-width="50px;" ref='form' :rules="rules">
                <el-form-item label="name:" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="password:" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="float: right; margin: 3px 3px" type='primary' @click="login(form.name, form.password)">
                    登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
  </div>
</template>

<script>
import {selectByName} from '../config/api.js'

export default {
  name:'publishMessage',
  data(){
      return{
        label:"user",
        form:{
            name:"",
            password:"",
            phone:"",
            type:"user"
        },
        rules:{
            name:[{required:true, message:'请输入用户名'}],
            password:[{required:true, message:'请输入密码'}],
        },
        userList:''
      }
  },
  methods:{
      login:function(n,p){
        var params = {
            name : n,
            password: p
        }
        this.$http.post(selectByName, params).then(res=>{
            console.log(res.data)
            this.userList = res.data.result;
            this.userList.forEach((item, index)=>{
                if(item.password == this.form.password)
                {
                    this.$message('登录成功');
                }
            })
            if(this.userList== ''){
                this.$message('登录失败');
            }
        })
      },
      
  }
  
}
</script>

<style>
.box-card {
    width: 480px;
    margin: 33px 50px;
}
.box-card div{
    text-align: center;
    font-size: 20px;
    color:rgba(59, 71, 241, 0.349);
}
.text {
    font-size: 14px;
    margin-bottom: 18px;
}


</style>