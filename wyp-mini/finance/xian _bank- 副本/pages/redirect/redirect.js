Page({
    data: {
        initpage: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/menuApplet/findMenuById",
        result: ""
    },
    onLoad: function(n) {
        var o = "https://weixin.xacbank.com.cn/wxyh/miniappGoto/index_news.html?id=" + n.id + "&userid=" + n.userid;
        console.log(o), this.setData({
            result: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});