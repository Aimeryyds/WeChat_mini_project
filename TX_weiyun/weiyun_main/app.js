var a = require("external/mta_analysis.js"), t = require("common/file.js");

App({
    onLaunch: function(i) {
        var e = wx.getSystemInfoSync();
        this.global.navData = wx.getStorageSync("navData") || {}, this.global.userInfo = wx.getStorageSync("userInfo") || {}, 
        this.global.downloadDic = {};
        var o = void 0;
        for (var n in this.global.navData) (o = this.global.navData[n]).dirList && o.dirList.length && (o.dirList = t.format(o.dirList)), 
        o.fileList && o.fileList.length && (o.fileList = t.format(o.fileList));
        a.App.init({
            appID: "500384140",
            eventID: "500384150",
            lauchOpts: i,
            statPullDownFresh: !0,
            statShareApp: !0,
            statReachBottom: !0
        }), this.minico = require("external/MiniCo.js")({
            name: "weiyun_miniprogram",
            appid: "qq" === e.AppPlatform ? "1107999468" : "wxd574de764a7b7c7f",
            domain: "www.weiyun.com",
            heartBeat: 2e4,
            platform: e.AppPlatform || "wx",
            debug: !1
        });
        var s = this;
        wx.getSystemInfo({
            success: function(a) {
                s.global.isQQ = null != a.AppPlatform && "qq" === a.AppPlatform;
            }
        });
    },
    onHide: function() {
        wx.setStorageSync("navData", this.global.navData), wx.setStorageSync("userInfo", this.global.userInfo), 
        this.minico.report();
    },
    global: {
        navData: {},
        userInfo: {},
        downloadDic: {},
        isQQ: !1
    }
});