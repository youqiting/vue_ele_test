<template>
  <div id="main">
    <el-container>
      <!-- 侧边：导航 -->
      <el-aside width="200px">
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-outdent" v-show="!collapsed" title="收起"></i>
          <i class="iconfont icon-outdent" v-show="collapsed" title="展开"></i>
        </div>
        <Aside />
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <Header />
        </el-header>

        <!-- 内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>

        <!-- 底部 -->
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>  
    </el-container>
  </div>
</template>

<script>

import Aside from '../components/aside.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Aside,
    Footer
  },
  data(){
    return{
      collapsed:false
    }
  },
  methods:{
    collapse:function(){
      this.collapsed = !this.collapsed;
    }
  }
}
</script>

<style>
#app{
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.el-main{
  height: 500px;
  margin-bottom: 50px;
}

.unline{
    text-decoration: none;
}
</style>
