Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.myCollectionCreateTime = exports.myCollectionCountDown = void 0;

var e = require("../../../netdisk_utils/transform.js");

exports.myCollectionCountDown = function(t, o) {
    if ("number" != typeof t || 0 === t) return "已停止收集";
    var r = Math.ceil(t / 86400), i = "";
    if (r >= 30) i = (0, e.formatDate)(o) + " "; else if (r > 1) i = r + "天后"; else {
        var n = Math.floor(t / 3600);
        n >= 10 ? (i += n + ":", t -= 3600 * n) : n >= 1 ? (i += "0" + n + ":", t -= 3600 * n) : i += "00:";
        var a = Math.floor(t / 60);
        a >= 10 ? (i += a + ":", t -= 60 * a) : a >= 1 ? (i += "0" + a + ":", t -= 60 * a) : i += "00:", 
        i += t >= 10 ? t : "0" + t + "后";
    }
    return i += "停止收集";
}, exports.myCollectionCreateTime = function(t) {
    var o = new Date().getTime() / 1e3 - t;
    return o > 2592e3 ? (0, e.formatDate)(1e3 * t) : o > 86400 ? Math.ceil(o / 86400) + "天前" : Math.ceil(o / 3600) + "小时前";
};