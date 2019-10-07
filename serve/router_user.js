var query = require('./mysql.js');
var bodyparser = require('body-parser');     //node.js中间件，用于处理JSON,Eaw,Text和URL编码的数据
var urlencodeParser = bodyparser({extended:false});
var date = require("silly-datetime");

function router(app){
    //添加用户
    app.post('/addUser',urlencodeParser,function(req, res){
        var request = req.body;
        console.log(request);
        var sql = "insert into user(name,password,phone,type) values('"
                    +request.name+"','"+request.password+"','"
                    +request.phone+"','"+request.type+"')";
        console.log(sql);
        query(sql, function(err, result){
            if(err) {
                console.log(err);
            }

            var data = {
                code:1,
                result:result,
                msg:""
            }
            console.log(data);
            res.send(data);
            res.end();
        })
    })

    //登录
    app.post('/login',urlencodeParser,function(req, res){
        var request = req.body;
        console.log(request);
        var sql = "select * from user where name='"+request.name+"'";
        query(sql, function(err, result){
            if(err) {
                console.log(err);
            }
            var state = '';
            if(result[0].password == request.password){
                state = "success";
            }else{
                state = 'falid'
            }
            var result = {
                code:1,
                data: state,
                msg:""
            }
            res.send(result);
            res.end();
        })
    })
}

module.exports = router;