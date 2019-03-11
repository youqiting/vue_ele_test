// 帮助页面
<template>
  <div id="help">
    <!-- 搜索框 -->
    <div class="header_select">
      <el-input v-model="input" placeholder="请输入内容" class="input-with-select">
        <el-select v-model="select" placeholder="请选择" slot="prepend">
          <el-option 
            v-for="(item, index) in ins" 
            :key="index" 
            :value="item.id" 
            :label="item.label">
          </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
    </div>

    <ul>
      <li>help_1</li>
      <li>help_2</li>
      <li>help_3</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'help',
  components: {
    
  },
  data(){
    return{

    }
  }
}
</script>

<style>
.header_select{
    margin-top: 20px;
    text-align: left;
    width: 80%;
}
.el-select .el-input{
    width: 130px;
}
</style>
