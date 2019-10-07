// api.js  通过接口 ， 进行后端相应的处理
// const baseUrl = 'http://localhost:8081';
const baseUrl = 'http://39.108.182.97:8081';

export default { 
    // message
    getMessageList: baseUrl+ '/getMessageList',
    getMessageListById: baseUrl+ '/getMessageListById',
    addMessage:baseUrl+'/addMessage',
    updateMessage:baseUrl+'/updateMessage',
    deleteMessage:baseUrl+'/deleteMessage',
    MessageSort:baseUrl+'/MessageSort',

    //user
    addUser:baseUrl+'/addUser',
    login: baseUrl + '/login'
}
