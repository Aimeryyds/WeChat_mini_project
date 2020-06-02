(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/air_sys/air_sys" ], {
    "25b9": function(t, n, e) {
        e.r(n);
        var a = e("342f"), u = e("5926");
        for (var o in u) "default" !== o && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(o);
        e("ddcd");
        var d = e("f0c5"), i = Object(d.a)(u.default, a.b, a.c, !1, null, "15eab520", null, !1, a.a, void 0);
        n.default = i.exports;
    },
    "342f": function(t, n, e) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    5926: function(t, n, e) {
        e.r(n);
        var a = e("9584"), u = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = u.a;
    },
    "839a": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e027"), n(e("66fd")), t(n(e("25b9")).default);
        }).call(this, e("543d").createPage);
    },
    9584: function(t, n, e) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = a(e("edb7")), o = a(e("5f18")), d = {
                data: function() {
                    return {
                        options: null,
                        userId: "",
                        cityId: ""
                    };
                },
                onLoad: function(n) {
                    this.userId = t.getStorageSync("userId"), this.cityId = t.getStorageSync("cityStorageNum"), 
                    this.options = n;
                },
                methods: {
                    switch1Change: function(n) {
                        (0, u.default)({
                            url: o.default.url_room + "/v1/user/manageNewtrend",
                            data: {
                                user_id: this.userId,
                                city_id: this.cityId,
                                id: this.options.id,
                                method: n.detail.value ? "open" : "close"
                            }
                        }).then(function(n) {
                            n.data.data.length && t.showToast({
                                title: n.data.data || "操作失败"
                            });
                        });
                    }
                }
            };
            n.default = d;
        }).call(this, e("543d").default);
    },
    d824: function(t, n, e) {},
    ddcd: function(t, n, e) {
        var a = e("d824");
        e.n(a).a;
    }
}, [ [ "839a", "common/runtime", "common/vendor" ] ] ]);