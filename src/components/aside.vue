// 侧边导航栏

<template>
  <div class="aside_">
    <!-- <div>
      <router-link :to="'/main'"  class="unline aside_home">
      首页
      <i class="el-icon-menu"></i>
       <img :src="this.icons.menu"/>
      </router-link>
    </div>-->
    
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
          <router-link :to="'/message_open'" class="unline">隐藏的文章</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >
        <template slot="title">
          <i class="el-icon-search"></i>
          <router-link :to="'/js_test'" class="unline">js练习</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="4" >
        <template slot="title">
          <i class="el-icon-search"></i>
          <router-link :to="'/css3_test'" class="unline">css3练习</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="5" >
        <template slot="title">
          <i class="el-icon-info"></i>
          <router-link :to="'/about'" class="unline">关于</router-link>
        </template>
      </el-menu-item> 
    </el-menu>
  </div>
</template>

<script>
import icons from '../config/icons.json'

export default {
  name: 'aside_',
  props: {},
  data(){
    return{
      icons: icons
    }
  },
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
