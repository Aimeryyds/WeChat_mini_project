Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportActionBp = exports.reportAction = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = wx.ENV, n = t.hostPanName, r = t.version;

exports.reportAction = function(t) {
    var n = Object.keys(t).map(function(e) {
        return e + "=" + t[e];
    }).join("&");
    return (0, e.wxReq)("api/analytics?" + n, {}, "GET");
}, exports.reportActionBp = function(t) {
    var o = Object.keys(t).filter(function(e) {
        return "type" !== e;
    });
    o.push("type");
    var i = o.map(function(e) {
        return e + "=" + t[e];
    }).join("&"), c = n + "bpapi/analytics?channel=weixin&version=" + r + "&clienttype=25&web=1&" + i;
    return new Promise(function(t, n) {
        wx.request({
            url: c,
            success: t,
            fail: n,
            dataType: "json",
            header: {
                "content-type": "application/x-www-form-urlencoded",
                Cookie: (0, e.getCookie)()
            }
        });
    }).catch(function(e) {
        console.warn(e);
    });
};