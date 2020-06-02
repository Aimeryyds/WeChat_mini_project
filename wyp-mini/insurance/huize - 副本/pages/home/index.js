var e = getApp();

Page({
    data: {
        href: "https://m.huize.com/?name=jiabao"
    },
    onLoad: function(t) {
        var n = this.data.href, o = t.scene, a = "", s = t.q, i = "";
        s && (s = decodeURIComponent(s), i = decodeURIComponent(s.split("?url=")[1])), i && (n = "https://" + i), 
        o && (o = decodeURIComponent(o), e.globalData.scene = o, a = (n.indexOf("?") > -1 ? "&" : "?") + "scene=" + o), 
        this.setData({
            href: n + a
        });
    },
    onReady: function() {
        var t = this;
        e.globalData.code ? this.setHomeHref(e.globalData.code) : e.login(function(e) {
            t.setHomeHref(e.code);
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        var n = e.globalData.scene, o = t.webViewUrl, a = "/pages/home/index?scene=" + n;
        return (/\/ins-(\d+)-((?:\d+,?)+)-(.+)/i.test(o) || /\/detail-(\d+)\.html/i.test(o)) && (a = "/pages/transfer/index?url=" + o + "&scene=" + n), 
        {
            title: "慧择保险网",
            path: a,
            success: function() {
                wx.showModal({
                    title: "提示",
                    confirmText: "我知道了",
                    showCancel: !1,
                    content: "转发成功"
                });
            }
        };
    },
    setHomeHref: function(e) {
        var t = (this.data.href.indexOf("?") > -1 ? "&" : "?") + "code=" + e;
        this.setData({
            href: this.data.href + t
        });
    }
});