(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Topic" ], {
    4261: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), c = t("ed08"), u = {
            name: "Topic",
            components: {
                TitleBarWithCapsule: function() {
                    return t.e("components/TitleBarWithCapsule").then(t.bind(null, "3878"));
                },
                SubjectTimeline: function() {
                    return t.e("components/SubjectPage/SubjectTimeline").then(t.bind(null, "9e6f"));
                },
                TopicHeader: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/Topic/TopicHeader") ]).then(t.bind(null, "aedf"));
                },
                TopicTypeSelector: function() {
                    return t.e("components/Topic/TopicTypeSelector").then(t.bind(null, "80cd"));
                }
            },
            props: {
                subject: Object,
                timeline: Array,
                title: String
            },
            computed: {
                flowType: function() {
                    return o.default.getters["subjectTimeline/flowType"](this.subject.id);
                }
            },
            methods: {
                changeFlowType: function(e) {
                    (0, c.dataAnalytic)("subject_msgscreen_click"), o.default.dispatch("subjectTimeline/changeFlowType", {
                        type: e
                    });
                }
            }
        };
        n.default = u;
    },
    4509: function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return c;
        });
    },
    "4e56": function(e, n, t) {
        t.r(n);
        var o = t("4509"), c = t("8398");
        for (var u in c) "default" !== u && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(u);
        var i = t("2877"), l = Object(i.a)(c.default, o.a, o.b, !1, null, null, null);
        n.default = l.exports;
    },
    8398: function(e, n, t) {
        t.r(n);
        var o = t("4261"), c = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Topic-create-component", {
    "components/Topic-create-component": function(e, n, t) {
        t("543d").createComponent(t("4e56"));
    }
}, [ [ "components/Topic-create-component" ] ] ]);