global.webpackJsonp([ 4 ], {
    DJ6P: function(t, a, e) {
        "use strict";
        var s = e("mvHQ"), n = e.n(s), o = e("pFYg"), r = e.n(o);
        !function() {
            var t = "6.1.2", a = "log", s = e("cRqb"), o = 0, i = 0, d = 0, l = 0;
            function _(t) {
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_uuid");
                } catch (t) {
                    a = "uuid-getstoragesync";
                }
                if (!a) {
                    a = "" + Date.now() + Math.floor(1e7 * Math.random());
                    try {
                        wx.setStorageSync("aldstat_uuid", a);
                    } catch (t) {
                        wx.setStorageSync("aldstat_uuid", "uuid-getstoragesync");
                    }
                    t.aldstat_is_first_open = !0;
                }
                return a;
            }
            function c() {
                wx.request({
                    url: "https://" + a + ".aldwx.com/config/app.json",
                    header: {
                        AldStat: "MiniApp-Stat"
                    },
                    method: "GET",
                    success: function(t) {
                        if (200 === t.statusCode) for (var a in t.data) wx.setStorageSync(a, t.data[a]);
                    }
                });
            }
            function u(t, a, e) {
                if (t[a]) {
                    var s = t[a];
                    t[a] = function(t) {
                        e.call(this, t, a), s.call(this, t);
                    };
                } else t[a] = function(t) {
                    e.call(this, t, a);
                };
            }
            var p = function(t) {
                wx.getSetting && wx.getSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] && wx.getUserInfo({
                            withCredentials: !1,
                            success: function(a) {
                                t(a);
                            }
                        });
                    }
                });
            }, h = function(t, e, s) {
                void 0 === arguments[1] && (e = "GET"), void 0 === arguments[2] && (s = "d.html");
                var n = 0;
                !function r() {
                    o += 1, t.rq_c = o, wx.request({
                        url: "https://" + a + ".aldwx.com/" + s,
                        data: t,
                        header: {
                            AldStat: "MiniApp-Stat"
                        },
                        method: e,
                        success: function() {},
                        fail: function() {
                            n < 2 && (n++, t.retryTimes = n, r());
                        }
                    });
                }();
            }, g = function(a, e, n, o) {
                var r = {
                    ak: s.app_key,
                    uu: _(a),
                    at: a.aldstat_access_token,
                    st: Date.now(),
                    tp: n,
                    ev: e,
                    v: t
                };
                o && (r.ct = o), a.aldstat_qr && (r.qr = a.aldstat_qr), h(r, "GET", "d.html");
            }, f = function(a, e, n, o) {
                void 0 === a.aldstat_showoption && (a.aldstat_showoption = {});
                var r = {
                    ak: s.app_key,
                    wsr: a.aldstat_showoption,
                    uu: _(a),
                    at: a.aldstat_access_token,
                    st: Date.now(),
                    tp: n,
                    ev: e,
                    nt: a.aldstat_network_type,
                    pm: a.aldstat_phone_model,
                    pr: a.aldstat_pixel_ratio,
                    ww: a.aldstat_window_width,
                    wh: a.aldstat_window_height,
                    lang: a.aldstat_language,
                    wv: a.aldstat_wechat_version,
                    lat: a.aldstat_lat,
                    lng: a.aldstat_lng,
                    spd: a.aldstat_speed,
                    v: t
                };
                o && (r.ct = o), a.aldstat_location_name && (r.ln = a.aldstat_location_name), a.aldstat_src && (r.sr = a.aldstat_src), 
                a.aldstat_qr && (r.qr = a.aldstat_qr), h(r, "GET", "d.html");
            };
            function w(t) {
                this.app = t;
            }
            w.prototype.debug = function(t) {
                f(this.app, "debug", 0, t);
            }, w.prototype.warn = function(t) {
                f(this.app, "debug", 1, t);
            }, w.prototype.error = function(t) {
                g(this.app, "debug", 2, t);
            }, w.prototype.sendEvent = function(t, a) {
                if (!T(t)) return !1;
                if (t.length >= 255) return !1;
                if ("object" === (void 0 === a ? "undefined" : r()(a))) {
                    for (var e in a) {
                        if (!T(e)) return !1;
                        if ("object" == r()(a[e])) return !1;
                        if (!T(a[e])) return !1;
                    }
                    f(this.app, "event", t, n()(a));
                } else if ("string" == typeof a && a.length <= 255) {
                    if (T(a)) {
                        var s = String(a);
                        new Object()[s] = a, f(this.app, "event", t, a);
                    }
                } else f(this.app, "event", t, !1);
            };
            var v = function() {
                var t = this;
                t.aldstat_duration += Date.now() - t.aldstat_showtime, x(t, "app", "unLaunch");
            }, m = function(t, a, e) {
                void 0 !== wx.getShareInfo ? wx.getShareInfo({
                    shareTicket: a,
                    success: function(a) {
                        f(t, "event", "ald_share_" + e, n()(a));
                    },
                    fail: function() {
                        f(t, "event", "ald_share_" + e, "1");
                    }
                }) : f(t, "event", "ald_share_" + e, "1");
            }, y = function(t) {
                c(), this.aldstat = new w(this);
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_src");
                } catch (t) {
                    a = "uuid-getstoragesync";
                }
                a && (this.aldstat_src = a);
                var e = _(this);
                this.aldstat_uuid = e, this.aldstat_timestamp = Date.now(), this.aldstat_showtime = Date.now(), 
                this.aldstat_duration = 0;
                var n = this;
                n.aldstat_error_count = 0, n.aldstat_page_count = 1, n.aldstat_first_page = 0, this.aldstat_showoption = void 0 !== t ? t : {};
                var o = function() {
                    wx.getSystemInfo({
                        success: function(t) {
                            n.aldstat_vsdk_version = void 0 === t.SDKVersion ? "1.0.0" : t.SDKVersion, n.aldstat_phone_model = t.model, 
                            n.aldstat_pixel_ratio = t.pixelRatio, n.aldstat_window_width = t.windowWidth, n.aldstat_window_height = t.windowHeight, 
                            n.aldstat_language = t.language, n.aldstat_wechat_version = t.version, n.aldstat_sv = t.system, 
                            n.aldstat_wvv = t.platform;
                        },
                        complete: function() {
                            s.getLocation && i(), r();
                        }
                    });
                }, r = function() {
                    p(function(t) {
                        var a = "";
                        try {
                            a = wx.getStorageSync("aldstat_uuid");
                        } catch (t) {
                            a = "uuid-getstoragesync";
                        }
                        t.userInfo.uu = a, t, h(t.userInfo, "GET", "u.html");
                    });
                }, i = function() {
                    wx.getLocation({
                        type: "wgs84",
                        success: function(t) {
                            n.aldstat_lat = t.latitude, n.aldstat_lng = t.longitude, n.aldstat_speed = t.speed;
                        }
                    });
                };
                wx.getNetworkType({
                    success: function(t) {
                        n.aldstat_network_type = t.networkType;
                    },
                    complete: o
                });
                var d = "";
                try {
                    d = wx.getStorageSync("app_session_key_create_launch_upload");
                } catch (t) {
                    d = "";
                }
                d ? d > 0 && "number" == typeof d && (n.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())) : n.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random()), 
                x(n, "app", "launch");
            }, S = function(t, a) {
                void 0 === this.aldstat_error_count ? this.aldstat_error_count = 1 : this.aldstat_error_count++, 
                f(this, "event", "ald_error_message", n()(t));
            }, x = function(a, e, n) {
                var o = "";
                try {
                    o = wx.getStorageSync("app_" + n + "_upload");
                } catch (t) {
                    o = "";
                }
                if ((o || "launch" === n) && !(o < 1 && "number" == typeof o)) {
                    void 0 === a.aldstat_timestamp && (a.aldstat_timestamp = Date.now());
                    var r = wx.getSystemInfoSync();
                    a.aldstat_vsdk_version = void 0 === r.SDKVersion ? "1.0.0" : r.SDKVersion, a.aldstat_phone_model = r.model, 
                    a.aldstat_pixel_ratio = r.pixelRatio, a.aldstat_window_width = r.windowWidth, a.aldstat_window_height = r.windowHeight, 
                    a.aldstat_language = r.language, a.aldstat_sv = r.system, a.aldstat_wvv = r.platform;
                    var c = {
                        ak: s.app_key,
                        waid: s.appid,
                        wst: s.appsecret,
                        uu: _(a),
                        at: a.aldstat_access_token,
                        wsr: a.aldstat_showoption,
                        st: a.aldstat_timestamp,
                        dr: a.aldstat_duration,
                        et: Date.now(),
                        pc: a.aldstat_page_count,
                        fp: a.aldstat_first_page,
                        lp: a.aldstat_last_page,
                        life: n,
                        ec: a.aldstat_error_count,
                        nt: a.aldstat_network_type,
                        pm: a.aldstat_phone_model,
                        wsdk: a.aldstat_vsdk_version,
                        pr: a.aldstat_pixel_ratio,
                        ww: a.aldstat_window_width,
                        wh: a.aldstat_window_height,
                        lang: a.aldstat_language,
                        wv: a.aldstat_wechat_version,
                        lat: a.aldstat_lat,
                        lng: a.aldstat_lng,
                        spd: a.aldstat_speed,
                        v: t,
                        ev: e,
                        sv: a.aldstat_sv,
                        wvv: a.aldstat_wvv
                    };
                    "launch" === n ? i += 1 : "show" === n ? d += 1 : l += 1, c.la_c = i, c.as_c = d, 
                    c.ah_c = l, a.page_share_count && "number" == typeof a.page_share_count && (c.sc = a.page_share_count), 
                    a.aldstat_is_first_open && (c.ifo = "true"), a.aldstat_location_name && (c.ln = a.aldstat_location_name), 
                    a.aldstat_src && (c.sr = a.aldstat_src), a.aldstat_qr && (c.qr = a.aldstat_qr), 
                    a.ald_share_src && (c.usr = a.ald_share_src), h(c, "GET", "d.html");
                }
            }, k = function(t) {
                this.aldstat_showtime = Date.now(), this.aldstat_showoption = void 0 !== t ? t : {};
                var a = "";
                try {
                    a = wx.getStorageSync("app_session_key_create_show_upload");
                } catch (t) {
                    a = "";
                }
                a && a > 0 && "number" == typeof a && (this.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())), 
                x(this, "app", "show"), void 0 !== t && (void 0 !== t.shareTicket ? m(this, t.shareTicket, "click") : void 0 !== t.query && void 0 !== t.query.ald_share_src && m(this, "0", "click"));
            }, b = function(t, a) {
                var e = this;
                e.aldstat_is_first_open && (e.aldstat_is_first_open = !1), e.aldstat_duration = Date.now() - e.aldstat_showtime, 
                x(e, "app", "hide");
            };
            function T(t) {
                if ("string" != typeof t) return !1;
                var a = t.replace(/\s+/g, "_");
                return !/[~`!@/#+=\$%\^()&\*]+/g.test(a);
            }
            var q = function(t, a) {
                var e = getApp();
                P(e, this, "hide");
            }, D = function(t, a) {
                var e = getApp();
                P(e, this, "unload");
            }, M = function(t, a) {
                var e = "";
                try {
                    e = wx.getStorageSync("aldstat_src");
                } catch (t) {
                    e = "";
                }
                var s = getApp();
                if (wx.showShareMenu, e && (s.aldstat_src = e), !function(t) {
                    for (var a in t) return !1;
                    return !0;
                }(t)) {
                    if (void 0 !== t.aldsrc) if (e) s.aldstat_qr = t.aldsrc; else {
                        try {
                            wx.setStorageSync("aldstat_src", t.aldsrc);
                        } catch (t) {}
                        s.aldstat_src = t.aldsrc, s.aldstat_qr = t.aldsrc;
                    }
                    void 0 !== t.ald_share_src && (s.ald_share_src = t.ald_share_src), this.aldstat_page_args = n()(t);
                }
                P(s, this, "load");
            }, P = function(a, e, n) {
                var o = "";
                try {
                    o = wx.getStorageSync("page_" + n + "_upload");
                } catch (t) {
                    o = "";
                }
                if ((o || "show" === n) && !(o < 1 && "number" == typeof o)) {
                    e.aldstat_start_time = Date.now(), e.aldstat_error_count = 0, a.aldstat_page_count ? a.aldstat_page_count++ : a.aldstat_page_count = 1, 
                    a.aldstat_first_page || (a.aldstat_first_page = e.__route__, e.aldstat_is_first_page = !0), 
                    a.aldstat_last_page = e.__route__;
                    var r = {
                        uu: _(a),
                        at: a.aldstat_access_token,
                        wsr: a.aldstat_showoption,
                        ak: s.app_key,
                        ev: "page",
                        st: e.aldstat_start_time,
                        dr: Date.now() - e.aldstat_start_time,
                        pp: e.__route__,
                        life: n,
                        sc: e.page_share_count,
                        ec: e.aldstat_error_count,
                        nt: a.aldstat_network_type,
                        pm: a.aldstat_phone_model,
                        pr: a.aldstat_pixel_ratio,
                        ww: a.aldstat_window_width,
                        wh: a.aldstat_window_height,
                        lang: a.aldstat_language,
                        wv: a.aldstat_wechat_version,
                        lat: a.aldstat_lat,
                        lng: a.aldstat_lng,
                        spd: a.aldstat_speed,
                        v: t,
                        wsdk: a.aldstat_vsdk_version,
                        sv: a.aldstat_sv,
                        wvv: a.aldstat_wvv
                    };
                    e.aldstat_is_first_page && (r.ifp = "true"), a.aldstat_page_last_page && (r.lp = a.aldstat_page_last_page), 
                    a.aldstat_location_name && (r.ln = a.aldstat_location_name), e.aldstat_page_args && (r.ag = e.aldstat_page_args), 
                    a.aldstat_src && (r.sr = a.aldstat_src), a.aldstat_qr && (r.qr = a.aldstat_qr), 
                    a.ald_share_src && (r.usr = a.ald_share_src), a.aldstat_page_last_page = e.__route__, 
                    h(r, "GET", "d.html");
                }
            }, A = function(t, a) {
                var e = getApp();
                P(e, this, "show");
            }, I = function(t, a) {
                var e = getApp();
                f(e, "event", "ald_pulldownrefresh", 1);
            }, E = function(t, a) {
                var e = getApp();
                f(e, "event", "ald_reachbottom", 1);
            }, G = function(t, a) {
                var e = getApp();
                if (void 0 !== t && void 0 !== t[1]) {
                    var o = "";
                    try {
                        o = wx.getStorageSync("aldstat_uuid");
                    } catch (t) {
                        o = "uuid-getstoragesync";
                    }
                    var i = "";
                    try {
                        i = wx.getStorageSync(o);
                    } catch (t) {
                        i = "p_share_count_getst";
                    }
                    var d = "";
                    if ("undefined" !== e.ald_share_src && e.ald_share_src) {
                        for (var l = (d = e.ald_share_src).split(","), _ = !0, c = 0, u = l.length; c < u; c++) {
                            if (l[c].replace('"', "") == o) {
                                _ = !1;
                                break;
                            }
                        }
                        l.length >= 3 && (_ && l.shift(), d = l.toString()), "" !== d && _ && (d = d + "," + o);
                    } else try {
                        d = wx.getStorageSync("aldstat_uuid");
                    } catch (t) {
                        d = "ald_share_src_getst";
                    }
                    if (t[1].path && "undefined" !== t[1].path || (s.defaultPath ? t[1].path = s.defaultPath : t[1].path = this.__route__), 
                    -1 != t[1].path.indexOf("?") ? t[1].path += "&ald_share_src=" + d : t[1].path += "?ald_share_src=" + d, 
                    f(e, "event", "ald_share_chain", {
                        path: e.aldstat_last_page,
                        chain: d
                    }), "" === i || void 0 === i) {
                        try {
                            wx.setStorageSync(o, 1);
                        } catch (t) {}
                        i = 1, e.page_share_count = i;
                    } else {
                        i = parseInt(wx.getStorageSync(o)) + 1, e.page_share_count = i;
                        try {
                            wx.setStorageSync(o, i);
                        } catch (t) {}
                    }
                    p(function(t) {
                        var a = "";
                        try {
                            a = wx.getStorageSync("aldstat_uuid");
                        } catch (t) {
                            a = "uuid-getstoragesync";
                        }
                        t.userInfo.uu = a, h(t.userInfo, "GET", "u.html");
                    });
                    t[1];
                    void 0 === t[1].success && (t[1].success = function(t) {}), void 0 === t[1].fail && (t[1].fail = function(t) {});
                    var g = t[1].fail, w = t[1].success;
                    return t[1].success = function(t) {
                        new Array();
                        if ("object" === r()(t.shareTickets)) for (var a = 0; a < t.shareTickets.length; a++) m(e, t.shareTickets[a], "user");
                        f(e, "event", "ald_share_status", n()(t)), w(t);
                    }, t[1].fail = function(t) {
                        f(e, "event", "ald_share_status", "fail"), g(t);
                    }, t[1];
                }
            }, L = App;
            App = function(t) {
                u(t, "onLaunch", y), u(t, "onUnlaunch", v), u(t, "onShow", k), u(t, "onHide", b), 
                u(t, "onError", S), L(t);
            };
            var R = Page;
            Page = function(t) {
                u(t, "onLoad", M), u(t, "onUnload", D), u(t, "onShow", A), u(t, "onHide", q), u(t, "onReachBottom", E), 
                u(t, "onPullDownRefresh", I), void 0 !== t.onShareAppMessage && function(t, a, e) {
                    if (t[a]) {
                        var s = t[a];
                        t[a] = function(t) {
                            var n = s.call(this, t);
                            return e.call(this, [ t, n ], a), n;
                        };
                    } else t[a] = function(t) {
                        e.call(this, t, a);
                    };
                }(t, "onShareAppMessage", G), R(t);
            };
        }();
    },
    M93x: function(t, a, e) {
        "use strict";
        var s = e("Mw+1");
        var n = function(t) {
            e("QLhf");
        }, o = e("ybqe")(s.a, null, n, null, null);
        a.a = o.exports;
    },
    "Mw+1": function(t, a, e) {
        "use strict";
        var s = e("Dd8w"), n = e.n(s), o = e("LBPb"), r = e("olkN"), i = e("NYxO");
        a.a = {
            store: r.a,
            created: function() {
                this.initSysInfo(), e.i(o.f)();
            },
            methods: n()({}, e.i(i.c)([ "initSysInfo" ]))
        };
    },
    NHnr: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        e("DJ6P");
        var s = e("5nAL"), n = e.n(s), o = e("6Fhf"), r = e.n(o), i = e("M93x");
        n.a.config.productionTip = !1, i.a.mpType = "app";
        var d = function(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".*", e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".*";
            return {
                req: {
                    url: new RegExp(t + "(\\?.*)?$"),
                    method: "GET" === a ? new RegExp("^GET|undefined$") : new RegExp("^" + a + "$")
                },
                res: {
                    statusCode: new RegExp("^" + e + "$")
                }
            };
        };
        r.a.init({
            apikey: "ff4e1d53429a2a6d351450b05695dbc41e938e817ed7ece96a6644b540a5b885",
            appVersion: "1.7.0",
            releaseStage: "production",
            silent: !1,
            monitorMethodCall: !0,
            monitorMethodArguments: !0,
            monitorHttpData: !0,
            setSystemInfo: !0,
            setUserInfo: !0,
            filters: [ {
                error: /getGlobalStorage:fail/
            }, {
                res: {
                    errMsg: new RegExp("^request:fail")
                }
            }, d("https://apiv3.shanbay.com/bayuser/auth/miniprogram/register", "POST", "403"), d("https://log.aldwx.com/.*", "GET") ]
        }), new n.a(i.a).$mount(), a.default = {
            config: {
                pages: [ "^pages/daily-quote/main" ],
                tabBar: {
                    color: "#999999",
                    selectedColor: "#84560d",
                    backgroundColor: "#ffffff",
                    list: [ {
                        pagePath: "pages/daily-quote/main",
                        text: "每日一句",
                        iconPath: "/static/img/daily-inactive.png",
                        selectedIconPath: "/static/img/daily-active.png"
                    }, {
                        pagePath: "pages/moremp/main",
                        text: "更多好玩",
                        iconPath: "/static/img/more-inactive.png",
                        selectedIconPath: "/static/img/more-active.png"
                    }, {
                        pagePath: "pages/personal-center/main",
                        text: "个人中心",
                        iconPath: "/static/img/personal-inactive.png",
                        selectedIconPath: "/static/img/personal-active.png"
                    } ]
                },
                window: {
                    backgroundTextStyle: "light",
                    navigationBarBackgroundColor: "#fff",
                    navigationBarTitleText: "WeChat",
                    navigationBarTextStyle: "black",
                    navigationStyle: "custom"
                },
                navigateToMiniProgramAppIdList: [ "wx8abaf00ee8c3202e", "wx59df50236ceb7508", "wx056989a90cad722f", "wx46f929d951d63e9d", "wx98f7d7260e32302d", "wxf1fd3089b54b1d13", "wx0347fc1fe57005ba", "wx9ba3d5acada8e236", "wx12479162f0374858" ]
            }
        };
    },
    QLhf: function(t, a) {},
    cRqb: function(t, a) {
        a.app_key = "8e78be9bad013d70346c8d8943c6ac65", a.getLocation = !1, a.appid = "wx59df50236ceb7508", 
        a.defaultPath = "pages/login/main";
    }
}, [ "NHnr" ]);