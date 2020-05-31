var a = "https://ufosdk.baidu.com/?m=Client&appid=226726&hasTitleBar=false&a=postViewNew";

Page({
    data: {
        urls: a
    },
    onLoad: function(t) {
        var s = t.sign, i = "contact" === t.types ? a : "https://ufosdk.baidu.com/?&m=Client&a=historyCrossProductLine&ajax=0&appid=226726&hasTitleBar=false";
        this.setData({
            urls: s ? i + "&sign=" + s : i
        });
    },
    onReady: function() {},
    onShow: function() {}
});