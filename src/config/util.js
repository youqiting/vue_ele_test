//转义：内容的 < >（标签） \n \r\n换行 \t(tab)
export function contentFormat(content){
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                     .replace(/\n|\r\n/g, '<br/>').replace(/\s/g,'&nbsp;')
                     .replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;');
    return  content;                
}

//插入数据库前，将数据 ' 单引号转为 " 双引号
export function DanZhuanShuang(content){
    var reg = new RegExp("'","g");
    content = content.replace(reg, '"');
    return content;
}

//取出后，将数据 ， 逗号转为 回车 换行
export function changeEnter(content){
    var reg = new RegExp("，","g");
    content = content.replace(reg, '</br>');
    return content;
}




