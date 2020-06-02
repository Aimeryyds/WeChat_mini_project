var a = require("../../utils/api"), e = require("../../libs/wxParse/wxParse.js"), t = getApp();

Page(function(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}({
    data: {
        newsInfo: {},
        newsInfoContent: "",
        newsId: 0
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: "文章详情"
        }), 0 == Object.keys(t.globalData.wxappInfo).length ? a.getWXAppInfo(this.setWXAppInfoData) : this.setWXAppInfoData();
        var n = e.id, o = this;
        this.setData({
            newsId: n
        }), this.getNewsInfoFn(n, o);
    },
    setWXAppInfoData: function() {
        var a = t.globalData.wxappInfo, e = a.flag, n = a.cusService, o = !1, i = t.globalData.tabbar, l = getCurrentPages(), s = l[l.length - 1].__route__;
        0 != s.indexOf("/") && (s = "/" + s);
        for (var r in i.list) if (i.list[r].pagePath == s) {
            o = !0;
            break;
        }
        n.isTabbarPath = o, n.supportOpen = !e.cancelServiceSupport, this.setData({
            flag: e,
            cusService: n
        });
    },
    getNewsInfoFn: function(t, n) {
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), a.getNewsInfo(t, n, function(a) {
            n.setData({
                newsInfo: a
            });
            var t = a.content;
            t && e.wxParse("newsInfoContent", "html", t, n, 5), wx.hideLoading();
        });
    },
    makePhoneCall: function() {
        var a = t.globalData.wxappInfo.cusService.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    onShareAppMessage: function() {
        var a = "文章详情", e = "";
        if (t.globalData.wxappInfo && t.globalData.wxappInfo.wxShare) {
            var n = t.globalData.wxappInfo.wxShare.tle, o = t.globalData.wxappInfo.wxShare.p, i = t.globalData.wxappInfo.wxShare.it, l = t.globalData.wxappInfo.wxShare.tt;
            n && l && (a = n), o && i && (e = o);
        }
        return {
            title: a,
            imageUrl: e
        };
    },
    onPullDownRefresh: function(a) {
        wx.stopPullDownRefresh();
        var e = "/pages/newsDetail/newsDetail?id=" + this.data.newsId;
        wx.redirectTo({
            url: e
        });
    },
    backToHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    showServiceAdvertising: function(a) {
        t.globalData.wxAppRequest.logDog(7000032, 3), t.globalData.isVerFree ? t.globalData.wxAppRequest.logDog(7000047, 1) : t.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    }
}, "backToHome", function() {
    wx.switchTab({
        url: "/pages/index/index"
    }), wx.navigateTo({
        url: "/pages/index/index"
    });
}));