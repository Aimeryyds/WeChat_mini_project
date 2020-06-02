function e(e, r) {
    e = e.split("."), r = r.split(".");
    for (var t = Math.max(e.length, r.length); e.length < t; ) e.push("0");
    for (;r.length < t; ) r.push("0");
    for (var n = 0; n < t; n++) {
        var o = parseInt(e[n]), s = parseInt(r[n]);
        if (o > s) return 1;
        if (o < s) return -1;
    }
    return 0;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compareVersion = e, exports.checkVersion = function(r) {
    var t = wx.getSystemInfoSync().SDKVersion;
    return console.log(t), e(t, r) >= 0;
};