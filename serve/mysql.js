let mysql = require('mysql');
var pool = mysql.createPool({
    host :'localhost',
    user :'root',
    password:'root',
    database:'workspace'
});

let query = function(sql,callback){
    pool.getConnection(function(err, connect){
        if(err){
            callback(err, null);
        }else{
            connect.query(sql, function(err, result){
                connect.release();
                callback(err, result);
            })
        }
    });
};

module.exports = query;



