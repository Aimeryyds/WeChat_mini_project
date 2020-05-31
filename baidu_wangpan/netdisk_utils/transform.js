Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.expiredTransform = exports.toFriendlyPeriod = exports.formatDateByJoint = exports.formatDate = exports.toFriendlyQuotaSize = exports.dataTransform = exports.transformSize = exports.msToMin = exports.transformTime = void 0;

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./calculate.js")), t = [ "server_ctime", "server_mtime" ], r = /^\d+$/, o = exports.transformTime = function() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return "number" == typeof o ? e.default.formatTime(new Date(1e3 * o)) : (o.forEach(function(o) {
        t.forEach(function(t) {
            var a = o[t];
            a && r.test(a) && (o[t] = e.default.formatTime(new Date(1e3 * a), n));
        });
    }), o);
}, n = (exports.msToMin = function(e) {
    var t = Math.floor(e / 60);
    t < 10 && (t = "0" + t);
    var r = Math.floor(e % 60);
    return r < 10 && (r = "0" + r), t + ":" + r;
}, exports.transformSize = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return e.map(function(e) {
        var t = e.size;
        e.originSize = t, e.size = a(t);
    }), e;
}), a = (exports.dataTransform = function(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return o(e, t), n(e), e;
}, exports.toFriendlyQuotaSize = function(e, t) {
    return t && "number" == typeof e && (e /= 8), "number" == typeof e || "string" == typeof e && /^[\d\.]+$/.test(e) ? e < 1024 ? Math.round(e) + "B" : e < 1048576 && e >= 1024 ? Math.round(e / 1024) + "KB" : e < 1073741824 && e >= 1048576 ? 10 * (e / 1024 / 1024).toFixed(1) / 10 + "M" : 100 * (e / 1024 / 1024 / 1024).toFixed(2) / 100 + "G" : "-";
}), i = exports.formatDate = function(e) {
    var t = new Date(e);
    return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日";
};

exports.formatDateByJoint = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", n = new Date();
    e && (n = new Date(e));
    var a = n.getFullYear(), i = n.getMonth() + 1 + "";
    1 === i.length && (i = "0" + i);
    var f = n.getDate() + "";
    return 1 === f.length && (f = "0" + f), "" + a + t + i + r + f + o;
}, exports.toFriendlyPeriod = function(e, t) {
    var r = "";
    if ("number" != typeof e) return r;
    var o = Math.floor(e / 86400);
    if (o >= 1) return i(t);
    var n = Math.floor(e / 3600);
    n >= 1 ? (r += n + "小时", e -= 3600 * n) : o >= 1 && (r += n + "小时");
    var a = Math.floor(e / 60);
    return a >= 1 ? (r += a + "分", e -= 60 * a) : n >= 1 && (r += a + "分"), r += e + "秒后";
}, exports.expiredTransform = function(e, t) {
    if (!e && 0 !== e) return "invalid";
    if (0 === e) return "永久有效";
    if (e > 0) {
        var r = Math.ceil(new Date().getTime() / 1e3), o = 86400 * e - (r - t);
        return (r - t) / 86400 > e ? "invalid" : o / 86400 >= 1 ? Math.ceil(o / 86400) + "天后失效" : o / 3600 >= 1 ? Math.ceil(o / 3600) + "小时后失效" : Math.ceil(o / 60) + "分钟后失效";
    }
};