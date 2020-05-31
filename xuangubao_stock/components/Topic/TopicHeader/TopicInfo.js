(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Topic/TopicHeader/TopicInfo" ], {
    "1a78": function(n, e, t) {
        var o = t("fa1e");
        t.n(o).a;
    },
    "308e": function(n, e, t) {
        t.r(e);
        var o = t("9b8c"), c = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = c.a;
    },
    "438b": function(n, e, t) {
        t.r(e);
        var o = t("c7c3"), c = t("308e");
        for (var u in c) "default" !== u && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        t("1a78");
        var a = t("2877"), r = Object(a.a)(c.default, o.a, o.b, !1, null, "206badd5", null);
        e.default = r.exports;
    },
    "9b8c": function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = o(t("65b7")), u = o(t("3784")), a = {
            components: {
                XButton: function() {
                    return t.e("components/XButton").then(t.bind(null, "cef1"));
                }
            },
            props: {
                subject: {
                    type: Object
                }
            },
            computed: {
                displayImage: function() {
                    return (0, c.default)(this.subject.image, 375, 240);
                },
                title: function() {
                    return (0, u.default)(this.subject);
                }
            }
        };
        e.default = a;
    },
    c7c3: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return c;
        });
    },
    fa1e: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Topic/TopicHeader/TopicInfo-create-component", {
    "components/Topic/TopicHeader/TopicInfo-create-component": function(n, e, t) {
        t("543d").createComponent(t("438b"));
    }
}, [ [ "components/Topic/TopicHeader/TopicInfo-create-component" ] ] ]);