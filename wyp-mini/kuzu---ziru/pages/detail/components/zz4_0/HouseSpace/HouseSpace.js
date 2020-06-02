(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/components/zz4_0/HouseSpace/HouseSpace" ], {
    "10f1": function(e, n, t) {
        var o = function() {
            var e = this, n = (e.$createElement, e._self._c, e.__map(e.space, function(n, t) {
                var o = n.tags.map(function(e) {
                    return e.title;
                }).join(" ");
                return {
                    $orig: e.__get_orig(n),
                    g0: o
                };
            })), t = e.space[e.currentSelectConfigIndex].tags.map(function(e) {
                return e.title;
            }).join(" ");
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    g1: t
                }
            });
        }, a = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return a;
        });
    },
    "29f7": function(e, n, t) {
        t.r(n);
        var o = t("10f1"), a = t("bebf");
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("d472");
        var p = t("2877"), u = Object(p.a)(a.default, o.a, o.b, !1, null, "6516ec56", null);
        n.default = u.exports;
    },
    b5c2: function(e, n, t) {},
    d472: function(e, n, t) {
        var o = t("b5c2");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/detail/components/zz4_0/HouseSpace/HouseSpace-create-component", {
    "pages/detail/components/zz4_0/HouseSpace/HouseSpace-create-component": function(e, n, t) {
        t("543d").createComponent(t("29f7"));
    }
}, [ [ "pages/detail/components/zz4_0/HouseSpace/HouseSpace-create-component" ] ] ]);