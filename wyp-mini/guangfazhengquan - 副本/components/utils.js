function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, n) {
    if (null == e) return e;
    var r = n.split("."), o = r.shift();
    return 0 == r.length ? e[o] : t(e[o], r.join("."));
}

function n(e) {
    return "[object object]" === Object.prototype.toString.call(e).toLowerCase();
}

function r(e) {
    var t = e.market, n = e.code, r = e.exchange;
    return {
        exchange: r ? Number(r) : i[t],
        code: String(n)
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CANVAS_GAP = exports.TAG_OPTIONS = exports.MapList = exports.QUOTETYPE = exports.MARKETS = exports.EXCHANGES = void 0;

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}();

exports.getUnique = function(e) {
    return "" + (e || "") + s++;
}, exports.getProp = t, exports.getData = function(e, n) {
    return t(e.data, n);
}, exports.setData = function(e, t, n) {
    var r = {};
    return r[t] = n, e.setData(r), n;
}, exports.getColor = function(e) {
    return 1e-4 < (e = e || 0) ? "#FF3E43" : -1e-4 > e ? "#22BB7E" : "#999999";
}, exports.getSign = function(e) {
    return 1e-4 < (e = e || 0) ? "+" : "";
}, exports.getNumeric = function(e, t, n, r, o) {
    if (null == e) return "";
    var a = e >= 0, s = Math.abs(e) || 0;
    null == t && (t = [ {
        value: 1,
        unit: ""
    }, {
        value: 1e4,
        unit: "万"
    }, {
        value: 1e8,
        unit: "亿"
    }, {
        value: 1e12,
        unit: "万亿"
    } ]), null == n && (n = 2);
    for (var u = s, i = null, c = t.length - 1; c >= 0; c--) if (i = t[c], 1 <= s / i.value) {
        if (r) {
            u = (s / i.value).toFixed(0) - 0, n = u <= 9 ? 2 : u <= 99 ? 1 : 0;
            break;
        }
        u = s / i.value;
        break;
    }
    return function(e, t, r) {
        return t = o ? t.toFixed(n) + i.unit : t.toFixed(Math.min(n, t >= 1e3 ? 0 : t >= 100 ? 1 : n)) + i.unit, 
        e ? t : "-" + t;
    }(a, s / i.value, i.unit);
}, exports.toDate = function(e) {
    if (e) {
        var t = /(\d+)-(\d+)-(\d+)\s+(\d+):(\d+):(\d+)/.exec(e), n = t[1] - 0, r = t[2] - 1, o = t[3] - 0, a = t[4] - 0, s = t[5] - 0, u = t[6] - 0;
        return new Date(n, r, o, a, s, u);
    }
}, exports.formatDate = function(e, t) {
    if (e) {
        var n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var r in n) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
        return t;
    }
}, exports.isObject = n, exports.getVolumeScale = function(e, t) {
    return (e == c.index || e == c.bond) && t == i.sh || e == c.hkstock || e == c.us_secu ? 1 : e == c.bond ? 10 : 100;
}, exports.toMarket = function(e) {
    return u[e];
}, exports.toExchange = function(e) {
    return i[e];
}, exports.stockCvrtId = r, exports.stockCvrt = function(e) {
    return e.id = r(e), delete e.market, delete e.exchange, delete e.code, e;
}, exports.assign = function(e) {
    for (var t = Array.prototype.slice.call(arguments, 1), r = 0, o = t.length; r < o; r++) !function e(t, r) {
        if (r) for (var o in r) null != r[o] && n(r[o]) ? (null != t[o] && n(t[o]) || (t[o] = {}), 
        e(t[o], r[o])) : t[o] = r[o];
    }(e, t[r]);
    return e;
}, exports.isPhoneX = function(e) {
    return -1 != e.model.toLowerCase().indexOf("iphone x");
}, exports.isPhoneSE = function(e) {
    return -1 != e.model.toLowerCase().indexOf("iphone se");
}, exports.logo = function(e) {
    var t = e.type, n = e.market, r = e.exchange, o = e.code;
    return 1 != t && "1" != t || -1 == "000001,000002,000003,000009,000016,000300,000903,000905,000906,399001,399005,399006,399007,399300".indexOf(o) ? a.default.LOGO_URL + "/stock/" + (n || u[r]) + "-stock-" + o + ".png" : a.default.LOGO_URL + "/index/" + (n || u[r]) + "-" + o + ".png";
}, exports.unique = function(e, t) {
    var n = {}, r = [];
    return e.forEach(function(e) {
        n[e[t]] || (r.push(e), n[e[t]] = !0);
    }), r;
}, exports.stockType = function(e, t, n) {
    return n == c.stock || n == c.fund || n == c.index && "sz" == t ? e / 100 : n == c.bond && "sz" == t ? e / 10 : e;
}, exports.getScaledNumber = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return e = e || 0, n ? (e / t).toFixed(n) : e / t;
}, exports.screening = function(e) {
    var t = /\~|\！|\!|\@|\#|\$|\^|\￥|\%|\…|\&|\*|\(|\)|\—|\+|\{|\}|\“|\”|\《|\》|\?|\？|\<|\>|\'|\"/g;
    return e.replace(t, "");
}, exports.sort = function(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    return function e(t) {
        if (t.length <= 1) return t;
        for (var r = Math.floor(t.length / 2), o = t.splice(r, 1)[0], a = [], s = [], u = 0; u < t.length; u++) (n ? t[u].der < o.der : t[u].der > o.der) ? a.push(t[u]) : s.push(t[u]);
        return e(a).concat([ o ], e(s));
    }(e);
}, exports.formatTime = function(e) {
    if (0 == e) return "00: 00";
    if (e < 60) return console.log(e), "00:" + (e < 10 ? "0" + e.toFixed(0) : e.toFixed(0));
    var t = Math.floor(e / 60), n = (e - 60 * t).toFixed(0);
    return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n;
};

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../config")), s = 0, u = exports.EXCHANGES = {
    101: "sh",
    105: "sz",
    111: "neeq",
    161: "hk",
    302: "nasdaq",
    303: "nyse",
    901: "shgt",
    902: "szgt",
    903: "sect"
}, i = exports.MARKETS = {
    sh: 101,
    sz: 105,
    neeq: 111,
    hk: 161,
    nasdaq: 302,
    nyse: 303,
    shgt: 901,
    szgt: 902,
    sect: 903
}, c = exports.QUOTETYPE = {
    index: 1,
    stock: 2,
    bond: 3,
    fund: 4,
    hkstock: 5,
    us_secu: 8
};

