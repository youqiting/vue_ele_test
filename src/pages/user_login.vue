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
                <!-- <input type="file" name="img" multiple> //选上传图片 -->
                <el-form-item>
                    <el-button style="float: right; margin: 3px 3px" type="text" @click="register()" round>
                        <small>还没有账号-> </small> 注册
                        <i class="el-icon-circle-plus-outline" ></i>
                    </el-button>
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
        userList:'',
        userName:'',
      }
  },
  created: function(){
         var hasLogin = localStorage.getItem('hasLogin')
         if(hasLogin=='1'){
              this.$router.push('/main')
         }
  },
  methods:{
      login:function(name, password){
        var params = {
            name: name,
            password: password
        }
        this.$http.post(this.$api.login, params).then(res=>{
            console.log(res.data)
            var result = res.data;
            if(result.code == 1){
                if(result.data == 'success'){
                    localStorage.setItem('username', name)
                    localStorage.setItem('hasLogin', '1')
                    this.$router.push('/main')
                }else{
                   this.$message.error('密码错误');
                   this.form = {
                        name:"",
                        password:"",
                        phone:"",
                        type:"user"
                    }; 
                }
            }
        }).catch(err=>{
             this.$message.error('密码错误');  
        })
      },
      register:function(){
      this.$router.push({
        path:'/user_register',
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