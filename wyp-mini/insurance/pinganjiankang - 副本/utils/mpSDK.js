var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof")), t = getApp().globalData.appId, n = "https://padn-access.pa18.com/access.php?m=msgpack&sdkv=2.0&os=mp&source=ty", a = "wx18792702155c772e" === t ? "0E70F905A882056C3EF3ECBD73BE7B1C" : "5985B43F470E4CF4F1DF701614B4B552", s = {
    deviceId: wx.getStorageSync("deviceId") || "",
    appkey: a || "",
    appProfile: {
        versionName: "1.0",
        versionCode: "3.33.43",
        initTime: "",
        sdkVersion: "Mp+v2.0.0",
        partner: "WXXCX"
    },
    deviceProfile: {
        pixel: "",
        language: "",
        timezone: new Date().getTimezoneOffset() / 60 * -1
    },
    msgs: wx.getStorageSync("_SK_sessionMsg") ? JSON.parse(wx.getStorageSync("_SK_sessionMsg")) : []
}, r = [], i = {
    type: 2,
    data: {
        id: "",
        start: wx.getStorageSync("SessionStart") || 0,
        status: 1,
        duration: 0
    }
}, o = {
    name: "",
    start: "",
    duration: "",
    refer: ""
}, S = [], g = [], c = "__SK_SK-init-event", d = 1, u = 0, l = 0, f = {
    onEvent: function(t, n, a) {
        var s, r = new Date().getTime();
        if (wx.setStorageSync("SessionEnd", r), arguments.length > 0) {
            d = 22;
            try {
                var S = {
                    count: 1,
                    time: new Date().getTime()
                };
                if (null != t && (S.eventId = "string" != typeof t ? JSON.stringify(t) : t), S.label = null != n ? "string" != typeof n ? JSON.stringify(n) : n : "", 
                null != a) {
                    s = a, "object" != (0, e.default)(s) || "[object object]" != Object.prototype.toString.call(s).toLowerCase() || s.length ? S.parameters = {
                        parameters: ""
                    } : S.parameters = a;
                }
                var u = wx.getStorageSync(c);
                if (u) {
                    var l = JSON.parse(u);
                    l.push(S), wx.setStorageSync(c, JSON.stringify(l));
                }
                wx.setStorageSync(c, "[" + JSON.stringify(S) + "]"), i.data.status = 2, i.data.duration = 0, 
                o.name = g[g.length - 1].name, o.start = g[g.length - 1].start, o.duration = 0, 
                o.refer = g.length >= 2 ? g[g.length - 2].name : "", v.getAjax();
            } catch (e) {}
        }
    },
    onShow: function() {
        var e = getCurrentPages(), t = new Date().getTime();
        if (g.push({
            name: e[e.length - 1].route,
            start: t
        }), !u && wx.getStorageSync("sessionId") && (wx.removeStorageSync("sessionId"), 
        wx.removeStorageSync("_SK_sessionMsg"), wx.removeStorageSync(c), wx.removeStorageSync("SessionStart"), 
        wx.removeStorageSync("initTime"), wx.removeStorageSync("lastSession")), u || wx.getStorageSync("sessionId")) {
            d = 20, i.data.status = 2, i.data.duration = 0;
            var n = g.length;
            o.name = n >= 2 ? g[n - 2].name : g[n - 1].name, o.start = n >= 2 ? g[n - 2].start : g[n - 1].start, 
            o.duration = parseInt((t - o.start) / 1e3), o.refer = n >= 3 ? g[g.length - 3].name : "", 
            v.getAjax();
        } else {
            if (u = 1, i.data.start = t, v.init(), wx.getStorageSync("deviceId")) v.set(); else var a = setInterval(function() {
                var e, t = getApp();
                t.globalData && (e = t.globalData.sdkOpenId), e && (v.getDeviceId(e), v.set(), clearInterval(a));
            }, 1e3);
            d = 1, o.name = g[g.length - 1].name, o.start = g[g.length - 1].start, o.duration = 0, 
            i.data.status = 1, v.getAjax(), S.push(a);
        }
    },
    onHide: function() {
        var e = new Date().getTime();
        d = 21, wx.setStorageSync("SessionEnd", e), i.data.status = 2, i.data.duration = 0;
        var t = l, n = e;
        wx.getStorageSync("deviceId") && wx.getStorageSync("unionId") || v.getUnionId(), 
        setTimeout(function() {
            21 === d && t === l && (d = 3, o.name = g[g.length - 1].name, o.start = g[g.length - 1].start, 
            o.duration = parseInt((n - o.start) / 1e3), o.refer = g.length >= 2 ? g[g.length - 2].name : "", 
            v.getAjax(), i.data.status = 3, i.data.duration = parseInt((n - i.data.start) / 1e3), 
            wx.setStorageSync("SessionEnd", n), wx.getStorageSync("deviceId") ? (v.getAjax(), 
            wx.nextTick(function() {
                v.initPage();
            })) : wx.nextTick(function() {
                s.deviceId = v.deviceId = wx.getStorageSync("unionId"), v.setSession(), v.getAjax(), 
                wx.nextTick(function() {
                    v.initPage();
                });
            }));
        }, 50);
    }
};