exports.MapList = function() {
    function t() {
        e(this, t), this.data = {};
    }
    return o(t, [ {
        key: "add",
        value: function(e, t) {
            var n = this, r = this.data;
            return (r[e] || (r[e] = [])).push(t), function() {
                n.remove(e, t);
            };
        }
    }, {
        key: "remove",
        value: function(e, t) {
            for (var n = this.data[e] || [], r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                null != a && (null != t && a !== t || (n.splice(r, 1), r--));
            }
        }
    }, {
        key: "find",
        value: function(e, t) {
            if (null == e) return [];
            var n = this.data[e] || [], r = [], o = !0, a = !1, s = void 0;
            try {
                for (var u, i = n[Symbol.iterator](); !(o = (u = i.next()).done); o = !0) {
                    var c = u.value;
                    null != t && c !== t || r.push(c);
                }
            } catch (e) {
                a = !0, s = e;
            } finally {
                try {
                    !o && i.return && i.return();
                } finally {
                    if (a) throw s;
                }
            }
            return r;
        }
    }, {
        key: "clear",
        value: function() {
            var e = this.data;
            for (var t in e) this.remove(t);
        }
    }, {
        key: "keys",
        value: function() {
            var e = [];
            for (var t in this.data) e.push(t);
            return e;
        }
    }, {
        key: "values",
        value: function() {
            var e = [], t = !0, n = !1, r = void 0;
            try {
                for (var o, a = this.keys()[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                    var s = o.value;
                    e = e.concat(this.find(s));
                }
            } catch (e) {
                n = !0, r = e;
            } finally {
                try {
                    !t && a.return && a.return();
                } finally {
                    if (n) throw r;
                }
            }
            return e;
        }
    } ]), t;
}(), exports.TAG_OPTIONS = {
    hk: {
        className: "icon-hk",
        text: "HK"
    },
    us: {
        className: "icon-us",
        text: "US"
    },
    sz: {
        className: "icon-sz",
        text: "SZ"
    },
    sh: {
        className: "icon-sh",
        text: "SH"
    },
    rong: {
        className: "icon-rong",
        text: "融"
    },
    shgt: {
        className: "icon-gt",
        text: "沪港通"
    },
    szgt: {
        className: "icon-gt",
        text: "深港通"
    },
    kcb: {
        className: "icon-kcb",
        text: "科创板"
    },
    market_make: {
        className: "icon-market_make",
        text: "做市"
    },
    auction: {
        className: "icon-auction",
        text: "竞价"
    },
    base: {
        className: "icon-base",
        text: "基础层"
    },
    inno: {
        className: "icon-inno",
        text: "创新层"
    },
    ke: {
        className: "icon-ke",
        text: "科"
    },
    neeq: {
        className: "icon-neeq",
        text: "股转"
    }
}, exports.CANVAS_GAP = 1;