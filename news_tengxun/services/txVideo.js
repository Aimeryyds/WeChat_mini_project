var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v4139";
    if (!e) return Promise.reject("vid不能是空置");
    if (h.has(e)) return Promise.resolve(h.get(e));
    var o = Math.round(Date.now() / 1e3) + "", c = d[r].code, s = function(e, r, t, n, o) {
        o = o || parseInt(+new Date() / 1e3), n = ("" + n).charAt(0);
        var c = {
            plt: e || "",
            vid: r || "",
            std: t || "",
            sts: n || "",
            ts: o,
            rf: "",
            ua: ""
        };
        c = JSON.stringify(c);
        var s = function(e) {
            for (var r = "", t = "0x" == e.substr(0, 2) ? 2 : 0; t < e.length; t += 2) r += String.fromCharCode(parseInt(e.substr(t, 2), 16));
            return r;
        }(function(e) {
            for (var r = [], t = 0; t < 64; ) r[t] = 0 | 4294967296 * Math.abs(Math.sin(++t));
            function n(e, r) {
                return ((e >> 1) + (r >> 1) << 1) + (1 & e) + (1 & r);
            }
            return function(t) {
                for (var o, a, c, u, i = [], f = decodeURIComponent(encodeURI(t)), s = f.length, d = [ o = 1732584193, a = -271733879, ~o, ~a ], l = 0; l <= s; ) i[l >> 2] |= (f.charCodeAt(l) || 128) << l++ % 4 * 8;
                for (i[t = (s + 8 >> 6) * e + 14] = 8 * s, l = 0; l < t; l += e) {
                    for (s = d, u = 0; u < 64; ) s = [ c = s[3], n(o = s[1], (c = n(n(s[0], [ o & (a = s[2]) | ~o & c, c & o | ~c & a, o ^ a ^ c, a ^ (o | ~c) ][s = u >> 4]), n(r[u], i[[ u, 5 * u + 1, 3 * u + 5, 7 * u ][s] % e + l]))) << (s = [ 7, 12, 17, 22, 5, 9, 14, 20, 4, 11, e, 23, 6, 10, 15, 21 ][4 * s + u++ % 4]) | c >>> 32 - s), o, a ];
                    for (u = 4; u; ) d[--u] = n(d[u], s[u]);
                }
                for (t = ""; u < 32; ) t += (d[u >> 3] >> 4 * (1 ^ 7 & u++) & 15).toString(e);
                return t;
            };
        }(16)(e + r + o + a + "" + n.charAt(0) + t)), d = f(u(s, a), n.charAt(0), o), l = f(u(s, "86FG@hdf"), n.charAt(0), o), v = i(d, 0), h = i(d, 1);
        return {
            p: c,
            u: d,
            c: l,
            u1: v,
            u2: h,
            t: o
        };
    }(c, e, r, 1, o), p = "", g = "", w = "";
    s && s.u1 && s.u2 && s.c && (g = s.u1, w = s.u2, p = "qv_als=" + s.c);
    var b = "devtools" !== n.systemInfo.platform ? 3 : "", y = {
        _rnd: o,
        _qv_rmt: g,
        _qv_rmt2: w,
        platform: c,
        sdtfrom: r,
        dtype: b,
        vid: e,
        defn: "auto",
        otype: "json",
        appVer: "0.0.1",
        newnettype: l[n.systemInfo.networkType || "3g"] || 3
    }, j = {
        method: "GET",
        url: v.h5vv,
        data: y,
        header: {
            cookie: p
        }
    };
    return m(j).catch(function(e) {
        return t.default.error("从".concat(v.h5vv, "获取视频信息异常"), e), j.url = v.bkvv, m(j).catch(function(e) {
            return t.default.error("从".concat(v.bkvv, "获取视频信息异常"), e), e && e.raw ? (e.raw.raw = !0, 
            Promise.reject(e.raw)) : Promise.reject(e);
        });
    }).then(function(n) {
        try {
            var o = n.vl || [], a = o.vi[0] || {}, u = {
                duration: a.td,
                dltype: n.dltype,
                fmid: n.fl.fi.filter(function(e) {
                    return +e.sl;
                })[0].id,
                filesize: n.fl.fi.filter(function(e) {
                    return +e.sl;
                })[0].fs,
                preview: n.preview,
                charge: a.ch
            };
            return a.ch < 1 && (u.preview = n.preview, u.charged = a.ch), 3 == n.dltype ? u.url = a.ul.ui.map(function(e) {
                return e.hls.pt ? e.url + e.hls.pt + "?platform=" + c + "&sdtfrom=" + r : "";
            }) : u.url = a.ul.ui.map(function(e) {
                return e.url + a.fn + "?vkey=" + a.fvkey + "&br=" + a.br + "&fmt=auto&level=" + a.level + "&platform=" + c + "&sdtfrom=" + r;
            }), h.set(e, u), t.default.info("txVideo.getVideoInfo结果:", e, u), u;
        } catch (e) {
            return Promise.reject(e);
        }
    });
};

