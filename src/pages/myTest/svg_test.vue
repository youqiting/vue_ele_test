<template>
    <div>
        <!-- 鼠标悬浮时 动画 -->
        <div class="">
            <div>
                <h3>矩形块 hover填满动画</h3>
            </div>
            <div class="juxing_wrap" >
                <div class="juxing_box"
                     @mousemove="selectStyle(i)"  @mouseleave="outStyle()"
                    :class="{'juxing_active': i==juxing_active,'juxing_noactive': i!=juxing_active}"
                    v-for="(item,i) in juxing_c" :key="i">
                    <div class="compangPic">
                        <div :class="{'imgchoose': i==juxing_active,'compangPic_img': i!=juxing_active}"><img :src="item.img" ></div>
                    </div>
                    <div class="companyName">
                        {{item.companyName}} &nbsp;&nbsp;  {{i}} {{i}}
                    </div>
                    <div :class="{'companyDesc':i==juxing_active}" v-if="i==juxing_active">
                        {{item.desc}} &nbsp;&nbsp;  {{i}} {{i}}
                    </div>
                </div>
            </div>
        </div>


        <!-- 动画 圆形描边 -->

    </div>

</template>

<script>
import "../../css/svg_test.css"
export default {
    data(){
        return{
            juxing_active: -1,
             juxing_c:[
                 {id:1,img:require("../../imgs/icon_work/i_1.png"),companyName:"公司",desc:"智能产品:  "},
                 {id:2,img:require("../../imgs/icon_work/i_2.png"),companyName:"公司",desc:"智能产品:  "},
                 {id:3,img:require("../../imgs/icon_work/i_3.png"),companyName:"公司",desc:"智能产品:  "},
                 {id:4,img:require("../../imgs/icon_work/i_4.png"),companyName:"公司",desc:"智能产品:  "},
                 {id:5,img:require("../../imgs/icon_work/i_5.png"),companyName:"公司",desc:"智能产品:  "},
             ]
        }
    },
    methods:{
        selectStyle(i){
            if(i != this.juxing_active){
                this.juxing_active = i;
                // console.log("selectStyle")
            }
        },
        outStyle(){
            // console.log("outStyle")
            this.juxing_active = -1;
        },
    }
}
</script>


<style lang="stylus" scoped>


</style>
