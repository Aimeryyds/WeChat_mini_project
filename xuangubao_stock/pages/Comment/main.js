(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Comment/main" ], {
    "099b": function(t, n, e) {
        e.r(n);
        var o = e("8f2c"), r = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = r.a;
    },
    "3fb5": function(t, n, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        e.d(n, "a", function() {
            return o;
        }), e.d(n, "b", function() {
            return r;
        });
    },
    "4a34": function(t, n, e) {
        e.r(n);
        var o = e("3fb5"), r = e("099b");
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        e("d77d");
        var i = e("2877"), m = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        n.default = m.exports;
    },
    8827: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), e("921b"), n(e("66fd")), t(n(e("4a34")).default);
        }).call(this, e("543d").createPage);
    },
    "8f2c": function(t, n, e) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, n) {
            return m(t) || i(t, n) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(t, n) {
            var e = [], o = !0, r = !1, a = void 0;
            try {
                for (var i, m = t[Symbol.iterator](); !(o = (i = m.next()).done) && (e.push(i.value), 
                !n || e.length !== n); o = !0) ;
            } catch (t) {
                r = !0, a = t;
            } finally {
                try {
                    o || null == m.return || m.return();
                } finally {
                    if (r) throw a;
                }
            }
            return e;
        }
        function m(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var u = o(e("4360")), c = e("f8c8"), s = {
            name: "Comment",
            components: {
                TitleBarCapsule: function() {
                    return e.e("components/TitleBarWithCapsule").then(e.bind(null, "3878"));
                },
                Layout: function() {
                    return e.e("pages/Comment/Layout").then(e.bind(null, "2ffb"));
                }
            },
            mixins: [ o(e("d05d")).default ],
            data: function() {
                return {
                    articleId: "",
                    hotCommentsId: [],
                    newCommentsId: [],
                    totalComments: 0,
                    mark: 0,
                    hasMore: !0,
                    loadingMore: !1
                };
            },
            computed: {
                comments: function() {
                    return u.default.getters["comments/comments"](this.articleId) || {};
                },
                hotComments: function() {
                    var t = this;
                    return this.hotCommentsId.map(function(n) {
                        return t.comments[n.id];
                    });
                },
                newComments: function() {
                    var t = this;
                    return this.newCommentsId.map(function(n) {
                        return t.comments[n.id];
                    });
                }
            },
            onShow: function() {
                var t = r(getCurrentPages().slice(-1), 1)[0];
                this.articleId = t.options.articleId;
            },
            mounted: function() {
                this.fetchComment();
            },
            onUnload: function() {
                this.articleId = "", this.hotCommentsId = [], this.newCommentsId = [], this.totalComments = 0, 
                this.mark = 0, this.hasMore = !0, this.loadingMore = !1;
            },
            onReachBottom: function() {
                this.fetchComment();
            },
            methods: {
                fetchComment: function() {
                    var t = this;
                    this.hasMore && !this.loadingMore && (this.loadingMore = !0, (0, c.getMessageComment)(this.articleId, this.mark).then(function(n) {
                        n.hotItems && (u.default.commit("comments/UPDATE_COMMENTS", {
                            articleId: t.articleId,
                            comments: n.hotItems
                        }), t.hotCommentsId = n.hotItems), u.default.commit("comments/UPDATE_COMMENTS", {
                            articleId: t.articleId,
                            comments: n.items
                        }), t.newCommentsId = t.newCommentsId.concat(n.items), t.totalComments = n.totalCount, 
                        t.mark = n.nextMark, t.hasMore = n.hasMore, t.loadingMore = !1;
                    }).catch(function(n) {
                        console.error("getMessageComment error", n), t.loadingMore = !1;
                    }));
                }
            }
        };
        n.default = s;
    },
    "9df9": function(t, n, e) {},
    d77d: function(t, n, e) {
        var o = e("9df9");
        e.n(o).a;
    }
}, [ [ "8827", "common/runtime", "common/vendor" ] ] ]);