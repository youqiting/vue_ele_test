// 登录页面
<template>
  <div id="user_login">
    <div class="box"  shadow="hover">
        <div>
            <h3>登录</h3>
        </div>
        <div class="text">
            <el-form :model="form" label-width="50px;" ref='form' :rules="rules">
                <el-form-item label="name:" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="password:" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="验证码:" id="generated" class="display">
                    <el-input v-model="form.generated" type="text" style="width:30%;float: left;"></el-input>
                    <div class="inline generatedCode">{{this.generatedCode}}</div>
                    <div class="inline">
                        <el-button type="text" @click="generated_Code()" round>
                            <small>刷新</small> 
                        </el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button class="register" type="text" @click="register()" round>
                        <small>还没有账号-> </small> 注册
                        <i class="el-icon-circle-plus-outline" ></i>
                    </el-button>
                    <el-button class="login" type='primary' @click="check(form.name, form.password,form.generated)">
                    登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'user_login',
  data(){
      return{
        screenWidth: document.body.clientWidth, // 屏幕尺寸
        label:"user",
        form:{
            name:"",
            password:"",
        },
        rules:{
            name:[{required:true, message:'请输入用户名'}],
            password:[{required:true, message:'请输入密码'}],
        },
        userList:'',
        userName:'',
        generatedCode:'0123',
        loginTime:0
      }
  },
//   创建 如果已经登录过，就直接跳过登录页面
  created: function(){
         var hasLogin = localStorage.getItem('hasLogin')
         if(hasLogin=='1'){
              this.$router.push('/main')
         }
  },
  mounted:function(){
      this.$nextTick(function(){
          this.generated_Code();
      })
  },
  methods:{
      generated_Code:function(){
        const random_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let code ='';
        for(let i=0; i<4; i++){
            let index = Math.floor(Math.random()* random_.length);
            code += random_[index];
        }
        this.generatedCode = code;
        console.log("code:" + code);
      },

      //验证
      check:function(name, password ,generated){
        this.loginTime ++;
        console.log(this.loginTime);
        console.log(document.getElementById('generated').className);
        if(this.loginTime > 2){
            if(this.loginTime == 3){
                document.getElementById('generated').className = document.getElementById('generated').className.replace('display','');
            }
            if(generated == ''){
                this.$message.error('请输入验证码');
            }else if(generated != this.generatedCode){
                this.$message.error('验证码错误'); 
                this.generated_Code();
            }else if(generated == this.generatedCode){
                this.login(name, password);
            }
        }else if( this.loginTime <= 2){
            this.login(name, password);
        }
        
      },

      //登录
      login:function(name, password){
        var params = {
            name: name,
            password: password
        }
        this.$http.post(this.$api.login, params).then(res=>{
            console.log(res.data);
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
      // 跳到注册页面
      register:function(){
        this.$router.push({
            path:'/user_register',
      })
    },
  }
  
}
</script>

<style>
#user_login{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #fff;
    background-image: url("../imgs/user_login.jpg");
    background-repeat: no-repeat;
    background-size: cover;          /* 拉伸 */
    background-position: bottom;
}
.box{
    width: 480px;
    margin: 70px auto;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.39);
    border-radius:10px;
    box-shadow: 5px 5px 5px rgba(5, 247, 255, 0.521);
    text-align: center;
}
.text{
    margin-bottom: 18px;
    font-size: 10px;
    color:rgba(252, 4, 4, 0.575);
}
.inline{
    display: inline-block;
}
.generatedCode{
    width: 27%;
    margin-top: 5px;
    letter-spacing: 10px;
    background: rgba(204, 204, 204, 0.493);
}
.register{
    float: right; 
    margin: 3px 3px; 
    color:black;
}
.login{
    float: right; 
    margin: 3px 3px;
}
.display{
    display: none;
}
</style>