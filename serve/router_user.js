var query = require('./mysql.js');
var bodyparser = require('body-parser');
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

    //通过用户名查询信息
    app.post('/selectByName',urlencodeParser,function(req, res){
        var request = req.body;
        console.log(request);
        var sql = "select * from user where name='"+request.name+"'";
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
}


module.exports = router;