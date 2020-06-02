(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/webviews/webviews" ], {
    "26ba": function(e, n, t) {
        t.r(n);
        var o = t("8ea4"), a = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = a.a;
    },
    "53fb": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("e027"), n(t("66fd")), e(n(t("5d40")).default);
        }).call(this, t("543d").createPage);
    },
    "5d40": function(e, n, t) {
        t.r(n);
        var o = t("b2c4"), a = t("26ba");
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        var c = t("f0c5"), l = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = l.exports;
    },
    "8ea4": function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                data: function() {
                    return {
                        src: "",
                        webviewStyles: ""
                    };
                },
                onLoad: function(e) {
                    console.log(e), this.src = decodeURIComponent(e.url), console.log(this.src);
                },
                methods: {
                    message: function(n) {
                        console.log("postMessage", n), n.detail.makePhoneCall && e.makePhoneCall({
                            phoneNumber: n.detail.phoneNumber
                        });
                    },
                    onShareAppMessage: function(e) {
                        return e.from, e.from, {
                            title: "房源定制",
                            path: "pages/webviews/webviews?url=" + encodeURIComponent(this.src)
                        };
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    },
    b2c4: function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    }
}, [ [ "53fb", "common/runtime", "common/vendor" ] ] ]);