// 说说页面
<template>
  <div id="test">
    <div class="test_img">
        <el-carousel height="300px">
            <el-carousel-item v-for=" (item,index) in imgs" :key="index">
                <img :src="item.imgUrl" />
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data(){
      return{
          imgs:[
            {imgUrl:require('../../static/img/1_1.jpg')},
            {imgUrl:require('../../static/img/1_2.jpg')},
            {imgUrl:require('../../static/img/1_3.jpg')},
            {imgUrl:require('../../static/img/1_4.jpg')},
          ]
      }
  }
}
</script>

<style>

</style>
