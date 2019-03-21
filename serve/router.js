var query = require('./mysql.js');
var bodyparser = require('body-parser');
var urlencodeParser = bodyparser({extended:false});
var date = require("silly-datetime");

function router(app){
    //默认显示所有 未上锁 的文章
    app.post('/getMessageList',urlencodeParser,function(req, res){
        console.log('getMessageList');
        var request = req.body;
        var sql = "select * from message where message_open = " + request.key;
        console.log(sql);
        query(sql, function(err, result){
            if(err) {
                console.log(err);
            }
            console.log(result);
            var data = {
                code:1,
                result:result,
                msg:""
            }
            res.send(data);
            res.end();
        })
    })

    // 通过id获取对应文章
    app.post('/getMessageListById',urlencodeParser,function(req, res){
        console.log('getMessageListById');
        var request = req.body;
        var sql = "select * from message where id =" +request.id+"";
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

    //添加文章 标题、内容、锁、时间
    app.post('/addMessage',urlencodeParser,function(req, res){
        var request = req.body;
        console.log(request);
        var sql = "insert into message(message_title,message_content,message_open,message_time) values('"
                    +request.title+"','"+request.content+"','"
                    +request.open+"','"+date.format(new Date(),'YYYY-MM-DD')+"')";
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

    //修改 文章标题、内容、锁 
    app.post('/updateMessage',urlencodeParser,function(req, res){
        console.log('updateMessage');
        var request = req.body;
        var sql = "update message set message_title = '" +request.title
                    +"',message_content='"+request.content
                    +"',message_open='"+request.open
                    +"',message_time='"+ date.format(new Date(),'YYYY-MM-DD')+"' where id ='"+request.id+"'";
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
    
    //删除文章或消息
    app.post('/deleteMessage',urlencodeParser,function(req, res){
        console.log('deleteMessage');
        var request = req.body;
        var sql = "delete from message " + "where id='" + request.id+"'";
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