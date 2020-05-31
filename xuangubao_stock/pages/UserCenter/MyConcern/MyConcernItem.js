(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/MyConcern/MyConcernItem" ], {
    "081d": function(e, n, t) {},
    "62be": function(e, n, t) {
        t.r(n);
        var a = t("b8cd"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "6f27": function(e, n, t) {
        var a = t("081d");
        t.n(a).a;
    },
    b8cd: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = t("340b"), o = t("ed08"), c = t("f8c8"), s = {
            name: "MyConcernItem",
            props: {
                subject: Object
            },
            data: function() {
                return {
                    message: null
                };
            },
            mounted: function() {
                var e = this;
                (0, c.fetchBaoerMessage)(this.subject.latestMsgId, this.subject.id).then(function(n) {
                    e.message = n;
                });
            },
            computed: {
                isToday: function() {
                    return !!this.message && (0, a.isToday)(1e3 * this.message.updatedAt);
                },
                timePoint: function() {
                    return this.message ? (0, o.formatTimeAgo)(1e3 * this.message.updatedAt) : "";
                }
            },
            methods: {
                goToMessage: function() {
                    wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(this.message.id, "&subjectId=").concat(this.message.fromSubject.id)
                    });
                },
                goToSubject: function() {
                    wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(this.subject.id)
                    });
                }
            }
        };
        n.default = s;
    },
    c952: function(e, n, t) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    },
    e086: function(e, n, t) {
        t.r(n);
        var a = t("c952"), o = t("62be");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("6f27");
        var s = t("2877"), r = Object(s.a)(o.default, a.a, a.b, !1, null, "578307f5", null);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/UserCenter/MyConcern/MyConcernItem-create-component", {
    "pages/UserCenter/MyConcern/MyConcernItem-create-component": function(e, n, t) {
        t("543d").createComponent(t("e086"));
    }
}, [ [ "pages/UserCenter/MyConcern/MyConcernItem-create-component" ] ] ]);