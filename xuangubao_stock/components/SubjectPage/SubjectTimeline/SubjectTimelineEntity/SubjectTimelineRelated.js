(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineRelated" ], {
    "4ebe": function(e, n, t) {
        t.r(n);
        var c = t("7912"), u = t("57f0");
        for (var i in u) "default" !== i && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(i);
        t("9978");
        var a = t("2877"), o = Object(a.a)(u.default, c.a, c.b, !1, null, "6e0e69f0", null);
        n.default = o.exports;
    },
    "57f0": function(e, n, t) {
        t.r(n);
        var c = t("f7fc"), u = t.n(c);
        for (var i in c) "default" !== i && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(i);
        n.default = u.a;
    },
    7912: function(e, n, t) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
        t.d(n, "a", function() {
            return c;
        }), t.d(n, "b", function() {
            return u;
        });
    },
    9978: function(e, n, t) {
        var c = t("9b19");
        t.n(c).a;
    },
    "9b19": function(e, n, t) {},
    f7fc: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            components: {
                XMask: function() {
                    return t.e("components/XMask").then(t.bind(null, "258a"));
                }
            },
            props: {
                subjects: Array
            },
            methods: {
                handleClick: function(e) {
                    wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(e.currentTarget.id)
                    });
                }
            }
        };
        n.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineRelated-create-component", {
    "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineRelated-create-component": function(e, n, t) {
        t("543d").createComponent(t("4ebe"));
    }
}, [ [ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineRelated-create-component" ] ] ]);