!function(e) {
    e.SKBASE = e.SKBASE || {}, e.SKBASE.unique = function(e) {
        e.sort();
        for (var t = [ e[0] ], n = 1; n < e.length; n++) e[n] && e[n] !== t[t.length - 1] && t.push(e[n]);
        return t;
    }, e.SKBASE.getCommon = function(e) {
        var t;
        return t = wx.getStorageSync("appkey") ? wx.getStorageSync("appkey") : s.appkey, 
        {
            deviceId: s.deviceId,
            appkey: t,
            appProfile: s.appProfile,
            deviceProfile: s.deviceProfile,
            msgs: e.msg
        };
    }, e.SKBASE.getCommonMsg = function(e, t, n, a, s, r) {
        return {
            type: 2,
            data: {
                id: e,
                start: t,
                status: a,
                duration: s || 0,
                pages: [ n ],
                events: r || []
            }
        };
    }, e.SKBASE.addSessionStart = function(t, n) {
        var a;
        wx.setStorageSync("lastSession", JSON.stringify({
            id: i.data.id,
            start: i.data.start
        })), (a = wx.getStorageSync("SK-hold-event")) && (a = JSON.parse(a));
        var s = e.SKBASE.getCommonMsg(i.data.id, i.data.start, o, i.data.status, i.data.duration, a);
        e.SKBASE.addMsg(s), wx.removeStorageSync("SK-hold-event");
    }, e.SKBASE.addMsg = function(e) {
        if (wx.getStorageSync("_SK_sessionMsg")) {
            var t = JSON.parse(wx.getStorageSync("_SK_sessionMsg"));
            e && (t.msg[0] = e), wx.setStorageSync("_SK_sessionMsg", JSON.stringify(t));
        } else wx.setStorageSync("_SK_sessionMsg", JSON.stringify({
            msg: [ e ]
        }));
    };
}(f);

