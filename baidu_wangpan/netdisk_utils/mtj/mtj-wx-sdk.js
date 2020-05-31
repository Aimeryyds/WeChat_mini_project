var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function() {
    var t = "1.4.3", n = {
        ns: null,
        boxjs: null
    }, r = {}, o = {}, a = {
        logServerUrl: "https://hmma.baidu.com/mini.gif",
        maxRequestRetryCount: 5,
        requestRetryFirstDelay: 1e3,
        requestRetryMultiple: 4,
        maxRequestDataLength: 204800,
        maxUint8: 255,
        maxUint32: 4294967295,
        enabledEvents: {
            app: [ "show", "hide", "error" ],
            page: [ "show", "hide", "ready" ],
            share: [ "action", "success", "fail" ],
            event: "*"
        },
        storageKeys: {
            appId: "mtj_appid",
            key: "mtj_key",
            uuid: "mtj_uuid",
            shareCount: "mtj_scnt"
        }
    }, s = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
    }, i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [], r = !0, o = !1, a = void 0;
            try {
                for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, a = e;
            } finally {
                try {
                    !r && i.return && i.return();
                } finally {
                    if (o) throw a;
                }
            }
            return n;
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, c = function() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * a.maxUint32);
    }, u = function(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }, f = function e(t) {
        return (u(t, "Object") || u(t, "Array")) && Object.keys(t).forEach(function(n) {
            var r = t[n];
            u(r, "Object") || u(r, "Array") ? t[n] = e(r) : t[n] = "" + r;
        }), t;
    }, l = new Set(), p = [], h = 0, d = function(e) {
        if (e.data = e.data || {}, e.data.v = t, e.data.rqc = ++h, r = e.data, !(JSON.stringify(r).length <= a.maxRequestDataLength)) return h--, 
        void (e.fail && e.fail(new Error("invalid data")));
        var r;
        !function e(t) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a.requestRetryFirstDelay;
            return n.ns.request({
                url: t.url,
                data: t.data,
                header: Object.assign({
                    "content-type": "application/json"
                }, t.header),
                method: t.method || "POST",
                dataType: t.dataType || "json",
                success: function(e) {
                    delete t.data.rtc, t.success && t.success(e);
                },
                fail: function(n) {
                    t.data.rtc = (t.data.rtc || 0) + 1, t.data.rtc <= a.maxRequestRetryCount ? setTimeout(function() {
                        return e(t, r * a.requestRetryMultiple);
                    }, r) : (delete t.data.rtc, t.fail && t.fail(n));
                }
            });
        }(e);
    }, y = function() {
        return l.has("app.launch") && l.has("app.show");
    }, g = function() {
        p.forEach(function(e) {
            e.data = Object.assign({}, r, e.data), "show" !== e.data.en && "share" !== e.data.et && "event" !== e.data.et || Object.assign(e.data, o), 
            d(e);
        }), p.length = 0;
    }, m = {
        sendRequest: d,
        trackEvent: function(e) {
            var t = this;
            if (l.add(e.et + "." + e.en), "app" === e.et && "launch" === e.en && y() && g(), 
            "*" === a.enabledEvents[e.et] || -1 !== a.enabledEvents[e.et].indexOf(e.en)) {
                e.rid = c(), e.aso = e.aso || {};
                var n = {
                    url: a.logServerUrl,
                    dataType: "string",
                    data: Object.assign({}, r, e),
                    fail: function(e) {
                        return t.trackError("sendRequest", e);
                    }
                };
                y() ? (this.sendRequest(n), "app" === e.et && "show" === e.en && g()) : (r.path && (n.data.path = r.path), 
                r.query && (n.data.query = r.query), "app" === e.et && "show" === e.en ? p.unshift(n) : p.push(n));
            }
        },
        trackError: function(e, t) {
            var n = u(t, "Object") ? JSON.stringify(f(t)) : "" + t;
            this.sendRequest({
                url: a.logServerUrl,
                dataType: "string",
                data: Object.assign({}, r, {
                    et: "error",
                    en: e,
                    ep: {
                        ex: n
                    },
                    rid: c()
                })
            });
        },
        clearTrackedEvents: function() {
            l.clear();
        },
        ubcLog: function(e) {
            n.boxjs.boxjs.log({
                name: "ubcFlowJar",
                data: [ e ]
            });
        }
    }, v = function(e) {
        try {
            return n.ns.getStorageSync(e);
        } catch (e) {
            m.trackError("getStorageSync", e);
        }
    }, S = function(e, t) {
        try {
            n.ns.setStorageSync(e, t);
        } catch (e) {
            m.trackError("setStorageSync", e);
        }
    }, b = function() {
        return Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                var n = v(a.storageKeys.uuid);
                if (u(n, "String") && 32 === n.length) return e(n);
                n = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                    return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * a.maxUint8)) & 15 >> e / 4).toString(16);
                }), S(a.storageKeys.uuid, n), e(n);
            });
        });
    }, k = function(e) {
        return Promise.resolve().then(function() {
            return new Promise(function(t, r) {
                if (!e) return t();
                try {
                    n.ns.getShareInfo({
                        shareTicket: e,
                        success: function(e) {
                            delete e.errMsg, t(e);
                        },
                        fail: function(e) {
                            t({});
                        }
                    });
                } catch (r) {
                    m.trackError("getShareInfo", r), t({});
                }
            });
        });
    }, w = {
        onLaunch: function() {
            var e = require("./mtj-wx-sdk.config");
            return e.appKey ? (r.key = e.appKey, Promise.all([ b(), Promise.resolve().then(function() {
                return new Promise(function(e, t) {
                    try {
                        n.ns.getSetting({
                            success: function(t) {
                                t.authSetting && t.authSetting["scope.userInfo"] ? n.ns.checkSession({
                                    success: function(t) {
                                        t && !1 === t.result ? e({}) : n.ns.getUserInfo({
                                            success: function(t) {
                                                delete t.userInfo.errMsg, e(t.userInfo);
                                            },
                                            fail: function() {
                                                e({});
                                            }
                                        });
                                    },
                                    fail: function() {
                                        e({});
                                    }
                                }) : e({});
                            },
                            fail: function() {
                                e({});
                            }
                        });
                    } catch (t) {
                        m.trackError("getUserInfo", t), e({});
                    }
                });
            }), Promise.resolve().then(function() {
                return new Promise(function(e, t) {
                    try {
                        n.ns.getSystemInfo({
                            success: function(t) {
                                delete t.errMsg, e(t);
                            },
                            fail: function(t) {
                                e({});
                            }
                        });
                    } catch (t) {
                        m.trackError("getSystemInfo", t), e({});
                    }
                });
            }), Promise.resolve().then(function() {
                return new Promise(function(e, t) {
                    try {
                        n.ns.getNetworkType({
                            success: function(t) {
                                delete t.errMsg, e(t);
                            },
                            fail: function(t) {
                                e({});
                            }
                        });
                    } catch (t) {
                        m.trackError("getNetworkType", t), e({});
                    }
                });
            }), e.getLocation ? Promise.resolve().then(function() {
                return new Promise(function(e, t) {
                    try {
                        n.ns.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                delete t.errMsg, e(t);
                            },
                            fail: function(t) {
                                e({});
                            }
                        });
                    } catch (t) {
                        m.trackError("getLocation", t), e({});
                    }
                });
            }) : Promise.resolve() ]).then(function(e) {
                var n = i(e, 5), s = n[0], c = n[1], u = n[2], l = n[3], p = n[4];
                r.uuid = s, o.user = f(c), o.system = f(u), o.network = f(l), p && (o.location = f(p)), 
                "devtools" === u.platform && a.latestVersion && function(e, n) {
                    for (var r = t.split("."), o = n.split("."), a = 0; a < 3; a++) {
                        var s = +r[a] || 0, i = +o[a] || 0;
                        if (i < s) return 1;
                        if (s < i) return -1;
                    }
                    return 0;
                }(0, a.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心（https://mtj.baidu.com/web/sdk/index）下载最新版本"), 
                m.trackEvent({
                    et: "app",
                    en: "launch"
                });
            }).catch(function(e) {
                return m.trackError("app onLaunch", e);
            })) : (console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段"), Promise.resolve());
        },
        onShow: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return o.aso = o.aso || {}, (u(r.sid, "Undefined") || e.scene && o.aso.scene !== "" + e.scene) && (r.sid = c(), 
            r.rqc = 0), o.aso.scene = "" + (e.scene || ""), e.referrerInfo && e.referrerInfo.appId ? o.aso.referrerInfo = e.referrerInfo : delete o.aso.referrerInfo, 
            r.path = o.aso.path = e.path || "", r.query = o.aso.query = Object.keys(e.query || {}).map(function(t) {
                return {
                    key: t,
                    value: e.query[t]
                };
            }), k(e.shareTicket).then(function(e) {
                e ? o.aso.shareInfo = e : delete o.aso.shareInfo, m.trackEvent(Object.assign({
                    et: "app",
                    en: "show"
                }, o));
            });
        },
        onHide: function() {
            m.trackEvent({
                et: "app",
                en: "hide"
            });
        },
        onError: function(e) {
            var t = u(e, "Object") ? JSON.stringify(f(e)) : "" + e;
            m.trackEvent({
                et: "app",
                en: "error",
                ep: {
                    ex: t
                }
            });
        }
    }, E = function(e, t) {
        m.trackEvent({
            et: "page",
            en: e,
            ep: t
        });
    }, j = {
        onLoad: function() {
            E("load");
        },
        onShow: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            r.path = t.route, r.query = Object.keys(t.options).map(function(e) {
                return {
                    key: e,
                    value: t.options[e]
                };
            }), m.trackEvent(Object.assign({
                et: "page",
                en: "show"
            }, o));
        },
        onReady: function() {
            E("ready");
        },
        onHide: function() {
            E("hide");
        },
        onUnload: function() {
            E("unload");
        },
        onPullDownRefresh: function() {
            E("pullDownRefresh");
        },
        onReachBottom: function() {
            E("reachBottom");
        },
        onPageScroll: function() {
            E("pageScroll");
        },
        onTabItemTap: function(e) {
            E("tabItemTap", e);
        },
        onShareAppMessage: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = v(a.storageKeys.shareCount);
            n = (Number.isInteger(n) ? n : 0) + 1, S(a.storageKeys.shareCount, n);
            var r = {
                cnt: n,
                from: e.from,
                path: t.path || ""
            };
            t.title && (r.title = "" + t.title), e.target && (r.target = JSON.stringify(e.target)), 
            m.trackEvent(Object.assign({
                et: "share",
                en: "action",
                ep: r
            }, o));
            var s = t.success;
            t.success = function(e) {
                j.shareSuccess(e), s && s(e);
            };
            var i = t.fail;
            return t.fail = function(e) {
                j.shareFail(e), i && i(e);
            }, t;
        },
        shareSuccess: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = [].concat(e.shareTickets);
            Promise.all(t.map(function(e) {
                return k(e);
            })).then(function(e) {
                e && e[0] || (e = []), m.trackEvent({
                    et: "share",
                    en: "success",
                    ep: {
                        shareInfo: e
                    }
                });
            });
        },
        shareFail: function(e) {
            m.trackEvent({
                et: "share",
                en: "fail",
                ep: {
                    ex: JSON.stringify(e)
                }
            });
        }
    }, O = function(e) {
        if (t = e.reportName, u(t, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(t)) {
            var t, n = e.reportParams || {}, r = Object.keys(n).filter(function(e) {
                return u(r = e, "String") && /^[a-z0-9_]{1,32}$/.test(r) && (t = n[e], u(t, "String") || u(t, "Number"));
                var t, r;
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + n[e],
                    type: s(n[e])
                };
            });
            m.trackEvent(Object.assign({
                et: "event",
                en: "" + e.reportName,
                ep: {
                    data: r
                }
            }, o));
        }
    }, q = function(e, t, n) {
        var r = t[e];
        t[e] = function(e) {
            n.call(this, e), r && r.call(this, e);
        };
    };
    !function() {
        r.type = 1, n.ns = wx;
        var e = App;
        App = function(t) {
            [ "onLaunch", "onShow", "onHide", "onError" ].forEach(function(e) {
                q(e, t, w[e]);
            }), t.mtj = {
                trackEvent: function(e, t) {
                    O({
                        reportName: e,
                        reportParams: t
                    });
                }
            }, e(t);
        };
        var t = Page;
        Page = function(e) {
            [ "onLoad", "onShow", "onHide", "onReady" ].forEach(function(t) {
                q(t, e, j[t]);
            }), [ "onShareAppMessage" ].forEach(function(t) {
                var n, r, o, a;
                r = e, o = j[n = t], a = r[n], r[n] = function(e) {
                    var t = a && a.call(this, e);
                    return o.call(this, e, t);
                };
            }), t(e);
        };
    }();
}();