(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/viewPage/index" ], {
    "2a1e": function(e, t, n) {
        "use strict";
        n("6cdc");
        var r = u(n("9f5e")), o = u(n("3aa9"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, r.default)(o.default));
    },
    "3aa9": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("c323"), o = n("e399");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        var i = n("17cc"), a = Object(i["a"])(o["default"], r["a"], r["b"], !1, null, "32f0713a", null);
        t["default"] = a.exports;
    },
    c323: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("view", [ n("web-view", {
                attrs: {
                    src: e.url,
                    mpcomid: "1371cbbb-0"
                }
            }) ], 1);
        }, o = [];
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    e130: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = i(n("4e35")), o = n("f2de"), u = n("eaf8");
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    f(e, t, n[t]);
                });
            }
            return e;
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var c = {
            name: "index.vue",
            data: function() {
                return {
                    url: "",
                    webviewStyles: {
                        progress: {
                            color: "#f65000"
                        }
                    }
                };
            },
            computed: a({}, (0, o.mapState)([ "token", "openId" ]), (0, o.mapState)({
                userInfo: function(e) {
                    return e.user.userInfo;
                }
            }), {
                isLogin: function() {
                    return !(!this.userInfo || !this.userInfo.renterId);
                }
            }),
            onLoad: function(e) {
                var t = e || {}, n = t.url, r = t.noVerify;
                if (!n || !/^http/.test(n)) return this.$toast.show("页面打开失败"), void this.$mgRouter.navigateBack();
                n = decodeURIComponent((0, u.trim)(n));
                var o = {};
                if (this.isLogin && !r) {
                    var i = this.token, a = this.userInfo, f = a.renterId, c = a.token, s = a.mobile;
                    (i || c) && (o["mogo_default"] = JSON.stringify({
                        userId: f,
                        token: i || c,
                        mobile: s,
                        miniOpenId: this.openId || ""
                    }));
                }
                this.url = r ? n : this.$mgRouter.buildUrl(n, o), console.log("准备打开网页：%c %s", "color: #2196f3", this.url);
            },
            onShow: function() {
                r.default.get("webPay", !0) && (this.url = r.default.get("webPay", !0), r.default.remove("webPay", !0));
            }
        };
        t.default = c;
    },
    e399: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("e130"), o = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t["default"] = o.a;
    }
}, [ [ "2a1e", "common/runtime", "common/vendor" ] ] ]);