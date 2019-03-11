// 侧边导航栏

<template>
  <div class="aside_">
    <div>
      <router-link :to="'/home'"  class="unline aside_home">首页</router-link>
    </div>
    <!-- 导航菜单 -->
    <el-menu 
      default-active="2"
      class="el-menu-vertical-demo"  >
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>文章</span>
        </template>
        <el-menu-item index="1-1">
          <router-link :to="'/message'" class="unline">我的文章</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link :to="'/message_lock'" class="unline">加锁文章</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-picture"></i>
          <span>图片</span>
        </template>
        <el-menu-item index="2-1" disabled>无</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >
        <template slot="title">
          <i class="el-icon-document"></i>
          <router-link :to="'/news'" class="unline">最近消息</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="4" >
        <template slot="title">
          <i class="el-icon-setting"></i>
          <router-link :to="'/help'" class="unline">帮助</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="5" >
        <template slot="title">
          <i class="el-icon-info"></i>
          <router-link :to="'/about'" class="unline">关于</router-link>
        </template>
      </el-menu-item> 
      <el-menu-item index="6" >
        <template slot="title">
          <i class="el-icon-goods"></i>
          <router-link :to="'/test'" class="unline">样式test</router-link>
        </template>
      </el-menu-item> 
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'aside_',
  props: {},
  data(){
    return{
      
    }
  },
  methods:{
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-aside{
    /* border: 1px solid green;  */
    height: auto;
    margin: 100px 0px 0 20px;
} 
.aside_home{
    color: rgb(63, 207, 243);
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    margin-left:45px; 
}
</style>
