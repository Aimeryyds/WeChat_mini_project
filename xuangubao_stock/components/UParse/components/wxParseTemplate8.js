(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UParse/components/wxParseTemplate8" ], {
    "24f5": function(e, n, t) {
        t.r(n);
        var o = t("a37b"), a = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = a.a;
    },
    a37b: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "wxParseTemplate8",
            props: {
                node: {}
            },
            components: {
                wxParseTemplate: function() {
                    return t.e("components/UParse/components/wxParseTemplate9").then(t.bind(null, "4b8c"));
                },
                wxParseImg: function() {
                    return t.e("components/UParse/components/wxParseImg").then(t.bind(null, "be70"));
                },
                wxParseVideo: function() {
                    return t.e("components/UParse/components/wxParseVideo").then(t.bind(null, "1f76"));
                },
                wxParseAudio: function() {
                    return t.e("components/UParse/components/wxParseAudio").then(t.bind(null, "bd49"));
                },
                wxParseTable: function() {
                    return t.e("components/UParse/components/wxParseTable").then(t.bind(null, "6c1e"));
                }
            },
            methods: {
                wxParseATap: function(e) {
                    var n = e.currentTarget.dataset.href;
                    if (n) {
                        for (var t = this.$parent; !t.preview || "function" != typeof t.preview; ) t = t.$parent;
                        t.navigate(n, e);
                    }
                }
            }
        };
        n.default = o;
    },
    b50e: function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return a;
        });
    },
    c371: function(e, n, t) {
        t.r(n);
        var o = t("b50e"), a = t("24f5");
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        var s = t("2877"), c = Object(s.a)(a.default, o.a, o.b, !1, null, null, null);
        n.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UParse/components/wxParseTemplate8-create-component", {
    "components/UParse/components/wxParseTemplate8-create-component": function(e, n, t) {
        t("543d").createComponent(t("c371"));
    }
}, [ [ "components/UParse/components/wxParseTemplate8-create-component" ] ] ]);