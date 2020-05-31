Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bdWxLogin = exports.bindNormalAccount = exports.checkUser = void 0;

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, n = require("../pass_utils/loginFn.js");

exports.checkUser = function() {
    var o = 0, n = wx.getStorageSync("userInfo");
    return n && (o = "guideAccount" === n.type ? 1 : 2), o;
}, exports.bindNormalAccount = function(e, t) {
    if (console.log("账号正常化"), e = e || "/pages/netdisk_index/index?accountAction=normal", 
    "object" === (void 0 === t ? "undefined" : o(t))) for (var r in t) t.hasOwnProperty(r) && (e += -1 === e.indexOf("?") ? "?" : "&", 
    e += r + "=" + t[r]);
    -1 === e.indexOf("accountAction=normal") && (e += (-1 === e.indexOf("?") ? "?" : "&") + "accountAction=normal"), 
    e = encodeURIComponent(e), (0, n.passChangeNormal)(e);
}, exports.bdWxLogin = function(e, t) {
    if (console.log("默认登录"), "object" === (void 0 === t ? "undefined" : o(t))) for (var r in t) t.hasOwnProperty(r) && (e += -1 === e.indexOf("?") ? "?" : "&", 
    e += r + "=" + t[r]);
    e = encodeURIComponent(e), getApp().globalData.passErr = !0, (0, n.passLoginForWechat)(e);
};