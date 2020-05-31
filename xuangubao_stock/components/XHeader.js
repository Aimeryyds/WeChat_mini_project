(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/XHeader" ], {
    "3a53": function(e, n, t) {
        t.r(n);
        var a = t("f17b"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    4348: function(e, n, t) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    },
    "639e": function(e, n, t) {
        t.r(n);
        var a = t("4348"), o = t("3a53");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("cb9a");
        var c = t("2877"), u = Object(c.a)(o.default, a.a, a.b, !1, null, "662ea40d", null);
        n.default = u.exports;
    },
    7051: function(e, n, t) {},
    cb9a: function(e, n, t) {
        var a = t("7051");
        t.n(a).a;
    },
    f17b: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            name: "XHeader",
            props: {
                level: {
                    type: Number,
                    required: !0
                }
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/XHeader-create-component", {
    "components/XHeader-create-component": function(e, n, t) {
        t("543d").createComponent(t("639e"));
    }
}, [ [ "components/XHeader-create-component" ] ] ]);