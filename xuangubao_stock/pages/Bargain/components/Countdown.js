(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/components/Countdown" ], {
    "0393": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                BargainRules: function() {
                    return t.e("pages/Bargain/Modal/BargainRules").then(t.bind(null, "7169"));
                }
            },
            props: {
                avatar: {
                    type: String
                },
                leftMinSeconds: {
                    type: Number
                },
                finish: Boolean
            },
            data: function() {
                return {
                    showBargainRules: !1,
                    formatLeftTimeStyle: null
                };
            },
            watch: {
                leftMinSeconds: {
                    handler: function() {
                        this.processTime();
                    },
                    immediate: !0
                }
            },
            methods: {
                processTime: function() {
                    var n = this, e = this.leftMinSeconds;
                    !function t() {
                        if (e <= 0) return n.timer && (clearTimeout(n.timer), n.timer = null), void (n.formatLeftTimeStyle = null);
                        var o = function(n) {
                            return Math.max(0, Math.floor(n));
                        }, a = function(n) {
                            return String(n).padStart(2, "0").slice(0, 2);
                        }, i = o(e / 36e5), r = o((e - 60 * i * 60 * 1e3) / 6e4), u = o((e - 60 * i * 60 * 1e3 - 60 * r * 1e3) / 1e3), c = o(e % 1e3);
                        n.formatLeftTimeStyle = {
                            hh: a(i),
                            mm: a(r),
                            ss: a(u),
                            ms: a(c)
                        }, e -= 10, n.timer = setTimeout(function() {
                            t();
                        }, 10);
                    }();
                }
            },
            beforeDestroy: function() {
                this.timer && (clearTimeout(this.timer), this.timer = null);
            }
        };
        e.default = o;
    },
    "20e8": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                n.showBargainRules = !0;
            }, n.e1 = function(e) {
                n.showBargainRules = !1;
            });
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    2518: function(n, e, t) {},
    "6e1b": function(n, e, t) {
        var o = t("2518");
        t.n(o).a;
    },
    "846a": function(n, e, t) {
        t.r(e);
        var o = t("20e8"), a = t("e0ac");
        for (var i in a) "default" !== i && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        t("6e1b");
        var r = t("2877"), u = Object(r.a)(a.default, o.a, o.b, !1, null, "62871098", null);
        e.default = u.exports;
    },
    e0ac: function(n, e, t) {
        t.r(e);
        var o = t("0393"), a = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/components/Countdown-create-component", {
    "pages/Bargain/components/Countdown-create-component": function(n, e, t) {
        t("543d").createComponent(t("846a"));
    }
}, [ [ "pages/Bargain/components/Countdown-create-component" ] ] ]);