(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/bannerPage/bannerPage" ], {
    "10f3": function(n, e, a) {
        a.r(e);
        var t = a("e871"), o = a("f65a");
        for (var r in o) "default" !== r && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(r);
        var u = a("f0c5"), f = Object(u.a)(o.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = f.exports;
    },
    b16c: function(n, e, a) {
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t(a("edb7")), t(a("5f18")), t(a("ba34")), t(a("a720")), 
        a("ef52");
        var o = getApp();
        o.sensors || (o.sensors = o.globalData.sensors);
        var r = {
            data: function() {
                return {
                    bannerURL: "",
                    shareText: "",
                    imageUrl: "",
                    shareURL: null,
                    is_can_share: "",
                    webviewStyles: "",
                    name: ""
                };
            },
            onLoad: function(n) {
                this.bannerURL = decodeURIComponent(n.bannerURL), this.name = n.name, console.log(n), 
                console.log(this.bannerURL);
            },
            onShow: function() {},
            methods: {
                onShareAppMessage: function(n) {
                    return n.from, n.from, {
                        title: this.name,
                        path: "pages/bannerPage/bannerPage?bannerURL=" + encodeURIComponent(this.bannerURL) + "&name=" + this.name
                    };
                }
            }
        };
        e.default = r;
    },
    e871: function(n, e, a) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        a.d(e, "b", function() {
            return t;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
    },
    eb2c: function(n, e, a) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            a("e027"), e(a("66fd")), n(e(a("10f3")).default);
        }).call(this, a("543d").createPage);
    },
    f65a: function(n, e, a) {
        a.r(e);
        var t = a("b16c"), o = a.n(t);
        for (var r in t) "default" !== r && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(r);
        e.default = o.a;
    }
}, [ [ "eb2c", "common/runtime", "common/vendor" ] ] ]);