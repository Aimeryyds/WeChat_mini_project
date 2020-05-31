(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/HeaderBar" ], {
    "077d": function(e, t, n) {
        var o = n("3640");
        n.n(o).a;
    },
    3640: function(e, t, n) {},
    6339: function(e, t, n) {
        n.r(t);
        var o = n("f6c7"), a = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    },
    d21a: function(e, t, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return a;
        });
    },
    e5a6: function(e, t, n) {
        n.r(t);
        var o = n("d21a"), a = n("6339");
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("077d");
        var f = n("2877"), u = Object(f.a)(a.default, o.a, o.b, !1, null, "57412fbf", null);
        t.default = u.exports;
    },
    f6c7: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360"));
        var a = {
            name: "TitleBar",
            props: {
                showLoading: {
                    type: Boolean,
                    default: !1
                },
                theme: {
                    type: String,
                    default: "light"
                }
            },
            computed: {
                titleBarHeight: function() {
                    return 2 * o.default.getters["device/statusBarHeight"] + 88;
                }
            },
            mounted: function() {
                "light" === this.theme ? wx.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "#ffffff"
                }) : wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: "#000000"
                });
            }
        };
        t.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/HeaderBar-create-component", {
    "components/HeaderBar-create-component": function(e, t, n) {
        n("543d").createComponent(n("e5a6"));
    }
}, [ [ "components/HeaderBar-create-component" ] ] ]);