(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/Tags" ], {
    "51b3": function(e, n, t) {
        t.r(n);
        var a = t("c09c"), o = t("5ff8");
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        var c = t("2877"), r = Object(c.a)(o.default, a.a, a.b, !1, null, "5306721b", null);
        n.default = r.exports;
    },
    "535f": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                Tag: function() {
                    return t.e("pages/home/Tag").then(t.bind(null, "f886"));
                }
            },
            props: {
                tags: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            }
        };
        n.default = a;
    },
    "5ff8": function(e, n, t) {
        t.r(n);
        var a = t("535f"), o = t.n(a);
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        n.default = o.a;
    },
    c09c: function(e, n, t) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/Tags-create-component", {
    "pages/home/Tags-create-component": function(e, n, t) {
        t("543d").createComponent(t("51b3"));
    }
}, [ [ "pages/home/Tags-create-component" ] ] ]);