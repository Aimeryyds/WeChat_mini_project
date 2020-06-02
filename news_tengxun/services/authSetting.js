var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAuthSetting = function() {
    return new Promise(function(e, t) {
        wx.getSetting({
            success: function(t) {
                o.default.info("wx.getSetting：", t), e(t && t.authSetting || {});
            },
            fail: function(t) {
                o.default.error("wx.getSetting 出错：", t), e({});
            }
        });
    });
}, exports.authorize = function(e) {
    return new Promise(function(o, t) {
        wx.authorize({
            scope: e,
            success: o,
            fail: t
        });
    });
}, exports.scope = void 0;

var o = e(require("../utils/logger"));

exports.scope = {
    userInfo: "scope.userInfo",
    userLocation: "scope.userLocation",
    address: "scope.address",
    invoiceTitle: "scope.invoiceTitle",
    invoice: "scope.invoice",
    werun: "scope.werun",
    record: "scope.record",
    writePhotosAlbum: "scope.writePhotosAlbum",
    camera: "scope.camera"
};