var v = {
    timedif: void 0,
    state: 1,
    deviceId: s.deviceId,
    local: [],
    set: function() {
        try {
            this.setDeviceId(), this.setSession();
        } catch (e) {
            console.log(e);
        }
    },
    init: function() {
        try {
            this.setSessionTime(), this.setInitTime(), this.setResolution();
        } catch (e) {
            console.log(e);
        }
    },
    setDeviceId: function() {
        wx.getStorageSync("deviceId") ? this.deviceId = wx.getStorageSync("deviceId") : this.deviceId = s.deviceId;
    },
    setSession: function() {
        var e, t, n = this.deviceId, a = i.data.start;
        this.deviceId && this.deviceId.indexOf("-") > -1 ? e = this.deviceId.split("-")[0] + a : e = n + a;
        if (32 - e.length > 0) for (var s = 0, r = 32 - e.length; s < r; s++) e += "0"; else 32 - e.length < 0 && (t = e.length - 32, 
        e = e.substring(t, e.length));
        wx.getStorageSync("sessionId") ? e = wx.getStorageSync("sessionId") : wx.setStorageSync("sessionId", e), 
        i.data.id = e;
    },
    setSessionTime: function() {
        var e, t;
        e = i.data.start, t = wx.getStorageSync("SessionEnd") ? wx.getStorageSync("SessionEnd") : parseInt(e), 
        i.data.duration = parseInt((e - t) / 1e3), wx.getStorageSync("SessionStart") ? e = wx.getStorageSync("SessionStart") : wx.setStorageSync("SessionStart", e), 
        wx.getStorageSync("SessionEnd") ? e = wx.getStorageSync("SessionEnd") : wx.setStorageSync("SessionEnd", e);
    },
    setInitTime: function() {
        wx.getStorageSync("initTime") ? s.appProfile.initTime = parseInt(wx.getStorageSync("initTime")) : (s.appProfile.initTime = i.data.start, 
        wx.setStorageSync("initTime", i.data.start));
    },
    setResolution: function() {
        var e = wx.getSystemInfoSync(), t = [ e.screenWidth, e.screenHeight, e.pixelRatio ];
        s.deviceProfile.pixel = t.join("*"), s.deviceProfile.language = e.language;
    },
    getDeviceId: function(e) {
        wx.getStorageSync("deviceId") || (s.deviceId = v.deviceId = e, v.setSession(), wx.setStorageSync("deviceId", s.deviceId));
    },
    getUnionId: function() {
        if (wx.getStorageSync("unionId")) return wx.getStorageSync("unionId");
        var e, t = {
            brand: "",
            model: "",
            language: "",
            system: "",
            platform: "",
            avatarUrl: ""
        }, n = wx.getSystemInfoSync();
        wx.getUserInfo({
            success: function(n) {
                var a = n.userInfo;
                for (var s in t) a[s] && (t[s] = a[s]);
                e = JSON.stringify(t).MD5(32), wx.setStorageSync("unionId", e);
            },
            fail: function() {
                for (var a in t) n[a] && (t[a] = n[a]);
                t.timezone = new Date().getTimezoneOffset() / 60 * -1, t.startTime = new Date().getTime(), 
                e = JSON.stringify(t).MD5(32), wx.setStorageSync("unionId", e);
            }
        });
    },
    getAjax: function(e, t) {
        l++, f.SKBASE.addSessionStart(e, t);
        var a = JSON.parse(wx.getStorageSync("_SK_sessionMsg")), i = f.SKBASE.getCommon(a), o = wx.getStorageSync(c), S = i.msgs[i.msgs.length - 1];
        S && (S.data.events = o && 22 === d ? JSON.parse(o) : []), s.msgs = [ S ];
        var g = JSON.parse(JSON.stringify(s));
        if (g.deviceId) {
            if (wx.request({
                url: n,
                data: JSON.stringify(g),
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(e) {
                    console.log("success");
                },
                fail: function(e) {
                    console.log(e);
                }
            }), r.length) {
                for (var u = 0; u < r.length; u++) {
                    var v = r[u];
                    v.deviceId = s.deviceId, v.msgs[0].data.id = wx.getStorageSync("sessionId"), wx.request({
                        url: n,
                        data: JSON.stringify(v),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success: function(e) {
                            console.log("success");
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }
                r = [];
            }
        } else r.length > 100 ? (r.splice(1, 1), r.push(g)) : r.push(g);
    },
    initPage: function() {
        for (var e = 0; e <= S.length; e++) clearInterval(S[e]);
        S = [], d = 0, l = 0, u = 0, wx.removeStorageSync("_SK_sessionMsg"), wx.removeStorageSync(c), 
        wx.removeStorageSync("sessionId"), wx.removeStorageSync("SessionStart"), wx.removeStorageSync("initTime"), 
        wx.removeStorageSync("lastSession");
    }
};

String.prototype.MD5 = function(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t;
    }
    function n(e, t) {
        var n, a, s, r, i;
        return s = 2147483648 & e, r = 2147483648 & t, i = (1073741823 & e) + (1073741823 & t), 
        (n = 1073741824 & e) & (a = 1073741824 & t) ? 2147483648 ^ i ^ s ^ r : n | a ? 1073741824 & i ? 3221225472 ^ i ^ s ^ r : 1073741824 ^ i ^ s ^ r : i ^ s ^ r;
    }
    function a(e, a, s, r, i, o, S) {
        return e = n(e, n(n(function(e, t, n) {
            return e & t | ~e & n;
        }(a, s, r), i), S)), n(t(e, o), a);
    }
    function s(e, a, s, r, i, o, S) {
        return e = n(e, n(n(function(e, t, n) {
            return e & n | t & ~n;
        }(a, s, r), i), S)), n(t(e, o), a);
    }
    function r(e, a, s, r, i, o, S) {
        return e = n(e, n(n(function(e, t, n) {
            return e ^ t ^ n;
        }(a, s, r), i), S)), n(t(e, o), a);
    }
    function i(e, a, s, r, i, o, S) {
        return e = n(e, n(n(function(e, t, n) {
            return t ^ (e | ~n);
        }(a, s, r), i), S)), n(t(e, o), a);
    }
    function o(e) {
        var t, n = "", a = "";
        for (t = 0; t <= 3; t++) n += (a = "0" + (e >>> 8 * t & 255).toString(16)).substr(a.length - 2, 2);
        return n;
    }
    var S, g, c, d, u, l, f, v, y, m = Array();
    for (m = function(e) {
        for (var t, n = e.length, a = n + 8, s = 16 * ((a - a % 64) / 64 + 1), r = Array(s - 1), i = 0, o = 0; o < n; ) i = o % 4 * 8, 
        r[t = (o - o % 4) / 4] = r[t] | e.charCodeAt(o) << i, o++;
        return i = o % 4 * 8, r[t = (o - o % 4) / 4] = r[t] | 128 << i, r[s - 2] = n << 3, 
        r[s - 1] = n >>> 29, r;
    }(this), l = 1732584193, f = 4023233417, v = 2562383102, y = 271733878, S = 0; S < m.length; S += 16) g = l, 
    c = f, d = v, u = y, l = a(l, f, v, y, m[S + 0], 7, 3614090360), y = a(y, l, f, v, m[S + 1], 12, 3905402710), 
    v = a(v, y, l, f, m[S + 2], 17, 606105819), f = a(f, v, y, l, m[S + 3], 22, 3250441966), 
    l = a(l, f, v, y, m[S + 4], 7, 4118548399), y = a(y, l, f, v, m[S + 5], 12, 1200080426), 
    v = a(v, y, l, f, m[S + 6], 17, 2821735955), f = a(f, v, y, l, m[S + 7], 22, 4249261313), 
    l = a(l, f, v, y, m[S + 8], 7, 1770035416), y = a(y, l, f, v, m[S + 9], 12, 2336552879), 
    v = a(v, y, l, f, m[S + 10], 17, 4294925233), f = a(f, v, y, l, m[S + 11], 22, 2304563134), 
    l = a(l, f, v, y, m[S + 12], 7, 1804603682), y = a(y, l, f, v, m[S + 13], 12, 4254626195), 
    v = a(v, y, l, f, m[S + 14], 17, 2792965006), l = s(l, f = a(f, v, y, l, m[S + 15], 22, 1236535329), v, y, m[S + 1], 5, 4129170786), 
    y = s(y, l, f, v, m[S + 6], 9, 3225465664), v = s(v, y, l, f, m[S + 11], 14, 643717713), 
    f = s(f, v, y, l, m[S + 0], 20, 3921069994), l = s(l, f, v, y, m[S + 5], 5, 3593408605), 
    y = s(y, l, f, v, m[S + 10], 9, 38016083), v = s(v, y, l, f, m[S + 15], 14, 3634488961), 
    f = s(f, v, y, l, m[S + 4], 20, 3889429448), l = s(l, f, v, y, m[S + 9], 5, 568446438), 
    y = s(y, l, f, v, m[S + 14], 9, 3275163606), v = s(v, y, l, f, m[S + 3], 14, 4107603335), 
    f = s(f, v, y, l, m[S + 8], 20, 1163531501), l = s(l, f, v, y, m[S + 13], 5, 2850285829), 
    y = s(y, l, f, v, m[S + 2], 9, 4243563512), v = s(v, y, l, f, m[S + 7], 14, 1735328473), 
    l = r(l, f = s(f, v, y, l, m[S + 12], 20, 2368359562), v, y, m[S + 5], 4, 4294588738), 
    y = r(y, l, f, v, m[S + 8], 11, 2272392833), v = r(v, y, l, f, m[S + 11], 16, 1839030562), 
    f = r(f, v, y, l, m[S + 14], 23, 4259657740), l = r(l, f, v, y, m[S + 1], 4, 2763975236), 
    y = r(y, l, f, v, m[S + 4], 11, 1272893353), v = r(v, y, l, f, m[S + 7], 16, 4139469664), 
    f = r(f, v, y, l, m[S + 10], 23, 3200236656), l = r(l, f, v, y, m[S + 13], 4, 681279174), 
    y = r(y, l, f, v, m[S + 0], 11, 3936430074), v = r(v, y, l, f, m[S + 3], 16, 3572445317), 
    f = r(f, v, y, l, m[S + 6], 23, 76029189), l = r(l, f, v, y, m[S + 9], 4, 3654602809), 
    y = r(y, l, f, v, m[S + 12], 11, 3873151461), v = r(v, y, l, f, m[S + 15], 16, 530742520), 
    l = i(l, f = r(f, v, y, l, m[S + 2], 23, 3299628645), v, y, m[S + 0], 6, 4096336452), 
    y = i(y, l, f, v, m[S + 7], 10, 1126891415), v = i(v, y, l, f, m[S + 14], 15, 2878612391), 
    f = i(f, v, y, l, m[S + 5], 21, 4237533241), l = i(l, f, v, y, m[S + 12], 6, 1700485571), 
    y = i(y, l, f, v, m[S + 3], 10, 2399980690), v = i(v, y, l, f, m[S + 10], 15, 4293915773), 
    f = i(f, v, y, l, m[S + 1], 21, 2240044497), l = i(l, f, v, y, m[S + 8], 6, 1873313359), 
    y = i(y, l, f, v, m[S + 15], 10, 4264355552), v = i(v, y, l, f, m[S + 6], 15, 2734768916), 
    f = i(f, v, y, l, m[S + 13], 21, 1309151649), l = i(l, f, v, y, m[S + 4], 6, 4149444226), 
    y = i(y, l, f, v, m[S + 11], 10, 3174756917), v = i(v, y, l, f, m[S + 2], 15, 718787259), 
    f = i(f, v, y, l, m[S + 9], 21, 3951481745), l = n(l, g), f = n(f, c), v = n(v, d), 
    y = n(y, u);
    return 32 == e ? o(l) + o(f) + o(v) + o(y) : o(f) + o(v);
}, module.exports = {
    onEvent: f.onEvent,
    onShow: f.onShow,
    onHide: f.onHide
};