// user_register页面
<template>
  <div id="user_register">
    <div>
        <h4>注册</h4>
        <el-form :model="form" label-width="50px;" :rules="rules" ref='form'>
            <el-form-item label="name:" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="password:" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="phone:" prop="phone">
                <el-input v-model="form.phone" maxlength="11">
                    <template slot="prepend">86</template>
                </el-input>
            </el-form-item>
            <el-form-item label="用户类型:">
                <template>
                    <el-radio v-model="form.type" label="user">普通用户</el-radio>
                    <el-radio v-model="form.type" label="admin">管理员</el-radio>
                </template>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click="submit(form.name,form.phone)">提交</el-button>
                <a href="/" style="margin-left:20px;">退出</a>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import {addUser} from '../../config/api.js'
import {selectByName} from '../../config/api.js'

export default {
  name:'user_register',
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
            phone:[{required:true, message:'请输入手机号码'}],
            type:[{required:true, message:'请输入用户类型'}]
        },
        userList:''
      }
  },
  methods:{
      AddUser:function(){
          var params ={
              name: this.form.name,
              password: this.form.password,
              phone: '86'+this.form.phone,
              type:this.form.type,
          }
          console.log(params);
          this.$http.post(addUser, params).then((res)=>{
              console.log(res);
              if(res.data.code ==1){
                  this.$message("注册成功");
                  this.$router.push({
                      name:'home',
                      userName: params.name
                      })

              }
          })
      },
      submit:function(n,p){
        var params = {
            name : n ,
            phone : p
        }
        this.$http.post(selectByName, params).then(res=>{
            console.log(res.data)
            var exist = false;
            this.userList = res.data.result;
            this.userList.forEach((item, index)=>{
                if(item.name == this.form.name)
                {
                    exist = true;
                     this.$message('用户名存在!! 请修改....');
                }
            })
            if(exist == false && this.form.phone.length >10){
                console.log('可增' + this.form.phone.length);
                this.AddUser();
            }else {
                 this.$message('请填写正确的手机号码');
            }
        })
      },

  }

}
</script>

<style>

</style>
