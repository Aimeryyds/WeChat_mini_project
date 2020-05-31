(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/WebViewPage/main" ], {
    "4bb0": function(n, t, r) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            r("6cdc"), r("921b"), t(r("66fd")), n(t(r("9529")).default);
        }).call(this, r("543d").createPage);
    },
    "4bda": function(n, t, r) {
        function o(n, t) {
            return c(n) || a(n, t) || e();
        }
        function e() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function a(n, t) {
            var r = [], o = !0, e = !1, a = void 0;
            try {
                for (var c, u = n[Symbol.iterator](); !(o = (c = u.next()).done) && (r.push(c.value), 
                !t || r.length !== t); o = !0) ;
            } catch (n) {
                e = !0, a = n;
            } finally {
                try {
                    o || null == u.return || u.return();
                } finally {
                    if (e) throw a;
                }
            }
            return r;
        }
        function c(n) {
            if (Array.isArray(n)) return n;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            name: "WebViewPage",
            data: function() {
                return {
                    src: ""
                };
            },
            onShow: function() {
                var n = o(getCurrentPages().slice(-1), 1)[0], t = "";
                for (var r in n.options) if (n.options.hasOwnProperty(r)) {
                    var e = n.options[r];
                    "src" !== r && (t = "".concat(t, "&").concat(r, "=").concat(e));
                }
                t && (t = "?".concat(t.substring(1))), this.src = "".concat(n.options.src).concat(t), 
                wx.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "#ffffff"
                });
            },
            onUnload: function() {
                this.src = "";
            },
            methods: {
                messageHandler: function(n) {
                    n.mp;
                }
            }
        };
        t.default = u;
    },
    9529: function(n, t, r) {
        r.r(t);
        var o = r("c261"), e = r("a36f");
        for (var a in e) "default" !== a && function(n) {
            r.d(t, n, function() {
                return e[n];
            });
        }(a);
        var c = r("2877"), u = Object(c.a)(e.default, o.a, o.b, !1, null, null, null);
        t.default = u.exports;
    },
    a36f: function(n, t, r) {
        r.r(t);
        var o = r("4bda"), e = r.n(o);
        for (var a in o) "default" !== a && function(n) {
            r.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = e.a;
    },
    c261: function(n, t, r) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, e = [];
        r.d(t, "a", function() {
            return o;
        }), r.d(t, "b", function() {
            return e;
        });
    }
}, [ [ "4bb0", "common/runtime", "common/vendor" ] ] ]);