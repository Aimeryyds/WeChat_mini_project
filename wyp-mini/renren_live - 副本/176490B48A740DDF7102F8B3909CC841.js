var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

!function(e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Ald = t();
}(void 0, function() {
    function n(n, e) {
        var t = (65535 & n) + (65535 & e);
        return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    function e(n, e) {
        return n << e | n >>> 32 - e;
    }
    function t(t, o, r, a, i, s) {
        return n(e(n(n(o, t), n(a, s)), i), r);
    }
    function o(n, e, o, r, a, i, s) {
        return t(e & o | ~e & r, n, e, a, i, s);
    }
    function r(n, e, o, r, a, i, s) {
        return t(e & r | o & ~r, n, e, a, i, s);
    }
    function a(n, e, o, r, a, i, s) {
        return t(e ^ o ^ r, n, e, a, i, s);
    }
    function i(n, e, o, r, a, i, s) {
        return t(o ^ (e | ~r), n, e, a, i, s);
    }
    function s(e) {
        for (var t = 1732584193, s = -271733879, u = -1732584194, c = 271733878, f = 0; f < e.length; f += 16) {
            var p = t, d = s, l = u, h = c;
            s = i(s = i(s = i(s = i(s = a(s = a(s = a(s = a(s = r(s = r(s = r(s = r(s = o(s = o(s = o(s = o(s, u = o(u, c = o(c, t = o(t, s, u, c, e[f + 0], 7, -680876936), s, u, e[f + 1], 12, -389564586), t, s, e[f + 2], 17, 606105819), c, t, e[f + 3], 22, -1044525330), u = o(u, c = o(c, t = o(t, s, u, c, e[f + 4], 7, -176418897), s, u, e[f + 5], 12, 1200080426), t, s, e[f + 6], 17, -1473231341), c, t, e[f + 7], 22, -45705983), u = o(u, c = o(c, t = o(t, s, u, c, e[f + 8], 7, 1770035416), s, u, e[f + 9], 12, -1958414417), t, s, e[f + 10], 17, -42063), c, t, e[f + 11], 22, -1990404162), u = o(u, c = o(c, t = o(t, s, u, c, e[f + 12], 7, 1804603682), s, u, e[f + 13], 12, -40341101), t, s, e[f + 14], 17, -1502002290), c, t, e[f + 15], 22, 1236535329), u = r(u, c = r(c, t = r(t, s, u, c, e[f + 1], 5, -165796510), s, u, e[f + 6], 9, -1069501632), t, s, e[f + 11], 14, 643717713), c, t, e[f + 0], 20, -373897302), u = r(u, c = r(c, t = r(t, s, u, c, e[f + 5], 5, -701558691), s, u, e[f + 10], 9, 38016083), t, s, e[f + 15], 14, -660478335), c, t, e[f + 4], 20, -405537848), u = r(u, c = r(c, t = r(t, s, u, c, e[f + 9], 5, 568446438), s, u, e[f + 14], 9, -1019803690), t, s, e[f + 3], 14, -187363961), c, t, e[f + 8], 20, 1163531501), u = r(u, c = r(c, t = r(t, s, u, c, e[f + 13], 5, -1444681467), s, u, e[f + 2], 9, -51403784), t, s, e[f + 7], 14, 1735328473), c, t, e[f + 12], 20, -1926607734), u = a(u, c = a(c, t = a(t, s, u, c, e[f + 5], 4, -378558), s, u, e[f + 8], 11, -2022574463), t, s, e[f + 11], 16, 1839030562), c, t, e[f + 14], 23, -35309556), u = a(u, c = a(c, t = a(t, s, u, c, e[f + 1], 4, -1530992060), s, u, e[f + 4], 11, 1272893353), t, s, e[f + 7], 16, -155497632), c, t, e[f + 10], 23, -1094730640), u = a(u, c = a(c, t = a(t, s, u, c, e[f + 13], 4, 681279174), s, u, e[f + 0], 11, -358537222), t, s, e[f + 3], 16, -722521979), c, t, e[f + 6], 23, 76029189), u = a(u, c = a(c, t = a(t, s, u, c, e[f + 9], 4, -640364487), s, u, e[f + 12], 11, -421815835), t, s, e[f + 15], 16, 530742520), c, t, e[f + 2], 23, -995338651), u = i(u, c = i(c, t = i(t, s, u, c, e[f + 0], 6, -198630844), s, u, e[f + 7], 10, 1126891415), t, s, e[f + 14], 15, -1416354905), c, t, e[f + 5], 21, -57434055), u = i(u, c = i(c, t = i(t, s, u, c, e[f + 12], 6, 1700485571), s, u, e[f + 3], 10, -1894986606), t, s, e[f + 10], 15, -1051523), c, t, e[f + 1], 21, -2054922799), u = i(u, c = i(c, t = i(t, s, u, c, e[f + 8], 6, 1873313359), s, u, e[f + 15], 10, -30611744), t, s, e[f + 6], 15, -1560198380), c, t, e[f + 13], 21, 1309151649), u = i(u, c = i(c, t = i(t, s, u, c, e[f + 4], 6, -145523070), s, u, e[f + 11], 10, -1120210379), t, s, e[f + 2], 15, 718787259), c, t, e[f + 9], 21, -343485551), 
            t = n(t, p), s = n(s, d), u = n(u, l), c = n(c, h);
        }
        return [ t, s, u, c ];
    }
    function u(n) {
        for (var e = "0123456789abcdef", t = "", o = 0; o < 4 * n.length; o++) t += e.charAt(15 & n[o >> 2] >> o % 4 * 8 + 4) + e.charAt(15 & n[o >> 2] >> o % 4 * 8);
        return t;
    }
    function c(n) {
        for (var e = 1 + (n.length + 8 >> 6), t = Array(16 * e), o = 0; o < 16 * e; o++) t[o] = 0;
        for (o = 0; o < n.length; o++) t[o >> 2] |= (255 & n.charCodeAt(o)) << o % 4 * 8;
        return t[o >> 2] |= 128 << o % 4 * 8, t[16 * e - 2] = 8 * n.length, t;
    }
    function f(n) {
        return u(s(c(n)));
    }
    function p() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function d(n) {
        if (!(pn >= 5)) {
            pn++;
            var e = Date.now() + k() + j.app_key.replace(/(^\s*)|(\s*$)/g, "");
            wx.request({
                url: $ + "/authorize/mini_program_openid",
                data: {
                    jc: n,
                    ai: fn,
                    reqid: f(e)
                },
                method: "post",
                success: function(e) {
                    200 == e.data.code ? (wx.setStorageSync("xm_m_openid", e.data.data.openid), l()) : setTimeout(function() {
                        d(n);
                    }, 500);
                },
                fail: function(e) {
                    setTimeout(function() {
                        d(n);
                    }, 500);
                }
            });
        }
    }
    function l() {
        for (var n = 0; n < dn.length; n++) I(), dn[n]();
    }
    function h(n) {
        nn = !0;
        var e = v(n.path), t = {};
        for (var o in B.query) "ald_share_src" === o && (t[o] = B.query[o]);
        var r = "";
        if (r = -1 == n.path.indexOf("?") ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", 
        "" !== e) for (var o in e) t[o] = e[o];
        t.ald_share_src ? -1 == t.ald_share_src.indexOf(Y) && t.ald_share_src.length < 200 && (t.ald_share_src = t.ald_share_src + "," + Y) : t.ald_share_src = Y;
        for (var a in t) -1 == a.indexOf("ald") && (r += a + "=" + t[a] + "&");
        return n.path = r + "ald_share_src=" + t.ald_share_src, n;
    }
    function w(n) {
        rn++, n.at = R, n.et = Date.now(), n.uu = k(), n.v = P, n.ak = j.app_key.replace(/(^\s*)|(\s*$)/g, ""), 
        n.wsr = B, n.ifo = Z, n.rq_c = rn, n.ls = N;
        var e = Date.now() + n.ak + n.uu;
        n.reqid = f(e), n.op = V, n.user_info = n.user_info ? n.user_info : un ? un.userInfo : "", 
        wx.request({
            url: $ + "/api/v3/app",
            data: n,
            header: {
                AldStat: "xmad",
                se: W || "",
                op: V || "",
                img: on
            },
            method: "POST",
            success: function(n) {
                n.statusCode;
            },
            fail: function() {}
        });
    }
    function y(n) {
        function e() {
            w(n), b();
        }
        I(), V ? e() : dn.push(e);
    }
    function g() {
        var n = {};
        for (var e in sn) n[e] = sn[e];
        return n;
    }
    function _(n) {
        var e = {};
        for (var t in n) "rawData" != t && "errMsg" != t && (e[t] = n[t]);
        return e;
    }
    function v(n) {
        if (-1 == n.indexOf("?")) return "";
        var e = {};
        return n.split("?")[1].split("&").forEach(function(n) {
            var t = n.split("=")[1];
            e[n.split("=")[0]] = t;
        }), e;
    }
    function S(n) {
        for (var e = "", t = 0; t < n.length; t++) n[t].length > e.length && (e = n[t]);
        return e;
    }
    function x(n, e, t) {
        t.ev = n, t.life = e, t.ec = cn, t.st = Date.now(), t.dr = Date.now() - G, Q && (t.qr = Q, 
        t.sr = Q), J && (t.usr = J), y(t);
    }
    function m(n) {
        cn++;
    }
    function q() {
        function n() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return n() + n() + n() + n() + n() + n() + n() + n();
    }
    function k() {
        var n = "";
        try {
            n = wx.getStorageSync("ald_dsp_uuid");
        } catch (e) {
            n = "uuid_getstoragesync_error";
        }
        if (!n) {
            n = q();
            try {
                wx.setStorageSync("ald_dsp_uuid", n);
            } catch (n) {
                wx.setStorageSync("ald_dsp_uuid", "uuid_getstoragesync_error");
            }
        }
        return n;
    }
    function I() {
        var n = "";
        try {
            V = n = wx.getStorageSync("xm_m_openid");
        } catch (e) {
            V = n = wx.getStorageSync("xm_m_openid");
        }
        if ("" === n) try {
            n && wx.setStorageSync("xm_m_openid", n);
        } catch (e) {
            n && wx.setStorageSync("xm_m_openid", n);
        }
        return n;
    }
    function b() {
        console.warn("heartbeat", V), ln = "" == V ? "0" : "1", wx.request({
            url: $ + "/api/v3/health?appkey=" + j.app_key + "&op=" + ln,
            method: "GET",
            success: function() {}
        });
    }
    function A(n) {
        j.getOpenid && !I() && wx.login({
            success: function(n) {
                d(n.code);
            }
        }), sn.pk = n.query.pakey ? n.query.pakey : n.query.scene, sn.sa = n.referrerInfo ? n.referrerInfo.appId : n.query.appid ? n.query.appid : "", 
        z = "pa" === n.query.bside;
        var e, t = g();
        e = n.scene != F, F = n.scene, rn = 0, B = n, J = n.query.ald_share_src, Q = n.query.aldsrc || "", 
        X = n.query.ald_share_src, G = Date.now(), an || (Z = !1), an = !1, nn || (0 !== K && Date.now() - K > 3e4 ? R = p() : e && (R = p())), 
        0 !== K && Date.now() - K < 3e4 && (en = !0), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
            shareTicket: n.shareTicket,
            success: function(n) {
                tn = n;
            }
        }) : n.query.ald_share_src, "" === un ? wx.getSetting({
            withCredentials: !0,
            success: function(n) {
                n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        Z = !1, un = n, t.user_info = _(n).userInfo, on = S(n.userInfo.avatarUrl.split("/")), 
                        x("app", "show", t);
                    }
                }) : (Z = !0, x("app", "show", t));
            },
            fail: function() {}
        }) : (Z = !1, t.user_info = _(un).userInfo, on = S(un.userInfo.avatarUrl.split("/")), 
        x("app", "show", t));
    }
    function D(n) {
        z = "pa" === n.query.bside, N = p(), B = n;
    }
    function M() {
        b();
        var n = g();
        K = Date.now(), "" === un ? wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    withCredentials: !0,
                    success: function(e) {
                        un = e, on = S(e.userInfo.avatarUrl.split("/")), n.user_info = _(e).userInfo, x("app", "hide", n);
                    }
                }) : x("app", "hide", n);
            }
        }) : (on = S(un.userInfo.avatarUrl.split("/")), n.user_info = _(un).userInfo, x("app", "hide", n));
    }
    function H(n) {
        yn = n;
    }
    function O() {
        hn = C ? this.$mp.page.route : this.route, en = !1;
    }
    function U() {
        wn = hn;
    }
    function L() {
        wn = hn;
    }
    function T(n) {
        var e = {};
        for (var t in n) "onLaunch" !== t && "onShow" !== t && "onHide" !== t && "onError" !== t && (e[t] = n[t]);
        return e.onLaunch = function(e) {
            D.call(this, e), "function" == typeof n.onLaunch && n.onLaunch.call(this, e);
        }, e.onShow = function(e) {
            A.call(this, e), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, e);
        }, e.onHide = function() {
            M.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
        }, e.onError = function(e) {
            m.call(this, e), n.onError && "function" == typeof n.onError && n.onError.call(this, e);
        }, e;
    }
    function E(n) {
        var e = {};
        for (var t in n) "onLoad" !== t && "onShow" !== t && "onHide" !== t && "onUnload" !== t && "onShareAppMessage" !== t && (e[t] = n[t]);
        return e.onLoad = function(e) {
            H.call(this, e), "function" == typeof n.onLoad && n.onLoad.call(this, e);
        }, e.onShow = function(e) {
            O.call(this), "function" == typeof n.onShow && n.onShow.call(this, e);
        }, e.onHide = function(e) {
            U.call(this), "function" == typeof n.onHide && n.onHide.call(this, e);
        }, e.onUnload = function(e) {
            L.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, e);
        }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (e.onShareAppMessage = function(e) {
            var t = n.onShareAppMessage.call(this, e);
            return void 0 === t ? (t = {}, t.path = this.route) : void 0 === t.path && (t.path = this.route), 
            h.call(this, t);
        }), e;
    }
    var j = require("FA7666628A740DDF9C100E656A9CC841.js"), C = !1, P = "1.0.3", $ = "https://log.xmadx.net";
    j.app_key && 32 === j.app_key.length || console.warn("小盟提示：配置错误，请在dsp_sdk.js中正确配置您的app_key。");
    var z = !1, G = 0, K = 0, N = "", R = "", V = (Date.now(), ""), W = "", B = "", F = "", J = "", Q = "", X = "", Y = k(), Z = "", nn = !1, en = !1, tn = "", on = "", rn = 0, an = !0, sn = {}, un = "", cn = 0, fn = __wxConfig.accountInfo.appId, pn = 0, dn = [], ln = "", hn = "", wn = "", yn = "";
    try {
        var gn = wx.getSystemInfoSync();
        sn.br = gn.brand, sn.pm = gn.model, sn.pr = gn.pixelRatio, sn.ww = gn.windowWidth, 
        sn.wh = gn.windowHeight, sn.lang = gn.language, sn.wv = gn.version, sn.wvv = gn.platform, 
        sn.wsdk = gn.SDKVersion, sn.sv = gn.system;
    } catch (n) {}
    wx.getNetworkType({
        success: function(n) {
            sn.nt = n.networkType;
        }
    }), wx.dsp ? "Object" === Object.prototype.toString.call(wx.dsp).slice(8, -1) && 0 === Object.keys(wx.dsp).length && "ald_dsp" === wx.dsp.name || console.error("wx.dsp已被占用，请联系小盟广告技术人员") : (wx.dsp = {}, 
    wx.dsp.name = "ald_dsp"), wx.dsp.setOpenid = function(n) {
        if (!j.getOpenid) {
            if ("string" != typeof n) return void console.error("openid格式错误");
            if (28 !== n.length) return void console.error("openid位数错误");
            try {
                wx.setStorageSync("xm_m_openid", n);
            } catch (e) {
                wx.setStorageSync("xm_m_openid", n);
            }
            l(), V = n;
            var e = g();
            e.st = Date.now(), e.tp = "openid", e.ev = "event", e.ct = "openid";
        }
    }, b();
    var _n = function(n, e, t) {
        var o = n[e];
        n[e] = function(n) {
            o && o.call(this, n), t.call(this, n);
        };
    };
    return j.plugin ? {
        App: function(n) {
            return App(T(n));
        },
        Page: function(n) {
            return Page(E(n));
        },
        MpvueApp: function(n) {
            return C = !0, T(n);
        },
        MpvuePage: function(n) {
            return E(n);
        }
    } : void function() {
        var n = App, e = Page;
        App = function(e) {
            _n(e, "onLaunch", D), _n(e, "onShow", A), _n(e, "onHide", M), _n(e, "onError", m), 
            n(e);
        }, Page = function(n) {
            var t = n.onShareAppMessage;
            _n(n, "onLoad", H), _n(n, "onUnload", L), _n(n, "onShow", O), _n(n, "onHide", U), 
            void 0 !== t && null !== t && (n.onShareAppMessage = function(n) {
                if (void 0 !== t) {
                    var e = t.call(this, n);
                    return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), 
                    h(e);
                }
            }), e(n);
        };
    }();
});