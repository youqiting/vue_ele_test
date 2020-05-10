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

import Aside from '../components/main/aside.vue'
import Header from '../components/main/header.vue'
import Footer from '../components/main/footer.vue'

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
  mounted() {
    this.$nextTick(
            function () {
              console.log('main.vue')
            }
    )
  },
  methods:{
    collapse:function(){
      this.collapsed = !this.collapsed;
    }
  }
}
</script>

<style>
.footer_{
      position: relative;
    bottom: 0;
}
#app{
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.el-main{
  height: auto;
  margin-bottom: 50px;
}

.unline{
    text-decoration: none;
}
</style>
