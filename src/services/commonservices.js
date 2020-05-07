const loading = null;
var showLoading =  function(that){
    loading = that.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
}

var hideLoading = function(){
    loading.close();
}

export default {
    showLoading:showLoading,
    hideLoading:hideLoading
}