var r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../utils/logger.js")), n = require("../store/index");

function o(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

var a = "#$#@#*ad", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function u(e, r) {
    for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) ^ r.charCodeAt(n % 4));
    return t;
}

function i(e, r) {
    for (var t = "", n = r; n < e.length; n += 2) t += e.charAt(n);
    return t;
}

function f(e, r, t) {
    for (var n, o, a, u, i, f, s, d = "", l = 0; l < e.length; ) n = e.charCodeAt(l++), 
    o = e.charCodeAt(l++), a = e.charCodeAt(l++), 15 == l && (d += "A", d += r, d += t), 
    u = n >> 2, i = (3 & n) << 4 | o >> 4, f = (15 & o) << 2 | a >> 6, s = 63 & a, isNaN(o) ? f = s = 64 : isNaN(a) && (s = 64), 
    d = d + c.charAt(u) + c.charAt(i) + c.charAt(f) + c.charAt(s);
    return d;
}

var s = {
    10001: "初始化错误",
    50: "CGI系统错误,请刷新页面重试",
    51: "vid个数超出范围",
    52: "访问视频付费信息失败，请刷新页面重试",
    64: "校验视频付费信息失败，请刷新页面重试",
    61: "您请求的视频已下架",
    62: "视频状态不合法",
    63: "清晰度格式不合法",
    65: "速度格式不合法",
    66: "视频格式不存在",
    68: "CGI系统错误,请刷新页面重试",
    69: "format列表为空",
    71: "未找到HLS CDN",
    73: "生成文件名失败",
    74: "分片号不合法",
    76: "获取m3u8文件名失败",
    77: "生成HLS key失败",
    80: "因版权限制，请到腾讯视频观看",
    81: "referer限制",
    82: "qzone权限限制",
    83: "该片为付费视频，VIP会员免费观看",
    84: "访问IP是黑名单",
    86: "CGI访问频率限制",
    444: "CGI系统错误，请刷新页面重试",
    defaultMsg: "加载失败，请重试"
}, d = {
    v4143: {
        code: "260801",
        name: "ke.qq.com"
    },
    v4142: {
        code: "570801",
        name: "qnreading"
    },
    v4141: {
        code: "3040801",
        name: "om"
    },
    v4140: {
        code: "60801",
        name: "wx_reader"
    },
    v4139: {
        code: "20801",
        name: "news"
    },
    v4138: {
        code: "10801",
        name: "video"
    }
}, l = {
    "4g": 4,
    "3g": 3,
    "2g": 2,
    wifi: 1
}, v = {
    h5vv: "https://h5vv.video.qq.com/getinfo",
    bkvv: "https://bkvv.video.qq.com/getinfo"
}, h = new Map();

function p(e) {
    var n = Date.now(), a = Math.random().toString(26).substr(3, 4);
    return new Promise(function(n, c) {
        t.default.warn("--\x3ereq(".concat(a, ")[").concat(e.method, "] ").concat(e.url), e.data), 
        wx.request(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    (0, r.default)(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
            }
            return e;
        }({}, e, {
            success: n,
            fail: c
        }));
    }).then(function(r) {
        var o = Date.now();
        if (t.default.warn("<--rep(".concat(a, ")[").concat(e.method, "] ").concat(o - n, " ").concat(e.url, " statusCode=").concat(r.statusCode)), 
        r && 200 === r.statusCode && r.data) {
            var c = r.data;
            if ("string" != typeof c) return c;
            c = (c = c.trim()).replace(/^(data|QZOutputJson)=/, "").replace(/;?$/, "");
            try {
                c = JSON.parse(c);
            } catch (e) {
                return t.default.error("视频数据返回格式错误", c, e), Promise.reject(e);
            }
            return c;
        }
        return t.default.error("视频数据返回格式错误", r), Promise.reject(r);
    });
}

function m(e) {
    return p(e).then(function(e) {
        if (e.em) {
            var r = new Error(s[e.em]);
            return r.code = e.em, r.raw = e, Promise.reject(r);
        }
        return e;
    });
}