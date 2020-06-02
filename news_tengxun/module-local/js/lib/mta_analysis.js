var t = {
    app_id: "",
    event_id: "",
    api_base: "https://pingtas.qq.com/pingd",
    prefix: "_mta_",
    version: "1.3.5",
    stat_share_app: !1,
    stat_pull_down_fresh: !1,
    stat_reach_bottom: !1
};

function n() {
    try {
        var n = "s" + e();
        return wx.setStorageSync(t.prefix + "ssid", n), n;
    } catch (t) {}
}

function e(t) {
    for (var n = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], e = 10; 1 < e; e--) {
        var a = Math.floor(10 * Math.random()), r = n[a];
        n[a] = n[e - 1], n[e - 1] = r;
    }
    for (e = a = 0; 5 > e; e++) a = 10 * a + n[e];
    return (t || "") + (a + "") + +new Date();
}

function a() {
    try {
        var t = getCurrentPages(), n = "/";
        return 0 < t.length && (n = t.pop().__route__), n;
    } catch (t) {
        console.log("get current page path error:" + t);
    }
}

function r() {
    var r, o = {
        dm: "wechat.apps.xx",
        url: a(),
        pvi: "",
        si: "",
        ty: 0
    };
    return o.pvi = ((r = function() {
        try {
            return wx.getStorageSync(t.prefix + "auid");
        } catch (t) {}
    }()) || (r = function() {
        try {
            var n = e();
            return wx.setStorageSync(t.prefix + "auid", n), n;
        } catch (t) {}
    }(), o.ty = 1), r), o.si = function() {
        var e = function() {
            try {
                return wx.getStorageSync(t.prefix + "ssid");
            } catch (t) {}
        }();
        return e || (e = n()), e;
    }(), o;
}

function o() {
    var n = function() {
        var t = wx.getSystemInfoSync();
        return {
            adt: encodeURIComponent(t.model),
            scl: t.pixelRatio,
            scr: t.windowWidth + "x" + t.windowHeight,
            lg: t.language,
            fl: t.version,
            jv: encodeURIComponent(t.system),
            tz: encodeURIComponent(t.platform)
        };
    }();
    return function(t) {
        wx.getNetworkType({
            success: function(n) {
                t(n.networkType);
            }
        });
    }(function(n) {
        try {
            wx.setStorageSync(t.prefix + "ntdata", n);
        } catch (t) {}
    }), n.ct = wx.getStorageSync(t.prefix + "ntdata") || "4g", n;
}

function i() {
    var n, e = s.Data.userInfo, a = [];
    for (n in e) e.hasOwnProperty(n) && a.push(n + "=" + e[n]);
    return e = a.join(";"), {
        r2: t.app_id,
        r4: "wx",
        ext: "v=" + t.version + (null !== e && "" !== e ? ";ui=" + encodeURIComponent(e) : "")
    };
}

var s = {
    App: {
        init: function(e) {
            "appID" in e && (t.app_id = e.appID), "eventID" in e && (t.event_id = e.eventID), 
            "statShareApp" in e && (t.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (t.stat_pull_down_fresh = e.statPullDownFresh), 
            "statReachBottom" in e && (t.stat_reach_bottom = e.statReachBottom), n(), "lauchOpts" in e && (s.Data.lanchInfo = e.lauchOpts, 
            s.Data.lanchInfo.landing = 1);
        }
    },
    Page: {
        init: function() {
            var n, e = getCurrentPages()[getCurrentPages().length - 1];
            e.onShow && (n = e.onShow, e.onShow = function() {
                s.Page.stat(), n.call(this, arguments);
            }), t.stat_pull_down_fresh && e.onPullDownRefresh && function() {
                var n = e.onPullDownRefresh;
                e.onPullDownRefresh = function() {
                    s.Event.stat(t.prefix + "pulldownfresh", {
                        url: e.__route__
                    }), n.call(this, arguments);
                };
            }(), t.stat_reach_bottom && e.onReachBottom && function() {
                var n = e.onReachBottom;
                e.onReachBottom = function() {
                    s.Event.stat(t.prefix + "reachbottom", {
                        url: e.__route__
                    }), n.call(this, arguments);
                };
            }(), t.stat_share_app && e.onShareAppMessage && function() {
                var n = e.onShareAppMessage;
                e.onShareAppMessage = function() {
                    return s.Event.stat(t.prefix + "shareapp", {
                        url: e.__route__
                    }), n.apply(this, arguments);
                };
            }();
        },
        stat: function() {
            if ("" != t.app_id) {
                var n = [], e = i(), a = [ r(), e, o() ];
                s.Data.lanchInfo && (a.push({
                    ht: s.Data.lanchInfo.scene,
                    rdm: "/",
                    rurl: s.Data.lanchInfo.path
                }), s.Data.lanchInfo.query && s.Data.lanchInfo.query._mta_ref_id && a.push({
                    rarg: s.Data.lanchInfo.query._mta_ref_id
                }), 1 == s.Data.lanchInfo.landing && (e.ext += ";lp=1", s.Data.lanchInfo.landing = 0)), 
                a.push({
                    rand: +new Date()
                }), e = 0;
                for (var p = a.length; e < p; e++) for (var c in a[e]) a[e].hasOwnProperty(c) && n.push(c + "=" + (void 0 === a[e][c] ? "" : a[e][c]));
                wx.request({
                    url: t.api_base + "?" + n.join("&").toLowerCase()
                });
            }
        }
    },
    Event: {
        stat: function(n, e) {
            if ("" != t.event_id) {
                var a = [], s = r(), p = i();
                s.dm = "wxapps.click", s.url = n, p.r2 = t.event_id;
                var c, u = void 0 === e ? {} : e, h = [];
                for (c in u) u.hasOwnProperty(c) && h.push(encodeURIComponent(c) + "=" + encodeURIComponent(u[c]));
                for (u = h.join(";"), p.r5 = u, u = 0, p = (s = [ s, p, o(), {
                    rand: +new Date()
                } ]).length; u < p; u++) for (var l in s[u]) s[u].hasOwnProperty(l) && a.push(l + "=" + (void 0 === s[u][l] ? "" : s[u][l]));
                wx.request({
                    url: t.api_base + "?" + a.join("&").toLowerCase()
                });
            }
        }
    },
    Data: {
        userInfo: null,
        lanchInfo: null
    }
};

module.exports = s;