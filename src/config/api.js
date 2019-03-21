// api.js  通过接口 ， 进行后端相应的处理
const baseUrl = 'http://localhost:8081';

module.exports = {
    // message
    getMessageList: baseUrl+ '/getMessageList',
    getMessageListById: baseUrl+ '/getMessageListById',
    addMessage:baseUrl+'/addMessage',
    updateMessage:baseUrl+'/updateMessage',
    deleteMessage:baseUrl+'/deleteMessage',

    //user
    addUser:baseUrl+'/addUser',
    login: baseUrl + '/login'
}
