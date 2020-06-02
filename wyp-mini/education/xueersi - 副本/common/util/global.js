function validePhone(e) {
    return /^1\d{10}$/.test(e);
}

function isHaveObjectValue(e) {
    var r = Object.prototype.toString.call(e), t = null, n = !0, o = _extends({}, e);
    if ("[object Object]" === r) {
        for (var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) i[l - 1] = arguments[l];
        i && i.length && i.forEach(function(e) {
            e in o && delete o[e];
        });
        for (t in o) if (o[t]) {
            var s = o[t].toString();
            s || (n = !1);
        } else n = !1;
        return n;
    }
}

function getCheckUrl(e) {
    return !(!e || "string" != typeof e || -1 === e.indexOf("evaluation"));
}

function reTextSymbol() {
    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
    return r.some(function(e) {
        return -1 !== e.indexOf("%");
    });
}

function compareVersion(e) {
    for (var r = wx.getSystemInfoSync().SDKVersion.split("."), t = e.split("."), n = Math.max(r.length, t.length); r.length < n; ) r.push("0");
    for (;t.length < n; ) t.push("0");
    for (var o = 0; o < n; o++) {
        var a = parseInt(r[o]), i = parseInt(t[o]);
        if (a > i) return 1;
        if (a < i) return -1;
    }
    return 0;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
};

exports.validePhone = validePhone, exports.isHaveObjectValue = isHaveObjectValue, 
exports.getCheckUrl = getCheckUrl, exports.reTextSymbol = reTextSymbol, exports.compareVersion = compareVersion;