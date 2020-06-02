var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self, 
    t.HD = n());
}(void 0, function() {
    function t(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports;
    }
    function n() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r, o = t[0];
        if (xe) {
            switch (o) {
              case "debug":
                r = console.log;
                break;

              case "warn":
                r = console.warn;
                break;

              case "error":
                r = console.error;
                break;

              default:
                r = console.log;
            }
            var i = "[" + Ee + " " + o.toUpperCase() + "]";
            r.apply(void 0, [ i ].concat(t.slice(1)));
        }
    }
    function r() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        n.apply(void 0, [ "debug" ].concat(t));
    }
    function o() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        n.apply(void 0, [ "warn" ].concat(t));
    }
    function i() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        n.apply(void 0, [ "error" ].concat(t));
    }
    function a(e, t) {
        return Oe + "?act=" + e + t;
    }
    function u(e) {
        e = e || {};
        var t = {}, n = {
            wxsdkver: "basiclibver",
            wxos: "os",
            wxl: "lang",
            openid: "uuid"
        };
        for (var r in e) Ne(e, r) && (n[r] ? t[n[r]] = e[r] : t[r] = e[r]);
        return t;
    }
    function c(e) {
        void 0 === e && (e = 12);
        for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", n = "", r = 0; r < e; r++) n += t.charAt(Math.floor(Math.random() * t.length));
        return n;
    }
    function f() {
        return Date.now();
    }
    function s() {
        return "weapp" + c() + ("" + (Date.now() + Math.floor(1e7 * Math.random())));
    }
    function p(e) {
        var t = "";
        for (var n in e) Ne(e, n) && (t += "&" + n + "=" + encodeURIComponent(e[n]));
        return t;
    }
    function l() {
        return me.get(_e);
    }
    function d(e) {
        me.set(_e, e);
    }
    function v() {
        var e = {};
        try {
            var t = wx.getSystemInfoSync() || {}, n = t.model, r = t.version, o = t.windowWidth, a = t.windowHeight, u = t.language, c = t.SDKVersion;
            e.model = n.indexOf("<") > -1 ? n.split("<")[0] : n, e.wxos = r, e.sr = o + "*" + a, 
            e.wxl = u, e.timezone = -new Date().getTimezoneOffset() / 60, e.wxsdkver = c;
        } catch (e) {
            i("Error in getSystemInfoSync", e.message || e);
        }
        return e;
    }
    function h(e) {
        var t = be.HDNET_2G, n = be.HDNET_3G, r = be.HDNET_4G, o = be.HDNET_WIFI, i = be.HDNET_5G, a = "";
        wx.getNetworkType({
            success: function(e) {
                var u = (void 0 === e ? {} : e).networkType;
                switch ((void 0 === u ? "" : u).toLocaleLowerCase()) {
                  case "wifi":
                    a = o;
                    break;

                  case "3g":
                    a = n;
                    break;

                  case "2g":
                    a = t;
                    break;

                  case "4g":
                    a = r;
                    break;

                  case "5g":
                    a = i;
                }
            },
            complete: function() {
                e(a);
            }
        });
    }
    function y() {
        var e = getCurrentPages()[getCurrentPages().length - 1];
        return e.route || e.__route__;
    }
    function g(e) {
        var t = e.url, n = e.handlers, r = n.success, a = n.fail, u = n.complete, c = e.onQueueTaskSuccess, f = e.onQueueTaskError;
        if (!t) throw new Error("url is required");
        wx.request({
            url: t,
            data: "",
            header: {
                accept: "image/*"
            },
            method: "GET",
            success: function() {
                Ae(r) && r(), Ae(c) && c();
            },
            fail: function(e) {
                i("wx.request Error: ", e), o("如果出现convert utf8 fail表示请求显示出错，但是数据上报成功，👆这是微信小程序内部的BUG，请查阅: https://github.com/rchunping/wxapp-google-analytics/issues/1"), 
                Ae(a) && a(e), Ae(f) && f();
            },
            complete: function() {
                Ae(u) && u();
            }
        });
    }
    function w(e) {
        var t = e.reportDataFn;
        {
            if ("function" == typeof t) return {
                serviceReport: function(e) {
                    if (Fe(e)) {
                        var n = new Date().getTime(), r = Be(n, e);
                        r.reqdata = JSON.stringify([ {
                            scode: e.scode,
                            uri: e.uri,
                            reqtime: e.timeSpent,
                            ret: e.code,
                            rtime: n
                        } ]), t && t({
                            type: Se.HDMSGTYPE_METRICS,
                            payload: r
                        });
                    }
                },
                countReport: function(e) {
                    if (Fe(e)) {
                        var n = new Date().getTime(), r = Be(n, e);
                        r.counterdata = JSON.stringify([ {
                            scode: e.scode,
                            uri: e.uri,
                            counterName: e.countName,
                            value: e.count,
                            invokecount: 1
                        } ]), t && t({
                            type: Se.HDMSGTYPE_METRICS,
                            payload: r
                        });
                    }
                },
                customReport: function(e) {
                    if (Fe(e)) {
                        var n = new Date().getTime(), r = Be(n, e);
                        r.flatdata = JSON.stringify([ {
                            scode: e.scode,
                            uri: e.uri,
                            topic: e.topic,
                            val: e.val,
                            extra: e.extra
                        } ]), t && t({
                            type: Se.HDMSGTYPE_METRICS,
                            payload: r
                        });
                    }
                }
            };
            console.warn("reportDataFn 必须是一个函数");
        }
    }
    function m(e) {
        var t = l();
        t || (d(t = f()), Ae(e) && e(t));
    }
    function S(e) {
        var t = e.type, n = e.payload, o = e.success, i = e.fail, u = e.complete, l = n.uid, d = n.userinfo, v = n.openid, h = n.unionid, y = n.reserve, g = n.time, w = Se.HDMSGTYPE_EXIT, m = Se.HDMSGTYPE_RUN, S = Se.HDMSGTYPE_LOGIN, T = Se.HDMSGTYPE_INIT, E = Se.HDMSGTYPE_PAGE, R = Se.HDMSGTYPE_HEARTBEAT, _ = Se.HDMSGTYPE_EVENT, D = Se.HDMSGTYPE_METRICS;
        l || (l = me.get(De)), v || (v = me.get(Me)), h || (h = me.get(Re));
        var P = "MSG" + c() + f(), M = {
            time: g || Math.round(f() / 1e3),
            msgid: P,
            uid: l,
            openid: v,
            unionid: h
        };
        t === m && (M.userinfo = JSON.stringify(d)), y && (M.reserve = JSON.stringify(y));
        var H = me.get(Pe);
        if (H) M.deviceId = H; else {
            var O = s();
            me.set(Pe, O), M.deviceId = O;
        }
        var x = Object.assign({}, n, M);
        r("准备上报的参数: ", x), x = p(x);
        var k;
        switch (t) {
          case w:
            k = a("webwxsdklaunch", x);
            break;

          case m:
            k = a("webwxsdkrun", x);
            break;

          case S:
            k = a("webwxsdklogin", x);
            break;

          case T:
            k = a("wxsdkinstall", x);
            break;

          case E:
            k = a("webwxsdkpage", x);
            break;

          case _:
            k = a("webwxsdkeven", x);
            break;

          case R:
            k = a("webminiappheartbeat", x);
            break;

          case D:
            k = a("mmetric", x);
            break;

          default:
            k = a("webwechatapp", x);
        }
        !k || Le && Le.length && Le.indexOf(k) > -1 || Le.push({
            url: k,
            handlers: {
                success: o,
                fail: i,
                complete: u
            }
        }), b();
    }
    function b(t) {
        function n() {
            function r() {
                try {
                    g({
                        handlers: f,
                        url: c
                    });
                } catch (e) {
                    i(e);
                }
                We = !1, b();
            }
            function o() {
                We = !1, b();
            }
            var a = Le || [];
            if (a.length) {
                var u = a.shift() || {}, c = u.url, f = u.handlers;
                if ("string" == typeof c && c && "object" === (void 0 === f ? "undefined" : e(f))) {
                    We = !0;
                    var s = setTimeout(function() {
                        try {
                            clearTimeout(s), s = null, g({
                                handlers: f,
                                url: c,
                                onQueueTaskSuccess: o,
                                onQueueTaskError: r
                            });
                        } catch (e) {
                            i(e), We = !1;
                        }
                    }, t.delay);
                } else n();
            } else We = !1;
        }
        t = Object.assign({
            delay: 100
        }, t), We || n();
    }
    var T = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, E = t(function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t);
    }), R = t(function(e) {
        var t = e.exports = {
            version: "2.6.3"
        };
        "number" == typeof __e && (__e = t);
    }), _ = (R.version, function(t) {
        return "object" === (void 0 === t ? "undefined" : e(t)) ? null !== t : "function" == typeof t;
    }), D = function(e) {
        if (!_(e)) throw TypeError(e + " is not an object!");
        return e;
    }, P = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    }, M = !P(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), H = E.document, O = _(H) && _(H.createElement), x = function(e) {
        return O ? H.createElement(e) : {};
    }, k = !M && !P(function() {
        return 7 != Object.defineProperty(x("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), G = function(e, t) {
        if (!_(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !_(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !_(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !_(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value");
    }, A = Object.defineProperty, N = {
        f: M ? Object.defineProperty : function(e, t, n) {
            if (D(e), t = G(t, !0), D(n), k) try {
                return A(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        }
    }, I = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    }, j = M ? function(e, t, n) {
        return N.f(e, t, I(1, n));
    } : function(e, t, n) {
        return e[t] = n, e;
    }, Y = {}.hasOwnProperty, C = function(e, t) {
        return Y.call(e, t);
    }, U = 0, B = Math.random(), F = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++U + B).toString(36));
    }, L = t(function(e) {
        var t = F("src"), n = Function.toString, r = ("" + n).split("toString");
        R.inspectSource = function(e) {
            return n.call(e);
        }, (e.exports = function(e, n, o, i) {
            var a = "function" == typeof o;
            a && (C(o, "name") || j(o, "name", n)), e[n] !== o && (a && (C(o, t) || j(o, t, e[n] ? "" + e[n] : r.join(String(n)))), 
            e === E ? e[n] = o : i ? e[n] ? e[n] = o : j(e, n, o) : (delete e[n], j(e, n, o)));
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[t] || n.call(this);
        });
    }), W = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
    }, q = function(e, t, n) {
        if (W(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };

          case 2:
            return function(n, r) {
                return e.call(t, n, r);
            };

          case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    }, J = function e(t, n, r) {
        var o, i, a, u, c = t & e.F, f = t & e.G, s = t & e.S, p = t & e.P, l = t & e.B, d = f ? E : s ? E[n] || (E[n] = {}) : (E[n] || {}).prototype, v = f ? R : R[n] || (R[n] = {}), h = v.prototype || (v.prototype = {});
        f && (r = n);
        for (o in r) a = ((i = !c && d && void 0 !== d[o]) ? d : r)[o], u = l && i ? q(a, E) : p && "function" == typeof a ? q(Function.call, a) : a, 
        d && L(d, o, a, t & e.U), v[o] != a && j(v, o, u), p && h[o] != a && (h[o] = a);
    };
    E.core = R, J.F = 1, J.G = 2, J.S = 4, J.P = 8, J.B = 16, J.W = 32, J.U = 64, J.R = 128;
    var K = J, z = {}.toString, Q = function(e) {
        return z.call(e).slice(8, -1);
    }, V = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == Q(e) ? e.split("") : Object(e);
    }, X = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e;
    }, Z = function(e) {
        return V(X(e));
    }, $ = Math.ceil, ee = Math.floor, te = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? ee : $)(e);
    }, ne = Math.min, re = function(e) {
        return e > 0 ? ne(te(e), 9007199254740991) : 0;
    }, oe = Math.max, ie = Math.min, ae = function(e, t) {
        return (e = te(e)) < 0 ? oe(e + t, 0) : ie(e, t);
    }, ue = t(function(e) {
        var t = E["__core-js_shared__"] || (E["__core-js_shared__"] = {});
        (e.exports = function(e, n) {
            return t[e] || (t[e] = void 0 !== n ? n : {});
        })("versions", []).push({
            version: R.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    })("keys"), ce = function(e) {
        return function(t, n, r) {
            var o, i = Z(t), a = re(i.length), u = ae(r, a);
            if (e && n != n) {
                for (;a > u; ) if ((o = i[u++]) != o) return !0;
            } else for (;a > u; u++) if ((e || u in i) && i[u] === n) return e || u || 0;
            return !e && -1;
        };
    }(!1), fe = function(e) {
        return ue[e] || (ue[e] = F(e));
    }("IE_PROTO"), se = function(e, t) {
        var n, r = Z(e), o = 0, i = [];
        for (n in r) n != fe && C(r, n) && i.push(n);
        for (;t.length > o; ) C(r, n = t[o++]) && (~ce(i, n) || i.push(n));
        return i;
    }, pe = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), le = Object.keys || function(e) {
        return se(e, pe);
    }, de = {
        f: Object.getOwnPropertySymbols
    }, ve = {
        f: {}.propertyIsEnumerable
    }, he = function(e) {
        return Object(X(e));
    }, ye = Object.assign, ge = !ye || P(function() {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e;
        }), 7 != ye({}, e)[n] || Object.keys(ye({}, t)).join("") != r;
    }) ? function(e, t) {
        for (var n = he(e), r = arguments.length, o = 1, i = de.f, a = ve.f; r > o; ) for (var u, c = V(arguments[o++]), f = i ? le(c).concat(i(c)) : le(c), s = f.length, p = 0; s > p; ) a.call(c, u = f[p++]) && (n[u] = c[u]);
        return n;
    } : ye;
    K(K.S + K.F, "Object", {
        assign: ge
    });
    R.Object.assign;
    var we = t(function(e) {
        function t() {
            return e.exports = t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }, t.apply(this, arguments);
        }
        e.exports = t;
    }), me = {
        set: function(e, t) {
            wx.setStorageSync(e, t);
        },
        get: function(e) {
            return wx.getStorageSync(e);
        },
        remove: function(e) {
            wx.removeStorageSync(e);
        }
    }, Se = {
        HDMSGTYPE_INIT: 1,
        HDMSGTYPE_RUN: 2,
        HDMSGTYPE_LOGIN: 5,
        HDMSGTYPE_EVENT: 3,
        HDMSGTYPE_PAGE: 4,
        HDMSGTYPE_HEARTBEAT: 6,
        HDMSGTYPE_METRICS: 7,
        HDMSGTYPE_EXIT: -1
    }, be = {
        HDNET_2G: 1,
        HDNET_3G: 2,
        HDNET_WIFI: 3,
        HDNET_4G: 4,
        HDNET_5G: 5,
        HDNET_OTHER: 0
    }, Te = {
        ios: 0,
        wp: 1,
        android: 2
    }, Ee = "HDWEAPPSDK", Re = Ee + "_unionid", _e = Ee + "_installTime", De = Ee + "_uid", Pe = Ee + "_deviceId", Me = Ee + "_openid", He = Ee + "__NULL_OPENID", Oe = "https://ylog.hiido.com/c.gif", xe = !1, ke = function() {
        xe = !0;
    }, Ge = null, Ae = function(e) {
        return "function" == typeof e;
    }, Ne = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, Ie = function(e) {
        var t = Te.ios;
        return Object.keys(Te).forEach(function(n) {
            new RegExp(n, "i").test(e) && (t = Te[n]);
        }), t;
    }, je = function(e) {
        if (Ge && !e) return Ge;
        try {
            Ge = wx.getSystemInfoSync();
        } catch (e) {
            Ge = null, console.warn("调用 wx.getSystemInfoSync 捕获异常 error ", e);
        }
        return Ge;
    }, Ye = "2.4.2", Ce = t(function(e) {
        !function(t) {
            function n(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }
            function r(e, t) {
                return e << t | e >>> 32 - t;
            }
            function o(e, t, o, i, a, u) {
                return n(r(n(n(t, e), n(i, u)), a), o);
            }
            function i(e, t, n, r, i, a, u) {
                return o(t & n | ~t & r, e, t, i, a, u);
            }
            function a(e, t, n, r, i, a, u) {
                return o(t & r | n & ~r, e, t, i, a, u);
            }
            function u(e, t, n, r, i, a, u) {
                return o(t ^ n ^ r, e, t, i, a, u);
            }
            function c(e, t, n, r, i, a, u) {
                return o(n ^ (t | ~r), e, t, i, a, u);
            }
            function f(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var r, o, f, s, p, l = 1732584193, d = -271733879, v = -1732584194, h = 271733878;
                for (r = 0; r < e.length; r += 16) o = l, f = d, s = v, p = h, d = c(d = c(d = c(d = c(d = u(d = u(d = u(d = u(d = a(d = a(d = a(d = a(d = i(d = i(d = i(d = i(d, v = i(v, h = i(h, l = i(l, d, v, h, e[r], 7, -680876936), d, v, e[r + 1], 12, -389564586), l, d, e[r + 2], 17, 606105819), h, l, e[r + 3], 22, -1044525330), v = i(v, h = i(h, l = i(l, d, v, h, e[r + 4], 7, -176418897), d, v, e[r + 5], 12, 1200080426), l, d, e[r + 6], 17, -1473231341), h, l, e[r + 7], 22, -45705983), v = i(v, h = i(h, l = i(l, d, v, h, e[r + 8], 7, 1770035416), d, v, e[r + 9], 12, -1958414417), l, d, e[r + 10], 17, -42063), h, l, e[r + 11], 22, -1990404162), v = i(v, h = i(h, l = i(l, d, v, h, e[r + 12], 7, 1804603682), d, v, e[r + 13], 12, -40341101), l, d, e[r + 14], 17, -1502002290), h, l, e[r + 15], 22, 1236535329), v = a(v, h = a(h, l = a(l, d, v, h, e[r + 1], 5, -165796510), d, v, e[r + 6], 9, -1069501632), l, d, e[r + 11], 14, 643717713), h, l, e[r], 20, -373897302), v = a(v, h = a(h, l = a(l, d, v, h, e[r + 5], 5, -701558691), d, v, e[r + 10], 9, 38016083), l, d, e[r + 15], 14, -660478335), h, l, e[r + 4], 20, -405537848), v = a(v, h = a(h, l = a(l, d, v, h, e[r + 9], 5, 568446438), d, v, e[r + 14], 9, -1019803690), l, d, e[r + 3], 14, -187363961), h, l, e[r + 8], 20, 1163531501), v = a(v, h = a(h, l = a(l, d, v, h, e[r + 13], 5, -1444681467), d, v, e[r + 2], 9, -51403784), l, d, e[r + 7], 14, 1735328473), h, l, e[r + 12], 20, -1926607734), v = u(v, h = u(h, l = u(l, d, v, h, e[r + 5], 4, -378558), d, v, e[r + 8], 11, -2022574463), l, d, e[r + 11], 16, 1839030562), h, l, e[r + 14], 23, -35309556), v = u(v, h = u(h, l = u(l, d, v, h, e[r + 1], 4, -1530992060), d, v, e[r + 4], 11, 1272893353), l, d, e[r + 7], 16, -155497632), h, l, e[r + 10], 23, -1094730640), v = u(v, h = u(h, l = u(l, d, v, h, e[r + 13], 4, 681279174), d, v, e[r], 11, -358537222), l, d, e[r + 3], 16, -722521979), h, l, e[r + 6], 23, 76029189), v = u(v, h = u(h, l = u(l, d, v, h, e[r + 9], 4, -640364487), d, v, e[r + 12], 11, -421815835), l, d, e[r + 15], 16, 530742520), h, l, e[r + 2], 23, -995338651), v = c(v, h = c(h, l = c(l, d, v, h, e[r], 6, -198630844), d, v, e[r + 7], 10, 1126891415), l, d, e[r + 14], 15, -1416354905), h, l, e[r + 5], 21, -57434055), v = c(v, h = c(h, l = c(l, d, v, h, e[r + 12], 6, 1700485571), d, v, e[r + 3], 10, -1894986606), l, d, e[r + 10], 15, -1051523), h, l, e[r + 1], 21, -2054922799), v = c(v, h = c(h, l = c(l, d, v, h, e[r + 8], 6, 1873313359), d, v, e[r + 15], 10, -30611744), l, d, e[r + 6], 15, -1560198380), h, l, e[r + 13], 21, 1309151649), v = c(v, h = c(h, l = c(l, d, v, h, e[r + 4], 6, -145523070), d, v, e[r + 11], 10, -1120210379), l, d, e[r + 2], 15, 718787259), h, l, e[r + 9], 21, -343485551), 
                l = n(l, o), d = n(d, f), v = n(v, s), h = n(h, p);
                return [ l, d, v, h ];
            }
            function s(e) {
                var t, n = "", r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n;
            }
            function p(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n;
            }
            function l(e) {
                return s(f(p(e), 8 * e.length));
            }
            function d(e, t) {
                var n, r, o = p(e), i = [], a = [];
                for (i[15] = a[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], 
                a[n] = 1549556828 ^ o[n];
                return r = f(i.concat(p(t)), 512 + 8 * t.length), s(f(a.concat(r), 640));
            }
            function v(e) {
                var t, n, r = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                return r;
            }
            function h(e) {
                return unescape(encodeURIComponent(e));
            }
            function y(e) {
                return l(h(e));
            }
            function g(e) {
                return v(y(e));
            }
            function w(e, t) {
                return d(h(e), h(t));
            }
            function m(e, t) {
                return v(w(e, t));
            }
            function S(e, t, n) {
                return t ? n ? w(t, e) : m(t, e) : n ? y(e) : g(e);
            }
            e.exports ? e.exports = S : t.md5 = S;
        }(T);
    }), Ue = function(e, t) {
        return Ce(e + t + "HiidoYYSystem").toLowerCase();
    }, Be = function(e, t) {
        t = t || {};
        var n = Math.round(e / 1e3), r = Ue("mmetric", n), o = JSON.stringify([]), i = je() || {}, a = i.system, u = i.model, c = i.model, f = t.sys && Ne.call(Te, t.sys) ? Te[t.sys] : Ie(a);
        return {
            time: n,
            key: r,
            appkey: "",
            ver: t.ver,
            sdkver: Ye,
            sys: f,
            osver: a,
            model: u,
            sjp: c,
            net: "",
            clienttime: e,
            reqdata: o,
            counterdata: o,
            flatdata: o
        };
    }, Fe = function(e) {
        for (var t, n = [ "scode", "ver", "uri" ], r = 0; r < n.length; r++) if (t = n[r], 
        !e[t]) return console.warn("Metrics 上报必须上报 " + t), !1;
        return !0;
    }, Le = [], We = !1, qe = 0;
    return function() {
        var t = !1, n = !1, o = null, a = {
            appkey: "",
            appName: "",
            ver: "",
            wxsdkver: "",
            sdkver: Ye,
            time: "",
            uid: "",
            wxos: "",
            wxl: "",
            sr: "",
            net: "",
            model: "",
            deviceId: "",
            timezone: "",
            unionid: "",
            initTime: "",
            openid: "",
            scene: "",
            reserve: ""
        }, c = function(e) {
            Object.assign(a, e);
        }, s = {
            launchTime: 0,
            initTime: 0,
            hideTime: 0,
            session_id: 0,
            options: {},
            debug: !1
        }, p = {
            pageRoute: "",
            pageReferrer: "",
            pageStartTime: 0,
            pageDuration: 0
        }, l = function(e) {
            Object.assign(p, e);
        }, d = {
            count: 0,
            start: function(e) {
                var t = this;
                e = e || 1e4;
                var n = function() {
                    6 !== t.count || 1e4 !== e ? (t.count += 1, t.report()) : t.restart(3e4);
                };
                o ? r("正在重复调用 heart.start 方法，已阻止") : (n(), o = setInterval(n, e));
            },
            restart: function(e) {
                this.stop(), this.start(e);
            },
            stop: function() {
                o && (clearInterval(o), o = null, this.count = 0, r("Heartbeat stoped!"));
            },
            report: function() {
                var e = u(a);
                S({
                    type: Se.HDMSGTYPE_HEARTBEAT,
                    payload: we({}, e, {
                        sdkType: 1
                    }),
                    success: function() {
                        r("Heartbeat succeed!");
                    },
                    fail: function(e) {
                        i("Heartbeat failed!", e);
                    }
                });
            }
        }, g = {
            launch: function(e) {
                this.init(e);
            },
            init: function(e) {
                var n = this, o = e || {}, u = o.appkey, p = void 0 === u ? "" : u, l = o.appName, y = void 0 === l ? "" : l, g = o.version, w = void 0 === g ? "" : g, b = o.scene, T = void 0 === b ? "" : b, E = o.autoAppReport, R = void 0 === E || E, _ = o.autoPageReport, D = void 0 === _ || _, P = o.autoPullDownRefreshReport, M = void 0 === P || P, H = o.autoReachBottomReport, O = void 0 === H || H, x = o.autoShareReport, k = void 0 === x || x, G = o.debug, A = void 0 !== G && G;
                if (A && ke(), me.get(Me) || me.set(Me, He), t) i("SDK 只能 launch 一次"); else {
                    if (s.options = Object.assign({}, {
                        autoAppReport: R,
                        autoPageReport: D,
                        autoPullDownRefreshReport: M,
                        autoReachBottomReport: O,
                        autoShareReport: k,
                        debug: A
                    }), c(we({
                        appkey: p,
                        appName: y,
                        ver: w,
                        sdkver: Ye,
                        scene: T,
                        initTime: f()
                    }, v())), h(function(e) {
                        c({
                            net: e
                        }), d.start(), m(function(e) {
                            S({
                                type: Se.HDMSGTYPE_INIT,
                                payload: we({}, a, {
                                    installTime: e
                                }),
                                success: function() {
                                    r("Report SDK install succeed!");
                                },
                                fail: function(e) {
                                    i("Report SDK install failed!", e);
                                }
                            });
                        });
                    }), R) {
                        if (wx.onAppShow) wx.onAppShow(function() {
                            n.show();
                        }); else var N = setTimeout(function() {
                            clearTimeout(N), N = null;
                            var e = getApp(), t = e.onShow;
                            n.show(), e.onShow = function() {
                                n.show();
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                t.apply.apply(t, [ e ].concat(o));
                            };
                        }, 0);
                        if (wx.onAppHide) wx.onAppHide(function() {
                            n.hide();
                        }); else var I = setTimeout(function() {
                            clearTimeout(I), I = null;
                            var e = getApp(), t = e.onHide;
                            e.onHide = function() {
                                n.hide();
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                t.apply.apply(t, [ e ].concat(o));
                            };
                        }, 0);
                    }
                    t = !0, this.attachMetricMethods();
                }
            },
            run: function(e) {
                var t = void 0 === e ? {} : e, o = t.path, u = void 0 === o ? "" : o, c = t.userInfo, f = void 0 === c ? {} : c, s = t.reserve, p = void 0 === s ? null : s;
                n ? r("正在重复调用 Run 方法，已阻止") : (p && this.setReserveData(p), d.report(), S({
                    type: Se.HDMSGTYPE_RUN,
                    payload: we({}, a, {
                        lpath: u,
                        userinfo: f
                    }),
                    success: function() {
                        r("Report SDK run succeed!");
                    },
                    fail: function(e) {
                        i("Report SDK run failed!", e);
                    }
                }), n = !0);
            },
            setUnionid: function(e) {
                return c({
                    unionid: e
                }), me.set(Re, e);
            },
            setOpenid: function(e) {
                return c({
                    openid: e
                }), me.set(Me, e);
            },
            setUid: function(e) {
                return c({
                    uid: e
                }), me.set(De, e);
            },
            login: function(e) {
                var t = e.uid, n = e.status;
                t && this.setUid(t), S({
                    type: Se.HDMSGTYPE_LOGIN,
                    payload: we({}, a, {
                        status: n
                    }),
                    success: function() {
                        r("Report login succeed");
                    },
                    fail: function(e) {
                        i("Report login failed", e);
                    }
                });
            },
            logout: function() {
                me.remove(De);
            },
            show: function() {
                d.start(), qe = f(), r("App Show"), l({
                    pageReferrer: ""
                });
            },
            hide: function() {
                o && d.stop(), r("App Hide");
                var e = (f() - qe) / 1e3;
                qe = 0, S({
                    type: Se.HDMSGTYPE_EXIT,
                    payload: we({}, a, {
                        duration: e
                    }),
                    success: function() {
                        r("Report App duration succeed, duration: " + e + " s");
                    },
                    fail: function(e) {
                        r("Report App duration failed!", e);
                    }
                });
            },
            event: function(e) {
                var t = {};
                if (!Ne(e, "id")) return i("自定义事件必须指定 id"), !1;
                Ne(e, "label") && (t.label = e.label), Ne(e, "params") && (t.params = e.params), 
                Object.assign(t, {
                    id: e.id,
                    count: e.count || 1
                }), S({
                    type: Se.HDMSGTYPE_EVENT,
                    payload: we({}, a, {
                        even: JSON.stringify([ t ]),
                        eventype: e.eventype || 0
                    }),
                    success: function() {
                        r("Report custom event succeed!");
                    },
                    fail: function() {
                        r("Report custom event Failed!");
                    }
                });
            },
            setReserveData: function(e) {
                c({
                    reserve: e
                });
            },
            attachMetricMethods: function() {
                this.Metrics = w({
                    reportDataFn: S
                });
            }
        };
        return we({}, g, {
            Page: {
                load: function() {
                    this.init.apply(this, arguments);
                },
                init: function() {
                    var e = this, t = getCurrentPages(), n = t[t.length - 1], o = n.route || n.__route__, i = s.options, a = i.autoPageReport, u = i.autoPullDownRefreshReport, c = i.autoReachBottomReport, d = i.autoShareReport;
                    if (a) {
                        var v = n.onShow, h = n.onHide, y = n.onUnload;
                        n.onShow = function() {
                            r("Enter Page: [" + o + "]"), r("Page Referrer: [" + (p.pageReferrer || "null") + "]"), 
                            l({
                                pageStartTime: f(),
                                pageRoute: o,
                                pageDuration: 0
                            }), e.show();
                            for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                            Ae(v) && v.apply.apply(v, [ n ].concat(i));
                        }, n.onHide = function() {
                            var t = (f() - p.pageStartTime) / 1e3;
                            r("Leave Page: [" + o + "], after: " + t + "s"), l({
                                pageReferrer: o,
                                pageRoute: o,
                                pageDuration: t
                            });
                            for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++) a[u] = arguments[u];
                            Ae(h) && h.apply.apply(h, [ n ].concat(a)), e.hide();
                        }, n.onUnload = function() {
                            var t = (f() - p.pageStartTime) / 1e3;
                            r("Leave Page: [" + o + "], after: " + t + "s"), l({
                                pageReferrer: o,
                                pageRoute: o,
                                pageDuration: t
                            });
                            for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++) a[u] = arguments[u];
                            Ae(y) && y.apply.apply(y, [ n ].concat(a)), e.unload();
                        };
                    }
                    if (u) {
                        var g = n.onPullDownRefresh;
                        n.onPullDownRefresh = function() {
                            if (e.pullDownRefresh(), Ae(g)) {
                                for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                return g.apply.apply(g, [ n ].concat(r));
                            }
                        };
                    }
                    if (c) {
                        var w = n.onReachBottom;
                        n.onReachBottom = function() {
                            if (e.reachBottom(), Ae(w)) {
                                for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                return w.apply.apply(w, [ n ].concat(r));
                            }
                        };
                    }
                    if (d) {
                        var m = n.onShareAppMessage;
                        n.onShareAppMessage = function() {
                            if (e.share(), Ae(m)) {
                                for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                return m.apply.apply(m, [ n ].concat(r));
                            }
                        };
                    }
                },
                unload: function() {
                    this.hide.apply(this, arguments);
                },
                show: function(e) {
                    e && l({
                        pageRoute: e.path || "",
                        referrer: e.referrer || "",
                        duration: 0
                    }), S({
                        type: Se.HDMSGTYPE_PAGE,
                        payload: we({}, a, {
                            io: 1,
                            path: p.pageRoute,
                            referrer: p.pageReferrer,
                            duration: 0
                        }),
                        success: function() {
                            r("Report enter page succeed!");
                        },
                        fail: function(e) {
                            r("Report enter page failed!", e);
                        }
                    });
                },
                hide: function(e) {
                    e && l({
                        pageRoute: e.path || "",
                        duration: e.duration || 0
                    }), S({
                        type: Se.HDMSGTYPE_PAGE,
                        payload: we({}, a, {
                            io: 0,
                            path: p.pageRoute,
                            referrer: "",
                            duration: p.pageDuration
                        }),
                        success: function() {
                            r("Report leave page succeed!");
                        },
                        fail: function(e) {
                            r("Report leave page failed!", e);
                        }
                    });
                },
                share: function(t, n) {
                    t || (t = y()), "object" === (void 0 === t ? "undefined" : e(t)) && (n = Object.assign({}, t), 
                    t = t.label || y());
                    var r = n || {}, o = r.title, i = void 0 === o ? "" : o, a = r.desc, u = void 0 === a ? "" : a, c = r.path, f = void 0 === c ? "" : c;
                    g.event({
                        id: "WeappShare",
                        label: t,
                        eventype: 1,
                        params: {
                            title: i,
                            desc: u,
                            path: f
                        }
                    });
                },
                pullDownRefresh: function(e) {
                    e || (e = y()), g.event({
                        id: "WeappPullDownRefresh",
                        label: e,
                        eventype: 2
                    });
                },
                reachBottom: function(e) {
                    e || (e = y()), g.event({
                        id: "WeappReachBottom",
                        label: e,
                        eventype: 3
                    });
                }
            }
        });
    }();
});