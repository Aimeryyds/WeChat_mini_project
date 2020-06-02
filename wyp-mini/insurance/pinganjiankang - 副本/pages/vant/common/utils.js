var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isDef = n, exports.isObj = function(e) {
    var n = (0, t.default)(e);
    return null !== e && ("object" === n || "function" === n);
}, exports.isNumber = r, exports.range = function(e, t, n) {
    return Math.min(Math.max(e, t), n);
}, exports.nextTick = function(e) {
    setTimeout(function() {
        e();
    }, 1e3 / 30);
}, exports.getSystemInfoSync = function() {
    null == u && (u = wx.getSystemInfoSync());
    return u;
}, exports.addUnit = function(e) {
    if (!n(e)) return;
    return r(e = String(e)) ? "".concat(e, "px") : e;
};

var t = e(require("../../../@babel/runtime/helpers/typeof"));

function n(e) {
    return null != e;
}

function r(e) {
    return /^\d+(\.\d+)?$/.test(e);
}

var u = null;