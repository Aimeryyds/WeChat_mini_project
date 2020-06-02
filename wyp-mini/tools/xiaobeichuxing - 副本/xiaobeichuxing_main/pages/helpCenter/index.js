Page({
    data: {
        src: ""
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        var n = "https://manage.xiaobeibike.com/File/Html/helpCenter/helpCenter.html#mp.weixin.qq.com" + Math.random();
        this.setData({
            src: n
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});