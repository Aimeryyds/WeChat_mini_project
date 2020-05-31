Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.redirectUrl = exports.getToken = exports.rebindAccount = exports.unbindWechat = exports.myCallBack = exports.bindNormalAccount = exports.bdWxLogin = exports.passLogin = exports.isGuide = void 0;

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, n = require("../pass_utils/loginFn.js"), o = require("../netdiisk_requestapi/getPasstoken.js"), t = (exports.isGuide = function(e) {
    if (!e) return !0;
    var n = e.type;
    return void 0 === n || "guideAccount" === n;
}, exports.passLogin = function(e) {
    var n = wx.getStorageSync("userInfo");
    n.type = e, wx.setStorageSync("userInfo", n);
}, exports.bdWxLogin = function(e, o) {
    if (o) {
        for (var t in o) o.hasOwnProperty(t) && (e = e + "&" + t + "=" + o[t]);
        e = encodeURIComponent(e.replace("&", "?"));
    }
    getApp().globalData.passErr = !0, (0, n.passLoginForWechat)(e);
});

exports.bindNormalAccount = function(o) {
    console.log("账号正常化");
    var t = "/pages/netdisk_index/index?accountAction=normal";
    if ("object" === (void 0 === o ? "undefined" : e(o))) for (var r in o) o.hasOwnProperty(r) && (t = t + "&" + r + "=" + o[r]);
    t = encodeURIComponent(t), (0, n.passChangeNormal)(t);
}, exports.myCallBack = function(e, n, o) {
    var r = getApp(), s = e.detail.detail, i = s.errMsg, a = s.userInfo;
    -1 !== i.indexOf("ok") && (r.globalData.userWxInfo = a, r.globalData.hasWxAuthor = !0, 
    t("/" + n, o));
}, exports.unbindWechat = function(o) {
    console.log("账号解绑");
    var t = "/pages/netdisk_index/index?unbind=true";
    if ("object" === (void 0 === o ? "undefined" : e(o))) for (var r in o) o.hasOwnProperty(r) && (t = t + "&" + r + "=" + o[r]);
    var s = wx.getStorageSync("passport_stoken") || "";
    s ? (0, n.wechatUnbind)(t, s) : wx.wetoast({
        content: "获取登录信息失败",
        loading: !1,
        duration: 2e3
    });
}, exports.rebindAccount = function(e) {
    var o = wx.getStorageSync("wechatBindStatus") || "";
    "unbind" === o && "true" === e && (wx.log.author.userUnbindSuccess.send(), t("/pages/netdisk_index/index?unbind=true")), 
    "true" === e && "unbind" !== o && (0, n.passChangeNormal)("/pages/netdisk_index/index?accountAction=normal");
}, exports.getToken = function(e) {
    console.log("getToken"), (0, o.getPasstoken)().then(function(n) {
        var o = n.data;
        0 === o.errno ? (wx.setStorageSync("passport_stoken", o.passport_stoken), e && e()) : wx.wetoast({
            content: "获取登录信息失败",
            loading: !1,
            duration: 2e3
        });
    });
}, exports.redirectUrl = function(n, o) {
    if ("object" === (void 0 === o ? "undefined" : e(o))) {
        for (var t in o) o.hasOwnProperty(t) && (n = n + "&" + t + "=" + o[t]);
        return n;
    }
};