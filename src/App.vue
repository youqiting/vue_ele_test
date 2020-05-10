<template>
  <router-view></router-view>
</template>

<script>
export default {
  name:'app',
  mounted:function(){
      const this_ = this;
      window.onreSize =()=>{
          return (()=>{
            //   console.log("document.body.clientWidth:"+document.body.clientWidth+"; window.screenWidth:" +window.screenWidth);ss
              //拖动可以放大缩小视图框
              window.screenWidth = document.body.clientWidth;
              this_.screenWidth = window.screenWidth;
          })()
      },
      this.$nextTick(function(){
        window.onresize;
        console.log('app.vue')
      })
  },
}
</script>


<style>

</style>
