<template>
  <div class="footer_">
    <div class="my_mag">
      <div>
        <el-button type="text" icon="el-icon-message">
          my e-mail:601195318@qq.com
        </el-button>
      </div>
      <div>
        <el-button type="text" icon="el-icon-phone">
          my tel-phone:15016155619
        </el-button>
      </div>
      <div>
        <el-button type="text" icon="el-icon-location">
          广东
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footer_',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.my_mag  > div{
    margin-left: 20px;
    display: inline;
}
</style>
