(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/XLayout" ], {
    "0fbc": function(n, t, e) {
        var o = e("d392");
        e.n(o).a;
    },
    "561d": function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return a;
        });
    },
    "5ab7": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "XLayout",
            props: {
                justifyContent: String,
                alignItems: String,
                flexDirection: {
                    type: String,
                    default: "row"
                }
            }
        };
        t.default = o;
    },
    "974d": function(n, t, e) {
        e.r(t);
        var o = e("5ab7"), a = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = a.a;
    },
    d392: function(n, t, e) {},
    ef89: function(n, t, e) {
        e.r(t);
        var o = e("561d"), a = e("974d");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("0fbc");
        var c = e("2877"), r = Object(c.a)(a.default, o.a, o.b, !1, null, null, null);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/XLayout-create-component", {
    "components/XLayout-create-component": function(n, t, e) {
        e("543d").createComponent(e("ef89"));
    }
}, [ [ "components/XLayout-create-component" ] ] ]);