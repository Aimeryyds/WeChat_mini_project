Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.getUserWxInfo = function() {
    return new Promise(function(e, n) {
        wx.getUserInfo({
            success: e,
            fail: n
        });
    });
}, exports.openUserSetting = function() {
    return new Promise(function(e, n) {
        wx.openSetting({
            success: e,
            fail: n
        });
    });
}, exports.getImageInfo = function(e) {
    return new Promise(function(n, t) {
        wx.getImageInfo({
            src: e,
            success: n,
            fail: t
        });
    });
}, exports.wxLogin = function() {
    return new Promise(function(e, n) {
        wx.login({
            success: e,
            fail: n
        });
    });
}, exports.wxApiToPromise = function(e) {
    return function() {
        return new Promise(function(n, t) {
            wx[e]({
                success: n,
                fail: t
            });
        });
    };
};