var mtjwxsdk = function(e) {
    "use strict";
    var o, t, n = "1.7.2", h = {}, g = {
        aso: {}
    }, p = {
        logServerUrl: "https://hmma.baidu.com/mini.gif",
        maxRequestRetryCount: 5,
        requestRetryFirstDelay: 1e3,
        requestRetryMultiple: 4,
        maxRequestDataLength: 204800,
        maxUint8: 255,
        maxUint32: 4294967295,
        enabledEvents: {
            app: [ "show", "hide", "error" ],
            page: [ "show", "hide" ],
            share: [ "action", "success", "fail" ],
            event: "*"
        },
        storageKeys: {
            appId: "mtj_appid",
            key: "mtj_key",
            uuid: "mtj_uuid",
            userInfo: "mtj_user",
            shareCount: "mtj_scnt"
        }
    }, r = function r() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * p.maxUint32);
    }, a = function a(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }, i = function n(r) {
        return (a(r, "Object") || a(r, "Array")) && Object.keys(r).forEach(function(e) {
            var t = r[e];
            a(t, "Object") || a(t, "Array") ? r[e] = n(t) : r[e] = "" + t;
        }), r;
    }, s = function s(e) {
        return a(e, "String") && /\d{11}$/.test(e);
    }, u = function u(e) {
        return a(e, "String") && 28 === e.length;
    }, c = 0, f = function f(e) {
        if (e.data = e.data || {}, e.data.v = n, e.data.rqc = ++c, t = e.data, !(JSON.stringify(t).length <= p.maxRequestDataLength)) return c--, 
        void (e.fail && e.fail(new Error("invalid data")));
        var t;
        !function t(n) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p.requestRetryFirstDelay;
            return o.request({
                url: n.url,
                data: n.data,
                header: Object.assign({
                    "content-type": "application/json"
                }, n.header),
                method: n.method || "POST",
                dataType: n.dataType || "json",
                success: function success(e) {
                    delete n.data.rtc, n.success && n.success(e);
                },
                fail: function fail(e) {
                    n.data.rtc = (n.data.rtc || 0) + 1, n.data.rtc <= p.maxRequestRetryCount ? setTimeout(function() {
                        return t(n, r * p.requestRetryMultiple);
                    }, r) : (delete n.data.rtc, n.fail && n.fail(e));
                }
            });
        }(e);
    }, l = function l(e, t) {
        var n = a(t, "Object") ? JSON.stringify(t) : "" + t;
        f({
            url: p.logServerUrl,
            dataType: "string",
            data: Object.assign({}, h, {
                et: "error",
                en: e,
                ep: {
                    ex: n
                },
                rid: r()
            })
        });
    }, y = function y(e) {
        if (!("*" !== p.enabledEvents[e.et] && p.enabledEvents[e.et].indexOf(e.en) < 0)) {
            e.rid = r(), e.aso = e.aso || {};
            var t = {
                url: p.logServerUrl,
                dataType: "string",
                data: Object.assign({}, h, e),
                fail: function fail(e) {
                    return l("sendRequest", e);
                }
            };
            f(t);
        }
    }, m = function m(e) {
        try {
            return o.getStorageSync(e);
        } catch (e) {
            l("getStorageSync", e);
        }
    }, v = function v(e, t) {
        try {
            o.setStorageSync(e, t);
        } catch (e) {
            l("setStorageSync", e);
        }
    }, d = function d() {
        return new Promise(function(e, t) {
            var n = m(p.storageKeys.uuid);
            if (a(n, "String") && 32 === n.length) return e(n);
            n = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * p.maxUint8)) & 15 >> e / 4).toString(16);
            }), v(p.storageKeys.uuid, n), e(n);
        });
    }, j = function j(n) {
        return new Promise(function(t, e) {
            if (!n) return t();
            o.getShareInfo({
                shareTicket: n,
                success: function success(e) {
                    delete e.errMsg, t(e);
                },
                fail: function fail(e) {
                    t({});
                }
            });
        });
    }, S = function S() {
        if (t) return t;
        var e;
        try {
            e = require("./mtj-wx-sdk.config.js");
        } catch (e) {
            return console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中"), t = new Promise(function(e) {
                return 0;
            });
        }
        return t = e && e.appKey ? (h.key = e.appKey, h.sid = r(), h.rqc = 0, Promise.all([ d(), new Promise(function(t, e) {
            var n = m(p.storageKeys.userInfo), r = a(n, "Object") ? n : {};
            o.getSetting({
                success: function success(e) {
                    e.authSetting && e.authSetting["scope.userInfo"] ? o.getUserInfo({
                        success: function success(e) {
                            delete e.userInfo.errMsg, t(Object.assign(r, e.userInfo));
                        },
                        fail: function fail() {
                            t(r);
                        }
                    }) : t(r);
                },
                fail: function fail() {
                    t(r);
                }
            });
        }), new Promise(function(t, e) {
            o.getSystemInfo({
                success: function success(e) {
                    delete e.errMsg, t(e);
                },
                fail: function fail(e) {
                    t({});
                }
            });
        }), new Promise(function(t, e) {
            o.getNetworkType({
                success: function success(e) {
                    delete e.errMsg, t(e);
                },
                fail: function fail(e) {
                    t({});
                }
            });
        }), e.getLocation ? new Promise(function(t, e) {
            o.getLocation({
                type: "wgs84",
                success: function success(e) {
                    delete e.errMsg, t(e);
                },
                fail: function fail(e) {
                    t({});
                }
            });
        }) : Promise.resolve() ]).then(function(e) {
            h.uuid = e[0], g.user = i(e[1]), g.system = i(e[2]), g.network = i(e[3]), e[4] && (g.location = i(e[4])), 
            "devtools" === g.system.platform && p.latestVersion && function(e, t) {
                for (var n = e.split("."), r = t.split("."), o = 0; o < 3; o++) {
                    var a = +n[o] || 0, i = +r[o] || 0;
                    if (i < a) return 1;
                    if (a < i) return -1;
                }
                return 0;
            }(n, p.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心（https://mtj.baidu.com/web/sdk/index）下载最新版本");
        })) : (console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段"), new Promise(function(e) {
            return 0;
        }));
    }, w = {
        onLaunch: function onLaunch() {
            y({
                et: "app",
                en: "launch"
            });
        },
        onShow: function onShow() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return g.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? g.aso.referrerInfo = t.referrerInfo : delete g.aso.referrerInfo, 
            g.aso.path = t.path || "", g.aso.query = Object.keys(t.query || {}).map(function(e) {
                return {
                    key: e,
                    value: decodeURIComponent(t.query[e])
                };
            }), S().then(function() {
                return j(t.shareTicket);
            }).then(function(e) {
                e ? g.aso.shareInfo = e : delete g.aso.shareInfo, y(Object.assign({
                    et: "app",
                    en: "show"
                }, g));
            });
        },
        onHide: function onHide() {
            y({
                et: "app",
                en: "hide"
            });
        },
        onError: function onError(e) {
            var t = a(e, "Object") ? JSON.stringify(i(e)) : "" + e;
            y({
                et: "app",
                en: "error",
                ep: {
                    ex: t
                }
            });
        }
    }, b = function b(e, t) {
        return S().then(function() {
            return y({
                et: "page",
                en: e,
                ep: t
            });
        });
    }, I = {
        onLoad: function onLoad(t) {
            h.path = this.route, h.query = Object.keys(t).map(function(e) {
                return {
                    key: e,
                    value: t[e]
                };
            }).filter(function(e) {
                return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
            }), b("load");
        },
        onShow: function onShow() {
            return S().then(function() {
                y(Object.assign({
                    et: "page",
                    en: "show"
                }, g));
            });
        },
        onReady: function onReady() {
            b("ready");
        },
        onHide: function onHide() {
            b("hide");
        },
        onUnload: function onUnload() {
            b("unload");
        },
        onPullDownRefresh: function onPullDownRefresh() {
            b("pullDownRefresh");
        },
        onReachBottom: function onReachBottom() {
            b("reachBottom");
        },
        onPageScroll: function onPageScroll() {
            b("pageScroll");
        },
        onTabItemTap: function onTabItemTap(e) {
            b("tabItemTap", e);
        },
        onShareAppMessage: function onShareAppMessage(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = m(p.storageKeys.shareCount);
            n = (Number.isInteger(n) ? n : 0) + 1, v(p.storageKeys.shareCount, n);
            var r = {
                cnt: n,
                from: e.from,
                path: t.path || ""
            };
            t.title && (r.title = "" + t.title), e.target && (r.target = JSON.stringify(e.target)), 
            y(Object.assign({
                et: "share",
                en: "action",
                ep: r
            }, g));
            var o = g.aso.query.filter(function(e) {
                return "mtj_shuuid" === e.key;
            }), a = o[0] ? o[0].value.split("_") : [];
            h.uuid !== a[a.length - 1] && a.push(h.uuid);
            var i, s, u, c, f = a.slice(Math.max(0, a.length - 3)).join("_");
            t.path = (i = t.path || h.path, s = "mtj_shuuid", u = f, c = 0 < (i = i.replace(new RegExp(s + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?", 
            i + c + s + "=" + encodeURIComponent(u));
            var l = t.success;
            t.success = function(e) {
                I.shareSuccess(e), l && l(e);
            };
            var d = t.fail;
            return t.fail = function(e) {
                I.shareFail(e), d && d(e);
            }, t;
        },
        shareSuccess: function shareSuccess() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = [].concat(e.shareTickets);
            Promise.all(t.map(function(e) {
                return j(e);
            })).then(function(e) {
                e && e[0] || (e = []), y({
                    et: "share",
                    en: "success",
                    ep: {
                        shareInfo: e
                    }
                });
            });
        },
        shareFail: function shareFail(e) {
            y({
                et: "share",
                en: "fail",
                ep: {
                    ex: JSON.stringify(e)
                }
            });
        }
    }, k = {
        trackEvent: function trackEvent(e) {
            var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!a(t = e, "String") || !/^[a-z][a-z0-9_]{0,31}$/.test(t)) return Promise.reject(new Error("事件名称不合法"));
            var n = Object.keys(r).filter(function(e) {
                return a(n = e, "String") && /^[a-z0-9_]{1,32}$/.test(n) && (t = r[e], a(t, "String") || a(t, "Number"));
                var t, n;
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + r[e],
                    type: a(r[e], "String") ? "string" : "number"
                };
            });
            return S().then(function() {
                y(Object.assign({
                    et: "event",
                    en: "" + e,
                    ep: {
                        data: n
                    }
                }, g));
            });
        },
        setUserInfo: function setUserInfo() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = e.tel, r = e.openId;
            return S().then(function() {
                var e = m(p.storageKeys.userInfo), t = a(e, "Object") ? e : {};
                return s(n) && (t.tel = g.user.tel = n.substr(n.length - 11)), u(r) && (t.openId = g.user.openId = r), 
                (t.tel || t.openId) && v(p.storageKeys.userInfo, t), a(n, "Undefined") || s(n) ? a(r, "Undefined") || u(r) ? void 0 : Promise.reject(new Error("openid不合法")) : Promise.reject(new Error("手机号不合法"));
            });
        }
    }, O = function O(e, t, n) {
        var r = t[e];
        t[e] = function(e) {
            n.call(this, e), r && r.call(this, e);
        };
    }, R = function R() {
        var e;
        h.type = 1, e = wx, o = e;
        var n = App;
        App = function App(t) {
            [ "onLaunch", "onShow", "onHide", "onError" ].forEach(function(e) {
                O(e, t, w[e]);
            }), t.mtj = k, n(t);
        };
        var t = Page;
        Page = function Page(a) {
            [ "onLoad", "onShow", "onHide", "onReady" ].forEach(function(e) {
                O(e, a, I[e]);
            }), [ "onShareAppMessage" ].forEach(function(e) {
                var t, n, r, o;
                n = a, r = I[t = e], o = n[t], n[t] = function(e) {
                    var t = o && o.call(this, e);
                    return r.call(this, e, t);
                };
            }), t(a);
        };
    };
    return R(), e.init = R, e;
}({});