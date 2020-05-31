Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getVerifyCode = exports.shareVerify = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), r = wx.ENV, i = r.hostPanName;

r.version, require("../netdisk_utils/thirdLib/sha1.min.js");

exports.shareVerify = function(r, t) {
    var o = r.shareId, n = void 0 === o ? "" : o, a = r.uk, s = void 0 === a ? "" : a;
    if (!n || !s) return Promise.resolve({
        errno: -12,
        err_msg: "no shareid or uk"
    });
    var u = i + "share/verify?shareid=" + n + "&uk=" + s;
    return new Promise(function(r, i) {
        wx.request({
            url: u,
            method: "POST",
            success: function(e) {
                e.data.header = e.header, r(e.data);
            },
            fail: function(e) {
                i(e);
            },
            data: t,
            header: {
                "content-type": "application/x-www-form-urlencoded",
                Cookie: (0, e.getCookie)(!0)
            }
        });
    });
}, exports.getVerifyCode = function() {
    var r = i + "api/getcaptcha?prod=shareverify&channel=weixin&web=1&app_id=250528&clienttype=25";
    return new Promise(function(i, t) {
        wx.request({
            url: r,
            method: "GET",
            success: function(e) {
                i(e.data);
            },
            fail: function(e) {
                t(e);
            },
            header: {
                "content-type": "application/x-www-form-urlencoded",
                Cookie: (0, e.getCookie)(!0)
            }
        });
    });
};