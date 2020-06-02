var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(n, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.Ald = e();
}(void 0, function() {
    function n() {
        "function" == typeof ft && "" === T && ft().then(function(t) {
            28 === t.length && (T = t, wx.setStorageSync("aldstat_op", t));
        });
    }
    function e(t) {
        this.app = t;
    }
    function o(t) {
        C = y(), Q = t, st = t.scene, this.aldstat = new e(this);
    }
    function r(t) {
        n();
        var e;
        e = t.scene != st, st = t.scene, N = 0, Q = t, K = t.query.ald_share_src, V = t.query.aldsrc || "", 
        W = t.query.ald_share_src, rt || (J = !1), rt = !1, (0 !== E && Date.now() - E > 3e4 || e) && (it || (H = y(), 
        U = Date.now(), ct = 0)), 0 !== E && Date.now() - E < 3e4 && (Z = !0), t.query.ald_share_src && "1044" == t.scene && t.shareTicket ? wx.getShareInfo({
            shareTicket: t.shareTicket,
            success: function(t) {
                z = t, D("event", "ald_share_click", JSON.stringify(t));
            }
        }) : t.query.ald_share_src && D("event", "ald_share_click", 1), "" === F && wx.getSetting({
            withCredentials: !0,
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        var n = g();
                        F = t, n.ufo = S(t), j = v(t.userInfo.avatarUrl.split("/")), w(n);
                    }
                });
            }
        }), x("app", "show");
    }
    function i() {
        n(), E = Date.now(), "" === F && wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        F = t, j = v(t.userInfo.avatarUrl.split("/"));
                        var n = g();
                        n.ufo = S(t), w(n);
                    }
                });
            }
        }), x("app", "hide");
    }
    function s(t) {
        $++, D("event", "ald_error_message", t);
    }
    function a(t) {
        et = t;
    }
    function u() {
        ut = Date.now(), tt = k ? this.$mp.page.route : this.route, q("page", "show"), Z = !1;
    }
    function c() {
        nt = tt, ct = Date.now() - ut;
    }
    function f() {
        nt = tt, ct = Date.now() - ut;
    }
    function l() {
        D("event", "ald_pulldownrefresh", 1);
    }
    function h() {
        D("event", "ald_reachbottom", 1);
    }
    function p(t) {
        it = !0;
        var n = m(t.path), e = {};
        for (var o in Q.query) "ald_share_src" === o && (e[o] = Q.query[o]);
        var r = "";
        if (r = -1 == t.path.indexOf("?") ? t.path + "?" : t.path.substr(0, t.path.indexOf("?")) + "?", 
        "" !== n) for (var o in n) e[o] = n[o];
        e.ald_share_src ? -1 == e.ald_share_src.indexOf(G) && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + G) : e.ald_share_src = G;
        for (var i in e) -1 == i.indexOf("ald") && (r += i + "=" + e[i] + "&");
        return t.path = r + "ald_share_src=" + e.ald_share_src, D("event", "ald_share_status", t), 
        t;
    }
    function d() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return t() + t() + t() + t() + t() + t() + t() + t();
    }
    function w(t) {
        function n() {
            return new Promise(function(n, e) {
                var o = {
                    AldStat: "MiniApp-Stat",
                    se: B || "",
                    op: T || "",
                    img: j
                };
                "" === R || (o.ai = R), wx.request({
                    url: "https://" + L + ".aldwx.com/d.html",
                    data: t,
                    header: o,
                    method: "GET",
                    success: function(t) {
                        n(200 == t.statusCode ? "" : "status error");
                    },
                    fail: function() {
                        n("fail");
                    }
                });
            });
        }
        N++, t.at = H, t.uu = G, t.v = P, t.ak = I.app_key.replace(/(\t)|(\s)/g, ""), t.wsr = Q, 
        t.ifo = J, t.rq_c = N, t.ls = C, t.te = O, t.et = Date.now(), t.st = Date.now(), 
        I.useOpen ? "" === T ? at.push(n) : (wx.Queue.push(n), at.concat()) : wx.Queue.push(n);
    }
    function g() {
        var t = {};
        for (var n in X) t[n] = X[n];
        return t;
    }
    function v(t) {
        for (var n = "", e = 0; e < t.length; e++) t[e].length > n.length && (n = t[e]);
        return n;
    }
    function y() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function S(t) {
        var n = {};
        for (var e in t) "rawData" != e && "errMsg" != e && (n[e] = t[e]);
        return n;
    }
    function m(t) {
        if (-1 == t.indexOf("?")) return "";
        var n = {};
        return t.split("?")[1].split("&").forEach(function(t) {
            var e = t.split("=")[1];
            n[t.split("=")[0]] = e;
        }), n;
    }
    function _(n) {
        for (var e in n) if ("object" == t(n[e]) && null !== n[e]) return !0;
        return !1;
    }
    function x(t, n) {
        var e = g();
        e.ev = t, e.life = n, e.ec = $, e.dr = Date.now() - U, V && (e.qr = V, e.sr = V), 
        K && (e.usr = K), w(e);
    }
    function q(t, n) {
        var e = g();
        e.ev = t, e.life = n, e.pp = tt, e.pc = nt, e.dr = Date.now() - U, it && (e.so = 1), 
        it = !1, et && "{}" != JSON.stringify(et) && (e.ag = et), V && (e.qr = V, e.sr = V), 
        K && (e.usr = K), Z && (e.ps = 1), Y ? e.pdr = ct : (ot = tt, Y = !0, e.ifp = Y, 
        e.fp = tt, e.pdr = 0), w(e);
    }
    function D(t, n, e) {
        var o = g();
        o.ev = t, o.tp = n, o.dr = Date.now() - U, e && (o.ct = e), w(o);
    }
    function A(t, n, e) {
        if (t[n]) {
            var o = t[n];
            t[n] = function(t) {
                e.call(this, t, n), o.call(this, t);
            };
        } else t[n] = function(t) {
            e.call(this, t, n);
        };
    }
    function b(t) {
        var n = {};
        for (var e in t) "onLaunch" !== e && "onShow" !== e && "onHide" !== e && "onError" !== e && (n[e] = t[e]);
        return n.onLaunch = function(n) {
            o.call(this, n), "function" == typeof t.onLaunch && t.onLaunch.call(this, n);
        }, n.onShow = function(n) {
            r.call(this, n), t.onShow && "function" == typeof t.onShow && t.onShow.call(this, n);
        }, n.onHide = function() {
            i.call(this), t.onHide && "function" == typeof t.onHide && t.onHide.call(this);
        }, n.onError = function(n) {
            s.call(this, n), t.onError && "function" == typeof t.onError && t.onError.call(this, n);
        }, n;
    }
    function M(t) {
        var n = {};
        for (var e in t) "onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (n[e] = t[e]);
        return n.onLoad = function(n) {
            a.call(this, n), "function" == typeof t.onLoad && t.onLoad.call(this, n);
        }, n.onShow = function(n) {
            u.call(this), "function" == typeof t.onShow && t.onShow.call(this, n);
        }, n.onHide = function(n) {
            c.call(this), "function" == typeof t.onHide && t.onHide.call(this, n);
        }, n.onUnload = function(n) {
            f.call(this), "function" == typeof t.onUnload && t.onUnload.call(this, n);
        }, n.onReachBottom = function(n) {
            h(), t.onReachBottom && "function" == typeof t.onReachBottom && t.onReachBottom.call(this, n);
        }, n.onPullDownRefresh = function(n) {
            l(), t.onPullDownRefresh && "function" == typeof t.onPullDownRefresh && t.onPullDownRefresh.call(this, n);
        }, t.onShareAppMessage && "function" == typeof t.onShareAppMessage && (n.onShareAppMessage = function(n) {
            var e = t.onShareAppMessage.call(this, n);
            return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), 
            p.call(this, e);
        }), n;
    }
    var I = require("./ald-stat-conf");
    void 0 === wx.Queue && (wx.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var t = this;
        this.push = function(n) {
            this.tasks.push(new Promise(function(e, o) {
                var r = function() {
                    t.activeCount++, n().then(function(t) {
                        e(t);
                    }).then(function() {
                        t.next();
                    });
                };
                t.activeCount < t.concurrency ? r() : t.queue.push(r);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            t.activeCount--, t.queue.length > 0 && t.queue.shift()();
        };
    }(), wx.Queue.all()), I.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。");
    var P = "7.3.2", L = "log", O = "wx", R = void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function(t) {
        return t.charCodeAt(0) + 9;
    }).join("-"), k = !1, H = y(), C = "", U = Date.now(), E = 0, B = "", T = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_op");
        } catch (t) {}
        return t;
    }(), j = "", N = 0, Q = "", J = "", G = function() {
        var t = "";
        try {
            t = wx.getStorageSync("aldstat_uuid");
        } catch (n) {
            t = "uuid_getstoragesync";
        }
        if (t) J = !1; else {
            t = d();
            try {
                wx.setStorageSync("aldstat_uuid", t), J = !0;
            } catch (t) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return t;
    }(), K = "", V = "", W = "", $ = 0, z = "", F = "", X = {}, Y = !1, Z = !1, tt = "", nt = "", et = "", ot = "", rt = !0, it = !1, st = "", at = new function() {
        this.request = [], this.updata = !1, this.push = function(t) {
            this.request.length >= 8 && !this.updata && (this.updata = !0, n()), this.request.length >= 10 ? (this.request.shift(), 
            this.request.push(t)) : this.request.push(t);
        }, this.concat = function() {
            this.request.map(function(t) {
                wx.Queue.push(t);
            }), this.request = [];
        };
    }(), ut = 0, ct = 0, ft = "";
    wx.request({
        url: "https://" + L + ".aldwx.com/config/app.json",
        header: {
            AldStat: "MiniApp-Stat"
        },
        method: "GET",
        success: function(t) {
            200 === t.statusCode && (P < t.data.version && console.warn("您的SDK不是最新版本，请尽快升级！"), 
            t.data.warn && console.warn(t.data.warn), t.data.error && console.error(t.data.error));
        }
    }), wx.aldstat = new e("");
    try {
        var lt = wx.getSystemInfoSync();
        X.br = lt.brand, X.pm = lt.model, X.pr = lt.pixelRatio, X.ww = lt.windowWidth, X.wh = lt.windowHeight, 
        X.lang = lt.language, X.wv = lt.version, X.wvv = lt.platform, X.wsdk = lt.SDKVersion, 
        X.sv = lt.system;
    } catch (t) {}
    return wx.getNetworkType({
        success: function(t) {
            X.nt = t.networkType;
        }
    }), wx.getSetting({
        success: function(t) {
            t.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    X.lat = t.latitude, X.lng = t.longitude, X.spd = t.speed;
                }
            }) : I.getLocation && wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    X.lat = t.latitude, X.lng = t.longitude, X.spd = t.speed;
                }
            });
        }
    }), e.prototype.sendEvent = function(n, e) {
        if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof e && e.length <= 255) D("event", n, e); else if ("object" == (void 0 === e ? "undefined" : t(e))) {
            if (JSON.stringify(e).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
            if (_(e)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
            for (var o in e) "number" == typeof e[o] && (e[o] = e[o] + "s##");
            D("event", n, JSON.stringify(e));
        } else void 0 === e ? D("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符");
    }, e.prototype.sendSession = function(t) {
        if ("" !== t && t) {
            B = t;
            var n = g();
            n.tp = "session", n.ct = "session", n.ev = "event", "" === F ? wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(t) {
                            n.ufo = S(t), j = v(t.userInfo.avatarUrl.split("/")), "" !== z && (n.gid = z), w(n);
                        }
                    }) : "" !== z && (n.gid = z, w(n));
                }
            }) : (n.ufo = F, "" !== z && (n.gid = z), w(n));
        } else console.error("请传入从后台获取的session_key");
    }, e.prototype.sendOpenid = function(t) {
        if ("" !== t && t && 28 === t.length) {
            T = t, wx.setStorageSync("aldstat_op", t);
            var n = g();
            n.tp = "openid", n.ev = "event", n.ct = "openid", w(n);
        } else console.error("openID不能为空");
    }, e.prototype.setOpenid = function(t) {
        "function" == typeof t && (ft = t, n());
    }, I.plugin ? {
        App: function(t) {
            return App(b(t));
        },
        Page: function(t) {
            return Page(M(t));
        },
        MpvueApp: function(t) {
            return k = !0, b(t);
        },
        MpvuePage: function(t) {
            return M(t);
        }
    } : void function() {
        var t = App, n = Page, e = Component;
        App = function(n) {
            A(n, "onLaunch", o), A(n, "onShow", r), A(n, "onHide", i), A(n, "onError", s), t(n);
        }, Page = function(t) {
            var e = t.onShareAppMessage;
            A(t, "onLoad", a), A(t, "onUnload", f), A(t, "onShow", u), A(t, "onHide", c), A(t, "onReachBottom", h), 
            A(t, "onPullDownRefresh", l), void 0 !== e && null !== e && (t.onShareAppMessage = function(t) {
                if (void 0 !== e) {
                    var n = e.call(this, t);
                    return void 0 === n ? (n = {}, n.path = tt) : void 0 === n.path && (n.path = tt), 
                    p(n);
                }
            }), n(t);
        }, Component = function(t) {
            try {
                var n = t.methods.onShareAppMessage;
                A(t.methods, "onLoad", a), A(t.methods, "onUnload", f), A(t.methods, "onShow", u), 
                A(t.methods, "onHide", c), A(t.methods, "onReachBottom", h), A(t.methods, "onPullDownRefresh", l), 
                void 0 !== n && null !== n && (t.methods.onShareAppMessage = function(t) {
                    if (void 0 !== n) {
                        var e = n.call(this, t);
                        return void 0 === e ? (e = {}, e.path = tt) : void 0 === e.path && (e.path = tt), 
                        p(e);
                    }
                }), e(t);
            } catch (n) {
                e(t);
            }
        };
    }();
});