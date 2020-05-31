(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/PremiumCountDown" ], {
    3215: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                payInfo: Object
            },
            data: function() {
                return {
                    diffSecs: 0,
                    countDownInfo: null,
                    trading: !1
                };
            },
            watch: {
                payInfo: {
                    handler: function(t, e) {
                        var n = new Date().getTime(), o = new Date().setHours(9, 30, 0, 0), a = new Date().setHours(15, 0, 0, 0);
                        n >= o && n <= a && (this.trading = !0), !t.displayAfterAt || Date.now() > 1e3 * t.displayAfterAt || t && e && t.displayAfterAt === e.displayAfterAt || (this.diffSecs = Math.ceil(t.displayAfterAt - Date.now() / 1e3), 
                        this.countDown());
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            beforeDestroy: function() {
                this.timer && (clearTimeout(this.timer), this.timer = null);
            },
            methods: {
                countDown: function() {
                    var t = this;
                    if (this.diffSecs <= 0) this.$emit("timeover"); else {
                        var e = Math.floor(this.diffSecs / 3600), n = Math.floor((this.diffSecs - 3600 * e) / 60), o = Math.floor(this.diffSecs % 60);
                        this.countDownInfo = {
                            hours: "".concat(Math.min(99, e)).padStart(2, 0),
                            minutes: "".concat(Math.min(99, n)).padStart(2, 0),
                            secs: "".concat(Math.min(99, o)).padStart(2, 0)
                        }, this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
                            t.diffSecs -= 1, t.countDown();
                        }, 1e3);
                    }
                }
            }
        };
        e.default = o;
    },
    "5b05": function(t, e, n) {
        n.r(e);
        var o = n("3215"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "5b34": function(t, e, n) {},
    "88c5": function(t, e, n) {
        n.r(e);
        var o = n("e4e7"), a = n("5b05");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("c238");
        var r = n("2877"), c = Object(r.a)(a.default, o.a, o.b, !1, null, "690ef072", null);
        e.default = c.exports;
    },
    c238: function(t, e, n) {
        var o = n("5b34");
        n.n(o).a;
    },
    e4e7: function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/PremiumCountDown-create-component", {
    "pages/plate/PremiumCountDown-create-component": function(t, e, n) {
        n("543d").createComponent(n("88c5"));
    }
}, [ [ "pages/plate/PremiumCountDown-create-component" ] ] ]);