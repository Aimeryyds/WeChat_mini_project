function t(t) {
    var r;
    return 1 == t ? r = parseFloat(864e5) : 2 == t ? r = parseFloat(36e5) : 3 == t ? r = parseFloat(6e4) : 4 == t && (r = parseFloat(1e3)), 
    r;
}

function r(t, r) {
    var e = 6378245, n = .006693421622965943, a = i(r - 105, t - 35), u = o(r - 105, t - 35), l = t / 180 * c, s = Math.sin(l);
    s = 1 - n * s * s;
    var h = Math.sqrt(s);
    return a = 180 * a / (e * (1 - n) / (s * h) * c), u = 180 * u / (e / h * Math.cos(l) * c), 
    {
        lat: a,
        lng: u
    };
}

function e(t, e) {
    if (!t) return [ "", "" ];
    if (a(t, e)) return [ t, e ];
    var n = r(t, e);
    return [ Number(e) + Number(n.lng), Number(t) + Number(n.lat) ];
}

function n(t, e) {
    if (a(t, e)) return [ t, e ];
    var n = r(t, e);
    return [ Number(e) - Number(n.lng), Number(t) - Number(n.lat) ];
}

function a(t, r) {
    return r < 72.004 || r > 137.8347 || (t < .8293 || t > 55.8271);
}

function i(t, r) {
    var e = 2 * t - 100 + 3 * r + .2 * r * r + .1 * t * r + .2 * Math.sqrt(Math.abs(t));
    return e += 2 * (20 * Math.sin(6 * t * c) + 20 * Math.sin(2 * t * c)) / 3, e += 2 * (20 * Math.sin(r * c) + 40 * Math.sin(r / 3 * c)) / 3, 
    e += 2 * (160 * Math.sin(r / 12 * c) + 320 * Math.sin(r * c / 30)) / 3;
}

function o(t, r) {
    var e = 300 + t + 2 * r + .1 * t * t + .1 * t * r + .1 * Math.sqrt(Math.abs(t));
    return e += 2 * (20 * Math.sin(6 * t * c) + 20 * Math.sin(2 * t * c)) / 3, e += 2 * (20 * Math.sin(t * c) + 40 * Math.sin(t / 3 * c)) / 3, 
    e += 2 * (150 * Math.sin(t / 12 * c) + 300 * Math.sin(t / 30 * c)) / 3;
}

function u(t, r) {
    var e = 0, n = t.toString(), a = r.toString();
    try {
        e += n.split(".")[1].length;
    } catch (t) {}
    try {
        e += a.split(".")[1].length;
    } catch (t) {}
    return Number(n.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.gcj_encrypt = e, exports.gcj_decrypt = n, exports.floatMul = u;

var l = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, c = 3.141592653589793;

module.exports = {
    formatTime: function(t) {
        var r = t.getFullYear(), e = t.getMonth() + 1, n = t.getDate(), a = t.getHours(), i = t.getMinutes(), o = t.getSeconds();
        return [ r, e, n ].map(l).join("-") + " " + [ a, i, o ].map(l).join(":");
    },
    CompareDate: function(t, r) {
        return new Date(t.replace(/-/g, "/")) > new Date(r.replace(/-/g, "/"));
    },
    parseURL: function(t) {
        if (t && -1 == t.indexOf("?")) return {};
        for (var r = t.indexOf("?") + 1, e = t.substr(r).split("&"), n = {}, a = 0; a < e.length; a++) {
            var i = e[a].split("="), o = i[0], u = i[1];
            n[o] = u;
        }
        return n;
    },
    getDifferScale: t,
    getDifferDate: function(r, e, n) {
        var a = r, i = e.getTime() - a.getTime();
        return Math.floor(i / t(n));
    },
    gcj_encrypt: e,
    gcj_decrypt: n,
    floatAdd: function(t, r) {
        var e, n, a;
        try {
            e = t.toString().split(".")[1].length;
        } catch (t) {
            e = 0;
        }
        try {
            n = r.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        return a = Math.pow(10, Math.max(e, n)), (t * a + r * a) / a;
    },
    floatSub: function(t, r) {
        var e, n, a, i;
        try {
            e = t.toString().split(".")[1].length;
        } catch (t) {
            e = 0;
        }
        try {
            n = r.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        return a = Math.pow(10, Math.max(e, n)), i = e >= n ? e : n, ((t * a - r * a) / a).toFixed(i);
    },
    floatMul: u,
    floatDiv: function(t, r) {
        var e, n, a = 0, i = 0;
        try {
            a = t.toString().split(".")[1].length;
        } catch (t) {}
        try {
            i = r.toString().split(".")[1].length;
        } catch (t) {}
        return e = Number(t.toString().replace(".", "")), n = Number(r.toString().replace(".", "")), 
        e / n * Math.pow(10, i - a);
    },
    keepTwoDecimal: function(t) {
        var r = parseFloat(t);
        return isNaN(r) ? (alert("传递参数错误，请检查！"), !1) : r = Math.round(100 * t) / 100;
    },
    keep1: function(t) {
        return Math.floor(10 * t) / 10;
    },
    throttle: function(t, r) {
        null != r && void 0 != r || (r = 3e3);
        var e = null;
        return function() {
            var n = +new Date();
            (n - e > r || !e) && (t.apply(this, arguments), e = n);
        };
    }
};