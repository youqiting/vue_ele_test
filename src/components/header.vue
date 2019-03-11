<template>
  <div class="header_">
    <!-- 右边小图标 -->
    <div class="icon_">
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit" size="mini" @click="login()" round>
          登录
        </el-button>
        <el-button type="primary" size="mini" @click="register()" round>
          注册
          <i class="el-icon-circle-plus-outline" ></i>
        </el-button>
      </el-button-group>
      <el-button-group >
        <el-button type="primary"  size="mini" round>
          <i class="el-icon-view" ></i>
        </el-button>
        <el-button type="primary"  size="mini" round>
          <i class="el-icon-more" ></i>
        </el-button>
        <el-button type="primary"  size="mini" round>
          <i class="el-icon-share" ></i>
        </el-button>
      </el-button-group>
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

    }
  },
  methods:{
    register:function(){
      this.$router.push({
        path:'/user_register',
      })
    },
    login:function(){
      this.$router.push({
        path:'/user_login',
      })
    }
  }
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
