// 文章页面
<template>
  <div >
    <div class="message_Li">
      <h3>{{item.message_title}} &nbsp;&nbsp;&nbsp;&nbsp;<small>{{item.message_time}}</small>  </h3>  
      <h5>{{item.message_content}}</h5>
      <div class="message_botton">
        <el-button type="text" @click="routerTo(item.id)">详细</el-button>
        <el-button type="text" @click="deleteItem(item.id)">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'messageLi',
  props:['item'],
  methods:{
    routerTo:function(id){
      this.$router.push({
        path:'/message_detail',
        query:{
          pushId: id,
        }
      })
    },
    deleteItem:function(id){
      var params = {
        id : id
      }
      //弹窗
      this.$confirm('您确定继续删除这条文章吗？', '操作提醒！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post(this.$api.deleteMessage, params).then(res=>{
          console.log(params);
          if(res.data.code ==1){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$router.push('/message');
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>

<style>
.message_Li{
  width: 90%;
  height: 145px;
  padding: 0px 23px 0px 20px;
  border-bottom: 1px solid #ccc;
}
.message_Li h3{
  margin-top: 30px;
  font-family:SimSun;
  color: orange;
}
.message_Li h5{
  margin-top: 35px;
  font-family: FangSong;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.message_botton{
  text-align: right;
  padding:0 30px 10px 0;
}
</style>