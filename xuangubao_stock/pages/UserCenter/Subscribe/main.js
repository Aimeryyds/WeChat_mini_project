(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/Subscribe/main" ], {
    "46cd": function(t, e, n) {
        n.r(e);
        var r = n("4e82"), o = n("7625");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("4bda2");
        var a = n("2877"), u = Object(a.a)(o.default, r.a, r.b, !1, null, "477158bb", null);
        e.default = u.exports;
    },
    "49f4": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("46cd")).default);
        }).call(this, n("543d").createPage);
    },
    "4bda2": function(t, e, n) {
        var r = n("e065");
        n.n(r).a;
    },
    "4e82": function(t, e, n) {
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    7625: function(t, e, n) {
        n.r(e);
        var r = n("f5c3"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    e065: function(t, e, n) {},
    f5c3: function(t, e, n) {
        function r(t) {
            return a(t) || i(t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function i(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }
        function a(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = n("340b"), c = n("f8c8"), s = n("ed08"), l = {
            name: "MySubscribe",
            components: {
                TitleBarCapsule: function() {
                    return n.e("components/TitleBarWithCapsule").then(n.bind(null, "3878"));
                }
            },
            mixins: [ function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("d05d")).default ],
            data: function() {
                return {
                    subjTotal: 0,
                    subjectlist: [],
                    nextMark: "",
                    loadingMore: !1,
                    hasMore: !0
                };
            },
            computed: {
                isToday: function() {
                    return this.subjectlist.map(function(t) {
                        return (0, u.isToday)(1e3 * t.latestMsgManualUpdateAt);
                    });
                },
                timePoints: function() {
                    return this.subjectlist.map(function(t) {
                        return (0, s.formatTimeAgo)(1e3 * t.latestMsgManualUpdateAt);
                    });
                }
            },
            mounted: function() {
                var t = this;
                this.getUserSubscribe(), (0, c.getPremiumMsgs)("", 1).then(function(e) {
                    t.subjTotal = e.subscribedSubjTotal;
                }).catch(function() {});
            },
            onUnload: function() {
                this.subjTotal = 0, this.subjectlist = [], this.nextMark = "", this.loadingMore = !1, 
                this.hasMore = !0;
            },
            onReachBottom: function() {
                this.getUserSubscribe();
            },
            methods: {
                getUserSubscribe: function() {
                    var t = this;
                    this.hasMore && !this.loadingMore && (this.loadingMore = !0, (0, c.getUserSubscribe)(this.nextMark).then(function(e) {
                        if (e.errcode) throw new Error(e.errmsg);
                        e.subjects && e.subjects.length ? (t.subjectlist = [].concat(r(t.subjectlist), r(e.subjects)), 
                        t.nextMark = e.nextMark) : t.hasMore = !1, t.loadingMore = !1;
                    }).catch(function(e) {
                        console.error("getUserSubscribe error", e), t.loadingMore = !1;
                    }));
                },
                goToArticle: function(t, e) {
                    t && wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(t, "&subjectId=").concat(e)
                    });
                },
                goToSubject: function(t) {
                    t && wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(t)
                    });
                }
            }
        };
        e.default = l;
    }
}, [ [ "49f4", "common/runtime", "common/vendor" ] ] ]);