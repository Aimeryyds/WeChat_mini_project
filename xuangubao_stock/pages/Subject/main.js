(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Subject/main" ], {
    7871: function(t, e, n) {
        n.r(e);
        var i = n("d9b5"), u = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = u.a;
    },
    "7bd0": function(t, e, n) {
        n.r(e);
        var i = n("83a7"), u = n("7871");
        for (var o in u) "default" !== o && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(o);
        var r = n("2877"), c = Object(r.a)(u.default, i.a, i.b, !1, null, null, null);
        e.default = c.exports;
    },
    "83a7": function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return u;
        });
    },
    b0f4: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("7bd0")).default);
        }).call(this, n("543d").createPage);
    },
    d9b5: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e) {
            return c(t) || r(t, e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function r(t, e) {
            var n = [], i = !0, u = !1, o = void 0;
            try {
                for (var r, c = t[Symbol.iterator](); !(i = (r = c.next()).done) && (n.push(r.value), 
                !e || n.length !== e); i = !0) ;
            } catch (t) {
                u = !0, o = t;
            } finally {
                try {
                    i || null == c.return || c.return();
                } finally {
                    if (u) throw o;
                }
            }
            return n;
        }
        function c(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = i(n("4360")), l = i(n("d05d")), s = n("bebd"), d = {
            components: {
                Column: function() {
                    return n.e("components/Column").then(n.bind(null, "4c31"));
                },
                Topic: function() {
                    return n.e("components/Topic").then(n.bind(null, "4e56"));
                },
                PayingFlow: function() {
                    return n.e("components/PayingFlow").then(n.bind(null, "355c"));
                },
                AuthFlow: function() {
                    return n.e("components/AuthFlow").then(n.bind(null, "0fc3"));
                }
            },
            mixins: [ l.default ],
            data: function() {
                return {
                    showPayFlow: !0,
                    shareKey: "",
                    traceId: ""
                };
            },
            computed: {
                subjectId: function() {
                    return a.default.getters["subjectTimeline/subjectId"];
                },
                timeline: function() {
                    var t = a.default.getters["entities/articleEntities"];
                    return a.default.getters["subjectTimeline/timeline"](this.subjectId).map(function(e) {
                        return "message" === e.type ? {
                            type: "message",
                            value: t[e.value]
                        } : e;
                    });
                },
                subject: function() {
                    return a.default.getters["entities/subjectEntities"][this.subjectId] || null;
                },
                title: function() {
                    return this.subject ? this.subject.title : "";
                }
            },
            methods: {
                init: function() {
                    a.default.dispatch("entities/fetchSubject", {
                        id: this.subjectId
                    }), a.default.dispatch("subjectTimeline/fetchTimeline");
                }
            },
            onShow: function() {
                var t = this, e = u(getCurrentPages().slice(-1), 1)[0];
                a.default.commit("subjectTimeline/SET_ID", e.options.subjectId), this.traceId = e.options.traceId || "", 
                this.shareKey = e.options.shareKey || "", this.showPayFlow = !0, setTimeout(function() {
                    t.traceId && t.shareKey && (0, s.reportShareRelation)({
                        shareContentId: t.subjectId,
                        shareContentType: "topic",
                        shareKey: t.shareKey,
                        traceId: t.traceId
                    });
                }, 500);
            },
            mounted: function() {
                this.init();
            },
            onHide: function() {
                this.showPayFlow = !1;
            },
            onUnload: function() {
                a.default.commit("subjectTimeline/CLEAR_TIMELINE"), a.default.dispatch("overlay/clearOverlayStack"), 
                this.showPayFlow = !1, this.shareKey = "", this.traceId = "";
            },
            onReachBottom: function() {
                a.default.dispatch("subjectTimeline/fetchTimeline");
            }
        };
        e.default = d;
    }
}, [ [ "b0f4", "common/runtime", "common/vendor" ] ] ]);