<template>
  <div class="header_">
    <div class="icon_">
      <el-button type="text">
        {{name}}
      </el-button>
      <el-button type="primary" size="mini" @click="quit() ">
        退出
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header_',
  props: {
    
  },
  data(){
    return{
      name:'',
      hasLogin:localStorage.getItem('hasLogin')
    }
  },
   mounted:function(){
    this.$nextTick(function(){
      this.getUserName();
    })
  },
  methods:{
    getUserName:function(){
      this.name = localStorage.getItem('username');
      console.log(this.name)
    },
    // 登录
    login:function(){
      this.$router.push('/user_login');
    },
    //退出
    quit:function(){
      localStorage.removeItem('username'); 
      localStorage.removeItem('hasLogin');
      this.$router.push('/user_login');
    }
    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-header{
    padding:10px 10px;
    margin: 10px 20px 10px 10px;
    text-align: right;
    /* border: 1px solid orange;  */
}
.icon_ > .el-button-group{
    margin-left: 20px; 
}
</style>
