(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Column" ], {
    "1f7a": function(n, e, t) {
        t.r(e);
        var o = t("365f"), u = t.n(o);
        for (var l in o) "default" !== l && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(l);
        e.default = u.a;
    },
    "365f": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "Column",
            components: {
                TitleBarWithCapsule: function() {
                    return t.e("components/TitleBarWithCapsule").then(t.bind(null, "3878"));
                },
                SubjectTimeline: function() {
                    return t.e("components/SubjectPage/SubjectTimeline").then(t.bind(null, "9e6f"));
                },
                ColumnHeader: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/Column/ColumnHeader") ]).then(t.bind(null, "577d"));
                }
            },
            props: {
                subject: Object,
                timeline: Array,
                title: String
            }
        };
        e.default = o;
    },
    "4c31": function(n, e, t) {
        t.r(e);
        var o = t("f658"), u = t("1f7a");
        for (var l in u) "default" !== l && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(l);
        var c = t("2877"), a = Object(c.a)(u.default, o.a, o.b, !1, null, null, null);
        e.default = a.exports;
    },
    f658: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return u;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Column-create-component", {
    "components/Column-create-component": function(n, e, t) {
        t("543d").createComponent(t("4c31"));
    }
}, [ [ "components/Column-create-component" ] ] ]);