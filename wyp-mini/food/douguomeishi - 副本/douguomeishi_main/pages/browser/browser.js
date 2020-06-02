var e = require("../../utils/WxNotificationCenter.js"), i = require("../../utils/util.js");

Page({
    data: {
        URL: "",
        needRefreshOnShow: !1,
        rid: ""
    },
    userLogined: function() {
        this.data.needRefreshOnShow = !0;
    },
    notePubilshed: function() {
        this.data.needRefreshOnShow = !0;
    },
    appendUrl: function(e) {
        var t = wx.getStorageSync("user"), n = e;
        if (t && -1 == n.indexOf("dg_luc")) {
            var o = i.encryptForCommission(t.user_id.toString());
            n = -1 != n.indexOf("?") ? n + "&dg_luc=" + o : n + "?dg_luc=" + o;
        }
        return n;
    },
    onLoad: function(i) {
        self = this;
        var t = decodeURIComponent(i.url), n = t;
        t = this.appendUrl(t), console.log("decoded url " + t);
        var o = i.rid;
        self.setData({
            URL: t,
            shareUrl: n,
            rid: o
        });
        var a = this;
        e.addNotification("userLoginedNotificationName", a.userLogined, a), e.addNotification("notePubilshedNotificationName", a.notePubilshed, a);
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        if (this.data.needRefreshOnShow) {
            this.data.needRefreshOnShow = !1;
            var i = this.data.URL;
            i = this.appendUrl(i), wx.showLoading({
                title: ""
            }), this.setData({
                URL: ""
            }), setTimeout(function() {
                e.setData({
                    URL: i
                }), wx.hideLoading();
            }, 100);
        }
    },
    onHide: function() {},
    onUnload: function() {
        var i = this;
        e.removeNotification("userLoginedNotificationName", i), e.removeNotification("notePubilshedNotificationName", i);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e, i = this;
        return e = i.data.rid ? "/pages/recipe/recipe?rid=" + i.data.rid : "/pages/browser/browser?url=" + encodeURIComponent(this.data.shareUrl), 
        {
            title: " ",
            desc: " ",
            path: e
        };
    }
});