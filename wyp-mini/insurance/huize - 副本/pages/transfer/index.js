!function(e) {
    e && e.__esModule;
}(require("../../utils/url"));

var e = getApp();

Page({
    data: {
        href: "",
        title: ""
    },
    onLoad: function(t) {
        var n = this;
        e.globalData.code ? this.setPageHref(t, e.globalData.code) : e.login(function(e) {
            n.setPageHref(t, e.code);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        if (t.webViewUrl) {
            var n = t.webViewUrl.indexOf("?") > -1 ? "&" : "?";
            t.webViewUrl = t.webViewUrl + n + "name=jiabao";
        }
        var o = t.webViewUrl, i = {
            title: "慧择网，专家保险顾问为你精选保险方案",
            path: "/path/home/index",
            success: function() {
                wx.showModal({
                    title: "提示",
                    confirmText: "我知道了",
                    showCancel: !1,
                    content: "转发成功"
                });
            }
        };
        return /detail-([\d]+)\.html/.test(o) ? i.path = "/pages/transfer/index?url=" + encodeURIComponent(o) : /\.com\/mp/.test(o) ? i.imageUrl = "" : (i.imageUrl = "https://img.huizecdn.com/hz/touch/page/wechat-lite/home/share.png", 
        i.path = "/path/home/index?url=https://m.huize.com/mp?openId=" + e.globalData.openId), 
        i;
    },
    setPageHref: function(e, t) {
        var n = decodeURIComponent(e.url), o = e.title;
        o && (n += (n.indexOf("?") > -1 ? "&" : "?") + "mpTitle=" + encodeURIComponent(o), 
        this.setData({
            title: o
        }), wx.setNavigationBarTitle({
            title: this.data.title
        })), this.setData({
            href: n + (n.indexOf("?") > -1 ? "&" : "?") + "code=" + (t || "")
        });
    }
});