<template>
    <div class="css3_test">
        <div class="wrap" id="wrap">

            <!-- card负责：展示卡片：  位移+旋转 -->
            <div class="card card_front"  
                 v-for="(item, index) in bookList" :key="index" :id="'card_'+index"
                  @click="card_choose(index)" >

                <!-- photo_wrap负责：   平移+ 翻转 -->
                <div class="photo_wrap" >
                    <div class="side side_front">
                        <div class="image"><img :src="item.imgSrc"></div>
                        <div class="caption"><p>{{item.caption}}</p></div>
                    </div>
                    <div class="side side_back">
                        <div class="desc">{{item.desc}}</div>
                    </div>
                </div>
            </div>

            <!-- 导航条 -->
            <div class="nav">
                <span v-for="(item, index) in bookList" :key="index" :id="'nav_'+index" @click="nav_choose(index)">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import "../css/css3_test.css"
import bookList from "../config/bookDate.json"

export default {
    name:'css3_test',
    data(){
        return{
            testBook_photo:require("../imgs/book_霍比特人3.jpg"),
            bookList:bookList,
            book_photo:[
                {src:require("../imgs/book_变形金刚.jpg")},
                {src:require("../imgs/book_四月是你的谎言.jpg")},
                {src:require("../imgs/book_婚纱姑娘.jpg")},
                {src:require("../imgs/book_小猪猪.jpg")},
                {src:require("../imgs/book_栀子花开.jpg")},
                {src:require("../imgs/book_棕色小熊.jpg")},
                {src:require("../imgs/book_濑户小春.jpg")},
                {src:require("../imgs/book_霍比特人3.jpg")},
            ],
            initial_Index:'',
            chooseIndex:''
        }
    },

    created:function(){
        //从data拿图片地址，加入bookList数组中，  
        //  在json中引入图片需要图片的base64（部分图片太大，base64超出容纳范围），这里直接把图片的经过处理后的<图片地址字符串>地址push到data数据的imgSrc
       this.bookList.forEach((item,index) => {
            item.imgSrc= this.book_photo[index].src;
        });
        console.log(this.bookList);
    },

    mounted:function(){
        this.$nextTick(function(){
            this.card();
        })
    },

    methods:{
        //初始化 给一个初始随机index，随意一张 海报居中
        card:function(){
            if(this.initial_Index == ''){
                this.initial_Index = Math.ceil( Math.random()* (this.bookList.length));
                console.log(this.initial_Index);
                this.chooseIndex = this.initial_Index;
            }
            //海报初始化排位
            this.card_renew(this.initial_Index);
        },

        //获取随机数
        random:function( range ){
            var max = Math.max(range[0],range[1]);
            var min = Math.min(range[0],range[1]);

            var diff = max-min;                  //[-1,6]  diff=7
            var number = Math.ceil(Math.random()*diff + min);    //0~1 *7(0~7) + min = -1~6
            return number-1;
        },

        // 卡片可存放 范围
        spaceRandom:function(card_id){
            var range ={ left :{ x:'', y:'' }, right :{ x:'', y:'' } };
            var wrap = { 
                width: document.getElementById('wrap').clientWidth,
                height: document.getElementById('wrap').clientHeight
                };
            var card = { 
                width: document.getElementById(card_id).clientWidth,
                height: document.getElementById(card_id).clientHeight
                }
            range.left.x = [ 0 - card.width/2 , wrap.width/2 - card.width*3/2];
            range.left.y = [ 0 - card.height/2 , wrap.height - card.height/2];

            range.right.x = [ wrap.width/2 + card.width, wrap.width - card.width/2];
            range.right.y = range.left.y; 

            return range;
        },

        // 卡片重新洗牌
        card_renew:function(index_){

            //2. 重新安排样式：  
            //   2.1 数组： <未选中> 卡片Id   
            //   2.2  去掉<上一张>卡片的center样式, <选中的>卡片给center样式，left、top、transform 设置空
            //   2.3 导航条 去掉<未选中> nav 的 choose 样式， <选中的>给 nav_choose 样式
            var card_otherId =[];
            this.bookList.forEach((item,index)=>{
                if( index_ != index){
                    //未选中的
                    card_otherId.push(index);
                    document.getElementById('card_'+index).className = document.getElementById('card_'+index).className.replace(/\s*card_center\s*/g,'');
                    document.getElementById('nav_'+index).className = document.getElementById('nav_'+index).className.replace(/\s*nav_choose\s*/g,'');
                }else{
                    //选中的
                    document.getElementById('card_'+index_).className = document.getElementById('card_'+index_).className.trim().replace('',' card_center ');
                    document.getElementById('card_'+index_).style.left = '';
                    document.getElementById('card_'+index_).style.top = '';
                    document.getElementById('card_'+index_).style['transform'] = '';
                    document.getElementById('nav_'+index_).className = document.getElementById('nav_'+index_).className.replace('',' nav_choose ');
                }
            })

            // 1. 海报数组分成未选中的 index 数组分成：左/右数组
            var card_left = card_otherId.splice( 0, Math.ceil(this.bookList.length/2));
            var card_right = card_otherId;
            var space_random = this.spaceRandom('card_'+ this.initial_Index);             //位置范围
            for(var s in card_left){
                //左边卡片随机位置值
                var card_leftID = document.getElementById('card_' + card_left[s]);
                card_leftID.style.left = this.random(space_random.left.x) + 'px';
                card_leftID.style.top = this.random(space_random.left.y) + 'px';
                card_leftID.style['transform'] = 'rotate(' + this.random([-90,90]) + 'deg) scale(1)';
            }
            for(var s in card_right){
                //右边卡片随机位置值
            }
        },

        // 选中的卡片
        card_choose:function(index){
            var card_index = document.getElementById('card_'+index);
            var card_chooseIndex = document.getElementById('card_'+this.chooseIndex);
            var nav_index = document.getElementById('nav_'+index);
            var nav_chooseIndex = document.getElementById('nav_'+this.chooseIndex);
            if(this.chooseIndex == index){
                //正反面切换、翻转
                if( card_index.className.indexOf('card_back') <0){
                    card_index.className = card_index.className.replace(/\s*card_front\s*/,' card_back ');   
                    nav_index.className = nav_index.className.replace('',' nav_back'); 
                }else if(card_index.className.indexOf('card_front') <0){
                    card_index.className = card_index.className.replace(/\s*card_back\s*/,' card_front ');
                    nav_index.className = nav_index.className.replace(' nav_back','');
                }
            }
            //  当卡片点击index改变时， (index是当前选中的卡片index,this.chooseIndex值是上一张卡片的index)
            else if( this.chooseIndex != index){
                // 还原：  1、原 back 面的卡片为 front     
                card_chooseIndex.className = card_chooseIndex.className.replace(/\s*card_back\s*/,' card_front ');
                
                // 2、 切换卡片时，重新给 <未选中>卡片 排位(旋转角度和位移)
                this.card_renew(index);
            }
            this.chooseIndex = index;
        },

        // nav 选中的圆点
        nav_choose:function(index){
            var nav_index = document.getElementById('nav_'+index);
            var nav_chooseIndex = document.getElementById('nav_'+this.chooseIndex);
            if(this.chooseIndex == index ){
                if(nav_index.className.indexOf('nav_back') < 0 ){
                    nav_index.className = nav_index.className.replace('',' nav_back');
                }
                else if(nav_index.className.indexOf('nav_back') > -1){
                    nav_index.className = nav_index.className.replace(' nav_back','');
                }
                // 同时选择卡片
                this.card_choose(index);
            } 
            if(this.chooseIndex != index ){
                //重新排位
                this.card_renew(index);
            }
            this.chooseIndex = index ;
        }
    }
}
</script>


<style>

</style>
