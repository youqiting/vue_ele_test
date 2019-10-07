// 帮助页面
<template>
  <div id="js_test">
    <!-- 关键字搜索框 -->
    <div class="searchbox">
        <el-autocomplete
              v-model="accountSearch"
              :fetch-suggestions="accounQuerySearchAsync"
              @select="accountHandleSelect"
              @blur="accountBlur"
              :debounce=10
              prefix-icon="el-icon-search"
              placeholder="请输入搜索内容">
        </el-autocomplete>
        <!-- <el-button type="primary"
            @click="accountFind"
            style="margin-left:10px;"
            size="small">
          搜索
          <i class="el-icon-search"></i>
        </el-button> -->
    </div>
    
    <!--输入框:字符串、数组转换 -->
    <div>
      <div>字符串转换成数组</div>
      <el-input v-model="input2" placeholder="请输入关键字，用逗号隔开">
        <el-button slot="append" icon="el-icon-check" @click="convertToString()">提交</el-button>
      </el-input>
    </div>
    <div class="content">
      &nbsp;&nbsp;
      <div v-for="(item, index) in testArr" :key="index">
        {{item}}
        <span v-if="index < testArr.length-1">,&nbsp;&nbsp;</span>
      </div>
    </div>
    
     <!--test 字符串去重 -->
    <div>
      <div>字符串去重</div>
      <el-input type="textarea" v-model="input3" placeholder="请输入多个字符串，用回车隔开" rows="2">
      </el-input>  
      <el-button  icon="el-icon-check" @click="removeDuplication()">
        提交
      </el-button>
    </div>
    <div class="content">
      &nbsp;&nbsp;
      <div v-for="(item, index) in uniqueArr" :key="index">
        {{item}}
        <span v-if="index < uniqueArr.length-1">,&nbsp;&nbsp;</span>
      </div>
    </div>

    <!-- 计算字符串各字符出现的次数 -->
    <div>
      <div>计算字符串各字符出现的次数</div>
      <el-input v-model="input4" placeholder="请输入内容">
        <el-button slot="append" icon="el-icon-check" @click="countInString()">提交</el-button>
      </el-input>
    </div>
    <div id="content_countInString">
    </div>

    <!-- js原生提交 -->
    <div>
      <form id="form" action="/js_test" enctype="multipart/form-data">
        name:<input type="text" name="userName" placeholder="name" required/><br>
        password:<input type="password" name="userpassword" placeholder="password"/><br>
        favcolor:<input type="color" name="favcolor"><br>
        datetime_local:<input type="datetime-local" name="datetime_local"><br>
        <!-- E-mail: <input type="email" name="email"><br> -->
        <p>
          图片：
          <input type="file" name="picture">
        </p>
        <input type="submit" value="Submit" onclick="getForm();">
      </form>
    </div>

    <!-- 字符串、数组转换 -->
    <div>
      <el-button @click="stringArr_change()">字符串、数组转换 测试</el-button>
    </div>

    <!-- 煎蛋动画模拟 -->
    <div class="pan">
      <div>
          <el-button type="text" @click="turnEgg_pic()">换图</el-button>
          <div @click="turnEgg_pic()">
              <img :src="this.egg_pictures[this.pic_index].egg_pic" alt="egg">
          </div>
      </div>
      <div>
          <el-button type="text" @click="turnEgg_flash()">翻_</el-button>
          <div @click="turnEgg_flash()" id="egg_flash" >
              <img :src="this.eggFlash_pictures[0].egg_pic" alt="egg">
          </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'js_test',
  data(){
    return{
      accountSearch: '',
      input2: '',
      input3: '',
      input4: '',
      testArr: [],
      uniqueArr: [],
      countArr: [],
      pic_index : 0,
      egg_pictures:[
          {egg_pic:require("../imgs/egg_1.png")},
          {egg_pic:require("../imgs/egg_2.png")}
      ],
      eggFlash_pictures:[
          {egg_pic:require("../imgs/egg_1.png")},
          {egg_pic:require("../imgs/egg_2.png")}
      ],
    }
  },
  methods:{
      //queryString 为在框中输入的值    callback 回调函数,将处理好的数据推回
    accounQuerySearchAsync(queryString, callback) {
        let list = [{}];
        let param = {
          pageNum: 1,
          pageSize: 9999,
          key: queryString
        }      
        let data = ["Alabama","Alaska","Arizona","QQa","电饭锅的a广泛地","43543我a们是蛋糕",,
                    "wthdfbfgjtaytyut","是的sdfdfgdgdfgerauaiol","宿舍a的发v","哦们是对方a水电费                    是","脂肪s酸该公司","是的个人特a色的若干",];     
        //      let data = this.getAccountUserInfo(param,0);
        data.forEach(function(item,i){
          if(item.indexOf(queryString) != -1){
                list.push({"value":item});   
          }      
        })
        if(!queryString){
          list = list.splice(0,7);
        }
        callback(list);
    },
      // 模糊查询下拉框 鼠标键盘选中点击触发
    accountHandleSelect(item) { 
        this.accountSearch = item.value;
        console.log(item);
        // this.getAccountUserInfo(param,1);
    }, 
    accountBlur(e) { 
        // this.accountSearch = item.value;
        console.log(e);
        // this.getAccountUserInfo(param,1);
    },    
    accountFind: function(){
        if(!this.accountSearch){
            this.$message({ type: 'warning', message: "请输入要查询的内容！"});
            return;
        }
          let param = {
              pageNum: 1,
              pageSize: this.accountPagesize,
              key: this.accountSearch
          }          
      },
      getAccountUserInfo: function(param,status){
          findUsersAndDepartment(param).then((data) => {
              if(data.ret.succeed){
                  if(status == 0){             // 模糊查询
                      return data;
                  }else if(status == 1) {       // 获得表格数据
                      this.$message({
                            type: 'info',
                            message: data.ret.retMsg
                        });
                            this.accountList = data.page.list;
                  }
              }      
          })
  
    },

    //字符串转换成数组
    convertToString:function(){
      var stringArr = [];
      var inputString = "";
      inputString = this.handleString(this.input2);
      stringArr = inputString.split(",");
      this.testArr = stringArr;
      console.log(this.testArr);
    },

    //处理字符串的头尾逗号、空格
    handleString:function(string){
      var newString = "";
      newString = string.trim().replace(/，/g, ",");
      if(newString[newString.length-1]==","){
        newString = newString.substring(0,newString.length-1);
      }
      if(newString[0]=="," || newString[0]=="，"){
        newString = newString.substring(1,newString.length);
      }
      return newString;
    },

    // 字符串去重
    removeDuplication:function(){
      var content = [];
      content = this.input3.trim().split("\n");
      for(var i=0;i<content.length;i++){
        var str = content[i];
        if(this.uniqueArr.indexOf(str) <0 ){
          this.uniqueArr.push(str);
        }
      }
      console.log(this.uniqueArr);
    },

    // 字符串每个的数量，数量最多的字符
    countInString:function(){
      var strArr = {};
      var str = this.input4;
      for(var i= 0; i<str.length; i++){
        if(!strArr[str.charAt(i)]){
          strArr[str.charAt(i)] =1;
        }else{
          strArr[str.charAt(i)] ++;
        }
      }
      console.log(strArr);
      var maxNumStr = '';
      var maxNum = 0;
      document.getElementById("content_countInString").innerHTML = "<strong>您输入的是:" + this.input4 +"</strong></br>";
      for(var j in strArr){
        document.getElementById("content_countInString").innerHTML += j + "&nbsp;出现了&nbsp;" +strArr[j] +"&nbsp;次&nbsp;, &nbsp;&nbsp;&nbsp;";
        if(strArr[j]>maxNum){
          maxNum = strArr[j];
          maxNumStr = j;
        }
      }
      document.getElementById("content_countInString").innerHTML += "</br><strong>其中，"+ maxNumStr + "出现最多，出现了" +maxNum +"次&nbsp; </strong>";
    },
    //原生js 获取input参数和值
    getForm:function(){
      alert("getForm function");
      var userName_ = document.getElementById("userName").value;
      alert(userName_);
    },
    
    //字符串、数组转换 
    stringArr_change:function(){
      var book = {
        title: "music",
        authors: ["deniro_1","deniro_2","deniro_3"],
        edition: 1,
        year: 2017
      };
      var jsonText = JSON.stringify(book);
      console.log(jsonText);
      var bookCopy = JSON.parse(jsonText);
      console.log(bookCopy);
    },

    // 鸡蛋js
    turnEgg_pic:function(){
        this.pic_index ++;
        this.pic_index = this.pic_index%2;
    },
    //翻鸡蛋——flash 
    turnEgg_flash:function(){
        var egg_ = document.getElementById('egg_flash').className;
        if(egg_.indexOf('egg_back') < 0){
          document.getElementById('egg_flash').className = egg_.replace('','egg_back');
        }else if(egg_.indexOf('egg_back') > -1){
          document.getElementById('egg_flash').className = egg_.replace('egg_back','');
        }
        console.log("egg:"+egg_);
        console.log(document.getElementById('egg_flash').className);
    },
  }
}
</script>

<style>
/* 头部搜索框 */
#js_test >div{
  margin: 10px 0;
  width: 80%;
}
.el-input{
  width: 430px;
  margin: 5px 0;
}
.el-textarea__inner{
  margin: 5px 0;
}
.content {
  color: rgba(255, 208, 0, 0.699);
}
.content > div{
  margin: 5px 0;
  height: 25px;
  line-height: 25px;
  display: inline-block;
}
#content_countInString{
  color: rgba(108, 224, 12, 0.521);
}
/* pan：平底锅 背景 */
.pan{
    width: 90%;
    height: auto;
    background: rgba(204, 204, 204, 0.192);
    cursor:url(../imgs/slice.png),pointer;
    display: flex;
    justify-content: space-around;

    transform-style: preserve-3d;
    
}
.pan > div{
    display: inline-block;
    padding: 5px;
    margin: 5px 20px;
}
#egg_flash {
  transition: all 0.6s ease-in-out;
}
.egg_back{
  transform: rotateY(180deg);
}
</style>
