Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wxReq = exports.getCookie = void 0;

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("./storage.js"), r = require("./wxApiToPromise.js"), n = require("./account.js"), o = (require("../netdiisk_requestapi/reportUser.js"), 
require("./logicUtils.js")), i = require("./common.js"), s = wx.ENV, a = s.hostPanName, c = s.version, R = require("./thirdLib/sha1.min.js"), u = function() {
    var e = getApp();
    return e ? e.globalData : {};
}, g = function(e, t) {
    var r = getApp();
    r && (r[e] = t);
}, p = exports.getCookie = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = wx.getStorageSync("userInfo"), r = wx.getStorageSync("PANWX"), n = wx.getStorageSync("BDCLND"), o = "BDUSS=" + t.bduss + ";PANWX=" + r + ";STOKEN=" + t.netdisk_stoken + ";BDCLND=" + n + ";";
    return e && (o += "BAIDUID=" + wx.getStorageSync("BAIDUID")), o;
}, l = exports.wxReq = function r(o) {
    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", _ = arguments[3], d = getApp();
    _ || (_ = a);
    var f = u();
    if (f.isLogining) return Promise.reject(r.ERROR_IS_LOGINING + o);
    if (f.errTimes > 3) return wx.wetoast({
        content: "服务器出错，请退出稍后重试",
        duration: 1500
    }), Promise.reject(r.ERROR_REQUEST_SERVER_FAILURE + o);
    var S = o.includes("api/wechat/login"), m = o.includes("api/wechat/collect"), w = o.includes("api/analytics"), x = o.includes("share/wxlist"), L = o.includes("act/api/activityentry"), y = new Date().getTime(), O = wx.getStorageSync("lsk"), v = R("25" + y + O + "weixin"), I = _ + o + (/\?/.test(o) ? "&" : "?") + "channel=weixin&time=" + y + "&rand=" + v + "&version=" + c + "&clienttype=25&web=1";
    return new Promise(function(e, t) {
        S && (g("isLogining", !0), void 0 !== f.errTimes && g("errTimes", f.errTimes + 1)), 
        wx.request({
            url: I,
            data: s,
            method: l,
            success: e,
            fail: t,
            complete: function(e) {
                f.isOffLine = !(!e.errMsg.includes("request:fail") || L), S && (f.isLogining = !1);
            },
            dataType: "json",
            header: {
                "content-type": "application/x-www-form-urlencoded",
                Cookie: p()
            }
        });
    }).then(function(e) {
        if (w) return Promise.resolve();
        var s = e.data, a = s.errno, c = s.lsk, R = s.uk, u = s.passport_stoken, p = s.errmsg;
        9600 !== a && 9100 !== a || wx.showDialog({
            title: "提示",
            content: p,
            cancelText: "退出",
            confirmText: "申诉",
            confirm: function() {
                wx.navigateTo({
                    url: "/pages/netdisk_appeal/appeal?errno=" + a
                });
            }
        });
        try {
            a && d.mtj && d.mtj.trackEvent("ser_err", {
                err_code: a,
                api_path: I
            });
        } catch (e) {}
        if (-6 === a && f.hasWxAuthor) {
            if (d.globalData.passErr) return;
            if (!m) {
                g("firstVisit", !1);
                var l = void 0, _ = void 0;
                try {
                    var L = wx.getCurrentViewPage();
                    l = L.pageType, _ = L.options;
                } catch (e) {
                    console.error(e);
                }
                "share" === l ? (0, n.bdWxLogin)("/pages/netdisk_share/share", _) : "transAssistant" === l ? (0, 
                n.bdWxLogin)("/pages/netdisk_transAssistant/index", _) : (0, n.bdWxLogin)("/pages/netdisk_index/index");
            }
            return Promise.reject(r.ERROR_USER_NOT_LOGIN + o);
        }
        return a || w || S || m || x || (d.globalData.passErr = !1), 19101 === a || 113 === a ? (E(), 
        Promise.reject(r.ERROR_USER_LOGIN_FAILURE + o)) : 1 === a ? (wx.wetoast({
            content: "服务器出错，请退出稍后重试",
            duration: 1500
        }), Promise.reject(r.ERROR_SERVER_UNAVAILABLE + o)) : (S ? ((0, t.setCookieToStorage)(e.header, [ "PANWX" ]), 
        wx.setStorageSync("lsk", c), (0, i.setUk)(R), wx.setStorageSync("passport_stoken", u)) : g("errTimes", 0), 
        e);
    }, function(t) {
        return "string" == typeof t ? t += o : "object" === (void 0 === t ? "undefined" : e(t)) && "string" == typeof t.errMsg && (t.errMsg += o), 
        Promise.reject(t);
    }).catch(function(e) {
        return Promise.reject(e);
    });
};

l.ERROR_IS_LOGINING = "ERROR_IS_LOGINING", l.ERROR_REQUEST_SERVER_FAILURE = "ERROR_REQUEST_SERVER_FAILURE", 
l.ERROR_USER_NOT_LOGIN = "ERROR_USER_NOT_LOGIN", l.ERROR_USER_LOGIN_FAILURE = "ERROR_USER_LOGIN_FAILURE", 
l.ERROR_SERVER_UNAVAILABLE = "ERROR_SERVER_UNAVAILABLE";

var E = function() {
    var e = getApp().globalData.userWxInfo;
    if (e) {
        var t = e.nickName, n = e.avatarUrl;
        return (0, r.wxLogin)().then(function(e) {
            var r = e.code;
            return l("api/wechat/login", {
                wcode: r,
                wname: t,
                wurl: n
            }, "POST");
        }).then(function() {
            (0, o.checkonLoadData)();
        });
    }
};