var t = require("../../utils/api"), a = getApp();

Page({
    data: {
        tabsDef: [],
        newsList: [],
        copyNewsList: [],
        showMoreBtn: !1,
        showAllCateFlag: !1,
        currentTab: 0,
        scrollLeft: 0,
        isLoaded: !1
    },
    onLoad: function(e) {
        var s = a.globalData.col5;
        s ? this.initNewsColInfo(s) : t.getWXAppColModuleInfo(5, this.initNewsColInfo), 
        this.getNewsList();
    },
    initNewsColInfo: function(t) {
        var e = a.globalData.wxappInfo, s = e.flag, i = a.globalData.isModel, o = e.cusService, r = e.isOem, n = e.agentAcct, l = !1, g = !1, c = a.globalData.tabbar, w = getCurrentPages(), f = w[w.length - 1].__route__;
        0 != f.indexOf("/") && (f = "/" + f);
        for (var u in c.list) if (c.list[u].pagePath == f) {
            g = !0;
            break;
        }
        if (t) {
            var p = t.name || "新闻资讯";
            wx.setNavigationBarTitle({
                title: p
            }), this.setData({
                title: p
            });
        }
        i && s.tabBarOpen && (l = !0, a.editTabBar()), o.isTabbarPath = g, o.supportOpen = !s.cancelServiceSupport, 
        s.footerOpen = !s.cancelSupport, this.setData({
            flag: s,
            cusService: o,
            isOem: r,
            agentAcct: n,
            showTabBar: l
        });
    },
    getNewsList: function() {
        var a = this;
        t.getNewsList(a, function(t) {
            var e = {
                id: 0,
                name: "全部"
            };
            t.groupList.unshift(e), a.setData({
                newsList: t.newsList,
                tabsDef: t.groupList,
                copyNewsList: JSON.parse(JSON.stringify(t.newsList)),
                isLoaded: !0
            }), wx.stopPullDownRefresh();
            var s = a.data.tabsDef.length > 4;
            a.setData({
                showMoreBtn: s
            });
        });
    },
    toNewsDetail: function(t) {
        var a = t.currentTarget.dataset.newsid;
        wx.navigateTo({
            url: "/pages/newsDetail/newsDetail?id=" + a
        });
    },
    showAllCate: function(t) {
        this.setData({
            showAllCateFlag: !0
        });
    },
    closeCateDrawer: function() {
        this.setData({
            showAllCateFlag: !1
        });
    },
    handleClick: function(t) {
        var a = t.currentTarget.dataset.tabid;
        this.setData({
            currentTab: a
        }), this.filterNewsList(a);
    },
    filterNewsList: function(t) {
        var a = this;
        if (t) {
            var e = a.data.copyNewsList.filter(function(a, e) {
                return a.group[0] && a.group[0].id == t;
            });
            this.setData({
                newsList: e
            });
        } else this.setData({
            newsList: a.data.copyNewsList
        });
    },
    jumpToTab: function(t) {
        var a = t.currentTarget.dataset.tabid;
        this.setData({
            currentTab: a
        }), this.closeCateDrawer(), this.scrollToTab(a), this.filterNewsList(a);
    },
    scrollToTab: function(t) {
        var a = this;
        t = t || 0;
        var e = wx.createSelectorQuery();
        e.select("#cate" + t).boundingClientRect(), e.exec(function(t) {
            t[0] && a.setData({
                scrollLeft: t[0].left - 15
            });
        });
    },
    onShareAppMessage: function() {
        var t = this.data.title, e = "";
        if (a.globalData.wxappInfo && a.globalData.wxappInfo.wxShare) {
            var s = a.globalData.wxappInfo.wxShare.tle, i = a.globalData.wxappInfo.wxShare.p, o = a.globalData.wxappInfo.wxShare.it, r = a.globalData.wxappInfo.wxShare.tt;
            s && r && (t = s), i && o && (e = i);
        }
        return {
            title: t,
            imageUrl: e
        };
    },
    onPullDownRefresh: function() {
        this.setData({
            currentTab: 0
        }), this.scrollToTab(0), this.getNewsList();
    },
    showAdvertising: function(e) {
        t.logDog(7000032, 0), a.globalData.isVerFree ? t.logDog(7000047, 1) : t.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showServiceAdvertising: function(e) {
        t.logDog(7000032, 3), a.globalData.isVerFree ? t.logDog(7000047, 1) : t.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    },
    makePhoneCall: function() {
        var t = a.globalData.wxappInfo.cusService.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    }
});