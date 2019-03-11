// 文章页面
<template>
  <div >
    <div class="message_Li">
      <h4>title:{{item.message_title}} &nbsp;&nbsp;&nbsp;&nbsp;<small>{{item.message_time}}</small>  </h4>  
      <h5>content:{{item.message_content}}
        <div class="message_botton">
          <el-button type="text" @click="routerTo(item.id)">详细</el-button>
        </div>
      </h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'messageLi',
  props:['item'],
  methods:{
    routerTo:function(i){
      this.$router.push({
        path:'/message_detail',
        query:{
          pushId: i,
        }
      })
    }
  }
}
</script>

<style>
.message_Li{
  width: 90%;
  padding:0 0  10px 10px;
  border-bottom: 1px solid #ccc;
}
.message_Li h4{
  color: orange;
}
.message_botton{
  text-align: right;
  padding-right: 30px;
}
</style>