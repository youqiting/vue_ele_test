# vue_ele_test
运行命令 
npm run serve

前端使用了： vue elementUI 
后端使用了： node.js 

项目使用的所有模块：
axios  body-parser  cors  element-ui express mysql silly-datetime vue vue-router
（1）body-parser:node.js body 解析中间件,处理程序之前，在中间件中对传入的请求体进行解析（response body）
    body-parser 提供四种解析器
        JSON body parser
        Raw body parser
        Text body parser
        URL-encoded form body parser
（2）silly-datetime:    
     Node.js格式化时间模块silly-datetime

『用户模块』
    用户登陆
   用户注册

『文章模块』
    展示全部文章，添加文章，修改文章，删除文章，
    
『其它模块』
css3_test.vue是一个散列画廊页面
思路步骤：
设置背景、选中/未选中的图片样式、位置
图片元素内容遍历
设置左右存放未选中图片的区域，x,y
图片选中的样式和事件，未选中的其余图片样式
给一个随机数的翻转角度，随机位置
导航栏nav的样式，事件，以及与图片进行绑定

#20200506 引入mockjs
方便调试，优化前端

