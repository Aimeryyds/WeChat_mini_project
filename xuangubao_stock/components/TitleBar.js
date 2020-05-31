(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/TitleBar" ], {
    "1cab": function(e, t, n) {
        var a = n("33d9");
        n.n(a).a;
    },
    "1e1d": function(e, t, n) {
        n.r(t);
        var a = n("293c"), o = n("e30a");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("1cab");
        var c = n("2877"), u = Object(c.a)(o.default, a.a, a.b, !1, null, "7fd065f4", null);
        t.default = u.exports;
    },
    "293c": function(e, t, n) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return a;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    "33d9": function(e, t, n) {},
    "6af0": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), o = {
            name: "TitleBar",
            props: {
                title: String,
                showLoading: !1
            },
            data: function() {
                return {};
            },
            computed: {
                titleBarHeight: function() {
                    return 2 * a.default.getters["device/statusBarHeight"] + 88;
                }
            },
            methods: {}
        };
        t.default = o;
    },
    e30a: function(e, t, n) {
        n.r(t);
        var a = n("6af0"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/TitleBar-create-component", {
    "components/TitleBar-create-component": function(e, t, n) {
        n("543d").createComponent(n("1e1d"));
    }
}, [ [ "components/TitleBar-create-component" ] ] ]);