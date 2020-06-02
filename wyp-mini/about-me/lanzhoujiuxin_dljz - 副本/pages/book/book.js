var a = require("../../utils/api"), t = getApp();

Page({
    data: {
        bookGroupInfoMap: {},
        currentGroupId: 0,
        showAllCateFlag: !1,
        scrollTarget: null
    },
    onLoad: function(o) {
        var e = t.globalData.col3;
        e ? this.initBookColInfo(e) : a.getWXAppColModuleInfo(3, this.initBookColInfo), 
        this.data.bookInfoList || a.getBookInfoList(this);
    },
    initBookColInfo: function(a) {
        var o = t.globalData.wxappInfo, e = o.flag, i = o.cusService, l = o.isOem, r = o.agentAcct, n = t.globalData.globalColor, s = t.globalData.isModel, g = !1, p = !1, u = t.globalData.tabbar, h = getCurrentPages(), c = h[h.length - 1].__route__;
        0 != c.indexOf("/") && (c = "/" + c);
        for (var f in u.list) if (u.list[f].pagePath == c) {
            p = !0;
            break;
        }
        s && e.tabBarOpen && (g = !0, t.editTabBar());
        var d = a.name || "预约";
        wx.setNavigationBarTitle({
            title: d
        }), i.isTabbarPath = p, i.supportOpen = !e.cancelServiceSupport, e.footerOpen = !e.cancelSupport, 
        this.setData({
            flag: e,
            cusService: i,
            globalColor: n,
            showTabBar: g,
            isOem: l,
            agentAcct: r,
            title: d
        });
    },
    toBookDetail: function(a) {
        var t = a.currentTarget.dataset.bookid;
        wx.navigateTo({
            url: "/pages/bookDetail/bookDetail?bookId=" + t
        });
    },
    makePhoneCall: function() {
        var a = t.globalData.wxappInfo.cusService.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    backToHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    showAdvertising: function(o) {
        a.logDog(7000032, 0), t.globalData.isVerFree ? a.logDog(7000047, 1) : a.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showServiceAdvertising: function(o) {
        a.logDog(7000032, 3), t.globalData.isVerFree ? a.logDog(7000047, 1) : a.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    },
    onPullDownRefresh: function() {
        var t = this.data.currentGroupId;
        this.data.bookGroupInfoMap[t] = [], 0 === t ? a.getBookInfoList(this) : a.getBookListByGroupId(this, t);
    },
    onShareAppMessage: function() {
        var a = this.data.title, o = "";
        if (t.globalData.wxappInfo && t.globalData.wxappInfo.wxShare) {
            var e = t.globalData.wxappInfo.wxShare.tle, i = t.globalData.wxappInfo.wxShare.p, l = t.globalData.wxappInfo.wxShare.it, r = t.globalData.wxappInfo.wxShare.tt;
            e && r && (a = e), i && l && (o = i);
        }
        return {
            title: a,
            imageUrl: o
        };
    },
    onReachBottom: function(t) {
        var o = this.data.currentGroupId;
        0 === o ? a.getBookInfoList(this) : a.getBookListByGroupId(this, o);
    },
    handleClick: function(t) {
        var o = t.currentTarget.dataset.groupid;
        this.setData({
            currentGroupId: o
        });
        var e = this.data.bookGroupInfoMap[o];
        e && 0 !== e.length || a.getBookListByGroupId(this, o), this.data.showAllCateFlag && (this.closeCateDrawer(), 
        this.setData({
            scrollTarget: "nav" + o
        }));
    },
    showAllCate: function() {
        this.setData({
            showAllCateFlag: !0
        });
    },
    closeCateDrawer: function() {
        this.setData({
            showAllCateFlag: !1
        });
    }
});