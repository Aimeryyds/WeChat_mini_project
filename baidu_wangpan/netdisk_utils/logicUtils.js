Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAuthSetting = exports.systemInfoSync = exports.initSystemInfo = exports.checkBdAuthor = exports.checkonLoadData = exports.serverLogin = void 0;

var e = require("./wxApiToPromise.js"), t = require("../netdiisk_requestapi/postLoginInfo.js"), i = require("../netdiisk_requestapi/updateUserInfo.js"), n = (require("../netdiisk_requestapi/reportUser.js"), 
(0, e.wxApiToPromise)("checkSession")), o = (0, e.wxApiToPromise)("getSystemInfo"), r = (getApp(), 
exports.serverLogin = function() {
    (0, e.wxLogin)().then(function(e) {
        var i = e.code;
        return (0, t.postLoginInfo)(i);
    }).catch(function(e) {
        return console.log(e);
    });
}, exports.checkonLoadData = function() {
    var e = wx.getCurrentViewPage().data.onLoadData, t = e.to || "";
    if (wx.getCurrentViewPage().surl) wx.getCurrentViewPage().onLoad(wx.getCurrentViewPage().options); else if ("sharedir" !== t && "share" !== t && "sharevideo" !== t && "shareaudio" !== t.to && "transAssistant" !== t) wx.getCurrentViewPage().onShow(); else {
        var i = void 0, n = "transAssistant" === e.to;
        "sharedir" === e.to ? i = "/pages/netdisk_sharedir/sharedir?to=sharedir" : "share" === e.to ? (getApp().mtj && getApp().mtj.trackEvent("index_to_share", {}), 
        i = "/pages/netdisk_share/share?to=share") : "sharevideo" === e.to ? i = "/pages/netdisk_previewvideo/previewvideo?" + (wx.getStorageSync(e.surl + "preview") || "") : "shareaudio" === e.to ? i = "/pages/netdisk_previewaudio/previewaudio?" + (wx.getStorageSync(e.surl + "preview") || "") : n && (i = "/pages/netdisk_transAssistant/index?fromNormal=true");
        for (var o in e) e.hasOwnProperty(o) && "to" !== o && (i = i + "&" + o + "=" + e[o]);
        n ? wx.reLaunch({
            url: i
        }) : wx.navigateTo({
            url: i
        });
    }
}), s = (exports.checkBdAuthor = function() {
    n().then(e.wxLogin).then(function(e) {
        var i = e.code;
        return (0, t.postLoginInfo)(i);
    }).then(i.updateUserInfo).then(function() {
        r();
    }).catch(function(e) {
        console.warn(e);
    });
}, function(e) {
    var t = 72;
    /iPhone X|MI 8|PAAM00|COR-AL00/.test(e.model) ? (t = 88, /iPhone X/.test(e.model) && (getApp().globalData.isIpx = !0)) : /iPhone/.test(e.model) && (t = 62, 
    e.screenHeight > 800 && (t = 88, /iPhone X/.test(e.model) && (getApp().globalData.isIpx = !0))), 
    e.ratio = (750 / e.windowWidth).toFixed(2), e.visualHeightRpx = (e.windowHeight - t) * e.ratio, 
    getApp().globalData.statusBarHeight = e.statusBarHeight, getApp().globalData.totalHeight = t - e.statusBarHeight, 
    getApp().globalData.navHeight = t, getApp().globalData.sequence = !0;
});

exports.initSystemInfo = function() {
    return o().then(function(e) {
        s(e), "windows" === e.platform ? (e.screenHeightRpx = e.screenHeight * (750 / e.windowWidth), 
        e.screenWidthRpx = 750, e.windowHeightRpx = e.windowHeight * (750 / e.windowWidth), 
        e.windowWidthRpx = e.windowWidth * (750 / e.windowWidth)) : (e.screenHeightRpx = e.screenHeight * (750 / e.screenWidth), 
        e.screenWidthRpx = 750, e.windowHeightRpx = e.windowHeight * (750 / e.screenWidth), 
        e.windowWidthRpx = e.windowWidth * (750 / e.screenWidth));
        var t = getApp().globalData;
        return t.systemInfo = e, /iPhone X/.test(e.model) && (t.isIpx = !0), e;
    });
}, exports.systemInfoSync = function() {
    try {
        var e = wx.getSystemInfoSync();
        return s(e), "windows" === e.platform ? (e.screenHeightRpx = e.screenHeight * (750 / e.windowWidth), 
        e.screenWidthRpx = 750, e.windowHeightRpx = e.windowHeight * (750 / e.windowWidth), 
        e.windowWidthRpx = e.windowWidth * (750 / e.windowWidth), e.ispc = !0, getApp().globalData.systemInfo = e) : (e.screenHeightRpx = e.screenHeight * (750 / e.screenWidth), 
        e.screenWidthRpx = 750, e.windowHeightRpx = e.windowHeight * (750 / e.screenWidth), 
        e.windowWidthRpx = e.windowWidth * (750 / e.screenWidth), e.ispc = !1, getApp().globalData.systemInfo = e), 
        e;
    } catch (e) {
        throw console.log(e), new Error("getSystemInfoSync failed");
    }
}, exports.getAuthSetting = function(e) {
    return new Promise(function(t, i) {
        wx.getSetting({
            success: function(n) {
                n.authSetting[e] ? t() : i();
            },
            fail: i
        });
    });
};