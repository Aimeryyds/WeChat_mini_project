function n(n, e, t) {
    wx.request({
        url: n.data.initpage,
        data: JSON.stringify({
            id: e
        }),
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function(e) {
            0 == e.data.retcode && (t ? -1 != e.data.menuObject.menuurl.indexOf("?") ? n.setData({
                result: e.data.menuObject.menuurl + "&key=" + t
            }) : n.setData({
                result: e.data.menuObject.menuurl + "?key=" + t
            }) : n.setData({
                result: e.data.menuObject.menuurl
            }), console.log(n.data.result));
        }
    });
}

Page({
    data: {
        initpage: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/menuApplet/findMenuById",
        result: ""
    },
    onLoad: function(e) {
        n(this, e.id, e.key);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});