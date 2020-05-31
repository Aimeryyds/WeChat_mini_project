(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ArticleTimelineItem/ArticleTimelineItemSubjectInfo" ], {
    "2ae6": function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return i;
        });
    },
    "8d69": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("642b")), i = {
            props: {
                image: String,
                title: String,
                following: Boolean,
                isTopic: Boolean
            },
            computed: {
                displayImage: function() {
                    return (0, o.default)(this.image, 40, 40);
                }
            },
            methods: {
                follow: function() {
                    this.$emit("follow");
                }
            }
        };
        n.default = i;
    },
    a50e: function(e, n, t) {},
    c36c: function(e, n, t) {
        t.r(n);
        var o = t("2ae6"), i = t("e5cb");
        for (var c in i) "default" !== c && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(c);
        t("e1db");
        var l = t("2877"), a = Object(l.a)(i.default, o.a, o.b, !1, null, "58bec914", null);
        n.default = a.exports;
    },
    e1db: function(e, n, t) {
        var o = t("a50e");
        t.n(o).a;
    },
    e5cb: function(e, n, t) {
        t.r(n);
        var o = t("8d69"), i = t.n(o);
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ArticleTimelineItem/ArticleTimelineItemSubjectInfo-create-component", {
    "components/ArticleTimelineItem/ArticleTimelineItemSubjectInfo-create-component": function(e, n, t) {
        t("543d").createComponent(t("c36c"));
    }
}, [ [ "components/ArticleTimelineItem/ArticleTimelineItemSubjectInfo-create-component" ] ] ]);