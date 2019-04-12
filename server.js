
let express = require('express');
let app = express();
let cors = require('cors');

let router = require('./serve/router.js');    //router.js文件
let router_user = require('./serve/router_user.js');    //router_user.js文件

app.use(cors({
    credentials:true,
    origin:'http://localhost:8080'              //cors跨域异常
}));

app.use(express.static(__dirname));
router(app);
router_user(app);

var developState = "/public";      //开发时是"/public", 打包后用"/build"

// 所有的请求都回到index页面
app.get('/',function(req, res){
    res.sendFile(__dirname+developState+'/index.html');
});

var server = app.listen(8081, '0.0.0.0',function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://%s:%s",host,port);
})


