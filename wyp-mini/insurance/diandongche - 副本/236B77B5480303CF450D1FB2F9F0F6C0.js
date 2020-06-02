Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.checkIPhoneX = exports.safeAreaInset = exports.getSystemInfo = void 0;

var e = null, t = function(t) {
    if (!e || t) try {
        e = wx.getSystemInfoSync();
    } catch (t) {}
    return e;
};

exports.getSystemInfo = t;

var r = {
    top: 88,
    left: 0,
    right: 0,
    bottom: 34
};

exports.safeAreaInset = r;

var o = function(e) {
    var t = e.model, r = e.platform;
    return e.screenHeight, /iPhone X/.test(t) && "ios" === r;
};

exports.checkIPhoneX = function(e) {
    return o(t(e));
};