require("/libs/wx-component/index");

var a = require("/utils/api");

App({
    globalData: {
        extConfigData: {},
        wxappInfo: {},
        wxAppRequest: a
    },
    onLaunch: function(a) {
        this.globalData.wxappInfo = {}, this.globalData.bookInfoList = null;
        var t = a.query.isModel, e = a.query.wxappAid, i = a.query.wxappId;
        t && (this.globalData.isModel = t, this.globalData.wxappAid = e, this.globalData.wxappId = i);
    },
    onShow: function() {},
    editTabBar: function() {
        var a = this.globalData.tabbar, t = getCurrentPages(), e = t[t.length - 1], i = e.__route__;
        0 != i.indexOf("/") && (i = "/" + i);
        for (var l in a.list) a.list[l].selected = !1, a.list[l].pagePath == i && (a.list[l].selected = !0);
        e.setData({
            tabbar: a
        });
    }
});