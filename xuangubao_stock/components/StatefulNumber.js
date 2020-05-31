(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/StatefulNumber" ], {
    "17a2": function(e, t, n) {
        n.r(t);
        var u = n("fade"), o = n("8eb8");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("51b9");
        var a = n("2877"), c = Object(a.a)(o.default, u.a, u.b, !1, null, null, null);
        t.default = c.exports;
    },
    "51b9": function(e, t, n) {
        var u = n("e8d0");
        n.n(u).a;
    },
    "8eb8": function(e, t, n) {
        n.r(t);
        var u = n("ff06"), o = n.n(u);
        for (var r in u) "default" !== r && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(r);
        t.default = o.a;
    },
    e8d0: function(e, t, n) {},
    fade: function(e, t, n) {
        var u = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return u;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    ff06: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("24ec")), o = n("4be4"), r = {
            name: "StatefulNumber",
            props: {
                num: {
                    type: Number,
                    required: !0
                },
                comparedNum: {
                    type: Number
                },
                isUp: {
                    type: Function
                },
                isDown: {
                    type: Function
                },
                process: {
                    type: Function,
                    default: function() {
                        return o.toFixed;
                    }
                },
                classes: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                number: function() {
                    return this.process(+this.num || 0);
                },
                colorClass: function() {
                    return (0, u.default)(void 0 === this.comparedNum ? this.num : this.comparedNum, this.isUp, this.isDown);
                }
            },
            methods: {
                getColorClass: u.default
            }
        };
        t.default = r;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/StatefulNumber-create-component", {
    "components/StatefulNumber-create-component": function(e, t, n) {
        n("543d").createComponent(n("17a2"));
    }
}, [ [ "components/StatefulNumber-create-component" ] ] ]);