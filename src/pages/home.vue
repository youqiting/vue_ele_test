// 主页展示
<template>
  <div id="home">

    <!-- 我的消息 -->
    <div class="home_news">
      <el-button type="text" icon="el-icon-caret-right">
        <router-link :to="'/news'"  class="unline">消息</router-link>
      </el-button>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      input1:'',
      textarea:''
    }
  }
}
</script>

<style>
.home_news{
    margin-top: 20px;
}
.home_news i{
    margin-right: 5px;
}
</style>
