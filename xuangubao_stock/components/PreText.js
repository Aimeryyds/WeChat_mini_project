(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PreText" ], {
    "057a": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    "3a14": function(n, e, t) {},
    "58d8": function(n, e, t) {
        t.r(e);
        var o = t("598b"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    "598b": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "PreText",
            props: {
                content: String
            }
        };
        e.default = o;
    },
    "96ef": function(n, e, t) {
        t.r(e);
        var o = t("057a"), a = t("58d8");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("efd7");
        var c = t("2877"), u = Object(c.a)(a.default, o.a, o.b, !1, null, null, null);
        e.default = u.exports;
    },
    efd7: function(n, e, t) {
        var o = t("3a14");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PreText-create-component", {
    "components/PreText-create-component": function(n, e, t) {
        t("543d").createComponent(t("96ef"));
    }
}, [ [ "components/PreText-create-component" ] ] ]);