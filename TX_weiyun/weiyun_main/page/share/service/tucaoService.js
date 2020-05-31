function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), r = require("../../../external/format.js").param, i = require("./baseService.js"), u = function(u) {
    function a(n) {
        e(this, a);
        var o = t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, n));
        return o.tucaoID = "32118", o.mutate(), o;
    }
    return n(a, i), o(a, [ {
        key: "mutate",
        value: function() {
            var e = this;
            return new Promise(function(e, t) {
                wx.getSystemInfo({
                    success: function(t) {
                        e({
                            clientInfo: t.model,
                            clientVersion: "SDKVersion: " + t.SDKVersion,
                            os: t.platform,
                            osVersion: t.system
                        });
                    },
                    fail: function(e) {
                        t(e);
                    }
                });
            }).then(function(e) {
                return new Promise(function(t, n) {
                    wx.getNetworkType({
                        success: function(n) {
                            t(Object.assign(e, {
                                netType: n.networkType
                            }));
                        },
                        fail: function(e) {
                            n(e);
                        }
                    });
                });
            }).then(function(t) {
                var n = getCurrentPages(), o = n[n.length - 1];
                Object.assign(t, {
                    customInfo: o.route + "?" + r(o.options)
                }), e.Page.setData({
                    tucaoData: {
                        id: e.tucaoID,
                        customData: t
                    }
                });
            });
        }
    } ]), a;
}();

module.exports = u;