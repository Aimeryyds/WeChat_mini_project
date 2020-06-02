function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, o) {
    /^https*:\/*(\S[^?/]*)\/(\S[^?0-9]*)\?*/g.test(e);
    var n = RegExp.$2 || e, r = {
        scode: "50209",
        ver: "1.0.0",
        uri: "接口/" + (n = n.replace(/\//g, "_").replace(/_$/g, "")),
        timeSpent: Date.now() - t,
        code: o
    };
    "development" != u ? i.Metrics.serviceReport(r) : console.warn("code", r.code, "uri:", r.uri);
}

function o(e) {
    if ("fail" === e) return "600-" + s;
    var t = e.data, o = e.statusCode;
    return void 0 != t.status && t.status ? t.status : void 0 != t.code && t.code + "" ? t.code : void 0 != t.resultCode && t.resultCode + "" ? t.resultCode : o;
}

var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
}, r = e(require("axios")), a = e(require("axios-miniprogram-adapter"));

r.default.defaults.adapter = a.default;

var i = require("./hdweapp.js"), u = "onLine", s = "fail";

wx.onNetworkStatusChange(function(e) {
    s = e.networkType || "fail";
}), wx.getNetworkType({
    success: function(e) {
        s = e.networkType;
    },
    fail: function() {
        s = "fail";
    }
}), module.exports = {
    RequestGet: function(e, n) {
        var r = Date.now();
        return new Promise(function(a, i) {
            wx.request({
                url: e,
                method: "GET",
                data: n,
                success: function(n) {
                    var i = n.data;
                    a(i), t(e, r, o(n));
                },
                fail: function() {
                    t(e, r, o("fail")), i("失败地址：" + e);
                }
            });
        });
    },
    RequestPost: function(e) {
        var n = Date.now();
        return new Promise(function(r, a) {
            wx.request({
                url: e,
                method: "POST",
                success: function(a) {
                    var i = a.data;
                    r(i), t(e, n, o(a));
                },
                fail: function() {
                    t(e, n, o("fail")), a("失败地址：" + e);
                }
            });
        });
    },
    RequestCookie: function(e, n) {
        var r = Date.now();
        return new Promise(function(a, i) {
            wx.request({
                url: e,
                header: {
                    cookie: n
                },
                success: function(n) {
                    var i = n.data;
                    a(i), t(e, r, o(n));
                },
                fail: function() {
                    t(e, r, o("fail")), i("失败地址：" + e);
                }
            });
        });
    },
    AddCloudLog: function(e, t, o) {
        try {
            if ([ "release", "trial" ].includes(__wxConfig.envVersion)) {
                var a = getApp(), i = wx.getStorageSync("udbInfo"), u = {}, s = i ? i.yyuid + "" : "";
                for (var c in t) "string" == typeof t[c] ? u[c] = t[c] : u[c] = JSON.stringify(t[c]);
                r.default.post("https://www.yy.com/zone/cloudlog/api/log/put", {
                    encode: "2",
                    logStore: "nearlive_log",
                    project: "yy-weblog",
                    region: "cn-shenzhen",
                    content: [ n({}, u, {
                        systemModel: a.globalData.systemInfo.model,
                        user_uid: s,
                        path: e,
                        response: JSON.stringify(o || "")
                    }) ]
                });
            }
        } catch (e) {
            console.log("上报接口报错信息：" + JSON.stringify(e));
        }
    }
};