(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Comment/Layout" ], {
    "2ffb": function(n, e, t) {
        t.r(e);
        var o = t("89ec"), a = t("f57a");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("ac64");
        var c = t("2877"), r = Object(c.a)(a.default, o.a, o.b, !1, null, "3b2d122b", null);
        e.default = r.exports;
    },
    "3f4d": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "CommentLayout",
            props: {
                title: String,
                comments: Array
            },
            components: {
                Comments: function() {
                    return t.e("components/Comments").then(t.bind(null, "62a9"));
                }
            }
        };
        e.default = o;
    },
    "55d1": function(n, e, t) {},
    "89ec": function(n, e, t) {
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
    ac64: function(n, e, t) {
        var o = t("55d1");
        t.n(o).a;
    },
    f57a: function(n, e, t) {
        t.r(e);
        var o = t("3f4d"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Comment/Layout-create-component", {
    "pages/Comment/Layout-create-component": function(n, e, t) {
        t("543d").createComponent(t("2ffb"));
    }
}, [ [ "pages/Comment/Layout-create-component" ] ] ]);